import Colors from '../../CustomeStyles/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  questionText: {
    borderWidth: 1,
    fontSize: 18,
    color: Colors.black,
    padding: 10,
    margin: 10,
    elevation: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  optionView: {
    marginHorizontal: 10,
    height: 50,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextBtn: {
    height: 50,
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.tertiaryAction,
  },
  optionText: {
    color: Colors.black,
  },
  btnText: {
    fontSize: 18,
    color: Colors.darkGrey,
  },
});
export default styles;
