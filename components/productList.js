import React from 'react';
import { View, Text, Image} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";


export default function ProductList({navigation, productName, details, img,}){


    return(
            <TouchableOpacity
            onPress={ ()=>navigation.navigate('ProductDetails',
            {productName, details, img})}
            >
            <View style={{margin:20, flexDirection:'row', borderRadius:20, borderWidth:0.1, height:120, backgroundColor:'#e3e3e3'}}>
               <View style={{margin:15}}>
                   <Image source={img} style={{height:80, width:80, borderRadius:45}}/>
               </View>
               <View style={{marginLeft:10, margin:15}}>
                   <Text style={{fontSize:20, fontWeight:'bold'}}> {productName} </Text>
                   <Text style={{margin:10}}>{details}</Text>
               </View>
           </View>
           </TouchableOpacity>
        )
}