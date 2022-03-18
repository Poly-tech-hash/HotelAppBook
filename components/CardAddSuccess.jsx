import React from "react";
import { TextInput, Text, View, Image, StyleSheet,StatusBar, TouchableOpacity, ImageBackground  } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { back } from "react-native/Libraries/Animated/Easing";

const CardAddSuccess = ({navigation}) =>{
    return(
       <SafeAreaView>       
<ImageBackground source={require('../assets/hotel.png')} style={{height:'100%',width:'100%'}}>
      <TouchableOpacity  onPress={()=>navigation.goBack()} >
                <Icon name = "arrow-back" size ={25} color='black' style={{marginTop:25, marginLeft:20}} ></Icon>
                </TouchableOpacity>
               <View style={style.check}>
                  <Icon name= "check" size={121} color={"darkblue"}/>
               </View>
               <View style={{padding:24}}>
               <Text style={{fontSize:20,height:50,marginBottom:100}}>Your Card has been Added Successful 
                </Text>
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

   export default CardAddSuccess