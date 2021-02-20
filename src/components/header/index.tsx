import React, { useState } from "react";
import styles from "./index.module.scss";
import Link from 'next/link';
import { MenuIcon } from '../../elements/icons';
import clsx from 'clsx';

import { Container, Logo } from '@elements';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuState = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={styles.header} data-testid="header">
            <Container>
                <div className={styles.headerContents}>
                    <Logo />
                    <button
                        onClick={toggleMenuState} 
                        className={styles.hamburgerMenuToggler}
                        aria-label="Open menu"
                        data-testid="menu-toggler-button"
                    >
                        <MenuIcon />
                    </button>
                    <nav
                        className={clsx(styles.headerNav, isMenuOpen && styles.headerNavMenuOpen)}
                        data-testid="header-navigation-menu"
                    >
                        <Link href="login">
                            <a>Log In</a>
                        </Link>
                        <Link href="register">
                            <a className={styles.register}>Start your free trial</a>
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
};
