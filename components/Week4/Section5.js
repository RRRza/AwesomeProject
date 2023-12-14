import React from 'react';
import { View, Image, Text ,Style} from 'react-native';
import {MyIcon} from'@expo/vector-icons';
import {FontAwesome} from'@expo/vector-icons';

export default function Section5() {
    return (
        <View style={{flex: 1, marginTop: 20 }}>
            
            <View style={{ flexDirection: 'row',justifyContent:'space-around'}}>
                <FontAwesome style={{ color: 'orange'  }} name='wifi' size={20}/>
                <FontAwesome style={{ color: 'orange' }} name='heart' size={20}/>
                <FontAwesome style={{ color: 'orange' }} name='bath' size={20}/>
                <FontAwesome style={{ color: 'orange' }} name='car' size={20}/>
                <FontAwesome style={{ color: 'orange' }} name='paw' size={20}/>
            </View>
        </View>
          
    );
}
