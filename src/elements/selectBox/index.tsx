import React, { useState } from "react";
import Select, { components, Props as IReactSelectProps } from 'react-select';
import { CaretDownIcon } from '@elements/icons';

const selectBoxHeight = 37;

const customStyles = {
    option: (provided) => ({
        ...provided,
        padding: '14px 16px 9px 16px',
        fontSize: 13,
    }),
    control: (provided) => ({
        ...provided,
        boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.18)',
        border: 'none',
        borderRadius: 0,
        fontFamily: 'Raleway',
        fontSize: 13,
        minHeight: 'initial',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...provided,
            opacity,
            transition,
            marginLeft: 6,
            marginTop: 1,
            color: 'var(--gray)',
        };
    },
    indicatorSeparator: () => ({
        display: 'none',
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: `${selectBoxHeight - 1 - 1}px`,
        padding: '0 8px',
    }),
    clearIndicator: provided => ({
        ...provided,
        padding: `${(selectBoxHeight - 20 - 1 - 1) / 2}px`,
    }),
    placeholder: provided => ({
        ...provided,
        marginLeft: 6,
        marginTop: 1,
        color: 'var(--lightGray)',
    }),
    menuList: (provided) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
    }),
    menu: (provided) => ({
        ...provided,
        marginTop: 0,
        boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.18)',
        border: 'none',
        borderRadius: 0,
        top: 'unset'
    }),
}

export const SelectBox: React.FC<IReactSelectProps> = (props) => {
    const [
        isMenuOpen,
        setisMenuOpen
    ] = useState<boolean>(false);

    const handleMenuOpen = () => {
        setisMenuOpen(true);
    };

    const handleMenuClose = () => {
        setisMenuOpen(false);
    };

    const DropdownIndicator = (
        props
    ) => {
        const blue = 'var(--blue)';
        const gray = 'var(--gray)';
    
        return (
            <components.DropdownIndicator {...props}>
                <CaretDownIcon 
                    fill={isMenuOpen ? blue : gray} 
                    width={14}
                    style={{ marginRight: 10 }}
                />
            </components.DropdownIndicator>
        );
    };

    return (
        <Select
            styles={customStyles}
            placeholder="Sort by"
            components={{
                DropdownIndicator
            }}
            onMenuOpen={handleMenuOpen}
            onMenuClose={handleMenuClose}
            isSearchable={false}
            {...props}
        />
    );
};
