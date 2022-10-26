import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';

import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Recipe from "./Recipe";
import { Provider ,useSelector,useDispatch} from "react-redux";
import store from "./redux/store";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Home from "./home";
import ViewRecipe from "./viewRecipe";
const Mystack=createStackNavigator()
const Navig=()=>{
 return(
  <Mystack.Navigator>
  <Mystack.Screen name="Home" component={Home} />
  <Mystack.Screen name="Cart" component={ViewRecipe} />

</Mystack.Navigator>

 )
   
}
export default function App() {
 
  return (
   <Provider store={store}>
   <NavigationContainer>
   <Navig/>
   </NavigationContainer>
   
   </Provider>
  );
}
