import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import {LanguageContext} from '../../context/LanguageContext';
import styles from './styles';

const ActivityDetails = ({route, navigation}) => {
  const {type, details} = route.params;
  const {isHindi} = useContext(LanguageContext);

  if (!details) {
    return (
      <LinearGradient
        colors={['#FF79B0', '#B388FF', '#8C9EFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {isHindi ? 'गतिविधि विवरण नहीं मिला' : 'Activity details not found'}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Text style={styles.backButtonText}>
              {isHindi ? 'वापस जाएं' : 'Go Back'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  const currentLanguage = isHindi ? 'hi' : 'en';

  const renderStep = (stepItem, index) => {
    // Check if steps are in the new format (with title and description)
    if (typeof stepItem === 'object' && stepItem.title) {
      return (
        <View key={index} style={[
          styles.stepContainer,
          !stepItem.description && styles.stepContainerSimple
        ]}>
          <View style={styles.stepHeader}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.stepTitle}>{stepItem.title}</Text>
          </View>
          {stepItem.description ? (
            <>
              <Text style={styles.stepDescription}>{stepItem.description}</Text>
              <Text style={styles.stepText}>{stepItem.step}</Text>
            </>
          ) : (
            <Text style={styles.stepTextSimple}>{stepItem.step}</Text>
          )}
        </View>
      );
    } else {
      // Handle old format (simple string steps)
      return (
        <View key={index} style={styles.stepContainerSimple}>
          <View style={styles.stepHeader}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.stepTextSimple}>{stepItem}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <LinearGradient
      colors={['#FF79B0', '#B388FF', '#8C9EFF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {details.title[currentLanguage] || details.title}
          </Text>
          <LottieView
            source={require('../../res/play.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.descriptionTitle}>
            {isHindi ? 'विवरण' : 'Description'}
          </Text>
          <Text style={styles.descriptionText}>
            {details.description[currentLanguage] || details.description}
          </Text>

          {details.steps && details.steps[currentLanguage] && (
            <>
              <Text style={styles.stepsTitle}>
                {isHindi ? 'चरण' : 'Steps to Follow'}
              </Text>
              {details.steps[currentLanguage].map((step, index) => renderStep(step, index))}
            </>
          )}
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={styles.backButtonText}>
            {isHindi ? 'वापस जाएं' : 'Back to Activities'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default ActivityDetails; 