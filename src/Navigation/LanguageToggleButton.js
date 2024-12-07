import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LanguageContext } from '../context/LanguageContext';
import LinearGradient from 'react-native-linear-gradient';

const LanguageToggleButton = ({ currentScreen }) => {
  const { isHindi, setIsHindi } = useContext(LanguageContext);

  // Hide toggle on DescriptionScreen
  if (currentScreen === 'DescriptionScreen') {
    return null;
  }

  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.6)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.languageToggle}>
      <TouchableOpacity 
        onPress={() => setIsHindi(!isHindi)}
        style={styles.languageButton}>
        <Text style={styles.languageToggleText}>
          {isHindi ? 'Switch to English' : 'हिंदी में देखें'}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  languageToggle: {
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  languageButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  languageToggleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default LanguageToggleButton; 