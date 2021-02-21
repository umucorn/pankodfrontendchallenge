import React from "react";
import clsx from 'clsx';
import styles from './index.module.scss';
import { Footer, Header } from "@components";
import { Container } from '@elements';

type LayoutProps = {
    className?: string,
    title?: string,
};

export const Layout: React.FC<LayoutProps> = ({ title, children, className, ...rest }) => {
    return (
        <div className={clsx(styles.layoutWrapper, className)} {...rest}>
            <Header />
            {title && (
                <div className={styles.pageTitleWrapper}>
                    <Container>
                        <h1 className={styles.pageTitle}>{title}</h1>
                    </Container>
                </div>
            )}
            {children}
            <Footer />
        </div>
    );
};
