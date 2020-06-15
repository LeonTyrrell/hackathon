import {StyleSheet, Dimensions} from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",

    },
    headerText: {
        fontSize: 20,
        textAlign: "center"
    },
    footerButtons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: 20,
        flex: 1,
    },
    containerMapa: {
        flex: 5.5,
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
        paddingBottom: 16,
    },
    styleMapa: {
        width: '100%',
        height: '100%',
    },
    marcadorMapaIcon: {
        width: 40,
        height: 40,
    },
    title: {
        fontWeight: "bold",
        marginBottom: 16,
        marginTop: 48,
        color: "#13131a",
        fontSize: 30,
    },
})