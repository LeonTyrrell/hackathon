import {StyleSheet} from "react-native";
import Constants from "expo-constants";
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
        textAlign: "center"
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 16,
        marginTop: 15,
        color: "#13131a",
        fontSize: 30,
    },
    login: {
        fontSize: 20,
        color: "#737380",
        marginTop: 40,
    },
    formLogin: {
        marginTop: 30,
    }


})