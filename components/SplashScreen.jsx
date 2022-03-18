import React from "react";
import { SafeAreaView, View,Image,StatusBar,StyleSheet,ImageBackground } from "react-native";

const SplashScreen =({navigation})=>{

    setTimeout(()=>{
      navigation.replace('SignIn');
    }, 3000);

    return(

        <SafeAreaView >
            
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />

            <View>
                <ImageBackground source={require('../assets/hotel.png')} style={{height:'100%',width:'100%'}}>

                </ImageBackground>
            </View>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen