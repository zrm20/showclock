import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, ColorPropType, TextInput } from 'react-native';
import Event from '../components/Event';
import { colors } from '../styles/globalStyles';
import { AntDesign } from '@expo/vector-icons';



export default function HomeScreen({ navigation }) {

  //function to navigate to the Set Time Details Page
  // function pressHandler(eventName, eventTimeSetter){
  //   navigation.navigate('Details', {eventName: eventName, eventTimeSetter: eventTimeSetter});
  // }

  const [events, setEvents] = useState([]);
  const [text, setText] = useState();

  function addEvent(){
    setEvents([...events, text])
    setText('');
  }
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/JM_Logo.png')}/>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {
          events.map((item) => {
            return(
            <Event eventName={item} />
            )
          })
        }

      </ScrollView>
      <TextInput 
        style={styles.input}
        placeholder="Event Name"
        onChangeText={setText}
        value={text}
        />
      <TouchableOpacity onPress={addEvent}>
        <AntDesign name="pluscircleo" size={40} color={colors.bodyColor} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    paddingBottom: 50
  },
  bodyText: {
    color: colors.bodyColor,
  },
  image: {
    width: '90%',
    resizeMode: 'contain'
  },
  input: {
    width: 300,
    height: 40,
    borderColor: colors.bodyColor,
    borderWidth: 2,
    backgroundColor: colors.bodyColor,
    margin: 8
  },
  scrollView: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  }
});
