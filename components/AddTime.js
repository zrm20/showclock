import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors, fonts } from '../styles/globalStyles';

export default function AddTime({ name, eventTimeSetter, size = 300, pressHandler }) {

  return (
    <TouchableOpacity style={styles.container(size)} onPress={() => pressHandler(name, eventTimeSetter)}>
      <Text style={styles.text(name, size)}>Add {name} Time</Text>
      <AntDesign name="pluscircleo" size={size / 8.5} color={colors.bodyColor} />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: (size) => ({
    backgroundColor: colors.subHeadColor,
    width: size,
    height: (size / 3),
    borderRadius: (size / 20),
    padding: (size / 60),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  }),
  text: (name, size) => {
    let textSize;

    if(name.length <= 8){
      textSize = 30;
    }else if(name.length <= 12){
      textSize = 26;
    }
    else if(name.length <= 17){
      textSize = 22;
    }
    else{
      textSize = 18;
    }

    return(
      {
      color: colors.bodyColor,
      fontSize: (size / 300) * textSize,
      fontFamily: fonts.main,
      margin: (100 / textSize)
      }
    )
    }

});
