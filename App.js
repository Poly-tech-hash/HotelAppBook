import React, { Component } from "react";
import { Platform,StyleSheet,Text,View,TextInput,Button } from "react-native";

import SplashScreen from "./components/SplashScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import TabScreen from "./components/TabScreen";
import HotelDetails from "./components/HotelDetails";
import PaymentScreen from "./components/PaymentScreen";
import History from "./components/History";
//import RoomList from "./components/RoomList";
import BookingSuccess from "./components/BookingSuccess";


import CardAddSuccess from "./components/CardAddSuccess";
import BookingCancelled from "./components/BookingCancelled";
import EditProfile from "./components/EditProfle";
import CurrentBooking from './components/CurrentBooking'
import Hotellist from "./components/Hotellist";
import SearchScreen from "./components/SearchScreen";
import  HistoryDetails from "./components/HistoryDetails"; 
//import ConfirmScreen from "./components/confirmScreen";
import PaymentSucces from "./components/PaymentSucces";
import CheckAvailability from "./components/CheckAvailability";
import Payment from "./components/Payment";




const Stack = createNativeStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="SplashScreen" options = {{headerShown :false}} component={SplashScreen} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      
        <Stack.Screen name="SignIn" options = {{headerShown :false}} component={SignIn} />
        <Stack.Screen name="SignUp" options = {{headerShown :false}} component={SignUp} />
        <Stack.Screen name="Home" options = {{headerShown :false}} component={TabScreen}/>
        <Stack.Screen name="Hotel Details" options = {{headerShown :false}} component={HotelDetails}/>
        <Stack.Screen name="PaymentScreen" options = {{headerShown :false}} component={PaymentScreen}/>
        <Stack.Screen name="SearchScreen"options={{headerShown: false}} component={SearchScreen}/>
        <Stack.Screen name="BookingSuccess" options={{headerShown :false}} component={BookingSuccess}/>
        <Stack.Screen name="CardAddSuccess" options={{headerShown :false}} component={CardAddSuccess}/>
        <Stack.Screen name="BookingCancelled" options={{headerShown :false}} component={BookingCancelled}/>
        <Stack.Screen name="CurrentBooking" options={{headerShown :false}} component={ CurrentBooking}/>

        
        <Stack.Screen name="Hotellist"options={{headerShown: false}} component={Hotellist}/>
        <Stack.Screen name="CheckAvailability"options={{headerShown: false}}component={CheckAvailability}/>
        <Stack.Screen name="Payment"options={{headerShown: false}}component={Payment}/>
        <Stack.Screen name=" HistoryDetails"options={{headerShown: false}} component={HistoryDetails}/>
        <Stack.Screen name=" PaymentSucces"options={{headerShown: false}} component={PaymentSucces}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;