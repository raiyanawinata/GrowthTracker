import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar, ScrollView } from 'react-native';
import HomeScreen from "../screens/Home";
import ReminderScreen from "../screens/AddToDo";
import GardenScreen from "../screens/MyGarden";
import SearchScreen from "../screens/Search";
import Tips1 from "../screens/Tips1";
import TipsCabe from "../src/const/Home/TipsCabe";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import TipsBunga from "../src/const/Home/TipsBunga";
import TipsNyiram from "../src/const/Home/TipsNyiram";
import TipsNanam from "../src/const/Home/TipsNanam";
import TipsKompos from "../src/const/Home/TipsKompos";
import Problem1 from "../src/const/Home/Problem1";
import Problem2 from "../src/const/Home/Problem2";
import Problem3 from "../src/const/Home/Problem3";
import Problem4 from "../src/const/Home/Problem4";
import Problem5 from "../src/const/Home/Problem5";
import AddToDo from "../screens/AddToDo";
import Reminder from "../screens/Reminder";
import Search from "../screens/Search";



import OnBoarding from "../screens/OnBoarding";



const Stack = createStackNavigator();

const ScreenOptionStyle = {
    headerStyle: {
        backgroundColor: '#22483E',
    },
    headerTintColor: '#FFFFFF',
    headerShown: true,
    headerBackTitle: " ",
    headerTitleAlign: 'center',
    
}






const HomeStackNavigator = () => {
    return (
       
        <Stack.Navigator
            screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="HomeStack" component={HomeScreen} options={{ title: "Growth Tracker" }}  />
            <Stack.Screen name="TipsCabe" component={TipsCabe} options={{ title: "" }}/>
            <Stack.Screen name="TipsBunga" component={TipsBunga} options={{ title: "" }}/>
            <Stack.Screen name="TipsNyiram" component={TipsNyiram} options={{ title: "" }}/>
            <Stack.Screen name="TipsNanam" component={TipsNanam} options={{ title: "" }}/>
            <Stack.Screen name="TipsKompos" component={TipsKompos} options={{ title: "" }}/>

            <Stack.Screen name="Problem1" component={Problem1} options={{ title: "" }}/>
            <Stack.Screen name="Problem2" component={Problem2}options={{ title: "" }}/>
            <Stack.Screen name="Problem3" component={Problem3}options={{ title: "" }}/>
            <Stack.Screen name="Problem4" component={Problem4}options={{ title: "" }}/>
            <Stack.Screen name="Problem5" component={Problem5}options={{ title: "" }}/>
        </Stack.Navigator>
        
    )
}
// const Reminder = () => {
//     const navigation = useNavigation();
//     return(
//         <SafeAreaView style={styles.container}>
//         <ReminderScreen />
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('addtodo')}
//         >
//           <Text style={styles.plus}>+</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     );
// }
// export default Reminder;

const ReminderStackNavigator = () => {
    return (
       
        <Stack.Navigator
            screenOptions={ScreenOptionStyle}>
                <Stack.Screen name="ReminderScreen" component={Reminder} options={{ title: "Reminder" }} />
            {/* <Stack.Screen name="addtodo" component={AddToDo} options={{ title: "Reminder" }} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ title: "" }} /> */}
        </Stack.Navigator>
     
    )
}


const GardenStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="MyGardenStack" component={GardenScreen} options={{ title: "My Garden" }} />
        </Stack.Navigator>
    )
}

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="SearchStack" component={Search} options={{ title: "Search " }} />
        </Stack.Navigator>
    )
}

// const TipsCabeStackNavigator = () => {
//     return(
//         <Stack.Navigator
//         screenOptions={ScreenOptionStyle}>
//             <Stack.Screen name="TipsCabeStack" component={TipsCabe}  />
//         </Stack.Navigator>
//     )
// }

export { HomeStackNavigator, ReminderStackNavigator, GardenStackNavigator, SearchStackNavigator, };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F8FA',
    },
    button: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: '#000',
      position: 'absolute',
      bottom: 50,
      right: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: .5,
      shadowRadius: 5,
      elevation: 5,
  },
  plus: {
      fontSize: 40,
      color: '#fff',
      position: 'absolute',
      top: -6,
      left: 9,
  }
  });