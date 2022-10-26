import { FlatList, StyleSheet, Text, View,Image,TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
const ViewRecipe = () => {
    // const [abc,setAbc]=useState()
  const dat = useSelector((state) => state);
  const dispatch=useDispatch()
  console.log(dat.length);
  const removeData=(abc)=>{
    console.log(abc);
    dispatch({type:"removeItem",payload:abc})
  }
  if(dat.length!=0){
    return (
        <View>
          <FlatList
            data={dat}
            renderItem={(item) => {
                
            //   console.log("abcddddddddddddddddddddd", item.item.image);
              return (
                <View style={styles.container}>
                  
                  <View
                    style={{
                      margin: 10,
                      backgroundColor: "#c3d9e8",
                      borderRadius: 10,
                      height: 250,
                      elevation: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      width:"80%"
                    }}
                  >
                    <Image
                      source={{ uri: item.item.image }}
                      style={{ height: 150, width: 250, borderRadius: 10 }}
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
                      <Text>{item.item.label}</Text>
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
                        onPress={() => removeData(item.item.label)}
                      >
                        <Text>remove</Text>
                      </TouchableHighlight>
                      
                    </View>
                    
                  </View>
                  
                </View>
              );
            }}
          />
        </View>
      );
  }
  else{
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:25,fontWeight:"bold",opacity:.7}}>Nothing to view</Text>
        </View>
    )
  }
   
  }
 
 


export default ViewRecipe;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
});
