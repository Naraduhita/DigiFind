import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity
      className="bg-[#0BCAD4] py-2 rounded-lg"
      style={styles.container(type)}
      onPress={onPress}>
      <Text className="text-black text-center" style={styles.text(type)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
  }),
  text: type => ({
    color: type === 'secondary' ? 'black' : 'white',
  }),
});
