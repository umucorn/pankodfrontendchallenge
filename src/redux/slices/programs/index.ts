import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Client } from '@utils';
import { IRootState } from '@redux/store';
import { createSelector } from 'reselect';

export type ISorting = {
    sortKey: 'title' | 'releaseYear',
    sortOrder: 'asc' | 'desc',
}

export interface IImage {
    "Poster Art": {
        url: string,
        width: number,
        height: number,
    }
}

export interface IProgram {
    title: string,
    description: string,
    programType: 'series' | 'movie',
    images: IImage,
    releaseYear: number,
}

export interface IPrograms {
    programs: IProgram[];
    loading: 'idle' | 'pending' |  'loaded' | 'errored',
    searchText: string,
    sorting: ISorting,
}

export const initialState: IPrograms = { 
    programs: [], 
    loading: 'idle', 
    sorting: {
        sortKey: 'title',
        sortOrder: 'asc',
    },
    searchText: '',
};

export const fetchPrograms = createAsyncThunk(
  'programs/fetchPrograms',
  async (shouldError?: boolean) => {
    const response = await Client.fetchPrograms(shouldError);
    
    if(response.status === 200) {
        return response.data;
    } else {
        throw new Error("Cannot fetch programs");
    }
  }
)

export const programsSlice = createSlice({
  name: 'programs',
  initialState: initialState,
  reducers: {
      searchValueChange: (state, action) => {
        state.searchText = action.payload;
      },
      sortingChange: (state, action) => {
        state.sorting = action.payload;
      }
  },
  extraReducers: {
    [fetchPrograms.pending.type]: (state) => {
        state.loading = 'pending';
    },
    [fetchPrograms.fulfilled.type]: (state, action) => {
        state.loading = 'loaded';
        state.programs = action.payload.entries;
    },
    [fetchPrograms.rejected.type]: (state) => {
        state.loading = 'errored';
    },
  }
});

export const getLoading: (state: IRootState) => IPrograms["loading"] = (state: IRootState) => state.programs.loading;
export const getSearchText: (state: IRootState) => IPrograms["searchText"] = (state: IRootState) => state.programs.searchText;
export const getSorting: (state: IRootState) => IPrograms["sorting"] = (state: IRootState) => state.programs.sorting;
export const getAllPrograms: (state: IRootState) => IPrograms["programs"] = (state: IRootState) => state.programs.programs;

export const getSelectedPrograms: (state: IRootState) => IProgram[] = createSelector(
    [getSearchText, getSorting, getAllPrograms],
    (searchText, sorting, allPrograms) => {
        let result = allPrograms
            .filter((program) => program.releaseYear >= 2010)
            .slice(0, 21);
        
        if(sorting) {
            result = result.sort((firstEl: IProgram, secondEl: IProgram) => {
                const firstValue = firstEl[sorting.sortKey];
                const secondValue = secondEl[sorting.sortKey];

                if(typeof firstValue === typeof secondValue) {
                    if(firstValue > secondValue) {
                        return sorting.sortOrder === "asc" ? 1 : -1;
                    }

                    if(firstValue < secondValue) {
                        return sorting.sortOrder === "asc" ? -1 : 1;
                    }

                }

                return 0;
            })
        }

        if(searchText.length >= 3) {
            result = result.filter((program) => program.title.includes(searchText));
        }

        return result;
    }
)

export const { searchValueChange, sortingChange } = programsSlice.actions;
export default programsSlice.reducer;
