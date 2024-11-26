import React, {useEffect} from 'react';
import {Text, ImageBackground} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
const DesctiptionScreen = props => {
  const navigation = props.navigation;
  const descriptionText =
    'Manjuma is a comprehensive mental health app designed to provide kids with tools, resources, and support for their psychological well - being.Whether youre looking to manage stress, improve mindfulness, or track your mood, MindBalance offers a variety of features tailored to meet your needs.';

  function navigateToTaskScreen() {
    navigation.replace('DisorderScreen');
  }
  useEffect(() => {
    setTimeout(() => {
      navigateToTaskScreen();
    }, 3000);
  });
  return (
    <ImageBackground
      source={require('../../res/bg.jpg')}
      resizeMode="cover"
      style={{flex: 1}}>
      <LinearGradient
        colors={['#008000', '#0f4d0f', '#5ce65c']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text style={styles.headingText}>Manjuma</Text>
        <Text style={styles.descriptionText}>{descriptionText}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default DesctiptionScreen;
