import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/Navigation/Navigator';
import {LanguageProvider} from './src/context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </LanguageProvider>
  );
};

export default App;
