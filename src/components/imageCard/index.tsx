import React from "react";
import styles from "./index.module.scss";

export type ImageCardProps = {
    imageUrl: string;
    description: string;
};

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, description, children }) => (
    <div className={styles.card}>
        <figure className={styles.cardView}>
            <img data-testid="image" src={imageUrl} className={styles.cardImage} />
        </figure>
        <div className={styles.description}>{description}</div>
        <div>{children}</div>
    </div>
);
