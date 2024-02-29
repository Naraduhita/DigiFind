import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Link = ({title, size}) => {
  return (
    <View>
      <Text className="underline">{(title, size)}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({});
