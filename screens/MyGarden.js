import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,

} from "react-native";


const MyGarden = ({ navigation }) => {


    return (
    
            <ImageBackground style={{width: '100%',
        height: '100%'}}
        source={require("../../../Android_ GrowthTracker_GROWTH TRACKER/Android_ GrowthTracker_GROWTH TRACKER/src/const/assets/picture/bg2.jpg")}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

             <SafeAreaView style={{ flex: 1,  }} >
                <ScrollView>
            
        <View style={style.wrapper}>
        <View style={style.header}>

        <View style={style.subheader}>
        <Text style={style.headerTitle}></Text>
        <Text style={{...style.headerTitle, fontSize: 20, paddingTop:8}}></Text>
      </View>

        
     
           
              
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate("Search")}

      >
        <Text style={{color: "white"}}>Add a Plants</Text>
      </TouchableOpacity>
          </View>
        </View>

            
           

       
    
            </ScrollView>
            </SafeAreaView>
            </ImageBackground>
        
    );
    }


const style = StyleSheet.create({
    button: {
        marginTop: "70%",
        alignItems: "center",
        backgroundColor: "#22483E", 
        padding: 10,
        borderRadius: 15,

      },
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
        paddingTop: "9%",
        paddingHorizontal: "2%"
       
      },
      spacer: {
        flex: 1,
      },
      subheader: {
        paddingHorizontal: "5%",
        marginTop: "-12%"
       
      },
      
});

export default MyGarden;