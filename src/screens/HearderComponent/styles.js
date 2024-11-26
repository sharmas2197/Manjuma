import {StyleSheet} from 'react-native';
import Colors from '../../CustomeStyles/Colors';

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingStart: 16,
    backgroundColor: Colors.white,
  },
  titleTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default styles;
