import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../../CustomeStyles/Colors';

const DetailsComponent = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [place, setplace] = useState('');
  const [contact, setContact] = useState('');
  const submit = props.onSubmit;
  const callSubmit = () => {
    if (name && age && gender && place && contact) {
      let detailsText = `name : ${name}, age: ${age}, gender: ${gender}, place: ${place}, contact:${contact}`;
      submit(detailsText);
    } else {
      alert('Please enter your details');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>SCREENING TEST</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name*"
        keyboardType="ascii-capable"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        placeholderTextColor={Colors.white}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Age*"
        keyboardType="numeric"
        value={age}
        onChangeText={text => {
          setAge(text);
        }}
        placeholderTextColor={Colors.white}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Gender*"
        keyboardType="ascii-capable"
        value={gender}
        onChangeText={text => {
          setGender(text);
        }}
        placeholderTextColor={Colors.white}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Place*"
        keyboardType="ascii-capable"
        value={place}
        onChangeText={text => {
          setplace(text);
        }}
        placeholderTextColor={Colors.white}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Contact Number*"
        keyboardType="numeric"
        value={contact}
        onChangeText={text => {
          setContact(text);
        }}
        maxLength={10}
        placeholderTextColor={Colors.white}
        underlineColorAndroid="transparent"
      />
      <TouchableWithoutFeedback onPress={callSubmit}>
        <View style={styles.submitBtn}>
          <Text style={styles.textStyleSubmit}>Submit</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={[styles.textStylelightsmall, {marginTop: 12}]}>
        1) Please provide Details
      </Text>
      <Text style={styles.textStylelightsmall}>
        2) * Indicates required question
      </Text>
      <Text style={styles.textStylelightsmall}>
        3) Screening Test for Identifying Developmental Delays in Children
      </Text>
      <Text style={styles.textStylelightsmall}>
        4) DEVELOPMENTAL SCREENING TEST (DST) This test is used to assess the
        developmental milestones of the child.
      </Text>
      <Text style={styles.textStylelightsmall}>
        5) Instructions:There is no right or wrong answer, tick the following
        item as per the milestones achieved by your child currently.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textStyle: {
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 16,
    fontSize: 16,
  },
  textStylelight: {
    fontSize: 12,
    color: Colors.white,
  },
  textStylelightsmall: {
    fontSize: 10,
    color: Colors.white,
  },
  textStylelightRed: {
    fontSize: 12,
    color: '#D93025',
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 10,
    marginVertical: 8,
    fontSize: 12,
    paddingHorizontal: 8,
    color: Colors.white,
  },
  submitBtn: {
    backgroundColor: '#7FCCA0',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 16,
  },
  textStyleSubmit: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 12,
    elevation: 2,
  },
});

export default DetailsComponent;
