import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class MyOrder extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> MyOrder </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        flex: 1
    }
})
