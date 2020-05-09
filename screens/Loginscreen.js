import React, { useState, createContext } from 'react';
import { View, Text, TextInput, Button, Image, Modal} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SignUp from './Signup';
import ForgotPassword from './ForgotPassword'

export const SignUpContext = createContext();
export const ForgotPassContext = createContext();

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupModalVisible, setsignupModalVisible] = useState(false)
    const [forgetModalVisible, setforgetModalVisible] = useState(false)



    const SignUpModal = ()=>{
        return(
            <Modal
            animationType="slide"
            visible={signupModalVisible}
            >
                <SignUpContext.Provider value={{signupModalVisible, setsignupModalVisible}}>
                    <SignUp />
                </SignUpContext.Provider>
            </Modal>
        )
    }

    const ForgotPasswordModal = ()=>{
        return(
            <Modal
            animationType="slide"
            visible={forgetModalVisible}
            >
                <ForgotPassContext.Provider value={{forgetModalVisible, setforgetModalVisible}}>
                    <ForgotPassword />
                </ForgotPassContext.Provider>
            </Modal>
        )
    }

    

    return(
        <View style={{flex:1}}>
            <View style={{alignItems:'center', justifyContent:'center', marginTop:20 }}>
                <Text>SDC FINANCIAL LIMITED</Text>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', marginTop:30}}>
                <Image source={require('../assets/images/lantern-fire.jpg')} style={{height:250, width:200, borderRadius:45}}/>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', marginTop:20 }}>
                <Text>Login</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center', marginTop:20 }}>
                <TextInput
                 style={{ height: 45, width:320, borderColor: '#1c1c1c', borderWidth: .2, borderRadius:20 }}
                 onChangeText={text => setEmail(text)}
                 placeholder='Email'
                />
            </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center', marginTop:30 }}>
                <TextInput
                 style={{ height: 45, width:320, borderColor: '#1c1c1c', borderWidth: .25, borderRadius:20 }}
                 onChangeText={text => setPassword(text)}
                 placeholder='Password'
                />
            </View>
            <View style={{marginLeft:90, marginRight:90, marginTop:30}}>
                <Button
                title='Sign In'
                onPress = {()=> console.log(email, password)}
                />
            </View>
            <View style={{alignItems:'center', justifyContent:'center',marginTop:30}}>  
                <TouchableOpacity
                    underlayColor='#e3350e'
                    activeOpacity={.3}
                    onPress={ ()=> setsignupModalVisible(true)}
                    >
                    <Text>Sign Up</Text>
                    <SignUpModal/>
                </TouchableOpacity> 
            </View>
            
            <View style={{alignItems:'center', justifyContent:'center',marginTop:30}}>  
                <TouchableOpacity
                    underlayColor='#e3350e'
                    activeOpacity={.3}
                    onPress={ ()=> setforgetModalVisible(true)}
                >
                    <Text>Forgot Password?</Text>
                    <ForgotPasswordModal/>
                </TouchableOpacity> 
            </View>
            
        </View>
    )
}

/**
 * TODO
 * add the appropriate colors
 * create the backend
 * replaace all image placehodlers with appropriate images
 * work on the headers
 * add a splash
 * bonus
 * add animations
 * 
 * 
 * ,
    "splash": {
      "image": "./assets/images/abstract.png",
      "resizeMode": "contain",
      "backgroundColor": "#000000"
    }
 */