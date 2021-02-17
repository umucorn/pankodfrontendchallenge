import React from "react";
import styles from './index.module.scss'

export const Container: React.FC = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};
