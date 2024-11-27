import {StyleSheet} from 'react-native';
import Colors from '../../CustomeStyles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
  headingText: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 40,
    alignSelf: 'center',
    elevation: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    marginBottom: 50,
  },
  boxStyle: {
    marginBottom: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 25,
    elevation: 4,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    height: 200,
  },
  testName: {
    fontSize: 28,
    fontWeight: '600',
    paddingBottom: 10,
    marginTop: 5,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontWeight: '400',
    marginBottom: 10,
  },
});

export default styles;
