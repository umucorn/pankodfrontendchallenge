import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Programs, { initialState, fetchPrograms, searchValueChange, sortingChange, IPrograms } from "./index";

const mockStore = configureMockStore([thunk]);

describe("Redux Programs Reducer", () => {
    it("should create reducer with initial props", () => {
        const initial: IPrograms = {
            programs: [],
            loading: 'idle',
            sorting: {
                sortKey: 'title',
                sortOrder: 'asc',
            },
            searchText: '',
        };

        const reducer = Programs(initial, { type: 'n/a' });
        expect(reducer).toEqual(initial);
    });

    it("update searchValueText when searchValueChange is dispatched", () => {
        const initial: IPrograms = {
            programs: [],
            loading: 'idle',
            sorting: {
                sortKey: 'title',
                sortOrder: 'asc',
            },
            searchText: '',
        };

        const expected: IPrograms = {
            programs: [],
            loading: 'idle',
            sorting: {
                sortKey: 'title',
                sortOrder: 'asc',
            },
            searchText: 'new value',
        };

        const reducer = Programs(initial, searchValueChange("new value"));
        expect(reducer).toEqual(expected);
    });

    it("update sorting value when sortingChange is dispatched", () => {
        const initial: IPrograms = {
            programs: [],
            loading: 'idle',
            sorting: {
                sortKey: 'title',
                sortOrder: 'asc',
            },
            searchText: '',
        };

        const expected: IPrograms = {
            programs: [],
            loading: 'idle',
            sorting: {
                sortKey: 'releaseYear',
                sortOrder: 'desc',
            },
            searchText: '',
        };

        const reducer = Programs(initial, sortingChange({
            sortKey: 'releaseYear',
            sortOrder: 'desc',
        }));

        expect(reducer).toEqual(expected);
    });
});

describe('Redux Programs Thunks', () => {
    it('creates fetchPrograms.pending.type and fetchPrograms.fulfilled.type', async () => {
        const store = mockStore(initialState);
        await store.dispatch(fetchPrograms(false));
        const expectedActions = [
            fetchPrograms.pending.type,
            fetchPrograms.fulfilled.type,
        ];
        expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
    });

    it('creates both fetchPrograms.rejected.type if fails', async () => {
        const store = mockStore(initialState);
        await store.dispatch(fetchPrograms(true));
        const expectedActions = [
            fetchPrograms.pending.type,
            fetchPrograms.rejected.type,
        ];
        expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
    });
});
