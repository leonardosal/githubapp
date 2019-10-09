import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({label, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7159c1',
    borderRadius: 2,
    marginBottom: 8,
  },
  buttonLabel: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default Button;
