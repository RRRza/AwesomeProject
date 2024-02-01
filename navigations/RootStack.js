import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";

import Travel from "../screens/Week3/Travel";
import Resort from "../screens/Week4/Resort";
import Health from "../screens/Week5/Health";
import PokemonTab from "./PokemonTab";
import Book from "../screens/Week9/Book";
import TodoList from "../screens/Week9/TodoList";
import BookDetail from "../screens/Week9/BookDetail";
import BookForm from "../screens/Week9/BookForm";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title: "Pokemon World" }} />
      <Stack.Screen name="Travel" component={Travel} options={{ title: "Travel" }} />
      <Stack.Screen name="Resort" component={Resort} options={{ title: "Resort" }} />
      <Stack.Screen name="Health" component={Health} options={{ title: "Health" }} />
      <Stack.Screen name="Book" component={Book} options={{ title: "Book" }} />
      <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: "Book Detail" }} />
      <Stack.Screen name="BookForm" component={BookForm} />
      <Stack.Screen name="TodoList" component={TodoList} />
    </Stack.Navigator>
  );
}