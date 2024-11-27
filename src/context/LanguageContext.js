import React, { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isHindi, setIsHindi] = useState(false);

  const value = {
    isHindi,
    setIsHindi,
    currentLanguage: isHindi ? 'hi' : 'en',
    toggleLanguage: () => setIsHindi(prev => !prev)
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 