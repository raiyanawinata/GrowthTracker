import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Dimensions,
  Text,
  Animated,
  Easing,
  Touchable,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Keyboard

} from "react-native";
import CalendarPicker from 'react-native-calendar-picker';
import Task from '../Component/Task';

import { Button } from "react-native-elements/dist";
import Search from "./Search";

import * as Calendar from 'expo-calendar';



  async function getDefaultCalendarSource() {
    const calendars = await Calendar.getCalendarsAsync(
      Calendar.EntityTypes.EVENT
    );
    const defaultCalendars = calendars.filter(
      (each) => each.source.name === 'Default'
    );
    return defaultCalendars.length
      ? defaultCalendars[0].source
      : calendars[0].source;
  }
  const addNewEvent = async () => {
    try {
      const calendarId = await createCalendar();
      
      const res = await Calendar.createEventAsync(calendarId, {
        endDate: getAppointementDate(startDate),
        startDate: getAppointementDate(startDate),
        title: 'Happy Birthday buddy ' + friendNameText,
      });
      Alert.alert('Event Created!');
    } catch (e) {
      console.log(e);
    }
  };
  
  async function createCalendar() {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
    return newCalendarID;
  }





const Reminder = ({ navigation }) => {

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [friendNameText, setFriendNameText] = useState(" ");
    const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD').toString() : '';
    
    useEffect(() => {
        (async () => {
          const { status } = await Calendar.requestCalendarPermissionsAsync();
          if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(
              Calendar.EntityTypes.EVENT
            );
            console.log('Here are all your calendars:');
            console.log({ calendars });
          }
        })();
      }, []);

      const [task, setTask] = useState();
      const [taskItems, setTaskItems] = useState([]);
    
      const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
      }
    
      const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
      }

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
        <Text style={style.sectionTitle}>Today's tasks</Text>
        <Text style={style.headerTitle}></Text>
        <Text style={{...style.headerTitle, fontSize: 20, paddingTop:8}}></Text>
      </View>

        
      <View style={style.container}>
      <CalendarPicker onDateChange={setSelectedStartDate} />
      <Text style={style.dateText}>Reminder: {startDate}</Text>
      <TextInput value={task} onChangeText={text => setTask(text)}

        placeholder="Enter Your Reminder"
        style={style.input}
      />
     
      <TouchableOpacity onPress={() => handleAddTask()}
        style={style.button}
        

      >
        <Text>Set a Reminder</Text>
      </TouchableOpacity>
      </View>

      </View>

        <View>
        <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={style.tasksWrapper}>
        
        <View style={style.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      </ScrollView>

          </View>
        </View>

            
           

       
    
            </ScrollView>
            </SafeAreaView>
            </ImageBackground>
        
    );
    }

    export default Reminder;

const style = StyleSheet.create({
    button: {
        marginTop: "5%",
        marginBottom: "5%",
        alignItems: "center",
        backgroundColor: "white", 
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
      headerTitle: {
        color:"#22483E", 
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "right",
        
      },

      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: "#22483E",
        borderRadius: 10,
        paddingBottom: 15
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        color: "white",
        borderColor: "#22483E"
      },
      dateText: {
        margin: 16,
        color: "grey"
      },

      tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        color: "#22483E",
        marginTop: "-2%",
       paddingHorizontal: "5%",
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#22483E",
        paddingTop: "5%",
        // justifyContent:"center",
        // alignContent:"center",
        // alignItems:"center",
        textAlign: "center"

        
      },
      items: {
        marginTop: "-8%",
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: "22483E"
      },
      input2: {
        paddingVertical: 15,
        marginBottom: "-20%",
        backgroundColor: '#"#22483E"',
        borderRadius: 15,
        borderColor: "#22483E",
        borderWidth: 1,
        width: 250,
       fontWeight: "bold",
       marginTop: 15
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#22483E',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#22483E',
        borderWidth: 1,
      },
      addText: {
        color: "#22483E"
      },
});

