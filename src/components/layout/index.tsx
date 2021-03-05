import React from "react";
import clsx from 'clsx';
import styles from './index.module.scss';
import { Footer, Header } from "@components";
import { Container, SearchBox } from '@elements';

type LayoutProps = {
    className?: string,
    title?: string,
    showControls?: boolean,
};

export const Layout: React.FC<LayoutProps> = ({ title, children, className, showControls, ...rest }) => {
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
            <div className={styles.contentWrapper}>
                {children}
            </div>
            <Footer />
        </div>
    );
};
