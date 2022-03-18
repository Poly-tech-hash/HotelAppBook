import React from "react";
import { SafeAreaView, StyleSheet, Text, View ,StatusBar,TextInput,
    Dimensions,ImageBackground, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from "react";
import Hotels from "./Hotels";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const {height} = Dimensions.get('window')
const imgContainerHeight = screenHeight * 0.4;
const sub = imgContainerHeight * 0.2;

const aminitiesSize=screenHeight *.08

const HotelDetails = ({navigation,route}) => {
   // const list = route.params.data;
    const [Guest,setGuest]=useState(1)
    const [Room,setRoom]=useState(1)



    return (
        
       <SafeAreaView>
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
            <View style={styles.headerContainer}>
               </View>

            <View style={styles.imgContaner}>
      
        <ImageBackground source={{uri:Hotels.hotel}} style={{ width: "100%", height: "100%" }} >
        <View style={styles.hontainer} 
            >
               <View style={{backgroundColor: 'white',
opacity: 0.7,width:30,
      height:30,justifyContent:'center',alignItems:'center',
      borderRadius:10,}}>
               <Feather name="arrow-left" size={30} 
             onPress={()=>navigation.goBack()} /> 
             </View>
            <Text style={styles.headerTitle}></Text>
            </View>
        </ImageBackground>
      </View>
            <View style={styles.cardBox}>
            
            <View style={styles.dataContainer}>
                       
                            <Text style={{marginLeft: 4, fontWeight: '600', textTransform:'capitalize'}}>Check In</Text>

                            <View style={styles.inputBox} class="input-group mb-3 input-group-sm">
                                <Feather
                   name="calendar" 
                   size={20} style={{ padding: 5 }}/>
                                <TextInput style={styles.input} type="text" class="form-control" placeholder="18 June 2023" />
                            </View>
                        </View>
                        <View style={styles.cvv}>
                            <Text style={{marginLeft: 4, fontWeight: '600', textTransform:'capitalize'}}>Check Out</Text>

                            <View style={styles.inputBox} class="input-group mb-3 input-group-sm">
                            <Feather
                   name="calendar" 
                   size={20} style={{ padding: 5 }}/>
                                <TextInput style={styles.input} type="text" class="form-control" placeholder="23 June 2023" />
                            </View>

                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',
                    justifyContent:'space-around'}}>
                        <View style={{left:1}}>
                            <Text>Guests</Text>
                            <View style={{flexDirection:'row',alignItems:'center',
                        justifyContent:'center',backgroundColor:'#EDEDED',padding:5,borderRadius:10,}}>
                        
                            <View style={{backgroundColor:'#fff',width:30,
                            height:30,alignItems:'center',justifyContent:'center',margin: 5}}>
                                <TouchableOpacity onPress={()=>setGuest(Guest-1)}>
                                <Feather name="minus"/>
                                </TouchableOpacity>
                            </View>
                            <Text>{Guest}</Text>
                            <View style={{backgroundColor:'#fff',width:30,
                            height:30,alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=>setGuest(Guest+1)}>
                                <Feather name="plus"/>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                        <View style={{left:2}}>
                        <Text>Rooms</Text>
                        <View style={{flexDirection:'row',alignItems:'center',
                        justifyContent:'center',backgroundColor:'#EDEDED',padding:5,borderRadius:10,}}>
                            <View style={{backgroundColor:'#fff',width:30,
                            height:30,alignItems:'center',justifyContent:'center',margin:5}}>
                                <TouchableOpacity onPress={()=>setRoom(Room-1)}>
                                <Feather name="minus"/>
                                </TouchableOpacity>
                            </View>
                            <Text>{Room}</Text>
                            <View style={{backgroundColor:'#fff',width:30,
                            height:30,alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=>setRoom(Room+1)}>
                                <Feather name="plus"/>
                                </TouchableOpacity>
                            </View>
                            </View>
                    
                        </View>
                    </View>
                    </View>
               
                
                    <TouchableOpacity  onPress={()=>navigation.navigate('PaymentScreen')} style={{backgroundColor:'blue',height:50,width:200,alignSelf:'center',marginTop:'10%',borderRadius:20,alignItems:'center',justifyContent:'center',color:'white'}}>
                        <Text style={{color:'white'}}>Book</Text>
                    </TouchableOpacity>
                    
                   
        </SafeAreaView>
    );
};

export default HotelDetails;

const styles= StyleSheet.create ({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    
    // dataContainer: {
    // flexDirection:'row' ,alignItems:'center',
     //   justifyContent:'space-between',padding:30,
    //   width: '100%',
     
  // },
    input: {
        width: '60%',
        borderColor: "black",
        borderStyle: "solid"
    },
    
    
    })