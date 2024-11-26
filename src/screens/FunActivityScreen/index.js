import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const FunActivityScreen = (props) => {
  const navigation = props.navigation;
  const kidsActivityData = {
    header_text: 'Kids Activities',
    cardsData: [
      {
        heading_text: 'Ball sort puzzle',
        sub_heading_text:
          'Sort colorful balls to match patterns and develop logical thinking',
        button_text: 'Play Now',
        button_color: '#ffffff',
        action: 'game_activity',
      },
      {
        heading_text: 'Math & Nursery Quiz',
        sub_heading_text: 'Fun Quizzes combining basic math and nursery rhymes',
        button_text: 'Start Quiz',
        button_color: '#ffffff',
        action: 'game_activity',
      },
    ],
  };

  const parentsActivityData = {
    header_text: 'Parents Activities',
    cardsData: [
      {
        heading_text: 'Speech Development',
        sub_heading_text:
          'Sort colorful balls to match patterns and develop logical thinking',
        button_text: 'Play Now',
        button_color: '#ffffff',
        action: 'game_activity',
      },
      {
        heading_text: 'Math & Nursery Quiz',
        sub_heading_text: 'Fun Quizzes combining basic math and nursery rhymes',
        button_text: 'Start Quiz',
        button_color: '#ffffff',
        action: 'game_activity',
      },
      {
        heading_text: 'Math & Nursery Quiz',
        sub_heading_text: 'Fun Quizzes combining basic math and nursery rhymes',
        button_text: 'Start Quiz',
        button_color: '#ffffff',
        action: 'game_activity',
      },
    ],
  };

  const navigationHandler = () => {
    navigation.navigate('GameActivity');
  }
  const CardView = ({data}) => {
    return (
      <>
        <Text style={styles.kidsTitle}>{data.header_text}</Text>
        {data.cardsData.map((item, index) => {
          return (
            <View style={styles.card}>
              <Text style={styles.kidsheadingTitle}>{item.heading_text}</Text>
              <Text style={styles.kidssubheadingTitle}>
                {item.sub_heading_text}
              </Text>
              <TouchableWithoutFeedback
                onPress={() => navigationHandler(item.action)}>
                <View
                  style={[
                    styles.buttonView,
                    {backgroundColor: item.button_color},
                  ]}>
                  <Text style={styles.buttonTitle}>{item.button_text}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        })}
      </>
    );
  };

  return (
    <LinearGradient
      colors={['#F472B6', '#C084FC', '#A855F7']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <Text style={styles.headingText}>Development Activities</Text>

      <Text style={styles.subheadingText}>
        Learning through play and guidance
      </Text>
      <CardView data={kidsActivityData} />
      <CardView data={parentsActivityData} />
    </LinearGradient>
  );
};

export default FunActivityScreen;
