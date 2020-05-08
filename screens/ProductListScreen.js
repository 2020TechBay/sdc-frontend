import React from 'react';
import { View, Text, SafeAreaView, Image} from 'react-native';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";


import ProductList from '../components/productList'
import MostRequested from '../components/MostRequested'

export default  function ProductListScreen({navigation}){

    const productList = [
        {id:'1', productName:'Product 1', details:'Lorem ipsum', img: require('../assets/images/lantern.jpg')},
        {id:'2', productName:'Product 2', details:'Lorem ipsum', img: require('../assets/images/match.jpg')},
        {id:'3', productName:'Product 3', details:'Lorem ipsum', img: require('../assets/images/batman.jpg')},
        {id:'4', productName:'Product 4', details:'Lorem ipsum', img: require('../assets/images/fire.jpg')},
        {id:'5', productName:'Product 5', details:'Lorem ipsum', img: require('../assets/images/bulb.jpg')},
    ]

   
    return(
        <View>
            <View>
                <View style={{marginTop:10, marginLeft:10}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Most Requested Products:</Text>
                </View>
                <MostRequested navigation={navigation}/>
            </View>
            <View style={{marginLeft:20}}>
                <Text style={{fontWeight:'bold', fontSize:18}}>Our Product and Services:</Text>
            </View> 
            <ScrollView>
                <FlatList
                data={productList}
                renderItem= {({item})=> <ProductList 
                img ={item.img} productName={item.productName} details={item.details} navigation={navigation}/>}
                keyExtractor={item=> item.id}
                />
            </ScrollView>
        </View>
    )
}