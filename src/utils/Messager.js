import { Alert } from "react-native";
import SimpleToast from "react-native-simple-toast";

export default Messager = {
    toast(message, timeout = 500) {
        setTimeout(() => {
            SimpleToast.show(message)
        }, timeout)
    },
    alert(title = "", subTitle, success) {
        Alert.alert(
            title,
            subTitle,
            [
                { text: 'Cancel', onPress: () => console.log('OK Pressed') },
                { text: 'Yes', onPress: () => { success() } },
            ],
            { cancelable: false },
        );
    }
}