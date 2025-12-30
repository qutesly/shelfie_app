import { TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { ColorScheme, ThemedViewProps } from '../@types/types'
import { Colors } from '../constants/Colors';

const ThemedTextInput = ({style, ...props}: ThemedViewProps) => {
    const colorScheme = useColorScheme() as ColorScheme | null;
    const themeKey: ColorScheme = colorScheme === 'light' ? 'light' : 'dark'
    const theme = Colors[themeKey]

  return (
    <TextInput 
    style={[
        {
            backgroundColor: theme.uiBackground,
            color: theme.text,
            padding: 20,
            borderRadius: 6
        },
        style
    ]}
    {...props}
    />
  )
}

export default ThemedTextInput
