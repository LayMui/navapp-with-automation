import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { AhuaTextInput } from '@yaradigital/ahua-design-system.ui.ahua-text-input'
import { testProperties } from '../utility/helper'
import { TabRouter } from 'react-navigation'

const AhuaTextInputScreen = ({ navigation }) => {
  const [text, setText] = useState('')

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, color: 'red' }}
          keyboardType='numeric'
          placeholder='Enter your name:'
          onChangeText={(newText) => setText(newText)}
          {...testProperties('NameInput')}
        />
        <TextInput
          style={{ height: 40, color: 'red' }}
          keyboardType='numeric'
          placeholder='Enter your mobile number!'
          onChangeText={(newText) => setText(newText)}
          {...testProperties('PhoneNumberInput')}
        />
        <AhuaTextInput
          allowFill={true}
          keyboardType='numeric'
          inputText='222222'
          onChange={(newText) => setText(newText)}
          {...testProperties('AhuaTextInput')}
        />
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
