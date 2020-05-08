import React from 'react';
import { View, Text, Image, Button} from 'react-native';



export default  function ProductDetailsScreen({route, navigation}){
    const {productName} = route.params;
    const {img} = route.params;
    const {details} = route.params
    return(
        <View>
           <View style={{margin:20}}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image source={img} style={{height:300, width:250, borderRadius:45}}/>
            </View>
            <View style={{marginTop:50, flexDirection:'row', borderWidth:0.1, borderRadius:20, height:50, alignItems:'center'}}>
                <Text style={{marginLeft:20, fontSize:20, fontWeight:'bold'}}>Product Name:</Text>
                <Text style={{fontSize:18, marginLeft:20}}> {productName} </Text>
            </View>
            <View style={{marginTop:20, flexDirection:'row', borderWidth:0.1, borderRadius:20, height:50, alignItems:'center'}}>
                <Text style={{marginLeft:20, fontSize:20, fontWeight:'bold'}}>Product Type:</Text>
                <Text style={{fontSize:18, marginLeft:20}}>Asset</Text>
            </View>
            <View style={{marginTop:20, flexDirection:'row', borderWidth:0.1, borderRadius:20, height:50, alignItems:'center'}}>
                <Text style={{marginLeft:20, fontSize:20, fontWeight:'bold'}}>Description:</Text>
                <Text style={{fontSize:18, marginLeft:20}}>{details}</Text>
            </View>
           </View>
           <View>
               <Button title='Apply'/>
           </View>
        </View>
    )
}