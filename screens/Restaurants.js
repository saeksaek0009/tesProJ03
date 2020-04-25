import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView, Image, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import MenuCard from '../Card/MenuCard'
import StoreCard from '../Card/StoreCard'
import StoreOffers from '../mock/StoreOffers'
import NewRestarants from '../Card/NewRestarants'

import { FlatList, } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class Restaurants extends Component {

    render() {

        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: "#fff" }}>
                      
                        <View style={{
                            height: 40,
                            backgroundColor: "#F8F9F9",
                            borderRadius: 20,
                            flexDirection: "row",
                            padding: 5,
                            alignItems: "center",
                            margin: 10
                        }}>
                            <Icon name="ios-search" style={{ fontSize: 24, marginLeft: 10 }} />
                            <TextInput placeholder='Search Foods' style={{ marginLeft: 5, fontSize: 18 }} />
                        </View>
                        <MenuCard/>
                        <View style={{ padding: 10 }}>

                            <Text style={styles.TextHeader}>Popular Choices</Text>
                            <FlatList //เมนูฮิต
                                data={StoreOffers.filter(m => m.popular === 'true')}
                                renderItem={({ item }) => <StoreCard data={item} />}
                                keyExtractor={item => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled
                                scrollEnabled
                                snapToAlignment="center"
                                scrollEventThrottle={100}
                                decelerationRate={"fast"}
                            />
                            <Text style={styles.TextHeader}>New Restaurants</Text>
                            <FlatList //ร้านทั่วไป
                                data={StoreOffers.filter(m => m.popular === 'false')}
                                renderItem={({ item }) => <NewRestarants data={item} />}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>



        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextHeader: {
        marginLeft: 10,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "700",
        color: "#EC7063",
        
    }

});