import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Layout, Cards, ImageCard } from "@components";
import { Container, SearchBox, SelectBox } from "@elements";
import styles from '@styles/pages/results.module.scss';

const Series: React.FC = () => {
    const router = useRouter();
    const { programType } = router.query

    return (
        <Layout title={programType === "series" ? "Popular Series" : "Popular Movies"}>
            <Container className={styles.controlsContainer}>
                <SearchBox className={styles.searchBoxOnPage} />
                <SelectBox 
                    className={styles.selectBoxOnPage}
                    options={[
                        { value: undefined, label: 'No Sorting' },
                        { value: 'YEAR_DESC', label: 'Year Descending' },
                        { value: 'YEAR_ASC', label: 'Year Ascending' },
                        { value: 'TITLE_DESC', label: 'Title Descending' },
                        { value: 'TITLE_ASC', label: 'Title Ascending' },
                      ]}
                />
            </Container>
            <Container>
                <Cards>
                    <Link href="/series">
                        <a>
                            <ImageCard title="Series" description="Popular Series" />
                        </a>
                    </Link>
                    <Link href="/movies">
                        <a>
                            <ImageCard title="Movies" description="Popular Series" />
                        </a>
                    </Link>
                </Cards>
            </Container>
        </Layout>
    );
};

export default Series;
