import React from "react";
import styles from './index.module.scss';
import clsx from 'clsx';

type SearchBoxProps = {
    onSearch?: (string) => void,
};

export const SearchBox: React.FC<React.HTMLProps<HTMLInputElement> & SearchBoxProps> = ({ className, value, onSearch, ...props }) => {
    const handleButtonClick = () => {
        if(onSearch) {
            onSearch(value);
        }
    };

    return (
        <div className={clsx(styles.searchBoxWrapper, className)}>
            <input placeholder="Search..." className={styles.searchBox} type="string" {...props} />
            <button onClick={handleButtonClick} type="submit" className={styles.button}>
                <img src="/MagnifyingGlass.png" />
            </button>
        </div>
    );
};
