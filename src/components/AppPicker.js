import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { FONTS } from '../constants';
import { icon } from './AppStyles';
import { fontSize, height } from './Resizer';

export default class AppPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visibility: this.props.type && this.props.type == "password"
        }
    }

    componentDidMount() {
        if (this.props.onRef != null) {
            this.props.onRef(this)
        }
    }

    onSubmitEditing() {
        this.props.onSubmitEditing();
    }

    focus() {
        this.textInput.focus()
    }


    render() {
        return (
            <View onPress={this.props.onPress} style={[{ flex: 1, marginVertical: 10 }, this.props.containerStyle]}>
                <View style={{ flexDirection: 'row' }}>
                    {this.props.title ?
                        <Text style={{ fontSize: 10, marginHorizontal: 4, flex: 1, fontFamily: FONTS.medium }}>{this.props.title}</Text> : null}

                </View>
                <View>
                    <RNPickerSelect
                        onValueChange={this.props.onValueChange}
                        items={this.props.items}
                        pickerProps={{ mode: 'dropdown' }}
                        value={this.props.value}
                        useNativeAndroidPickerStyle={false}
                        style={StyleSheet.create({
                            inputAndroid: { color: '#c7c7c7', fontFamily: FONTS.regular, height: 40, width: '100%' },
                            inputIOS: { color: '#c7c7c7', fontFamily: FONTS.regular, width: '80%', height: 40, fontSize: fontSize(4), marginStart: 8 },
                            placeholder: { color: '#c7c7c7', fontFamily: FONTS.regular },
                        })}
                        placeholder={this.props.placeholder ? { label: this.props.placeholder, value: '', color: '#868686' } : {}}
                        Icon={() => {
                            return (
                                <Text style={{ alignSelf: 'center', top: 8, margin: 8 }}>
                                    <Image source={require('../assets/icons/check.png')}
                                        style={[icon(12), { tintColor: 'lightgray' }]} />
                                </Text>
                            )
                        }}
                    />

                </View>

            </View>
        );
    }
}
