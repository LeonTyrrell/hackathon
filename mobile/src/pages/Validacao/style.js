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
        fontWeight: "bold",
        marginBottom: 16,
        marginTop: 48,
        color: "#13131a",
        fontSize: 30,
    },
    textValidacao: {
        color: "#737380",
        textAlign: "center"
    },
    formCadastro: {
        marginTop: 30,
        marginLeft: -10
    }

})