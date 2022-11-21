
import React, { useState } from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

export default function LoginScreen () {

 const [clrChng, setClrChng] = useState("lightblue");
 const [clrChng2, setClrChng2] = useState("lightblue");

  return(
    <View style={styles.container}>
      <Text>English(U.S)</Text>
      <View style={styles.login}>
        <View style={{
          height:150,
          justifyContent:"space-between",
          alignItems:"center"}}>
         <Image style={styles.iglogo}
           source={require("../images/iglogo.png")}
          /> 
        </View>
        <View style={{
          height:110,
          justifyContent:'space-between'}}>
         <TextInput
           placeholder='Phone number, email or username'
           placeholderTextColor={"grey"}
           onChangeText={(value)=> value ? setClrChng(false): setClrChng('lightblue')}
           style={styles.inputField} />
           
         <TextInput
           placeholder='Password'
           placeholderTextColor={"grey"}
           style={styles.inputField}
           onChangeText={(value)=>  value ? setClrChng2(false) : setClrChng2("lightblue")}
           secureTextEntry={true}/>
        </View>
        <View style={{height:"25%", justifyContent:"center"}}>
         <TouchableOpacity > 
           <Text style={ clrChng != 'lightblue' && clrChng2 != 'lightblue' && clrChng == clrChng2  ? styles.loginBtn2 : styles.loginBtn}>Log in</Text>
         </TouchableOpacity>
         </View>
        <View style={{
          height:30,
          justifyContent:'center',
          alignItems:"center" }}>
         <Text style={styles.PreSignupText}>Forgot your login details?
           <Text style={styles.signupText}>Get help logging in.</Text>
         </Text>
      </View>
      <View style={{width:350,justifyContent:"center", alignItems:"center",flexDirection:"row"}}>
         <View style={styles.orBorderLine}></View>
          <Text> OR </Text>
          <View style={styles.orBorderLine}></View>
         </View>
         <View style={styles.fbBtn}> 
         <TouchableOpacity style={styles.btnfblink}
           onPress={()=>{
             alert('You pressed the button!')
            }}>
            <Text style={{color:"white", fontWeight:"bold", fontSize: 15}}>  Log in with Facebook</Text>
          </TouchableOpacity>
         </View>
         </View>
      <View style={styles.bottom}>
        <View style={styles.borderLine}>
        </View>
        <View style={{flexDirection:'row'}}>
         <Text style={styles.PreSignupText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign up.</Text>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
container:{
  flex:1,
  justifyContent:"space-between",
  alignItems:"center",
  backgroundColor:"#faf9f7"
},
login:{
  width:"90%",
  justifyContent:"center",
  height:220
},
iglogo:{
  width:300,
  height:60,
  resizeMode:'contain',
},
PreSignupText:{
  color:"grey",
  fontSize:13,
},
signupText:{
  fontSize:13,    
  fontWeight:'bold',
  textDecorationLine:"underline"
},
borderLine:{
  borderBottomColor:"grey",
  borderBottomWidth:1,
  height:1,
  width:400
},
bottom:{
  flex:0,
  height:60,
  justifyContent:"space-evenly",
  alignItems:"center"
},
inputField:{
  // display:'flex',
  fontSize:15,
  fontWeight:'500',
  color:"grey",
  justifyContent:"center",
  alignItems:'center',
  backgroundColor:"#e3e1de",
  borderRadius:5,
},
loginBtn:{
 color:"white",
 fontSize:17,
 padding:5,
 backgroundColor:'lightblue',
 borderRadius:5,
 textAlign:"center",
 fontWeight:'700',
 height:35,
},
loginBtn2:{
  color:"white",
  fontSize:17,
  padding:5,
  backgroundColor:'#31B5FF',
  borderRadius:5,
  textAlign:"center",
  fontWeight:'700',
  height:35,
 },
orBorderLine:{
  borderBottomColor:"grey",
  borderBottomWidth:1,
  height:1,
  width:150,
  justifyContent:"flex-end"
},
fbBtn:{
  justifyContent:'center',
  alignItems:'center',
  width:"100%",
  height:"30%",
 },
 btnfblink:{
  display:'flex',
  flexDirection:'row',
  borderColor:"#5890FF",
  backgroundColor:"#0175E1",
  height:"60%",
  width:"100%",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:5
 },
})