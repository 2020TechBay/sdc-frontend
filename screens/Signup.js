import React, { useState, useContext } from 'react';
import {Modal,View,Text, TextInput, Button } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SignUpContext} from './Loginscreen';


export default function SignUp(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const { signupModalVisible, setsignupModalVisible} = useContext(SignUpContext);


    return(
        <View style={{flex:1, borderRadius:50, alignItems:'center',}}>
            <View style={{margin:30,}}>
                <TextInput
                 style={{ height: 45, width:350, borderColor: '#1c1c1c', borderWidth: .2, borderRadius:20 }}
                onChangeText={ text => setFirstName(text)}
                placeholder='First Name'
                />
            </View>
            <View style={{margin:30}}>
                <TextInput
                style={{ height: 45, width:350, borderColor: '#1c1c1c', borderWidth: .2, borderRadius:20 }}
                borderBottonColor='#ffffff'
                onChangeText={ text => setLastName(text)}
                placeholder='Last Name'
                />
            </View>
            <View style={{margin:30}}>
                <TextInput
                 style={{ height: 45, width:350, borderColor: '#1c1c1c', borderWidth: .2, borderRadius:20 }}
                onChangeText={ text => setContact(text)}
                placeholder='Contact'
                />
            </View>
            <View style={{margin:30}}>
                <TextInput
                 style={{ height: 45, width:350, borderColor: '#1c1c1c', borderWidth: .2, borderRadius:20 }}
                onChangeText= {text=> setEmail(text)}
                placeholder='Email'
                />
            </View>
            <View style={{marginLeft:50, marginRight:50}}>
                <Button
                title='Sign Up'
                onPress={ ()=> {
                    console.log(lastName, firstName, contact, email)
                    setsignupModalVisible(!signupModalVisible);
                    //console.log('hello')
                }}
                />
            </View>
        </View>
    )
}