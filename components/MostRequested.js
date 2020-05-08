import React from 'react';
import { View, Text, Image} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function MostRequested({navigation}){


    const productList = [
        {id:'1', productName:'Product 1', details:'Lorem ipsum', img: require('../assets/images/lantern.jpg')},
        {id:'2', productName:'Product 2', details:'Lorem ipsum', img: require('../assets/images/match.jpg')},
        {id:'3', productName:'Product 3', details:'Lorem ipsum', img: require('../assets/images/batman.jpg')},
    ]
    
    const Requested = ({productName, details,img})=>{
    return(
            <TouchableOpacity
            onPress={ ()=>navigation.navigate('ProductDetails',
            {productName, details,img})}
            >
            <View style={{margin:20, borderRadius:20, borderWidth:0.1, height:180, width:150, backgroundColor:'#e3e3e3'}}>
               <View style={{margin:15, justifyContent:'center', alignItems:'center'}}>
                   <Image source={img} style={{height:80, width:80, borderRadius:45}}/>
               </View>
               <View>
                   <Text style={{fontSize:20, fontWeight:'bold'}}> {productName} </Text>
                   <Text style={{margin:10}}>{details}</Text>
               </View>
           </View>
           </TouchableOpacity>
        )
    }

    return(
        <View>
           <FlatList
           horizontal={true}
           data={productList}
           renderItem= {({item})=> <Requested img={item.img} productName={item.productName} details={item.details}/>}
           keyExtractor={item=> item.id}
           />
        </View>
    )
}