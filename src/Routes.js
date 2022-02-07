import { loadPartialConfig } from "@babel/core";
import { NavigationContainer } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import { View, Style, Text, TouchableOpactity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from "./Context";
import Home from "./screens/Home";
import Transaction from "./screens/Transaction";

const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();
const BottomTabsStack = ()=>{
    return (
      <Tab.Navigator screenOptions={{ headerShown: false,tabBarStyle: { position: 'absolute',backgroundColor:'white',borderRadius:80,height:70},tabBarShowLabel:false }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color='black' size={40} />
          ),
        }}/>
        <Tab.Screen name="Transaction" component={Transaction} options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-newspaper" color='black' size={40} />
          ),
        }} />
        <Tab.Screen name="QRcode" component={''} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode" color='black' size={40} />          
            ),
        }} />
        <Tab.Screen name="Profile" component={''} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color='black' size={40} />
          ),
        }} />
      </Tab.Navigator>
    );
  }
const AppStackScreens = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Home" component={BottomTabsStack} />
        </AppStack.Navigator>
    );
};

export default  AppNavigation = () => {

    const [isLoading, setisLoading] = useState(false)
    const authContext = useMemo(() => {
        loading: () => {
            setisLoading(true)
            setTimeout(() => {
                setisLoading(false)
            }, 2000)

        }
    })
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer style={{ backgroundColor: 'black' }}>
                <AppStackScreens /> 
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

