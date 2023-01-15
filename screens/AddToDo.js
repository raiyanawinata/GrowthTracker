// import * as React from 'react';
// import {View, TouchableOpacity, Text, StyleSheet, TextInput, Switch, TouchableWithoutFeedback, Keyboard, ImageBackground} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation} from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodoReducer } from '../redux/todosSlice';
// import * as Notifications from 'expo-notifications';
// import { StatusBar, SafeAreaView } from 'react-native';
// import OnBoarding from './OnBoarding';



// const AddToDo = ({ navigate }) => {

    
  
//     const [name, setName] = React.useState('');
//     const [date, setDate] = React.useState(new Date());
//     const [isToday, setIsToday] = React.useState(false);
//     const [withAlert, setWithAlert] = React.useState(false);
//     // const [listTodos, setListTodos] = React.useState([]);
//     const listTodos = useSelector(state => state.todos.todos);
//     const navigation = useNavigation();
//     const dispatch = useDispatch();

//     const addTodo = async () => {
        
//         const newTodo = {
//             id: Math.floor(Math.random() * 1000000),
//             text: name,
//             hour: isToday ? date.toISOString() : new Date(date).getTime() + 24 * 60 * 60 * 1000,
//             isToday: isToday,
//             isComplited: false
//         };
//         try {
//             await AsyncStorage.setItem('Todos', JSON.stringify([...listTodos, newTodo]));
//             dispatch(addTodoReducer(newTodo));
//             console.log('Todo saved correctly');
//             if(withAlert){
//                 await scheduleTodoNotification(newTodo);
//             }
//             navigation.goBack();
//         }
//         catch (e) {
//             console.log(e);
//         }
//     };

//     const scheduleTodoNotification = async (todo) => {
//         // set trigger time to todo.hour if todo.isToday === true else set trigger time to todo.hour + 24 hours
//         // const trigger = todo.isToday ? todo.hour : new Date(todo.hour).getTime() + 24 * 60 * 60 * 1000;
//         const trigger = new Date(todo.hour);
//         try {
//             await Notifications.scheduleNotificationAsync({
//                 content: {
//                     title: 'Alert! You have a task to do!',
//                     body: todo.text,
//                 },
//                 trigger,
//             });
//             console.log('Notification scheduled');
//         } catch (e) {
//             alert('The notification failed to schedule, make sure the hour is valid');
//         }
//     };
//     return (
    
//         <TouchableWithoutFeedback onPress={() => {  }}>
//             <ImageBackground style={styles.container} source={require(".././../Growthracker/src/const/assets/picture/bg2.jpg")}>
//             <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
//             <SafeAreaView style={{ flex: 1,  }} >
      
//         <Text style={styles.title}>Tambahkan Pengingat</Text>
//         <View style={styles.inputContainer}>
//             <Text style={styles.inputTitle}>Nama</Text>
//             <TextInput
//                 style={styles.textInput}
//                 placeholder="Masukkan Kegiatan"
//                 placeholderTextColor="green"
//                 onChangeText={(text) => {setName(text)}} 
//             /> 
//         </View>        
//         <View style={styles.inputContainer}>
//             <Text style={styles.inputTitle}>Jam</Text>
//             <DateTimePicker
//             value={date}
//             mode={'time'}
//             is24Hour={true}
//             onChange={(event, selectedDate) => setDate(selectedDate)}
//             style={{width: '80%'}}
//             />
//         </View>
//         <View style={[styles.inputContainer, {paddingBottom: 0, alignItems: 'center'}]}>
//             <View>
//                 <Text style={styles.inputTitle}>Hari ini</Text>
//                 <Text style={{color: 'green', fontSize: 12, maxWidth: '84%', paddingBottom: 10}}>Jika kamu menonaktifkan hari ini, tugas akan dianggap sebagai besok.</Text>
//             </View>
//             <Switch
//                 value={isToday}
//                 onValueChange={(value) => { setIsToday(value) }}
//             />
//         </View>
//         <View style={[styles.inputContainer, {paddingBottom: 0, alignItems: 'center'}]}>
//             <View>
//                 <Text style={styles.inputTitle}>Peringatan</Text>
//                 <Text style={{color: 'green', fontSize: 12, maxWidth: '85%'}}>Anda akan menerima peringatan pada waktu yang anda tetapkan untuk pengingat.</Text>
//             </View>
//         <Switch
//                 value={withAlert}
//                 onValueChange={(value) => { setWithAlert(value) }}
//             />
//         </View>
        
//         <TouchableOpacity onPress={addTodo} style={styles.button}>
//             <Text style={{color: 'white'}}>Selesai</Text>
//         </TouchableOpacity>
        
//         </SafeAreaView>
//         </ImageBackground>
//         </TouchableWithoutFeedback>
        
// );
// }
// export default AddToDo;
// const styles = StyleSheet.create({
// title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 35,
//     color:"#22483E",
//     justifyContent:"center",
//     paddingLeft: "25%",
//     marginTop: 10,
// },
// textInput: {
//     borderBottomColor: '#22483E',
//     borderBottomWidth: 0.5,
//     color:"#22483E",
//     width: '80%',
//     paddingLeft: "5%",
//     marginLeft: "5%",
//     textAlign: "center"
// },
// container: {
//     flex: 1,
//     width: '100%',
//         height: '100%',
//     // backgroundColor: "#22483E",
//     // paddingHorizontal: 30,
// },
// inputTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     // lineHeight: 24,
//     color: "#22483E"
// },
// inputContainer: {
//     justifyContent: 'space-between', 
//     flexDirection: 'row', 
//     paddingBottom: 30,
//     paddingLeft: "5%",
// },
// button: {
//     marginTop: 30,
//     marginBottom: 15,
//     marginLeft: "5%",
//     marginRight: "5%",
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: "#22483E",
//     height: 36,
//     borderRadius: 10,
// }
// });

