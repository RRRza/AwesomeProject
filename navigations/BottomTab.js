import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Week6/Home';
import Ant from '../screens/Week7/Ant';
import Bird from '../screens/Week7/Bird';

import { FontAwesome } from "@expo/vector-icons";
import Cat from '../screens/Week7/Cat';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: "หน้าหลัก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Ant"
                component={Ant}
                options={{
                    tabBarLabel: "มด",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="bug" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="Bird"
                component={Bird}
                options={{
                    tabBarLabel: "นก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="twitter" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="Cat"
                component={Cat}
                options={{
                    tabBarLabel: "เเมว",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="paw" color={color} size={size} />),
                }}
            />



            <Tab.Screen
                name="AuthStack"
                component={AuthStack}
                options={{
                    tabBarLabel: "บัญชี",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="user" color={color} size={size} />),
                    headerShown: false,
                }}
            />






        </Tab.Navigator>
    );



}
