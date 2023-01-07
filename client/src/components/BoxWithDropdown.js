import React, { useState } from 'react';

export default function BoxWithDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Option 1');

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function selectOption(option) {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className="dropdown">
            <div onClick={toggleDropdown}>{selectedOption}</div>
            {isOpen && (
                <ul>
                    <li onClick={() => selectOption('Option 1')}>Option 1</li>
                    <li onClick={() => selectOption('Option 2')}>Option 2</li>
                    <li onClick={() => selectOption('Option 3')}>Option 3</li>
                </ul>
            )}
        </div>
    );
}