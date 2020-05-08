import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Modal} from 'react-native';
import SignUp from './Signup'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupModalVisible, setsignupModalVisible] = useState(false)
    const [forgetModalVisible, setforgetModalVisible] = useState(false)


    const Mod = ()=>{
        return(
            <Modal
            animationType="slide"
            visible={signupModalVisible}
            >
                <SignUp signupModalVisible={signupModalVisible}/>
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
                 style={{ height: 45, width:300, borderColor: 'gray', borderWidth: .2 }}
                 onChangeText={text => setEmail(text)}
                 placeholder='Email'
                />
            </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center', marginTop:30 }}>
                <TextInput
                 style={{ height: 45, width:300, borderColor: 'gray', borderWidth: .25 }}
                 onChangeText={text => setPassword(text)}
                 placeholder='Password'
                />
            </View>
            <View style={{marginLeft:90, marginRight:90, marginTop:30}}>
                <Button
                title='Sign In'
                />
            </View>
            <View style={{alignItems:'center', justifyContent:'center',marginTop:30}}>  
                <TouchableOpacity
                    underlayColor='#e3350e'
                    activeOpacity={.3}
                    onPress={ ()=> setsignupModalVisible(false)}
                >
                    <Text>Sign Up</Text>
                    <Mod/>
                </TouchableOpacity> 
            </View>
            
            <View style={{alignItems:'center', justifyContent:'center',marginTop:30}}>  
                <TouchableOpacity
                    underlayColor='#e3350e'
                    activeOpacity={.3}
                    onPress={ ()=> setforgetModalVisible(false)}
                >
                    <Text>Forgot Password?</Text>
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
 * work on the displaying the modals for the forget password and sign up
 * add a splash
 * bonus
 * add animations
 */