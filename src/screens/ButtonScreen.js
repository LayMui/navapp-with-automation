import React, {useState} from 'react'
import { StyleSheet, Button } from 'react-native'

import { testProperties } from '../utility/helper'

const ButtonScreen = ({ navigation }) => {

  const [value, setValue] = useState('black')

  const change = () => {
    this.value == 'red' ? (this.value = 'black') : (this.value = 'red')
    setValue(this.value)
  }
  return (
    <>
      <Button
        onPress={() => navigation.navigate('Calendar')}
        title='Learn More'
        color='#841584'
        {...testProperties('CustomButton')}
      />

      <Button
        onPress={change}
        title={value}
        color={value}
        {...testProperties('ChangeButton')}
      />
    </>
  )
}

const styles = StyleSheet.create({})

export default ButtonScreen
