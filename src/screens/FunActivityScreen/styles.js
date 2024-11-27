import { StyleSheet } from "react-native";
import Colors from "../../CustomeStyles/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      headingText: {
        color: Colors.white,
        fontSize: 26,
        fontWeight: 'bold',
        fontStyle: 'italic',
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
        height: 40,
        borderRadius: 20,
        elevation: 4,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      buttonTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      card:{
        marginHorizontal: 12,
        marginTop: 20,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 20,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 60
      },
      headerTextContainer: {
        flex: 1,
        alignItems: 'center',
      },
      mainHeaderAnimation: {
        width: 100,
        height: 100,
      },
      headerAnimation: {
        width: 70,
        height: 70,
        marginRight: 10,
        transform: "scaleX(-1)"
      },
      sectionHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 12,
      },
      sectionTitle: {
        color: Colors.black,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 12,
      },
      sectionContainer: {
        marginTop: 30,
        marginBottom: 20,
      },
      cardContent: {
        flex: 1,
      },
      cardHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      cardSubheading: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 16,
      },
});

export default styles;