import { Image, ImageSourcePropType, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'

// import Logo
import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'



export default function ThemeLogo({...props}) {
    const colorScheme = useColorScheme()

    const logo: ImageSourcePropType = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
   <Image source={logo} {...props} />
  )
}

const styles = StyleSheet.create({})