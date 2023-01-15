import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Tips1 = () => {
    const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>Kandungan Msg Micin Untuk Tanaman Cabe</Text>
            <Text style={{textAlign:"justify"}}>Agar dapat tumbuh dengan subur maka tanaman membutuhkan berbagai macam unsur hara  mulai dari unsur hara makro (N,P,K Mg, S) dan unsur hara mikro seperti Ca, B, Fe,Zn, Cl, Cu, Molybdenum dll.
                  Nah, salah satu unur hara makro yang berperan penting dalam menunjang pertumbuhan tanaman adalah unsur Kalium (K). 
                  Kalium diketahui memiliki manfaat untuk meningkatkan ketahanan tanaman terhaap peyakit, mengatur pembukaan dan penutupan stomata, meningkatkan fotosintesis dan metabolisme tanaman.
                  Menurut penelitian, unsur Natrium ternyata memiliki fungsi sebagai alternatif Kalium bagi tanaman. Jadi disini fungsi natrium hampir sama dengan Kalium. Padahal kita tahu bahwa kandungan utama micin adalah Natrium benzoat. Oleh karena itu dengan memberikan Micin pada tanaman tanaman akan menjadi subur.</Text>
                  <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>Bagaimana Cara Menggunakan Micin Sebagai Pupuk?</Text>
                  <Text style={{textAlign: "justify",}}>1. Jadi untuk memupukkan micin ini akan sangat mudah yaitu dengan cara melarutkannya dengan air. Berapakah takaran idealnya? Anda bisa mencoba sekitar 1-2 gram untuk 1 gelas (300cc) air. Jadi sekitar 5-6 gram micin per Liter.</Text>
                  <Text>2. Setelah tercampur maka larutan micin ini dikocorkan pada perakaran tanaman dengan dosis 50-100 cc per tanaman (disesuaikan dengan ukuran dan usia tanaman). Interval pengkocoran adalah 7 hari sekali dan sebaiknya tidak dilakukan bersama pupuk kimia lain agar anda bisa melihat hasilnya.</Text>
                  <Text>3. Larutan micin juga bisa disemprotkan dengan konsentrasi 1 gr/300cc lalu disemprotkan ke daun sekitar 5 hari sekali. Daun akan nampak lebih hijau terang dan lebar. Setelah tanaman tampak subur maka penggunaan pupuk micin ini bisa dihentikan dan diberi pupuk kompos saja (khusu tanaman hias).</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Tutup</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Tips/>
        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 65
  },
  modalView: {
    margin: 10,
    backgroundColor: "#87AB69",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "transparant",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
 
});

export default Tips1;