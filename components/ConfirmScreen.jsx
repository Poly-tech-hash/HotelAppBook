import React ,{useState}from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,
ScrollView,Pressable,Dimensions,SafeAreaView,TextInput, Image} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
//import DateTimePickerModal from 'react-native-modal-datetime-picker'
//import Flatbutton from "../styles/button"
import {db} from "../config/firebase"
import moment from 'moment'
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const ConfirmScreen = ({navigation,route}) => {
    
       const room=route.params.room
          const [roomnumber,setRoomnumber]=useState(0)  
         // const hotelinfor=route.params.hotelinfor
          const diff=route.params.diff
          const Phonenumber=route.params.Phonenumber
          const checkin=route.params.checkin
          const checkout=route.params.checkout
         // const hotelname=hotelinfor.name
          const [adultPlus,setGuestsPlus]=useState(1)
          const roomT=room.bedType
          //const hotelimg=hotelinfor.url
          const [childPlus,setChildPlus]=useState(0)
          const [Status,setStatus]=useState('Pending')
          const [description,setDescription]=useState('Successfully paid booking')
          const [statement,setStatement]=useState('Successfully paid booking'+checkin+' '+checkout)
  
          var totPrice=0
          const datetoday=moment(new Date()).format('YYYY/MM/DD')
          const addBooking=()=>{
        
            const userid= auth.currentUser.uid
    
            
            db.ref('Booking').push({
                userid,Status,
                description,hotelname,
                diff,checkin,checkout,GuestsPlus,roomnumber,totPrice,roomT,hotelimg,
                datetoday
           
            })
      
        }
    return (
        
      <SafeAreaView >
              
               
              </SafeAreaView>
            
    )
}

export default ConfirmScreen

const styles = StyleSheet.create({
  headerTitle:{
    marginLeft:130
  },
  buttonstyle:{
    borderRadius:10,
    paddingVertical:10,
    width:200,
    backgroundColor:'#4A1DD6',
    

},
buttonText:{
    color:'#fff',
    fontWeight:'normal',
    // textTransform:'uppercase',
    fontSize:20,
    fontStyle:'normal',
    textAlign:'center'
},
})