import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputAndroidProps,
  View,
} from 'react-native';
import {FieldProps, getIn} from 'formik';
const TextInputCustom = props => {
  const {placeholder, onChangeText, type, style, keyboardType, maxLength,label} =
    props;
  let {name, value} = props.field;
  const {errors, touched} = props.form;
  const touch = getIn(touched, name);
  return (
    <View>
      <TextInput
        maxLength={maxLength}
        keyboardType={keyboardType}
        secureTextEntry={type === 'password' ? true : false}
        placeholder={placeholder}
        style={style}
        label={label}
        value={value}
        name={name}
        onChangeText={onChangeText}
      />
      {errors[name] && touch ? (
        <Text style={{color: 'red'}}>{errors[name]}</Text>
      ) : null}
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 250,
    padding: 4,
    borderColor: '#DBDBDB',
    borderRadius: 17,
  },
});
