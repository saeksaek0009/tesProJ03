import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView , TextInput, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import StoreOffers from '../mock/StoreOffers'
import NewRestarants from '../Card/NewRestarants'

export default class Burgers extends Component {
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
                        <View style={{ padding: 10 }}>
                            <FlatList //ร้านทั่วไป
                                data={StoreOffers.filter(m => m.type === 'burger')}
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

const styles = StyleSheet.create({})
