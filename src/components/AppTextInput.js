import React, {Component} from 'react';
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Divider from './Divider';
import {COLORS, FONTS} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fontSize, height, width} from './Resizer';

export default class AppTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: this.props.type && this.props.type == 'password',
    };
  }

  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.props.onPress}
        style={[
          {
            paddingHorizontal: this.props.paddingValid ? wp(2) : wp(5),
            paddingVertical: hp(1),
          },
          this.props.containerStyle,
        ]}>
        <View style={{flexDirection: 'row'}}>
          {this.props.showText == true ? null : (
            <Text
              style={{
                fontSize: fontSize(3.8),
                color: 'black',
                marginBottom: 10,
              }}>
              {this.props.title}
            </Text>
          )}
          {/* fontFamily: FONTS.bold  */}

          {this.props.showInfo == true ? (
            <TouchableOpacity
              style={{
                height: 10,
                width: 10,
                alignSelf: 'center',
                paddingHorizontal: 10,
                paddingBottom: 10,
                marginEnd: 15,
              }}
              onPress={this.props.onShowInfoPress}>
              {/* <Image source={require('../assets/icons/help.png')} style={styles.iconMicro} /> */}
            </TouchableOpacity>
          ) : null}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: this.props.isDescriptionValid ? null : 'center',
            borderColor: '#BFBAC3',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          {this.props.isDescriptionValid ? (
            <Image
              source={require('../assets/icons/briefcase.png')}
              style={{
                height: height(6),
                marginStart: 15,
                width: width(6),
                resizeMode: 'contain',
                marginTop: -6,
                marginEnd: 5,
              }}
            />
          ) : null}

          {this.props.isValid ? (
            <Image
              source={require('../assets/icons/check.png')}
              style={{
                height: 20,
                marginStart: 20,
                width: 20,
                resizeMode: 'contain',
              }}
            />
          ) : null}

          {this.props.isSearchValid ? (
            <Image
              source={require('../assets/icons/check.png')}
              style={{
                height: 20,
                marginStart: 20,
                width: 20,
                resizeMode: 'contain',
              }}
            />
          ) : null}

          {this.props.isPhoneValid ? (
            <Image
              source={require('../assets/icons/check.png')}
              style={{
                height: 20,
                marginStart: 20,
                width: 20,
                resizeMode: 'contain',
              }}
            />
          ) : null}

          {this.props.isNameValid ? (
            <Image
              source={require('../assets/icons/check.png')}
              style={{
                height: 20,
                marginStart: 20,
                width: 20,
                resizeMode: 'contain',
              }}
            />
          ) : null}

          {this.props.isEmailValid ? (
            <Image
              source={require('../assets/icons/check.png')}
              style={{
                height: 22,
                marginStart: 20,
                width: 25,
                resizeMode: 'contain',
              }}
            />
          ) : null}

          {this.props.isPasswordValid ? (
            <Image
              source={require('../assets/icons/check.png')}
              style={{
                height: 22,
                marginStart: 20,
                width: 25,
                resizeMode: 'contain',
              }}
            />
          ) : null}

          {this.props.isBriefcaseValid ? (
            <Image
              source={require('../assets/icons/check.png')}
              style={{
                height: 22,
                marginStart: 20,
                width: 25,
                resizeMode: 'contain',
              }}
            />
          ) : null}

          {/* fontFamily: FONTS.regular,  */}
          <TextInput
            style={[
              {
                color: this.props.textColor ? this.props.textColor : '#273940',
                height: this.props.multiline == true ? 200 : 50,
                flex: 1,
                fontSize: this.props.fontSize ? this.props.fontSize : wp(4.5),
                marginTop: 4,
              },
              this.props.textInputStyle,
            ]}
            editable={!this.props.onPress && this.props.editable}
            onChangeText={this.props.onChangeText}
            keyboardType={this.props.keyboardType}
            secureTextEntry={this.state.visibility}
            maxLength={this.props.maxLength}
            selectionColor={COLORS.primary}
            textAlignVertical={'top'}
            pointerEvents={
              this.props.onPress ? 'none' : this.props.pointerEvents
            }
            multiline={this.props.multiline}
            value={this.props.value}
            placeholderTextColor={
              this.props.placeholderTextColor
                ? this.props.placeholderTextColor
                : '#868686'
            }
            ref={input => (this.textInput = input)}
            returnKeyType={this.props.returnKeyType}
            blurOnSubmit={this.props.blurOnSubmit}
            // onSubmitEditing={this.onSubmitEditing.bind(this)}
            placeholder={this.props.placeholder}
            type={'outline'}
          />

          {this.props.actionButton && (
            <Text
              onPress={this.props.actionButtonClick}
              style={{
                color: COLORS.secondary,
                fontFamily: FONTS.regular,
                fontSize: fontSize(3),
              }}>
              {this.props.actionButton}
            </Text>
          )}

          {this.props.type == 'password' ? (
            <TouchableOpacity
              style={{padding: 10, paddingVertical: 4}}
              onPress={() =>
                this.setState({
                  visibility: !this.state.visibility,
                })
              }>
              {this.state.visibility ? (
                <Image source={require('../assets/icons/check.png')} />
              ) : (
                <Image source={require('../assets/icons/check.png')} />
              )}
            </TouchableOpacity>
          ) : null}

          {this.props.metrics && (
            <View>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  color: 'gray',
                  fontSize: fontSize(4),
                }}>
                {this.props.metrics}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}
