import React, {createContext, useState, useContext} from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
  const [isHindi, setIsHindi] = useState(false);

  return (
    <LanguageContext.Provider value={{isHindi, setIsHindi}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 