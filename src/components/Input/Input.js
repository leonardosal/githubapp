import React from 'react';

import {TextInput, StyleSheet} from 'react-native';

const Input = ({
  value,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) => (
  <TextInput
    value={value}
    autoCapitalize="none"
    autoCorrect={false}
    autoCompleteType="off"
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    placeholder={placeholder}
    onChangeText={onChangeText}
    style={styles.input}
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
    width: '100%',
    fontSize: 18,
    paddingLeft: 8,
  },
});

export default Input;
