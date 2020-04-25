import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import StoreCard from '../Card/StoreCard'
import StoreOffers from '../mock/StoreOffers'
import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window')
export default class Offers extends Component {

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.HeadOffer}>
                        <Text style={{ marginTop: height / 6, fontSize: 20, fontWeight: "bold", color: "tomato", marginLeft: 20 }}>Latest Offers</Text>
                        
                        <View style={{ padding: 10, backgroundColor: "tomato", borderRadius: 15, margin: 10 }}>

                            <Text style={{ marginLeft: 20, color: "white" }}>Find Discount, Offers,</Text>
                            <Text style={{ marginLeft: 20, color: "white" }}>special meals and morel</Text>
                        </View>

                    </View>
                    <View style={{
                        alignSelf: "center",
                        alignContent: "center",
                        marginTop: 20,
                        borderRadius: 25,
                        backgroundColor: "white",
                        width: width
                    }}>

                        <View style={{
                            marginTop: 20, alignSelf: "center",
                            alignContent: "center",
                        }}>
                            <FlatList //เมนูฮิต
                                data={StoreOffers.filter(m => m.popular === 'true')}
                                renderItem={({ item }) => <StoreCard data={item} />}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                pagingEnabled
                                scrollEnabled
                                snapToAlignment="center"
                                scrollEventThrottle={100}
                                decelerationRate={"fast"}
                            />
                        </View>

                    </View>

                </ScrollView>

            </View>

        )
    }
}


const styles = StyleSheet.create({
    HeadOffer: {
        height: 250,
        width: width,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FADBD0",

    },

});