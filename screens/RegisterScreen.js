import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Input ,Text} from 'react-native-elements';
import { useState,useLayoutEffect } from 'react';
import { Button } from 'react-native-elements';
import {auth} from "../firebase";


export default function RagisterScreen({ navigation }) {
    const [name, setName] = useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]=useState("")
    const [image,setImage]=useState("")
    useLayoutEffect(() => {
       navigation.setOptions({
           headerBackTitle:"Back to Login",
       })
    }, [navigation])

    const register= async()=>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName: name,
                photoURL: image || "https://www.atozserwisplus.pl/images/user.png"
            })
        })
        .catch((error)=>alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>Create your account</Text>
            <View style={styles.InputCOntainer}>
                <Input placeholder="Full Name" autoFocus type="text" value={name}
                    onChangeText={(text) => setName(text)} />
                <Input placeholder="Email" autoFocus type="email" value={email}
                    onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" autoFocus type="password" value={password}
                    onChangeText={(text) => setPassword(text)} />
                <Input placeholder="image (optional)" autoFocus type="text" value={image}
                    onChangeText={(text) => setImage(text)} onSubmitEditing={register} />
            </View>
            <Button style={styles.button} raised onPress={register} title="Register"/>
            <View style={{height:100}}></View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white"
    },
    button:{
        width:200,
        marginTop:10,
    },
    InputCOntainer:{
        width:300,
    },
})