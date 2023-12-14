import React from 'react';
import { View, Image, Text } from 'react-native';


export default function Section1() {
    return (
        <View style={{ }}>
          
            <View style={{ flexDirection :'row'}}>
                <Image style={{ flex : 1, resizeMode : 'cover', aspectRatio : 16/9 }} source={require('../../assets/Week3/room-6.jpg')} />
            </View>

        </View>    
    );
}
