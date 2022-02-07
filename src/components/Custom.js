// Import libraries for making a component
import React from 'react';
import { Image, Text, View,  } from 'react-native';
import { Images } from '../icons'

// Make a component
const Custom = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <View style={{ flex:5, flexDirection:'column',justifyContent:'space-between', alignItems:'flex-start'}}>
        <Text style={textStyle}>{props.title}</Text>
        <Text style={textStyle}>{props.nameTile}</Text>
        <Image source={Images.back_png} style={{ width: 22, height: 22,bottom:37, resizeMode: 'contain', tintColor:'white' }} />
      </View>
      <View style={{ flex:1, flexDirection:'row',justifyContent:'space-around', alignItems:'flex-start'}}>
        <Image source={Images.quest_png} style={{ width: 22, height: 22, resizeMode: 'contain', tintColor:'white' }} />
        {/* <Image source={Images.bell_png} style={{ width: 22, height: 22, resizeMode: 'contain',tintColor:'white' }} /> */}
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    top:60,
    flexDirection:'row',
    backgroundColor: '#000000',
    justifyContent: 'space-between',
    // alignItems:'center',
    padding:10,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 10,
  },
  textStyle: {
    fontSize: 20,
    color:'white'
  }
};

// Make the component available to other parts of the app
export { Custom };
