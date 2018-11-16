import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle} >
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        autoCorrect={false}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    fontSize: 18,
    lineHeight: 23
  },
  labelStyle: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
