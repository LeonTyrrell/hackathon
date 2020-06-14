import {StyleSheet} from "react-native";
import Constants from "expo-constants";
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    headerText: {
        fontSize: 20,
        textAlign: "center"
    },
    

})