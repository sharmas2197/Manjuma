import {StyleSheet} from 'react-native';
import Colors from '../../CustomeStyles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#F472B6',
  },
  descriptionText: {
    fontSize: 12,
    color: Colors.white,
    textAlign: 'justify',
    paddingHorizontal: 16,
    fontStyle: 'italic',
    paddingBottom: 10,
  },
  btnStyle: {
    borderWidth: 1,
    backgroundColor: Colors.pastelYellow,
    borderColor: Colors.pastelYellow,
    margin: 30,
    width: '80%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
