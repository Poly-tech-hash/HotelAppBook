import React from "react";              
import { SafeAreaView, StyleSheet, Text,ScrollView, View ,StatusBar,TextInput,
Image,FlatList,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Hotels from "./Hotels";




const CurrentBooking = ({route,navigation}) => { 
    const Card ={Hotels,}
    return(
        <View style={{flex:1}}>
        

    
        <View style={{alignItems:'center',justifyContent:'center',marginTop:'1%'}}>
        <Image source={require('../assets/room12.jpeg')}
                style={{height:200,width:500,borderRadius:19,fontSize:50}}/>

            <Text style={{marginLeft: 4, fontWeight: '600', textTransform:'capitalize'}}></Text>
            
            
                        
                
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                </View>
                <View style={{right:1}}/>
                <Text>Room type</Text>
                </View>
                <Text>Classic Flat Room</Text>
                <Text>R3000/two nights</Text>
                <View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:'2%'}}>
        <Image source={require('../assets/room8.jpeg')}
                style={{height:200,width:300,borderRadius:19,fontSize:50}}/>
            <View>
            <View style={styles.dataContainer}>      
                       <Text style={{marginLeft: 4, fontWeight: '600', textTransform:'capitalize'}}></Text>

                       
                        
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                </View>
                <View style={{right:2}}/>
                <Text>Room type</Text>
                </View>
                <Text>Morden Room</Text>
                <Text>R2000/one night</Text>
                </View>
                </View>
                </View>
                </View>
                
            
            
                          
            
    );
};



const styles= StyleSheet.create({
    header: {
       alignItems:'center',
       justifyContent:'center',
       marginBottom:30,
       marginTop:100
       

       
   },
 })
 
 export default CurrentBooking;