import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../CustomeStyles/Colors';
import DetailsComponent from './DetailsComponent';
const TestScreen = props => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState(null);
  const [unlockNext, setUnlockNext] = useState(false);
  const [detailsProvided, setDetialsProvided] = useState(false);
  const [detailsText, setDetailsText] = useState(false);
  const navigation = props.navigation;
  let data = props.route.params.data;
  // eslint-disable-next-line react/no-unstable-nested-components
  const QuestionView = () => {
    return (
      <View>
        <Text style={styles.questionText}>{data[questionIndex].question}</Text>
        {data[questionIndex].options.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                setUnlockNext(true);
                setOptionIndex(index);
              }}>
              <View
                style={[
                  styles.optionView,
                  {backgroundColor: optionIndex === index ? 'green' : 'white'},
                ]}
                key={index}>
                <Text
                  style={[
                    styles.optionText,
                    {
                      color:
                        optionIndex === index ? Colors.white : Colors.black,
                    },
                  ]}>
                  {item.text}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  };

  const nextQuestion = () => {
    setOptionIndex(null);
    setUnlockNext(false);
    let newIndex = questionIndex + 1;
    if (newIndex < data.length) {
      setQuestionIndex(newIndex);
    } else {
      navigation.navigate('LeaderboardScreen');
    }
  };

  const detailsSubmit = text => {
    setDetailsText(text);
    setDetialsProvided(true);
  };

  return (
    <LinearGradient
      colors={['#F472B6', '#C084FC', '#A855F7']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.Container}>
      {!detailsProvided ? (
        <DetailsComponent onSubmit={detailsSubmit} />
      ) : (
        <>
          <Text style={[styles.btnText, {alignSelf: 'center', marginTop: 10}]}>
            Question: {questionIndex + 1}
          </Text>
          {QuestionView()}
          <TouchableWithoutFeedback onPress={unlockNext ? nextQuestion : null}>
            <View style={[styles.nextBtn, {opacity: unlockNext ? 1 : 0.3}]}>
              <Text style={styles.btnText}>
                Next{` (${questionIndex + 1}/${data.length})`}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </>
      )}
    </LinearGradient>
  );
};

export default TestScreen;
