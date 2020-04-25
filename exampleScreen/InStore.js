import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import HollywoodMenu from '../mock/HollywoodMenu'
import InStoreCard from '../Card/InStoreCard'

export default class InStore extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{height:150,width:"100%",backgroundColor:"tomato",flex: 1}}>
                    <Text>
                        Burger
                    </Text>
                </View>
                <View style={{borderRadius:50,marginTop:20,backgroundColor:"white"}}>
                    <Text>Burger</Text>
                </View>
                <FlatList
                    
                    data={HollywoodMenu}
                    renderItem={({ item }) => <InStoreCard data={item} />}
                    keyExtractor={item => item.id}
                />
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
        backgroundColor:"tomato"
    }
})
