import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Password = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <Text className="text-base mb-1 font-semibold text-black">{label}</Text>
      <TextInput
        className="border rounded-md border-current px-4"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({});
