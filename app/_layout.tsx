
import Header from '@components/Header'
import { Slot } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const RootLayout = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Header/>
            <Slot/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create<any>({
    container: {
        height: 50,
        backgroundColor: '#ddd',
    },
    title: {
        color: '#000',
    }
})

export default RootLayout
