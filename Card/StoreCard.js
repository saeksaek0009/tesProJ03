import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation'

import StoreOffers from '../mock/StoreOffers'

class StoreCard extends React.Component {
    toEvent = () => {
        this.props.navigation.navigate('EventInStore',{data: this.props.data})
    }
    render() {
        const { data } = this.props
        const { width, height } = Dimensions.get('window')
        return (
            <TouchableOpacity onPress = {this.toEvent}>
                <View style={{marginBottom:20}}>
                    <View style={{
                        width: width - 20,
                        height: height / 3,
                    }}>
                        <ImageBackground style={{
                            width: width - 20,
                            height: height / 3,
                            borderRadius: 25,
                            justifyContent: "flex-end",
                            alignSelf: "flex-end",
                            alignItems: "flex-end",

                        }}
                            imageStyle={{ borderRadius: 15 }}
                            source={data.image}>
                            <View style={{
                                backgroundColor: "#F2F3F4",
                                width: 80,
                                borderRadius: 10,
                                height: 20,
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: 10,
                                marginBottom: 10
                            }}>
                                <Text style={{ color: "black", fontSize: 12 }}>
                                    20-30 mins
                            </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={styles.Title}>{data.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="star" size={15} color="#F1948A" />
                        <Text style={{ color: "black", fontSize: 13, marginLeft: 5, color: "#F1948A", fontWeight: "700" }}>{data.score}</Text>
                        <Text style={{ color: "black", fontSize: 12, marginLeft: 5, color: "gray" }}>({data.rating} ratings)</Text>
                        <Text style={styles.Description}>{data.description}</Text>
                        <Text style={styles.Description}>{data.type}</Text>
                        <Text style={{ color: "gray", marginLeft: 10 }}>$$</Text>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }
}
export default withNavigation(StoreCard)
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: 350,
        width: '100%',
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 13
    },
    inContainer: {
        backgroundColor: "gray",
        height: 250,
        width: '100%',
        borderRadius: 15
    },
    Image: {
        height: 250,
        width: '100%',
        borderRadius: 15
    },
    Title: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 2,
        fontSize: 20,
        fontWeight: "700"
    },
    Description: {
        marginLeft: 10,
        marginTop: 2,
        fontSize: 13,
        color: "gray"
    }
})
