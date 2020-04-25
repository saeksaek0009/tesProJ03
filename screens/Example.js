import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Example extends Component {
    toLogin = () => {
        this.props.navigation.navigate('Login')
    }
    toRegister = () => {
        this.props.navigation.navigate('Register')
    }
    toInStore = () => {
        this.props.navigation.navigate('InStore')
    }
    toMyOrder = () => {
        this.props.navigation.navigate('MyOrder')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}> คำอธิบาย </Text>
                <Text style={styles.Text}>ปุ่มต่อไปนี้จะเชื่อมไปยังหน้าที่ยังทำไม่เสร็จ</Text>
                <Text style={{margin: 15, fontSize:12}}>หน้า Login และ Register ยังไม่สาใารถใช้งานได้จริง เป็นเพียงหน้า Layout </Text>

                <TouchableOpacity onPress={this.toLogin}  style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toRegister} style={styles.button} >
                    <Text  style={styles.textButton}>Register</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={this.toInStore} style={styles.button}>
                    <Text  style={styles.textButton}>In Store</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toMyOrder} style={styles.button}>
                    <Text  style={styles.textButton}>My Order</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flex: 1
    },
    Text: {
        textAlign: "center",
        fontSize: 16,
        margin: 20
    },
    button: {
        alignItems: "center",
        backgroundColor: "#EC7063",
        padding: 10,
        width: 333,
        margin:5,
        borderRadius: 10
      },
    textButton:{
        color:"white",
        fontWeight:"bold"
    }
})
