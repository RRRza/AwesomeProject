import React from 'react';
import { View, Image, Text } from 'react-native';


export default function Section7() {
    return (
        <View style={{ marginHorizontal: 20,}}>

            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 20 }}>Room Type</Text>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                <Image style={{ width: 80, height: 110 }} source={require('../../assets/Week3/room-8.jpg')} />

                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <Text style={{ fontSize: 20,color: 'red',paddingTop : 25 }}>$399.99</Text>
                    <Text style={{ fontSize: 15, color: 'cyan' ,}}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}
