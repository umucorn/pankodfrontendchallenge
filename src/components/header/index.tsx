import React from "react";
import styles from "./index.module.scss";
import Link from 'next/link';

import { Container, Logo } from '@elements';
import { Nav } from '@components';

export const Header: React.FC = () => {
    return (
        <header className={styles.header} data-testid="container">
            <Container>
                <div className={styles.headerContents}>
                    <Logo />
                    <Nav>
                        <Link href="login">
                            <a>Log In</a>
                        </Link>
                        <Link href="register">
                            <a className={styles.register}>Start Your Free Trial</a>
                        </Link>
                    </Nav>
                </div>
            </Container>
        </header>
    );
};
