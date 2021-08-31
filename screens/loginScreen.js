import React from 'react'
import { StyleSheet, Text, View,KeyboardAvoidingView  } from 'react-native'
import {StatusBar} from 'expo-status-bar';
import { Image ,Button, Input } from 'react-native-elements';
import { useState ,useEffect} from 'react';
import { auth } from '../firebase';



const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword]= useState("");
    

    useEffect(() => {
       const unsubscribe= auth.onAuthStateChanged((authUser)=>{
        if(authUser){
                navigation.replace('Home')
            }
        })
        return unsubscribe;
    }, [])
    const signIn=()=>{
      auth
       .signInWithEmailAndPassword(email,password)
       .catch((error)=> alert(error));  
    };
    
    
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"></StatusBar>
           
                <View style={styles.inputContainer}>
                    <Input 
                    placeholder="Email" autoFocus 
                    type="Email" 
                    value={email} 
                    onChangeText={(text)=>setEmail(text)}/>
                    <Input placeholder="Password" secureTextEntry type="password"
                    value={password} 
                    onChangeText={(text)=>setPassword(text)}
                    onSubmitEditing={signIn}/>
                </View>
                <Button title="Login" containerStyle={styles.button} onPress={signIn} />
                <Button type="outline" onPress={()=>navigation.navigate("Register")} containerStyle={styles.button} title="Register"/>
                <View style={{height:100}}></View>
                </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        padding:10,
        justifyContent:"center",
        backgroundColor:"white",

    },
    
    inputContainer:{
       width:300, 
    },
    button:{
        width:200,
        marginTop:10,
    },
})