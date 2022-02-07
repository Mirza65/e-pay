import React from 'react'
import { View, Text, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { Header } from '../components/Header';
import { Images } from '../icons'
import ProgressCircle from 'react-native-progress-circle'


const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <ScrollView style={{flex:1}}>
            <StatusBar barStyle='light-content' />
            <Header title="E-Pay" nameTile="Hi! Azeem" />

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', top: 100, }}>
                <TouchableOpacity>
                <View style={{ width: 65, height: 65, backgroundColor: 'white', borderRadius: 100 / 2, alignItems: 'center', justifyContent: 'center' }}>

                     <Image
                        style={{ width: 30, height: 30, tintColor: 'black', }}
                        source={Images.bank_png}
                        resizeMode="contain"
                    />
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={{ width: 65, height: 65, backgroundColor: 'white', borderRadius: 100 / 2, alignItems: 'center', justifyContent: 'center' }}>

                    <Image
                        style={{ width: 30, height: 30, tintColor: 'black', }}
                        source={Images.moeny_png}
                        resizeMode="contain"
                    />
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                <View style={{ width: 65, height: 65, backgroundColor: 'white', borderRadius: 100 / 2, alignItems: 'center', justifyContent: 'center' }}>

                    <Image
                        style={{ width: 30, height: 30, tintColor: 'black', }}
                        source={Images.piggy_png}
                        resizeMode="contain"
                    />
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                <View style={{ width: 65, height: 65, backgroundColor: 'white', borderRadius: 100 / 2, alignItems: 'center', justifyContent: 'center' }}>

                    <Image
                        style={{ width: 30, height: 30, tintColor: 'black', }}
                        source={Images.dollar_png}
                        resizeMode="contain"
                    />
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={{ width: 65, height: 65, backgroundColor: 'white', borderRadius: 100 / 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 30, height: 30, tintColor: 'black', }}
                        source={Images.more_png}
                        resizeMode="contain"
                    />
                </View>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', top: 150 }}>
                <TouchableOpacity>
                <ProgressCircle
                    percent={25}
                    radius={120}
                    borderWidth={15}
                    color="black"
                    //shadowColor="#999"
                    bgColor="black"
                >
                    <Text style={{ fontSize: 18, color: 'white' }}>Balance 15000</Text>
                </ProgressCircle>
                </TouchableOpacity>
            </View>
            
            
            <View style={{ flexDirection: 'column', justifyContent: 'center', top: 150 }}>
                <TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 30, fontWeight:'bold' }}>P2P</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-evenly',top:180}}>
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
        </ScrollView>
        </View>
    );
};

export default Home;