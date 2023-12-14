import React from 'react';
import { View, Image, Text } from 'react-native';


export default function Section6() {
    return (
        <View style={{ flexDirection:'column',borderBottomWidth:1 ,borderTopWidth:1, marginHorizontal : 20 , marginVertical : 20}}>
            <Text style={{ fontSize: 20 }}>Location</Text>
            <Text style={{ fontSize: 13 }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et… </Text>


            <View style={{ flexDirection :'row',justifyContent : 'center' , alignItems: 'center' , borderRadius : 10 , marginHorizontal : 15 , paddingVertical : 5,marginTop : -10}}>
                <Image style={{ flex : 1, resizeMode : 'contain', aspectRatio : 16/9 }} source={require('../../assets/Week3/map.jpg') } />
            </View>
            

        </View>    
    );
}
