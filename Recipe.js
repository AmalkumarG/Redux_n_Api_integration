import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Recipe = (data) => {
    
   const dat = useSelector((state) => state);
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({});
  //   console.log("abcdefdddddddd", data.data.item.recipe.label);
  useEffect(() => {
    setRecipe(data.data.item.recipe);
  }, []);
  const addData = (recipe) => {
    {
       
        dat.includes(recipe)?alert("already added to cart"):
      (dispatch({ type: "ViewRecipe", payload: recipe })
      
      // console.log(dat.length,dat[3].label);
      
      )
    }
  };

 
  return (
    <View>
      <View
        style={{
          margin: 10,
          backgroundColor: "#c3d9e8",
          borderRadius: 10,
          height: 250,
          elevation: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: recipe.image }}
          style={{ height: 150, width: 150, borderRadius: 10 }}
        />
        <View
          style={{
            width: 150,
            marginTop: 5,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{recipe.label}</Text>
          <TouchableHighlight
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#91999e",
              elevation: 30,
              borderRadius: 10,
              marginTop: 10,
              height: 40,
              width: "80%",
            }}
            onPress={() => addData(recipe)}
          >
            <Text>Add to view</Text>
          </TouchableHighlight>
        </View>
      </View>
      
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({});
