import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Signup from '../../components/Week3/Signup';
import Card from '../../components/Week3/Card';


export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                <Text> Week 3 </Text>
                <Signup/>
                <Card />
            </View>
        </ScrollView>
    );
}
