import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeStackNavigator, ReminderStackNavigator, GardenStackNavigator, SearchStackNavigator } from "./StackNavigator";

const homeName = 'Home';
const searchName = 'Search';
const gardenName = 'My Garden';
const reminderName = 'Reminder';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === gardenName) {
                        iconName = focused ? 'leaf' : 'leaf-outline'
                    } else if (rn === searchName) {
                        iconName = focused ? 'search' : 'search-outline'
                    } else if (rn === reminderName) {
                        iconName = focused ? 'water' : 'water-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#22483E',
                tabBarInactiveTintColor: '#22483E',
                headerShown: false,
                unmountOnBlur: true,
            })}>
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Search" component={SearchStackNavigator} />
            <Tab.Screen name="Reminder" component={ReminderStackNavigator} />
            <Tab.Screen name="My Garden" component={GardenStackNavigator} />
        </Tab.Navigator>
    )
}

export default MainTabNavigator;