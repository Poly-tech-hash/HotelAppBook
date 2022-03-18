import React, { useEffect, useState } from "react";
import { TouchableOpacity ,View,Text, SafeAreaView,StatusBar,ImageBackground,Dimensions} from "react-native";


const Home =({navigation,route})=>{

    return(
        <SafeAreaView >
            
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />

                <ImageBackground source={require('../assets/hotel.png')} style={{height:'100%',width:'100%'}}>
                <View style={{justifyContent:'center',alignItems:'center',marginLeft:20}}>
                    <Text style={{fontSize:30,color:"#022549",marginTop:200}}>POLY'S HOTEL</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginLeft:20}}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}
                 style={{backgroundColor:'#0225A2',width:'75%',height:35,borderRadius:10,alignItems:'center',marginTop:200}}>
                    <Text style={{ fontWeight: 'bold',marginLeft:-12, padding: 8, color:'#fff'}}>
                       Get Started
                        
                    </Text>
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
            

        </SafeAreaView>
    )
}
export default Home