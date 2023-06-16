import React, { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';

export function DisplayLanguage() {
    const selectedLanguage = useContext(LanguageContext);

    return (
        <div>
            <h1>Selected Language: {selectedLanguage}</h1>
        </div>
    );
};