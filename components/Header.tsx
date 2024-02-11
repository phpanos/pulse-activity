import Logo from '@assets/logo.svg'
import React from 'react'
import { StyleSheet, View } from 'react-native'
const Header = () => {
  return (
    <View style={styles.container}>
     <Logo />
    </View>
  )
}

const styles = StyleSheet.create<any>({
    container: {
        height: 50,
        paddingTop: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    title: {
        color: '#000',
    }
})

export default Header
