import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { Text, View, StyleSheet } from "react-native";

export default function Bmi2() {

    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [Proportion, SetProportion] = useState('NORMAL');

    console.log("STATE : ", weight, height, bmi, Proportion);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight / (height / 100 * height / 100));
        setBmi(output.toFixed(2));

        let description = "";
        if (output < 18.5)
            Description = "Underweight ";
        else if (output >= 18.5 && output <= 24.99)
            Description = "Normal ";
        else if (output >= 25 && output <= 29.99)
            Description = "Overweight ";
        else if (output >= 30 && output <= 35)
            Description = "Obese ";
        else
        description = "Extremely Obese ";
        SetProportion(description);

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
                    <Text style={{ fontSize: 20, }}>{bmi}</Text>
                </View>
                {/* ขวา */}
                <View style={{ flex: 1, backgroundColor: 'red', marginLeft: 10, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, }}>{Proportion}</Text>
                </View>
            </View>
            {/* <Button title="Calculate" onPress={onPressButton} /> */}

            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue, borderRadius:40 " }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}
