/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import Colors from '../../CustomeStyles/Colors';
import LinearGradient from 'react-native-linear-gradient';

const TestListScreen = props => {
  const params = props.route.params;
  const {navigation} = props;
  
  const testData = [
    {
      name: 'Quiz',
      color: Colors.yellow,
      lottie: require('../../res/quiz2.json'),
      action: 'TestScreen',
      description: 'Test your knowledge with fun quizzes',
      gradient: ['#FFE0B2', '#FFB74D'],
      textColor: '#E65100',
    },
    {
      name: 'Activities',
      color: Colors.lightPink,
      lottie: require('../../res/art1.json'),
      action: 'FunActivityScreen',
      description: 'Engage in creative activities',
      gradient: ['#E1BEE7', '#CE93D8'],
      textColor: '#4A148C',
    },
    {
      name: 'Diet',
      color: Colors.lightBlue,
      lottie: require('../../res/food1.json'),
      action: 'FunActivityScreen',
      description: 'Explore healthy diet plans',
      gradient: ['#B3E5FC', '#81D4FA'],
      textColor: '#01579B',
    },
  ];

  const navigate = screen => {
    navigation.navigate(screen, params);
  };

  const ItemBox = (test, index) => (
    <TouchableWithoutFeedback
      key={index}
      onPress={() => navigate(test.action)}>
      <LinearGradient
        colors={test.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.boxStyle]}>
        <LottieView
          source={test.lottie}
          style={{height: 80, width: 80}}
          autoPlay
          loop
        />
        <Text style={[styles.testName, {color: test.textColor}]}>{test.name}</Text>
        <Text style={[styles.descriptionText, {color: test.textColor + 'CC'}]}>
          {test.description}
        </Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );

  return (
    <LinearGradient
      colors={['#F472B6', '#C084FC', '#A855F7']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <Text style={styles.headingText}>Activity Area</Text>
      {testData.map((item, index) => {
        return ItemBox(item, index);
      })}
    </LinearGradient>
  );
};

export default TestListScreen;
