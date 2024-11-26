/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import Colors from '../../CustomeStyles/Colors';
import LinearGradient from 'react-native-linear-gradient';

const TestkListScreen = props => {
  const params = props.route.params;
  const navigation = props.navigation;
  const testData = [
    {
      name: 'Quiz',
      color: Colors.yellow,
      lottie: require('../../res/quiz2.json'),
      action: 'popup',
    },
    {
      name: 'Activities',
      color: Colors.lightPink,
      lottie: require('../../res/art1.json'),
      action: 'createArt',
    },
    {
      name: 'Diet',
      color: Colors.lightBlue,
      lottie: require('../../res/food1.json'),
      action: 'makeMusic',
    },
  ];

  const navigate = action => {
    if (action === 'popup') {
      navigation.navigate('TestScreen', params);
    } // rest actions defined here
  };

  function ItemBox(test, index) {
    let lottiePath = test.lottie;
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => navigate(test.action)}>
        <View
          style={[
            styles.boxStyle,
            {
              backgroundColor: test.color,
            },
          ]}>
          <LottieView
            source={lottiePath}
            style={{height: 100, width: 100}}
            autoPlay
            loop
          />
          <Text style={styles.testName}>{test.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

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

export default TestkListScreen;
