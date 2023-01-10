import React, { useState } from 'react';

export default function BoxWithDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('flat');

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function selectOption(option) {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className="dropdown">
            <div className='dropdown-selection' onClick={toggleDropdown}>{selectedOption}</div>
            {isOpen && (
                <ul className='dropdown-menu'>
                    <li className='dropdown-option' onClick={() => selectOption('flat')}>flat</li>
                    <li className='dropdown-option' onClick={() => selectOption('flat-square')}>flat-square</li>
                    <li className='dropdown-option' onClick={() => selectOption('plastic')}>plastic</li>
                    <li className='dropdown-option' onClick={() => selectOption('social')}>social</li>
                    <li className='dropdown-option' onClick={() => selectOption('for-the-badge')}>for-the-badge</li>
                </ul>
            )}
        </div>
    );
}