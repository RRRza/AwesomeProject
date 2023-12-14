import React from 'react';
import { View, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';

export default function Section2() {
    return (
        <View style={{ flex: 1, marginTop: 20, backgroundColor: 'gray', justifyContent : 'center' , alignItems: 'center' , borderRadius : 10 , marginHorizontal : 20 , paddingVertical : 5,marginTop : -50}}>

            <Text style={{ fontSize: 20 }}>Hilton San Francisco</Text>
            <View style={{ flexDirection: 'row' , marginVertical : 5}}>
                <FontAwesome style={{ color: 'orange'  }} name='star' />
                <FontAwesome style={{ color: 'orange' }} name='star' />
                <FontAwesome style={{ color: 'orange' }} name='star' />
                <FontAwesome style={{ color: 'orange' }} name='star' />
                <FontAwesome style={{ color: 'orange' }} name='star-half' />
            </View>

            <Text style={{ fontSize: 10, textAlign: 'center' }}>Facilities provided may range from a modest quality mattress in a small room to large suite</Text>


        </View>
    );
}
