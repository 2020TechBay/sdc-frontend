import React, { useState } from 'react';
import {Modal,View,Text, TextInput, Button } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SignUp({signupModalVisible}){
    const [modalVisible, setModalVisible] = useState(signupModalVisible)
    return(
        <View style={{flex:1}}>
            <View style={{margin:50}}>
                <TextInput
                placeholder='First Name'
                />
            </View>
            <View style={{margin:50}}>
                <TextInput
                placeholder='Last Name'
                />
            </View>
            <View style={{margin:50}}>
                <TextInput
                placeholder='Contact'
                />
            </View>
            <View style={{margin:50}}>
                <TextInput
                placeholder='Email'
                />
            </View>
            <View style={{margin:50}}>
                <Button
                title='Sign Up'
                onPress={ ()=>{ setModalVisible(!modalVisible)}}
                />
            </View>
            </View>
    )
}