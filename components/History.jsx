import React,{useState,useEffect,useRef} from "react";
import { SafeAreaView, StyleSheet, Text, View,StatusBar,Image,FlatList,TextInput,TouchableOpacity} from 'react-native';

import  Icon  from "react-native-vector-icons/MaterialIcons";
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import { } from 'react-native-gesture-handler'
import Hotels from "./Hotels";

const History = ({navigation}) => {
    const [searchtext,setSearchtext] = useState('');
    const [filteredDataSource, setFilteredDataSource]= useState([]);
   
    const searchFilterFunction =(text)=>{
        if(text){
            const newData = masterDataSource.filter(function(item){
                const itemData = item.name ? item.name.toUpperCase()
                :''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf( textData)>-1;

            })
            setFilteredDataSource(newData);
            setSearchtext(text)
        }else {
            setFilteredDataSource(masterDataSource);
            setSearchtext(text)
        }
    }


    const Card =({Hotels,index})=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate('Hotels',{data:Hotels,index:index})}>
            
        <View style={styles.cardContainer}>
            <View style={{alignItems:'flex-start',padding:'2%',flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>navigation.navigate(' HistoryDetails',{
                image:Hotels._image,
                name:Hotels._name,
                id:Hotels._bookingId,
                location:Hotels._location,
                price:Hotels._price,
                
                
            })}>
            <Image source={Hotels._image}
                style={{marginVertical:5,height:150,width:180,borderRadius:50}}
                resizeMode="contain"/>
            </TouchableOpacity>
                   <View style={{ padding:'8%'}} >
                       <Text>{Hotels._name}</Text>
                       <Text>{Hotels._bookingId}</Text>
                     <Text >{Hotels._location}</Text>
                    <Text >{Hotels._price}</Text>
                    
                
                    </View> 
            </View>
        </View>
        </TouchableOpacity>)
    }
    return (
        <SafeAreaView>
              <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
            <View style={styles.inputContainer}>
        <Ionicons name="search" size={24}/>
        <TextInput 
        style={{fontSize:18,flex:1,marginBottom:10}}
        placeholder="Search history"     onChangeText={(text) => searchFilterFunction(text)}/>
    
    
        </View>
        <FlatList
                keyExtractor={(_,key)=>key.toString()}
                horizontal
                 showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingLeft:20}}
                data={filteredDataSource}
                renderItem={({item,index})=><Card Hotels={item} index={index}/>}
                />
            
    </SafeAreaView>
    );
};

export default History;

const styles= StyleSheet.create ({
    header: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },
    inputContainer:{
        flex:1,
        height:40,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        paddingHorizontal:20, 
    },
});