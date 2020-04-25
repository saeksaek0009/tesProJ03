import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation'

 class NewRestarants extends React.Component {
    toEvent = () => {
        this.props.navigation.navigate('EventInStore',{data: this.props.data})
    }
    static navigationOptions = {
        headerMode: 'none'
      }
    render() {
        
        const { data } = this.props
        return (
            <TouchableOpacity onPress={this,this.toEvent}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={data.image} style={styles.Image} />
                    <View>
                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                            <Text style={styles.TextName}>{data.name}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginLeft: 20 }}>
                            <Text style={styles.Description}>{data.description}</Text>
                            <Text style={styles.Description}>{data.type}</Text>
                            <Text style={{ color: "gray", marginLeft: 10 }}>$$</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginLeft: 20 }}>
                            <Icon name="star" size={15} color="#F1948A" />
                            <Text style={{ color: "black", fontSize: 13, marginLeft: 5, color: "#F1948A", fontWeight: "700" }}>{data.score}</Text>
                            <Text style={{ color: "black", fontSize: 12, marginLeft: 5, color: "gray" }}>({data.rating} ratings)</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }
}
export default withNavigation(NewRestarants)
const styles = StyleSheet.create({
    Image: {
        height: 80,
        width: 80,
        borderRadius: 10,
        marginBottom: 20
    },
    TextName: {
        marginLeft: 10,
        fontWeight: "700",


    }
})
