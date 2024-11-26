import {StyleSheet} from 'react-native';
import Colors from '../../CustomeStyles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
  headingText: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 40,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#F472B6',
  },
  boxStyle: {
    marginTop: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginHorizontal: 16,
    elevation: 5,
  },
  circle: {
    borderWidth: 1,
    padding: 6,
    borderColor: Colors.white,
    height: 6,
    width: 6,
    borderRadius: 8,
    position: 'absolute',
    end: 12,
    top: 12,
  },
  testName: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
});

export default styles;
