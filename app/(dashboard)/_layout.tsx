import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ColorScheme } from '../../@types/types'
import { Colors } from '../../constants/Colors'

const DashboardLayout = () => {
    const colorScheme = useColorScheme() as ColorScheme | null;
    const themeKey: ColorScheme = colorScheme === 'light' ? 'light' : 'dark'

    const theme = Colors[themeKey];

  return (
    <Tabs />
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})