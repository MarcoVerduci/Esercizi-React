import React from 'react';
import LanguageProvider from './Components/LanguageProvider';
import DisplayLanguage from './Components/DisplayLanguage';

const App = () => {
  return (
    <LanguageProvider>
      <DisplayLanguage />
    </LanguageProvider>
  );
};

export default App;