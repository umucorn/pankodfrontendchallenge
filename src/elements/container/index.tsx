import React from "react";
import styles from './index.module.scss';
import clsx from 'clsx';

type ContainerProps = {
    className?: string,
};

export const Container: React.FC<ContainerProps> = ({ children, className, ...rest }) => {
    return (
        <div className={clsx(styles.container, className)} {...rest}>
            {children}
        </div>
    );
};
