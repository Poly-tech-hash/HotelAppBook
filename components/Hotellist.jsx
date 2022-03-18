import React, { useEffect, useState,useRef} from "react";
import { SafeAreaView, StyleSheet, Text, View,StatusBar 
    ,Image,TextInput,FlatList,TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import  Icon from "react-native-vector-icons/MaterialIcons";
import Hotels from "./Hotels";

import { db } from "../config/firebase";
//import { ISO_8601 } from "moment";
const {width} =Dimensions.get("screen")
const cardWidth =width/1.8

const Hotellist = ({navigation}) => {
    const [Search, setSearch] = useState([])
    const [searchtext, setSearchtext] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [selectdHotelIndex,setSelectedHotelIndex] = useState(0);
    const Btn =[
        {id:"1",name:'Recomende'},
        {id:"2",name:'Popular'},
        {id:"3",name:'Top Ratings'},
    ]

    const [addHotels, setAddHotels] = useState([]);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource and update FilteredDataSource
          const newData = masterDataSource.filter(
            function (item) {
              // Applying filter for the inserted text in search bar
              const itemData = item.province
                  ? item.province.toUpperCase()
                  : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            }
          );
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };


  useEffect(() => {
        db.ref('/hotel').on('value', snapshot => {
           
            const addHotels = []
            snapshot.forEach(action => {
                const key = action.key

                const data = action.val()
                addHotels.push({
                    key: key,
                    hotel: data.hotel,
                    name: data.name,
                
                    image2: data.image2,
                    location: data.location,
                    description: data.description,
                    city: data.city,
                    price: data.price,
                    room: data.room,
                    hotelprice : data.hotelprice,
                    roomprice: data.roomprice,
                    type:data.type,
                    beds: data.beds,
                    province: data.province
                })
                setAddHotels(addHotels)
                setFilteredDataSource(addHotels)
                setMasterDataSource(addHotels)

            })
            console.log(addHotels,'polite')
        })
    }, [])

    
    

    const Card =({Hotels,index})=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate('Hotellist',{data:Hotels,index:index})}>
        
        <View style={styles.cardContainer}>
        
                <Image source={{ uri:Hotels.hotel}}
                
                style={{height:150,width:140}}
                resizeMode="contain"/>
                
                
                <View style={{backgroundColor:'yellow',width:'90%',height:30,padding:10,}}>
                <View style={{flexDirection:"row",}}>
                    <Ionicons name='location-sharp' size={16}/>
                    <Text style={{marginHorizontal:10,}}>{Hotels.type}</Text>

                </View>

                {/* <View style={{flexDirection:"row"}}>

                <Ionicons name='star' size={16} color='orange'/>

                <Text style={{}}>{Hotels.type}</Text>
                </View> */}

              
                </View>
                    
                
                
            </View>
        </TouchableOpacity>)
    }
    const CardNear =({Hotels})=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate('Hotel Details',{data:Hotels})}>
        <View style={styles.cardNearContainer}>
           
                <Image source={Hotels._image}
                style={{height:60,width:'100%',borderTopRightRadius:10,borderTopLeftRadius:11}}
                />
                   <View style={{paddingVertical:5,paddingHorizontal:10}}>
                       <Text style={{fontSize:12,fontWeight:'bold'}}>{Hotels._location}</Text>
                       <View style={{flexDirection:'row'}}>
            
                    </View> 
                    </View> 
        </View>
        </TouchableOpacity>)
    }

    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                        <ScrollView>

              <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
            
        <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <Image source={require('../assets/profile.jpg')}
                style={{height:50,width:50,borderRadius:25}}/>
                </TouchableOpacity>
                <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,
            marginTop:18}}>Polite</Text>
            </View>
            <TouchableOpacity onPress={navigation.navigate('Hotel Details')}>
          <Ionicons name="notifications" size={24}/>
          </TouchableOpacity>
        </View>
        <View style={{
            marginTop:20,
            flexDirection:'row',
            paddingHorizontal:20,
        }}>
        <View style={styles.inputContainer}>
        <Ionicons name="search" size={24}/>
        <TextInput 
        style={{fontSize:18,flex:1,marginLeft:10}}
        placeholder="find a hotel"
        onChangeText={(text)=>searchFilterFunction(text)}
        />
        </View>
        </View>
        <View>
            
        </View>
        <View>
            {Hotels?(
                <FlatList
                keyExtractor={(_,key)=>key.toString()}
                horizontal
                 showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingLeft:20}}
                data={addHotels}
                renderItem={({item,index})=><Card Hotels={item} index={index}/>}
                />
             ):(
                <Text>No Hotels this side</Text>
            )} 
           {Hotels?( 
                <View>
                    <View style={{flexDirection:'row',
                justifyContent:'space-between',marginHorizontal:20,paddingVertical:20}}>
                    <Text style={{fontWeight:'bold',color:'grey'}}>Near you</Text>
                    <Text style={{color:'grey'}}>Show all</Text>
                </View>
                <FlatList
            keyExtractor={(_,key)=>key.toString()}
            horizontal 
             showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft:20,}}
            data={Hotels}
            renderItem={({item,id})=><CardNear Hotels={item} index={id}/>}
            />
            </View>
        ):(
            <Text>No Hotels this side</Text>
            )}
            </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Hotellist;

const styles= StyleSheet.create ({
    header:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    inputContainer:{
        flex:1,
        height:50,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderColor:'blue',
        borderWidth:3,

        alignItems:'center',
        paddingHorizontal:20, 
    },
    btnListContainer:{
        marginLeft:-20,
        paddingHorizontal:20,
        paddingVertical:30,
        alignItems:'center'
    },
    categoryBtn:{
      height:45,
      width:120,
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:5,
      flexDirection:'row',

    },
    card:{
      
    },
    cardContainer:{
        // width:cardWidth,
        // marginRight:20,
    paddingTop:10,
        marginHorizontal:20,
        borderRadius:17,
        
        
        

    },
    cardNearContainer:{
      height:120,
      width:cardWidth/2,
      borderRadius:15, 
      backgroundColor:'#fff',
      elevation:15,
      width:120,
      marginHorizontal:10,
      marginLeft:12

    
    },
    cardImage:{
        height:190,
        width:width/2,
        marginRight:20,
        padding:10,
        overflow:'hidden',
        borderRadius:10,
    }
});