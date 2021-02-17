import React from "react";
import styles from './index.module.scss';

export const Logo: React.FC = () => {
    return (
        <div className={styles.logo}>
            <a className={styles.anchor} href="/">DEMO Streaming</a>
        </div>
    );
};
