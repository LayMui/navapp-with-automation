import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Text } from 'react-native'
import { testProperties } from '../utility/helper'

const AhuaTextInputScreen = ({ navigation }) => {
  const [text, setText] = useState('')

  return (
    <>
      <View style={styles.container}>
        <Text>Enter your mobile number:</Text>
        <TextInput
          style={{ height: 40, color: 'red' }}
          keyboardType='numeric'
          placeholder='Enter your mobile number!'
          onChangeText={(newText) => setText(newText)}
          {...testProperties('PhoneNumberInput')}
        />
        {/* <AhuaTextInput
          allowFill={true}
          keyboardType='numeric'
          onChange={(newText) => setText(newText)}
          {...testProperties('AhuaTextInput')}
        /> */}
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
})

export default AhuaTextInputScreen
