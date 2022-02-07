import React from 'react'
import { View, Text, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { Custom } from '../components/Custom';

const Transaction = ()=>{
    
    return(
    <View style={{flex:1,backgroundColor:'black'}}>
        <Custom/>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',top:100}}>
            <View style={{height:134,width:108,backgroundColor:'white',borderRadius:20}}>
                <Text style={{fontSize:10,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:50}}>Taimoor Ali</Text>
                <Text style={{fontSize:13,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:15}}>MAC:0EF0110</Text>
            </View>
            <View style={{height:134,width:108,backgroundColor:'white',borderRadius:20}}>
                <Text style={{fontSize:10,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:50}}>Muhammad Azeem</Text>
                <Text style={{fontSize:13,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:15}}>MAC:100AEP</Text>
            </View>
            <View style={{height:134,width:108,backgroundColor:'white',borderRadius:20}}>
                <Text style={{fontSize:10,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:50}}>Talha Ansari</Text>
                <Text style={{fontSize:13,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:15}}>MAC:0019AE</Text>
            </View>
        </View>


        <View style={{flexDirection:'row',justifyContent:'space-evenly',top:130}}>
        <View style={{height:134,width:108,backgroundColor:'white',borderRadius:20}}>
            <Text style={{fontSize:10,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:50}}>Taimoor Ali</Text>
            <Text style={{fontSize:13,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:15}}>MAC:0EF0110</Text>
        </View>
        <View style={{height:134,width:108,backgroundColor:'white',borderRadius:20}}>
            <Text style={{fontSize:10,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:50}}>Muhammad Azeem</Text>
            <Text style={{fontSize:13,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:15}}>MAC:100AEP</Text>
        </View>
        <View style={{height:134,width:108,backgroundColor:'white',borderRadius:20}}>
            <Text style={{fontSize:10,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:50}}>Talha Ansari</Text>
            <Text style={{fontSize:13,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:15}}>MAC:0019AE</Text>
        </View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-evenly',top:160}}>
        <View style={{height:134,width:108,backgroundColor:'white',borderRadius:20}}>
            <Text style={{fontSize:10,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:50}}>Taimoor Ali</Text>
            <Text style={{fontSize:13,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:15}}>MAC:0EF0110</Text>
        </View>
        <View style={{height:134,width:108,backgroundColor:'white',borderRadius:20}}>
            <Text style={{fontSize:10,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:50}}>Muhammad Azeem</Text>
            <Text style={{fontSize:13,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:15}}>MAC:100AEP</Text>
        </View>
        <View style={{height:134,width:108,backgroundColor:'white',borderRadius:20}}>
            <Text style={{fontSize:10,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:50}}>Talha Ansari</Text>
            <Text style={{fontSize:13,flex:1,color:'black',alignSelf:'center',fontWeight:'bold',top:15}}>MAC:0019AE</Text>
        </View>
        </View>
    </View>
    );
};

export default Transaction;