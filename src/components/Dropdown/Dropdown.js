import React, { useState } from 'react';

import styles from './Dropdown.module.scss';

/*
  Dropdown:
  buttonText - text displayed on dropdown button
  list - list of dropdown options
  onSelect - function fired when item is selected
  selectedItem - currently selected item, used for styling background of the item
  theme - 'dark'/'light', defaults to light
*/
const Dropdown = ({ list, onSelect, selectedItem, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSelect = item => {
        toggleDropdown();
        onSelect(item);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div
            className={`
              ${styles.Dropdown}
              ${theme === 'dark' ? styles.dark : ''}
            `}
        >
            <div className={styles.clickArea} onClick={toggleDropdown}>
                <span>Filter by Region</span>
                {isOpen ? (
                    <i className="fas fa-angle-up" />
                ) : (
                    <i className="fas fa-angle-down" />
                )}
            </div>
            <ul className={isOpen ? styles.open : ''}>
                {list.map(item => (
                    <li
                        key={item}
                        className={item === selectedItem ? styles.selected : ''}
                        onClick={() => handleSelect(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
