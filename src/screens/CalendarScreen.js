import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'

const CalendarScreen = ({ navigation }) => {

  
  return (
    <>
      <View style={styles.container}>
        <CalendarPicker/>

        <View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});


export default CalendarScreen
