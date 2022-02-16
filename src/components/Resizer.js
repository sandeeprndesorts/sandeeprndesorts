import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const height = (val) => {
    return hp(val)
}

export const width = (val) => {
    return wp(val)
}

export const fontSize = (val) => {
    return wp(val)
}