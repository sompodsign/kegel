import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Kegel Exercise</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#334257',
        padding: 35,
    },
    font: {
        fontSize: 20,
        color: '#EEEEEE',
    }
})

export default Header
