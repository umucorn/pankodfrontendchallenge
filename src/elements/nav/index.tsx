import React, { Children } from "react";
import styles from './index.module.scss';
import clsx from 'clsx';

type NavProps = {
    children: React.ReactNode[] | React.ReactNode;
    className?: string,
};

export const Nav: React.FC<NavProps> = ({ children, className }) => {
    return (
        <nav className={clsx(styles.nav, className)}>
            <ul className={styles.ul}>
                {Children.map(children, ((child) => (
                    <li className={styles.li}>{child}</li>
                )))}
            </ul>
        </nav>
    );
};
