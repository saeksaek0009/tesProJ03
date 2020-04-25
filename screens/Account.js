import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Account extends Component {

    render() {
        return (
            <SafeAreaView>
                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-start", margin: 30 }}>
                    <Image source={require('../images/human.jpg')} style={styles.Image} />
                    <Text style={{ marginLeft: 20, fontWeight: "bold", fontsize: 20 }}> Name Lastname</Text>
                </View>
                
                <View>
                    <View  style={styles.detail}>
                       <Text>Profile</Text> 
                    </View>
                    <View style={{justifyContent:"flex-end"}}>
                        {/* <AntDesign name='right' style={{ alignSelf: "flex-end", }} /> */}
                    </View>

                </View>
                <View style={styles.detail}>
                    <Text >
                        Payment Method
                    </Text>
                </View>
                <View style={styles.detail}>
                    <Text >
                        Order history
                    </Text>
                </View>
                <View style={styles.detail}>
                    <Text >
                        Delivery address
                    </Text>
                </View>
                <View style={styles.detail}>
                    <Text >
                        Setting
                    </Text>
                </View>
                <View style={styles.detail}>
                    <Text >
                        About us
                    </Text>
                </View>
                <View style={styles.detail}>
                    <Text >
                        Support center
                    </Text>
                </View>
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
    Image: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    detail: {
        marginLeft: 30,
        marginBottom: 30,
        flexDirection: "row"
    }
});