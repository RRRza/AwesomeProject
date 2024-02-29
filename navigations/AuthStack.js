import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Week13/Welcome";
import Login from "../screens/Week13/Login";
import Register from "../screens/Week13/Register";
import Profile from "../screens/Week13/Profile";
import { AuthContext } from "../hooks/AuthContextProvider";

const Stack = createStackNavigator();

export default function AuthStack() {
    const {userToken, setUserToken} = useContext(AuthContext);
    // const userToken = "v8ACZSK7uDQeN4fh9hjEE2fpx8n5hOxjA9ZbyCKJ";

    if (userToken) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
            </Stack.Navigator>
        );
    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
                <Stack.Screen name="Register" component={Register} options={{ title: "Register" }} />
            </Stack.Navigator>
        );
    }
}