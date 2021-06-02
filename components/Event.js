import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CountDown from 'react-native-countdown-component';
import AddTime from './AddTime'
import { colors, fonts } from '../styles/globalStyles'
import DelayByButton from './DelayByButton';

export default function Event({ eventName, isStrict = false }) {

  const [time, setTime] = useState(new Date('June 1, 2021 23:00'));
  const [isEnded, setIsEnded] = useState(time < Date.now());
  

  function pressHandler(){
    navigation.navigate('Details');
  }

  function delayByMinutes(minutes){
    const newTime = new Date(time.getTime() + minutes * 60000)
    setTime(newTime);
  }
  
  if(time && !isEnded){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{eventName}</Text>
            <Text style={styles.timeLabel}>{time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</Text>
          </View>
          <DelayByButton minutes={1} pressHandler={delayByMinutes}/>
          <DelayByButton minutes={5} pressHandler={delayByMinutes} />
        </View>
        <CountDown
        until={(time - Date.now())/1000}
        size={35}
        digitStyle={{backgroundColor: colors.subHeadColor}}
        timeLabelStyle={{color: colors.bodyColor}}
        timeToShow={['H','M','S']}
        onFinish={() => setIsEnded(true)}
      />
      </View>
    )
  }
  return(
    <View>
      <AddTime name={eventName} pressHandler={pressHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.subHeadColor,
    borderWidth: 5,
    padding: 10,
    width: '90%',
    borderRadius: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {

  },
  titleText: {
    color: colors.bodyColor,
    fontSize: 30,
    fontFamily: fonts.main,
    fontWeight: 'bold',
  },
  timeLabel: {
    color: colors.headlineColor,
    fontSize: 20,
    fontFamily: fonts.main,
    fontWeight: 'bold',
    margin: 5
  }
});

