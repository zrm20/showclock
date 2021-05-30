import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AddTime from './components/AddTime';
import { colors } from './styles/globalStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/JM_Logo.png')}/>
      <AddTime name='Changeover' size={300}/>
      <AddTime name='Show' size={300}/>
      <AddTime name='Curfew' size={300}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
  },
  bodyText: {
    color: colors.bodyColor,
  },
  image: {
    width: '90%',
    resizeMode: 'contain'
  }
});
