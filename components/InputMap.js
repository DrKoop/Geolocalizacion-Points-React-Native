import React from 'react'
import { StyleSheet, Text,TextInput, View } from 'react-native'

const InputMap = ({title , ...copyPropierity  }) => {

  return (
    <View style={ styles.wrapper }>
        <Text>{title}</Text>
        <TextInput
            {...copyPropierity }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper : {
        height : 40
    }
})

export default InputMap