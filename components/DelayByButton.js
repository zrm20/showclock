import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../styles/globalStyles'

export default function DelayByButton({ minutes, pressHandler }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => pressHandler(minutes)}>
      <Text style={styles.text}>+{minutes}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.bodyColor,
    borderWidth: 2,
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.bodyColor,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
