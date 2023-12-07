import React from "react";
import { View } from "react-native";

import Heartbeat from "../../components/Week5/Heartbeat";
import Bmi2 from "../../components/Week5/Bmi2";
// import Bmi from "../../components/Week5/Bmi2";




export default function Health() {
    return (
        <View style={{ flex: 1 , backgroundColor : 'lightblue', justifyContent : "center", padding : 20 }}>
            <Bmi2  />
            <Heartbeat  />
        </View>
    );
}
