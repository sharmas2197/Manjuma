/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import Colors from '../../CustomeStyles/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {quiz1} from '../../data/test1data';
import {quiz2} from '../../data/test2data';
import {quiz3} from '../../data/test3data';

const DisordersScreen = props => {
  const navigation = props.navigation;
  const testData = [
    {
      name: 'GLOBAL DEVELOPMENTAL DELAY',
      color: Colors.yellow,
      lottie: require('../../res/quiz2.json'),
      disorderId: 1,
      data: quiz1,
    },
    {
      name: 'AUTISM SPECTRUM DISORDER',
      color: Colors.lightPink,
      lottie: require('../../res/art1.json'),
      disorderId: 2,
      data: quiz2,
    },
    {
      name: 'ATTENTION DEFICIT/HYPERACTIVITY DISORDER',
      color: Colors.lightBlue,
      lottie: require('../../res/food1.json'),
      disorderId: 3,
      data: quiz3,
    },
  ];

  const navigate = (id, name, data) => {
    navigation.navigate('TestListScreen', {
      disorderId: id,
      disorderName: name,
      data: data,
    });
  };

  function ItemBox(test, index) {
    let lottiePath = test.lottie;
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => navigate(test.disorderId, test.name, test.data)}>
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
      <Text style={styles.headingText}>Disorders</Text>
      {testData.map((item, index) => {
        return ItemBox(item, index);
      })}
    </LinearGradient>
  );
};

export default DisordersScreen;
