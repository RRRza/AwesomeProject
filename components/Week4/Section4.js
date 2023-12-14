import React from 'react';
import { View, Image, Text } from 'react-native';


export default function Section4() {
    return (
        <View style={{ borderTopWidth : 1, borderBottomWidth : 1 , marginVertical:20 , marginHorizontal : 20}}>
            <View style={{ paddingHorizontal : 10,marginVertical:10}}>
                <Text style={{ fontSize : 20 }}>Hotel Description</Text>
                <Text style={{ color : 'gray'}}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>    
    );
}
