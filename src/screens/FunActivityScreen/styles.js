import { StyleSheet } from "react-native";
import Colors from "../../CustomeStyles/Colors";

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
      subheadingText: {
        color: Colors.white,
        fontSize: 14,
        marginTop: 12,
        fontWeight: 'bold',
        alignSelf: 'center',
        elevation: 5,
        shadowColor: '#F472B6',
      },
      kidsTitle: {
        color: Colors.black,
        fontSize: 14,
        marginTop: 12,
        marginStart: 12,
        fontWeight: 'bold',
        elevation: 5,
        shadowColor: '#F472B6',
      },
      kidsheadingTitle: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: 'bold',
        shadowColor: '#F472B6',
      },
      kidssubheadingTitle: {
        color: Colors.black,
        marginTop: 10,
        fontSize: 12,
      },
      buttonView: {
        width: 150,
        height: 30,
        borderRadius: 15,
        elevation: 5,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
      },
      buttonTitle: {
        color: Colors.black,
        fontSize: 12,
      },
      card:{
        backgroundColor: Colors.white,
        marginHorizontal: 12,
        marginTop: 12,
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 16,
        borderRadius: 10,
        elevation: 5
      }
});

export default styles;