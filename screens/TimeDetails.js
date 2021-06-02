import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { colors } from '../styles/globalStyles';

export default function TimeDetails({ route, navigation }) {

  const { eventName, eventTimeSetter } = route.params;

  const [time, setTime] = useState();

  function pressHandler(){
    eventTimeSetter(time);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bodyText}>Time Details</Text>
      <Text style={styles.bodyText}>{eventName}</Text>
      <TextInput 
        style={styles.textInput} 
        placeholder="Enter Time"
        onTextChange={setTime}
        />
      <Button title="Enter" onPress={pressHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
  },
  bodyText: {
    color: colors.bodyColor,
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor: '#fff'
  }
});