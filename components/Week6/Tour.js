import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
    return (
        <View>
            <Text style={{ fontSize: 20, paddingHorizontal: 25 }}>Tour</Text>
            <Text style={{ color: 'gray', marginVertical: 5, paddingHorizontal: 25 }}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', paddingHorizontal:20 }}>
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 250, height: 150, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }} />
                        <View style={{ backgroundColor: "black", width: 250, height: 50, opacity: 0.5, padding: 10, marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: "white", }}>Tour in somwhere</Text>
                        </View>

                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 250, height: 150, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }} />
                        <View style={{ backgroundColor: "black", width: 250, height: 50, opacity: 0.5, padding: 10, marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: "white", }}>Tour in somwhere</Text>
                        </View>

                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 250, height: 150, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }} />
                        <View style={{ backgroundColor: "black", width: 250, height: 50, opacity: 0.5, padding: 10, marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: "white", }}>Tour in somwhere</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
