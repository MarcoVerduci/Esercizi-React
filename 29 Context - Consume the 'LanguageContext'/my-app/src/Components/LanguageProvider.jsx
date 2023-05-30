import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <LanguageContext.Provider value={selectedLanguage}>
            <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
            </select>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
export { LanguageContext };


