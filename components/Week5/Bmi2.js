import React, { useState } from "react";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { Text, View, StyleSheet } from "react-native";

export default function Bmi2() {

    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));
    };




    return (


        <View>
            {/* ก้อนที่ 1 */}
            <View style={{ backgroundColor: 'white', padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 20 }}>weight (kg.)</Text>
                <TextInput
                    style={{ fontSize: 20 }}
                    keyboardType='numeric'
                    placeholder="Input your Weight ..."
                    value={weight}
                    onChangeText={(newWeight) => setWeight(newWeight)} />
            </View>
            {/* ก้อนที่ 2 */}
            <View style={{ backgroundColor: 'white', padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 20 }}>height (m.)</Text>
                <TextInput
                    style={{ fontSize: 20 }}
                    keyboardType='numeric'
                    placeholder="Input your Height ..."
                    value={height}
                    onChangeText={(newHeight) => setHeight(newHeight)}
                />
            </View>
            {/* ก้อนที่ 3 */}
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                {/* ซ้าย */}
                <View style={{ flex: 1, backgroundColor: 'white', marginRight: 10, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20,}}> { bmi }</Text>
                </View>
                {/* ขวา */}
                <View style={{ flex: 1, backgroundColor: 'red', marginLeft: 10, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Normal</Text>
                </View>
            </View>
            <Button title="Calculate" onPress={ onPressButton }  />
        </View>


    );
}
