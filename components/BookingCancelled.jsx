import React,{useState} from "react";
import { Text, View, Image, StyleSheet,Dimensions, TouchableOpacity, ImageBackground,SafeAreaView  
} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const screenWidth = Dimensions.get("screen").width;
const BookingCancelled = ({navigation}) =>{
    return(
       <SafeAreaView>       
<ImageBackground source={require('../assets/hotel.png')} style={{height:'100%',width:'100%'}}>
      
               <View>
               <Text style={{fontSize:50,height:50,marginBottom:100}}>Cancellation Policy</Text>
              <Text>No charge if cancelled day before arrival.
                   Penalty charge for late cancellation 
                   is R100 per night</Text>    
               </View>
               
                    
                </ImageBackground>     
       </SafeAreaView>
    )
}
   
const style= StyleSheet.create({
   check:{
      alignItems:'center',
      justifyContent:'center',
      marginBottom:30,
      marginTop:120
      
  },
  signinButton:{
      backgroundColor:'#0225A1',
      borderRadius:8,
      marginHorizontal:30,
      height:6,
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
     
    paddingVertical:30,
    paddingHorizontal:60,
   
    
    elevation:2,
   
  },
  signinButtonText:{
      fontSize:18,
      lineHeight:18 * 1.4,
      color:'#fff',
      
  },
})

   export default BookingCancelled      