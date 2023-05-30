import React from 'react';
import { LanguageContext } from './LanguageProvider';

const DisplayLanguage = () => {
    return (
        <LanguageContext.Consumer>
            {(selectedLanguage) => (
                <div>
                    <h1>Selected Language: {selectedLanguage}</h1>
                </div>
            )}
        </LanguageContext.Consumer>
    );
};

export default DisplayLanguage;
