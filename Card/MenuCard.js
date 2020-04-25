import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, } from 'react-native'

import { withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'

class MenuCard extends React.Component {

    toBurgers = () => {
        this.props.navigation.navigate('Burger')
    }
    toPizza = () => {
        this.props.navigation.navigate('Pizza')
    }
    toAsian = () => {
        this.props.navigation.navigate('Asian')
    }
    toDessert = () => {
        this.props.navigation.navigate('Dessert')
    }
    toFrappe = () => {
        this.props.navigation.navigate('Frappe')
    }
    render() {
        return (
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={this.toBurgers}>
                    <View style={styles.container}>
                        <Image source={require('../images/burger.png')} style={{ width: 60, height: 60 }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toPizza}>
                    <View style={styles.container}>
                        <Image source={require('../images/pizza-slice.png')} style={{ width: 60, height: 60 }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toAsian}>
                    <View style={styles.container}>
                        <Image source={require('../images/onigiri.png')} style={{ width: 60, height: 60 }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toDessert}>
                    <View style={styles.container}>
                        <Image source={require('../images/dessert.png')} style={{ width: 60, height: 60 }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toFrappe}>
                    <View style={styles.container}>
                        <Image source={require('../images/frappe.png')} style={{ width: 60, height: 60 }} />
                    </View>
                </TouchableOpacity>

            </View>





        )
    }
}
export default withNavigation(MenuCard)

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: 70,
        backgroundColor: "#FADBD8",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginLeft:10

    },
    Image: {
        alignSelf: "center",
        width: 60,
        height: 60,
    }
})
