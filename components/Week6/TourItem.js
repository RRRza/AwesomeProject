import React from "react";
import { Image, Text, View, Dimensions } from "react-native";

export default function TourItem(props) {
    return (
        <View style={{ marginRight: 10 }}>
            <Image style={{  }} source={{ uri : props.item.uri }} />
            <View style={{ }}>
                <Text style={{ fontSize:20 }}>{props.item.title}</Text>
            </View>

        </View>
    );
}
