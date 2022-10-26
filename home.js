import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import Recipe from "./Recipe";
import {  useSelector,useDispatch} from "react-redux";
import store from "./redux/store";

export default function Home({navigation}) {
  const setDat=useSelector(state=>state)
  
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=$pizza&app_id=73808ef1&app_key=31ef1f518d12d01167b589391f7d86de`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.hits);
      });

    console.log();
  }, []);

  // data.map((a)=>{console.log(a.recipe);})

  return (
   
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={(item) => <Recipe data={item} />}
        />
        <TouchableHighlight style={{height:40,width:200,justifyContent:"center",alignItems:"center",backgroundColor:"#6ea2eb",borderRadius:10,position:"absolute",bottom:0}} onPress={()=>navigation.navigate("Cart")}>
          <Text style={{fontSize:20,color:"white"}}>View recipes</Text>
        </TouchableHighlight>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
