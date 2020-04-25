import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import StoreOffer from '../mock/StoreOffers'

export default class Event extends Component {
    renderItem(item) {
        return item.menu.map(m => {
            return (
        <View>
            <TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                    <Image source={m.image} style={{ width: 80, height: 80, borderRadius: 15 }} />
                    <Text style={{ marginLeft: 20 }}>{m.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
         )

        });
    }
    render() {
        const data = this.props.navigation.getParam('data')
            return (
                <SafeAreaView>
                    <FlatList //ร้านทั่วไป
                        data={data}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                        keyExtractor={(item,index)=>index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
            )

    }
}

const styles = StyleSheet.create({
    container: {
    }
})
