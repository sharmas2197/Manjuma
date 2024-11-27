import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LanguageProvider} from './src/context/LanguageContext';
import Navigator from './src/Navigation/Navigator';

const App = () => {
  return (
    <LanguageProvider>
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </LanguageProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F472B6',
  },
});

export default App;
