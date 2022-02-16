import React, { Component } from 'react';
import { Platform, Text, TouchableOpacity, Image } from 'react-native';
import ButtonProps from './ButtonProps';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS } from '../constants';
import { fontSize, height, width } from './Resizer';
import { icon } from './AppStyles';

export default class Button extends Component<ButtonProps> {

    render() {
        return (
            <LinearGradient
                style={[{ borderRadius: height(1), height: height(6), margin: height(1), marginHorizontal: width(5) }, this.props.style]}
                colors={[this.props.backgroundColor, this.props.backgroundColor]}>
                <TouchableOpacity activeOpacity={1}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                    onPress={!this.props.disabled ? this.props.onPress : null} >
                    {this.props.image && <Image source={this.props.image} tintColor="white" style={[icon(15), { tintColor: "white" }]} />}
                    <Text style={[{
                        color: this.props.textColor,
                        bottom: Platform.OS == 'android' ? 2 : 0, paddingStart: 5, fontSize: fontSize(4)
                    }, this.props.textStyle]}> {this.props.title} </Text>
                </TouchableOpacity >
            </LinearGradient>

        );
    }
}