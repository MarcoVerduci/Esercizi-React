import React, { createContext, useState } from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('English');

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <LanguageContext.Provider value={{ language }}>
            <div>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                </select>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
