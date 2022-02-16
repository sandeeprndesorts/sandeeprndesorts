import { StyleSheet } from "react-native";
import { FONTS } from "../constants";
import { fontSize, height, width } from "./Resizer";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadow: {
        elevation: 2,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        backgroundColor: 'white'
    },
    lightShadow: {
        elevation: 1,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        backgroundColor: 'white'
    },
    semiDarkShadow: {
        elevation: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
    },
    darkShadow: {
        elevation: 6,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
    },
    extraDarkShadow: {
        elevation: 12,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
    },
    searchInput: {
        flex: 1, marginStart: width(3),
        fontSize: fontSize(4),
        fontFamily: FONTS.regular,
        height: 50, color: 'lightgray'
    },
    searchInputCont: {
        backgroundColor: 'white', borderRadius: height(2.5), flexDirection: 'row',
        flex: 1, height: height(5), justifyContent: 'center', alignItems: 'center',
        paddingHorizontal: width(3)
    }, imageEditIcon: {
        backgroundColor: '#E8EEF5', height: height(3), borderRadius: height(2), borderColor: 'white',
        borderWidth: 2, width: height(3), position: 'absolute',
        alignItems: 'center', justifyContent: 'center',
        right: height(0.2), bottom: height(0.2)
    }
});

export const icon = (size) => {
    return {
        height: size, width: size, resizeMode: 'contain'
    }
}