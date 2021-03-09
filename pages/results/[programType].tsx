import React, { useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import clsx from 'clsx';
import { Layout, Cards, ImageCard } from "@components";
import { Container, SearchBox, SelectBox } from "@elements";
import {
    fetchPrograms,
    getLoading,
    getSelectedPrograms,
    searchValueChange,
    sortingChange,
    ISorting,
} from "@redux/slices/programs";

import styles from '@styles/pages/results.module.scss';

interface ISortingOption {
    value: ISorting,
    label: string,
    default?: boolean,
};

const sortingOptions: ISortingOption[] = [
    {
        value: {
            sortKey: 'releaseYear',
            sortOrder: 'desc',
        },
        label: 'Year Descending'
    },
    {
        value: {
            sortKey: 'releaseYear',
            sortOrder: 'asc',
        }, label: 'Year Ascending'
    },
    {
        value: {
            sortKey: 'title',
            sortOrder: 'desc',
        }, label: 'Title Descending'
    },
    {
        value: {
            sortKey: 'title',
            sortOrder: 'asc',
        }, 
        label: 'Title Ascending', 
        default: true,
    },
];

const Series: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const selectedPrograms = useSelector(getSelectedPrograms);
    const programType = router.query.programType;
    const programsToDisplay = selectedPrograms.filter(program => program.programType === programType);

    useEffect(() => {
        dispatch(fetchPrograms());
    }, []);

    const handleSearchValueChange = (e) => {
        dispatch(searchValueChange(e.target.value));
    }

    const handleSortingChange = (newOption) => {
        console.log(newOption);
        dispatch(sortingChange(newOption.value));
    }

    return (
        <Layout title={programType === "series" ? "Popular Series" : "Popular Movies"}>
            {loading === "pending" && (
                <Container className={styles.containerMarginTop}>
                    Loading...
                </Container>
            )}
            {loading === "loaded" && (
                <>
                    <Container className={clsx(styles.controlsContainer, styles.containerMarginTop)}>
                        <SearchBox
                            className={styles.searchBoxOnPage}
                            onChange={handleSearchValueChange}
                            onSearch={handleSearchValueChange}
                        />
                        <SelectBox
                            className={styles.selectBoxOnPage}
                            options={sortingOptions}
                            defaultValue={sortingOptions.find(item => item.default)}
                            onChange={handleSortingChange}
                        />
                    </Container>
                    <Container>
                        <Cards>
                            {programsToDisplay.length > 0 ? (
                                programsToDisplay
                                    .filter(program => program.programType === programType)
                                    .map(program => (
                                        <ImageCard
                                            imageUrl={program.images["Poster Art"].url}
                                            description={program.title}
                                        />
                                    ))
                            ) : (
                                "No results."
                            )}
                        </Cards>
                    </Container>
                </>
            )}
        </Layout>
    );
};

export default Series;
