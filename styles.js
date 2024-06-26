import { StyleSheet } from 'react-native';

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
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignSelf: 'center',
        textAlign: 'center',
    }
    // Add more styles as needed
});