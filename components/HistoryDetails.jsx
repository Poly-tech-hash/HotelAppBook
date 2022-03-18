import React from "react";
import { SafeAreaView, StyleSheet, Text, View,StatusBar,Image,FlatList,TextInput,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Hotels from "./Hotels";

const HistoryDetails = ({route,navigation})=>{
    const {id,name,image,location,streetname,price,details} = route.params
    return(
        <View style={{flex:1}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{flexDirection:'row',alignSelf:'flex-start',marginTop:'8%'}}>
                <Icon name={'arrow-back'} size={25}/>
                <Text>HistoryDetails</Text>

            </TouchableOpacity>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:'16%'}}>
                <Image source={image} style={{width:300,height:200,borderRadius:40,}}/>
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text>             Hotel Name:                 {name}</Text>
             
                    </View>
                    <View>
                        <Text>              Location:                      {location}</Text> 
                    </View>
                    <View>
                        <Text>              Price:                          {price}</Text>
                    </View>

                   <View>       
                       <Text>Details: I have been there many times,Rooms,Food and services are excellent. 
                        We did lots of excursions and all the places are from the Hotel reachable. we visited long and was very helpful and excellent   </Text>
                   </View>


                   <View>
                       
                   </View>
                </View>
            </View>
        </View>
    )
}
export default HistoryDetails