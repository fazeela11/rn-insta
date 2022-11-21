import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
// import Icon  from 'react-native-vector-icons/FontAwesome';

export default function LoginSignup ({navigation}) {
    return (
      <View style={styles.container}>
      <View style={styles.instaName}>
        <Text style={styles.name}>Instagram</Text>
        <Text>Sign up to see photos and videos</Text>
        <Text>from your friends.</Text>
      </View>
        <View style={styles.fbBtn}>
          <TouchableOpacity style={styles.btnfblink}
           onPress={()=>{
             alert('You pressed the button!')
            }}>
            {/* <Icon name='facebook' size={30}/> */}
            <Image style={{width:28, height:30}} 
            source={require('../images/fblogo.png')}/>
            <Text 
             style={{color:"white", fontWeight:"bold", fontSize: 15 }}>  Log in with Facebook
             </Text>
          </TouchableOpacity>
          <View style={{width:350,justifyContent:"center", alignItems:"center",flexDirection:"row"}}>
          <View style={styles.orBorderLine}></View>
          <Text> OR </Text>
          <View style={styles.orBorderLine}></View>
          </View>
          <View style={styles.email}>
            <TouchableOpacity>
              <Text 
                style={{color:"black", fontWeight:"bold", fontSize:14}}>
                Sign up with email or phone number</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.termsndpolicy}>
            <Text>By signing in you agree to our 
            <Text style={{textDecorationLine:"underline"}}>Terms </Text>
            & <Text style={{textDecorationLine:"underline"}} >Policy Privacy</Text>
            </Text>
          </View>
          <View style={styles.borderLine}></View>
          <View style={styles.login}>
            <Text>Already have an account?</Text>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("LoginScrn")}}>
              <Text style={{fontWeight:"bold", textDecorationLine:"underline"}}>Log in.</Text>
            </TouchableOpacity>
         </View>
        </View>
      </View>
    )
  }


  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#faf9f7",
      alignItems:"center",
      justifyContent:"center"
    },
    name:{
      fontWeight:'bold',
      fontSize:35,
      color:"black",
      fontFamily:'roboto',

   },
   instaName:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   },
   fbBtn:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
    width:"90%",
    height:122,
   },
   btnfblink:{
    display:'flex',
    flexDirection:'row',
    borderColor:"#5890FF",
    backgroundColor:"#0175E1",
    height:"12%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5
   },
   email:{
    flex:0.1,
    justifyContent:'center',
    alignItems:'center',
   },
   termsndpolicy:{
    flex:0.4,
    justifyContent:"flex-end",
    alignItems:'center',
   },
   login:{
    flex:0.1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
   },
   borderLine:{
    borderBottomColor:"grey",
    borderBottomWidth:1,
    width:400
  },
  orBorderLine:{
    borderBottomColor:"grey",
    borderBottomWidth:1,
    height:1,
    width:170
  }
  })