import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import { height, width } from './Resizer';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: height(7),
        marginHorizontal: width(8),
        marginVertical: height(2)
    },
    labelContainer: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        top: -12,
        left: 25,
        padding: 5,
        zIndex: 50,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#BFBAC3",
        justifyContent: 'flex-end',
        height: 44,
        borderRadius: 15,
        paddingHorizontal: 25,
    }
})

const CustomTextInput = ({ label, value,value1, style, onChangeText,...props }) => (
    <View style={styles.container}>
        <View style={styles.labelContainer}>
            <Text style={{ color: '#9A99A2' }}>{label}</Text>
        </View>
        <TextInput style={styles.textInput}
            value={value}
            placeholder={value1}
            onChangeText={onChangeText} />
    </View>
);

export default CustomTextInput;