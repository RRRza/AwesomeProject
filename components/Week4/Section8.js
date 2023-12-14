import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { TouchableOpacity } from "react-native";


const onPressButton = () => {
    console.log("Calculate button is pressed!!!");
};

export default function Section8() {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between',borderTopColor : 'gray',borderTopWidth: 1 ,marginHorizontal:20 }}>
           
            <View style={{flexDirection : 'column', paddingVertical: 15 }}>
                    <Text style={{ fontSize : 15 }}>Price</Text>
                    <Text style={{ fontSize : 20, color : 'red' }} > 399.99</Text>
                    <Text style={{ fontSize : 15 }}>AVG / Night</Text>
                   
                                  
            </View>
            <View style={{justifyContent : 'center'}}>
                
                <Button title="Book Now" onPress={onPressButton}>

                </Button>
            </View>
            
            
            

        </View>    
    );
}
