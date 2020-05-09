import React, { useState, useContext } from 'react';
import {Modal,View,Text, TextInput, Button } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ForgotPassContext} from './Loginscreen';


export default function ForgotPassword(){
    const [email, setEmail] = useState('');
    const { forgetModalVisible, setforgetModalVisible} = useContext(ForgotPassContext);


    return(
        <View style={{flex:1, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
            <View style={{margin:30}}>
                <TextInput
                 style={{ height: 45, width:350, borderColor: '#1c1c1c', borderWidth: .2, borderRadius:20 }}
                onChangeText= {text=> setEmail(text)}
                placeholder='Email'
                />
            </View>
            <View style={{marginLeft:50, marginRight:50}}>
                <Button
                title='Reset Email'
                onPress={ ()=> {
                    console.log(email)
                    setforgetModalVisible(!forgetModalVisible);
                    //console.log('hello')
                }}
                />
            </View>
        </View>
    )
}