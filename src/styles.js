import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    cardTitle: {
        fontSize: 30,
        color: '#339cf2',
        alignContent: 'flex-start',
    },
    bigHeader: {
        fontSize: 40,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    cardObject: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        width: "100%",
    },
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        width: "98%"
    },
    input: {
        // height: 40,
        width: width * 0.80,
        margin: 12,
        borderBottomWidth: 1,
        borderColor: '#A0A0A0',
        paddingLeft: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        textAlign: 'left',
    },
    rowAlign : {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "100%",
    },
    // Add more styles as needed
});