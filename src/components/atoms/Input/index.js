import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({label, placeholder}) => {
  return (
    <View>
      <Text className="text-base mb-1 font-semibold text-black">{label}</Text>
      <TextInput
        className="border rounded-md border-current px-4"
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
