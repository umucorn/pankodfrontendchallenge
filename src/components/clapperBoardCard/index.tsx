import React from "react";
import styles from "./index.module.scss";

export type ClapperBoardCardProps = {
    title: string;
    description: string;
};

export const ClapperBoardCard: React.FC<ClapperBoardCardProps> = ({ title, description, children }) => (
    <div className={styles.card}>
        <figure className={styles.cardView}>
            <h2>{title}</h2>
        </figure>
        <div className={styles.description}>{description}</div>
        <div>{children}</div>
    </div>
);
