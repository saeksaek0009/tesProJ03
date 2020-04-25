import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput ,TouchableOpacity} from 'react-native'

export default class Login extends Component {
    toHome = () => {
        this.props.navigation.navigate('Home')
    }
    toRegister = () => {
        this.props.navigation.navigate('Register')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Login to your account </Text>
                <View style={{
                    height: 40,
                    backgroundColor: "#F8F9F9",
                    borderRadius: 20,
                    flexDirection: "row",
                    padding: 5,
                    alignItems: "center",
                    margin: 10,
                    width:"90%",marginTop:50
                }}>
                    <TextInput placeholder='Email' style={{ marginLeft: 5, fontSize: 18 }} />
                </View>
                <View style={{
                    height: 40,
                    backgroundColor: "#F8F9F9",
                    borderRadius: 20,
                    flexDirection: "row",
                    padding: 5,
                    alignItems: "center",
                    margin: 10,width:"90%",marginBottom:30
                }}>
                    <TextInput placeholder='Password' style={{ marginLeft: 5, fontSize: 18 }} />
                </View>
                <TouchableOpacity onPress={this.toHome} style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={this.toRegister}>
                        <Text style={{color:"tomato"}}> Sign up</Text>
                    </TouchableOpacity>
                
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "tomato",

    },button: {
        alignItems: "center",
        backgroundColor: "#EC7063",
        padding: 10,
        width: "90%",
        margin:5,
        borderRadius: 20
      },
      textButton:{
          color:"white"
      }
})
