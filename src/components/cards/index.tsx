import React from "react";

import styles from "./index.module.scss";
// import data from "@public/meta.json";

export const Cards: React.FC = ({ children }) => {
    return (
        <div className={styles.cards}>
            {children}
        </div>
    );
};
