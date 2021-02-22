import React from "react";
import Link from 'next/link';

import { Layout, ClapperBoardCard, Cards } from "@components";
import { Container } from "@elements";

const Home: React.FC = () => {
    return (
        <Layout title="Popular Titles">
            <Container>
                <Cards>
                    <Link href="/series">
                        <a>
                            <ClapperBoardCard title="Series" description="Popular Series" />
                        </a>
                    </Link>
                    <Link href="/movies">
                        <a>
                            <ClapperBoardCard title="Movies" description="Popular Series" />
                        </a>
                    </Link>
                </Cards>
            </Container>
        </Layout>
    );
};

export default Home;
