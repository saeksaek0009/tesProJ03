import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import EventInStore from '../screens/EventInStore'
import Restaurants from '../screens/Restaurants'
import Offers from '../screens/Offers'
import Account from '../screens/Account'
import Event from '../screens/Event'

import Burger from '../screens/Burgers'
import Asian from '../screens/Asian'
import Dessert from '../screens/Dessert'
import Pizza from '../screens/Pizza'
import Frappe from '../screens/Frappe'

import Example from '../screens/Example'
import InStore from '../exampleScreen/InStore'
import Login from '../exampleScreen/Login'
import MyOrder from '../exampleScreen/MyOrder'
import Register from '../exampleScreen/Register'

const RestaurantsScreen = createStackNavigator({
    Restaurants: {
        screen:Restaurants,
        navigationOptions: {
          header: null,
        },
      },
      EventInStore: {
        screen:EventInStore,
        navigationOptions: {
          header: null,
        },
      },
      Event: {
        screen:Event,
        navigationOptions: {
          header: null,
        },
      },
      Burger: {
        screen:Burger,
        navigationOptions: {
          header: null,
        },
      },
      Asian: {
        screen:Asian,
        navigationOptions: {
          header: null,
        },
      },
      Dessert: {
        screen:Dessert,
        navigationOptions: {
          header: null,
        },
      },
      Pizza: {
        screen:Pizza,
        navigationOptions: {
          header: null,
        },
      },
      Frappe: {
        screen:Frappe,
        navigationOptions: {
          header: null,
        },
      },
    
});

const OffersScreen = createStackNavigator({
    Offers: {
        screen:Offers,
        navigationOptions: {
          header: null,
        },
      },
    
});
const AccountScreen = createStackNavigator({
    Account: {
        screen:Account,
        navigationOptions: {
          header: null,
        },
      },
    
});

const ExampleScreen = createStackNavigator({
  Example: {
      screen:Example,
      navigationOptions: {
        header: null,
      },
    },
    InStore: {
      screen:InStore,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen:Login,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen:Register,
      navigationOptions: {
        header: null,
      },
    },
    MyOrder: {
      screen:MyOrder,
      navigationOptions: {
        header: null,
      },
    },
    Home:{
      screen:RestaurantsScreen,
      navigationOptions: {
        header: null,
      },
    }
  
});
const TabNavigator = createBottomTabNavigator({

    Home: {
        screen: RestaurantsScreen,
    },
    Offers: {
        screen: OffersScreen,
    },
    Account: {
        screen: AccountScreen,
    },
    Example: {
      screen: ExampleScreen,
  },
  
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {

                const { routeName } = navigation.state;
                let IconComponent = AntDesign ;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'home'

                } else if (routeName === 'Offers') {
                    iconName = 'hearto';
                } else if (routeName === 'Account') {
                    iconName = 'user';
                }else if (routeName === 'Example') {
                  iconName = 'antdesign';
              }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),

        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    },
    
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({})
