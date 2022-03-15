import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Dimensions,
} from 'react-native';

interface InputProps extends TextInputProps {
  label?: any;
  placeholder?: any;
  labelStyle?: any;
  inputTextStyle?: any;
  initialValue?: any;
  onInputChange: Function;
  secureText?: boolean;
}

const Input = props => {
  const {
    label,
    placeholder,
    labelStyle,
    inputTextStyle,
    initialValue,
    onInputChange,
    secureText,
    multiline,
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{marginVertical: 5}}>
      {!!label && (
        <Text
          style={{
            position: 'absolute',
            left: 8,
            top: -5,
            paddingHorizontal: 2,
            fontSize: 15,
            backgroundColor: '#fff',
            color: !isFocused ? '#A0A0A0' : '#808080',
            zIndex: 1,
          }}>
          {label}
        </Text>
      )}

      <TextInput
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        {...props}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={'#A0A0A0'}
        onChangeText={onInputChange}
        value={initialValue}
        style={{
          ...styles.textInput,
          ...inputTextStyle,
          borderColor: !isFocused ? '#A0A0A0' : '#808080',
        }}
        secureTextEntry={secureText}
      />
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  textInput: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    width: windowWidth * 0.7,
    height: 40,
    paddingLeft: 10,
    color: 'black',
  },
});

export default Input;
