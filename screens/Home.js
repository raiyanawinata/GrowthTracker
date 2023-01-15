import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tips from "../src/const/Home/Tips";
import Header from "../src/Home/Header";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import Problems from "../src/const/Home/Problems";



const HomeScreen = ({ navigation }) => {
    return (
    
            <ImageBackground style={{width: '100%',
        height: '100%'}}
        source={require("../../../Android_ GrowthTracker_GROWTH TRACKER/Android_ GrowthTracker_GROWTH TRACKER/src/const/assets/picture/bg2.jpg")}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

             <SafeAreaView style={{ flex: 1,  }} >
                <ScrollView>
            
        <View style={style.wrapper}>
        <View style={style.header}>
            <Text style={style.p}>Tips And Trik!</Text>
            <Text style={style.p2}>Explore</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         <View
        style={{
        
          justifyContent: "center",
          alignItems:"flex-end",
          marginTop: "1%",
          paddingTop: "3%",
          marginHorizontal: 3,
        }}
      >
        
            <View style={{paddingTop: 5, alignItems: "flex-start", paddingHorizontal: "-3%"}}>
            <Tips/>
          
            </View>
            
            </View>
            </ScrollView>

            <View
        style={{
        //   flexDirection: "row",
          justifyContent: "center",
          alignItems:"flex-end",
          marginTop: "5%",
          paddingTop: "4%",
          marginHorizontal: 3,
        }}
      >
        <Text style={style.p}>Common Problems</Text>
            <Text style={style.p2}>Explore</Text>
        </View>

        <View
        style={{
        //   flexDirection: "row",
          justifyContent: "center",
          marginTop: "2%",
          paddingTop: "3%",
          marginHorizontal: 3,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{paddingTop: 5, alignItems: "flex-start", paddingHorizontal: "-3%"}}>
            <Problems />
        </View>
       
        </ScrollView>
           
            <View style={style.spacer} />
            </View>
            </View>
            </ScrollView>
            </SafeAreaView>
            </ImageBackground>
        
    );
    }


const style = StyleSheet.create({
    p: {
        fontSize: 20, 
        fontWeight:"bold", 
        color:"#22483E", 
        paddingHorizontal:15, 
        textAlign:"left"
    },
    p2: {
        textAlign: "left", 
        fontSize: 25, 
        fontWeight:"bold", 
        color:"#22483E", 
        paddingHorizontal:15
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    wrapper: {
        flex: 1,
        padding: 5,
      },
      header: {
        paddingTop: "1%",
        paddingHorizontal: "5%"
       
      },
      spacer: {
        flex: 1,
      },
});

export default HomeScreen;