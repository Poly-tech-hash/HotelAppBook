import React, { useState } from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
import { View,SafeAreaView, Text,TouchableOpacity ,TextInput, StyleSheet,Button, Image, ScrollView,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fonts } from 'react-native-elements/dist/config';
import { Formik } from 'formik';
import * as yup from 'yup'
//import {auth,db} from './firebase'
//import {db}from './firebase'
//import {useAuth} from './context/AuthContext'



const SignUp=({navigation})=>{
    const [isPasswordShow,setPasswordShow]=useState(false)
    const ReviewSchem=yup.object({
        name:yup.string().required().min(2),
        phonenumber:yup.string().required().min(10).max(10),
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
        confirmpassword:yup.string().required().min(6).oneOf([yup.ref('password'),null],'password does not match')
    })


    
    const addUser= async (data)=>{
        try{
          const {uid,email,password,name,phonenumber} =data
  await auth.createUserWithEmailAndPassword(
      email.trim().toLowerCase(),password
    ).then(res =>{
          db.ref(`/users`).child(res.user.uid).set({
            name:name,
            email:email.trim().toLowerCase(),
            phonenumber:phonenumber,
            uid:res.user.uid
          })
          })
        }
        catch(error){
          if(error.code === 'auth/email-already-in-use'){
            Alert.alert(
              'That email adress is already inuse'
            )
          }
          if(error.code === 'auth/invalid-email'){
            Alert.alert(
              'That email address is invalid'
            )
          }
          else{
            Alert.alert(error.code)
          }
          
        }
        
      }


    return(
        <SafeAreaView >
             
            
            
           <ScrollView>
            <View style={styles.Inputcontainer}>
            
            
          
            
             <View style={styles.inputCon}>

             <View style={styles.textinputbox} >
                        <Icon name='person' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput   placeholder="Enter your first name">

                        </TextInput>
                    </View>

             <View style={styles.textinputbox} >
                        <Icon name='person' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput   placeholder="Enter your last name">

                        </TextInput>
                    </View>


             <View style={styles.textinputbox} >
                        <Icon name='phone' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput   placeholder="Enter your phoneNumber">

                        </TextInput>
                    </View>

                    <View style={styles.textinputbox} >
                        <Icon name='email' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput   placeholder="Enter your email">

                        </TextInput>
                    </View>
                    
                    <View style={styles.textinputbox} >
                        <Icon name='lock' size={22} color='black' style={{ margin:10 }}></Icon>
                        <TextInput   placeholder="Enter your password" ></TextInput>   
                    </View>
                  <TouchableOpacity  onPress={()=>navigation.navigate('Hotellist')} style={{backgroundColor:'#0225A2',width:'65%',height:35,borderRadius:10,alignItems:'center',marginTop:50}}>
                      <Text style={{padding:8,color:'#fff'}}>
                      Register
                      </Text>
                  </TouchableOpacity>
             </View>
                            
            </View>
            </ScrollView>
            
        </SafeAreaView>
    )
    }
const styles =StyleSheet.create({
    container:{
   
        marginTop:220,
        justifyContent:'center',
        alignItems:'center',
       
    },
    inputCon: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop:200,
       
    },
    input: {
    
        borderRadius: 5,
        backgroundColor: '#fff',
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
    textinputbox: {
   
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
export default SignUp