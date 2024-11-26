import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const HeaderComponent = props => {
 const title = props.title;
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>{title}</Text>
    </View>
  );
};

export default HeaderComponent;
