import React from 'react';
import { View, Image, Text } from 'react-native';


export default function Section3() {
    return (
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <View style={{ width: 50, height: 50, borderRadius: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', marginHorizontal: 20 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>9.5</Text>
            </View>
            <View style={{ marginHorizontal: -15 }}>
                <Text style={{ fontSize: 20, color: 'orange' }}>Excellent</Text>
                <Text style={{ color: 'black' }}>See 801 reviews</Text>
            </View>
        </View>
    );
}
