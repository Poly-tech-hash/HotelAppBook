import React from 'react';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/Ionicons';
import { View,SafeAreaView, Text,TouchableOpacity ,
    TextInput, StyleSheet,Button, Image, ScrollView,ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';


const Profile=({navigation})=>{

    return(
        <SafeAreaView >
            <StatusBar 
            backgroundColor='#0225A1'
            barStyle/>
           <ImageBackground source={require('../assets/hotel.png')} style={{height:'100%',width:'100%'}}>
            <TouchableOpacity  onPress={()=>navigation.goBack()} >
                <Ico name ="keyboard-backspace" size ={25} color='black' style={{marginTop:25, marginLeft:20}} ></Ico>
                </TouchableOpacity>
                <Text style={{fontSize:20,color:'#fff',marginLeft:10,marginTop:2}}>Log Out</Text>
                <Image source={require('../assets/profile.jpg')}
                style={{height:100,width:100,borderRadius:50,marginLeft:90}}/>
                <ScrollView>
            <View style={styles.container}>
          
            
             <View style={styles.inputCon}>
            
             <View style={styles.iconcontainer} >
             <Icon name='person' size={22} color='black' style={{ margin: 9 }}></Icon>
                        <TextInput 
                         autoFocus={true}
                           placeholder="Enter your first name "  ></TextInput>
                 </View>


                 <View style={styles.iconcontainer} >
                        <Icon name='person' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput placeholder="Enter your last name" ></TextInput>
                    </View>

                    <View style={styles.iconcontainer} >
                        <Icon name='email' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput   placeholder="Enter your email">

                        </TextInput>
                    </View>
                    <View style={styles.iconcontainer} >
                        <Icon name='perm-phone-msg' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput    placeholder="Enter your phone number " ></TextInput>
                    </View>
                    <View style={styles.iconcontainer} >
                        <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput   placeholder="Enter your password" ></TextInput>
                        
                    </View>
                    <View style={styles.iconcontainer} >
                        <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput style={{width:'100%'}} placeholder="Confirm    password " ></TextInput>
                    </View>
                  <TouchableOpacity  onPress={()=>navigation.navigate('')} style={{backgroundColor:'#0225A2',width:'75%',height:35,borderRadius:10,alignItems:'center',marginTop:20}}>
                      <Text style={{padding:8,color:'#fff'}}>
                     UPDATE
                      </Text>
                  </TouchableOpacity>
             </View>
            
            
            </View>

            </ScrollView>
        </ImageBackground>
        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    inputCon: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop:0,
       
    },
    input: {
    
        borderRadius: 5,
        backgroundColor: '#ebebeb',
        height: 40,
        width: '100%',
        marginBottom: 8,
        
    },
    button: {
        width: '60%',
        margin: 250,
        marginBottom: 5,
        marginTop: 8,
        height: 25,
        borderRadius: 8,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        color: 'white',
        alignItems: 'center',
    },
    iconcontainer: {
   
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 5,
        height: 40,
        width: '100%',
        margin: 8,
        
      

    },
    text: {
        flexDirection: 'row',
        color:'gray',
        marginTop:20,
      
    }
     
})
export default Profile






























































































































































