import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar,View,SafeAreaView, Text,TouchableOpacity ,TextInput, StyleSheet,Button, Image, ScrollView,ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { fonts } from 'react-native-elements/dist/config';
import { Formik } from 'formik';


const SignIn=({navigation})=>{
    
    


    return(
        <SafeAreaView>
             <StatusBar
            backgroundColor='#0225A1'
            barStyle="light-content"
            />
            
            
           <ScrollView>
            <View style={styles.Inputcontainer}>
            
          
            
             <View style={styles.inputCon}>

                    <View style={styles.textinputbox} >
                        <Icon name='email' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput   placeholder="Enter your email">

                        </TextInput>
                    </View>
                    
                    <View style={styles.textinputbox} >
                        <Icon name='lock' size={22} color='black' style={{ margin:10 }}></Icon>
                        <TextInput   placeholder="Enter your password" ></TextInput>   
                    </View>
                  <TouchableOpacity  onPress={()=>navigation.navigate('Home')} style={{backgroundColor:'#0225A2',width:'65%',height:35,borderRadius:10,alignItems:'center',marginTop:50}}>
                      <Text style={{padding:8,color:'#fff'}}>
                      Login
                      </Text>
                  </TouchableOpacity>
                  <View style={styles.signupContainer}>
                <Text style={styles.accountText}>
                    Don't have account?
                </Text>
                <Text style={styles.signupText}
                onPress={()=>navigation.navigate('SignUp')}
                >Sign Up</Text>
            </View>
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
    ,  signupContainer:{
        alignContent: 'center',
        alignItems: 'baseline',
        marginHorizontal:20,
        justifyContent:'center',
        paddingVertical:'15%',
        flexDirection:'row',
        alignItems:'center',
        
    },
    accountText:{
        fontSize:13,
        lineHeight:13 * 1.4,
        color:'gray'
    },
    signupText:{
        fontSize:13,
        lineHeight:13 * 1.4,
        color:'#0225A1',
        marginLeft:5,

    },
     
})
export default SignIn






























































































































































