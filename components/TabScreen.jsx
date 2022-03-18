import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Hotellist from './Hotellist'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CurrentBooking from './CurrentBooking'
import History from './History'
import Profile from './Profile'

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function combineHotel(){
    return (
      
      
      <Stack.Navigator
      >
      <Stack.Screen name="Home" options = {{headerShown :false}} component={Home} />
        <Stack.Screen name="History Details" options = {{headerShown :false}} component={HistoryDetails} />
        
      </Stack.Navigator>
    
    )}
    
const TabScreen = () => {
    return (
        <Tab.Navigator
        initialRouteName="Hotellist"
        activeColor="#fff" 
        barStyle={{backgroundColor:'blue'}}>
            <Tab.Screen name="Hotellist" component={Hotellist}
            options={{
                tabBarLabel:'Home',
                tarBarColor:"#fff",
                tabBarIcon:({color}) =>
            <Icon name="ios-home" color={color} size={26}/>}}/>
            <Tab.Screen name="History" component={History}
            options={{
                tabBarLabel:'History',
                tarBarColor:"#fff",
                tabBarIcon:({color}) =>
            <FontAwesome name="history" color={color} size={26}/>}}/>
           
            <Tab.Screen name="CurrentBooking" component={ CurrentBooking}
            options={{
                tabBarLabel:'CurrentBooking',
                tarBarColor:"#fff",
                tabBarIcon:({color}) =>
            <Icon name="bed" color={color} size={26}/>}}/>
            <Tab.Screen name="Profile" component={Profile}
            options={{
                tabBarLabel:'Profile',
                tarBarColor:"#fff",
                tabBarIcon:({color}) =>
            <FontAwesome name="user" color={color} size={26}/>}}/>
            
        </Tab.Navigator>
    )
}

export default TabScreen

const styles = StyleSheet.create({})
