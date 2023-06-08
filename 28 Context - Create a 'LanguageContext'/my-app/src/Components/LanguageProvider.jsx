import React, { useState } from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('Italian');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <LanguageContext.Provider value={{ language }}>
            <div>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="Italian">Italian</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                </select>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
