import React, { Component } from 'react'
import { Text, StyleSheet, View, Image ,Dimensions} from 'react-native'

export default class InStoreCard extends Component {
    render() {
        const { data } = this.props
        const { width, height } = Dimensions.get('window')
        return (
            <View style={{ backgroundColor: "white", marginBottom: 5, borderRadius:25, flex: 1 ,padding:5,width:width-30}}>
                <View style={{ flexDirection: "row", }}>
                    <Image source={data.image} style={{ width: 80, height: 80, borderRadius: 25 ,marginRight:10}} />
                    <View>
                        <Text> {data.name} </Text>

                        <Text>score {data.score}</Text>
                        <Text>rating {data.rating}</Text>
                    </View>
                    <Text >{data.price} Bath</Text>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({})
