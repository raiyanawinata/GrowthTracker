import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const TipsCabe = ({ navigation }) =>{
    return (
      
        <ImageBackground 
        style={style.header}
        source={require("../../const/assets/picture/bg2.jpg")}
       >
        <ScrollView showsVerticalScrollIndicator={false}>
          

          <View style={style.wrapper}>
          {/* <View style={style.header}>
          <Text style={style.p}>Tips And Trik!</Text>
          <Text style={style.p2}>Explore</Text>
          </View> */}
          
            
            <View
            style={{
              backgroundColor: "white",
              marginTop: "-25%",
              marginBottom: "25%",
              paddingHorizontal: "5%",
              paddingTop: "5%",
              borderRadius: 28,
              paddingBottom: "10%",
            }}
          >
  
        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Kandungan Msg Micin Untuk Tanaman Cabe</Text>
        
        
        
            <Text style={{textAlign:"justify"}}>Agar dapat tumbuh dengan subur maka tanaman membutuhkan berbagai macam unsur hara  mulai dari unsur hara makro (N,P,K Mg, S) dan unsur hara mikro seperti Ca, B, Fe,Zn, Cl, Cu, Molybdenum dll.
                  Nah, salah satu unur hara makro yang berperan penting dalam menunjang pertumbuhan tanaman adalah unsur Kalium (K). 
                  Kalium diketahui memiliki manfaat untuk meningkatkan ketahanan tanaman terhaap peyakit, mengatur pembukaan dan penutupan stomata, meningkatkan fotosintesis dan metabolisme tanaman.
                  Menurut penelitian, unsur Natrium ternyata memiliki fungsi sebagai alternatif Kalium bagi tanaman. Jadi disini fungsi natrium hampir sama dengan Kalium. Padahal kita tahu bahwa kandungan utama micin adalah Natrium benzoat. Oleh karena itu dengan memberikan Micin pada tanaman tanaman akan menjadi subur.</Text>
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Bagaimana Cara Menggunakan Micin Sebagai Pupuk?</Text>
                  <Text style={{textAlign: "justify",}}>1. Jadi untuk memupukkan micin ini akan sangat mudah yaitu dengan cara melarutkannya dengan air. Berapakah takaran idealnya? Anda bisa mencoba sekitar 1-2 gram untuk 1 gelas (300cc) air. Jadi sekitar 5-6 gram micin per Liter.</Text>
                  <Text>2. Setelah tercampur maka larutan micin ini dikocorkan pada perakaran tanaman dengan dosis 50-100 cc per tanaman (disesuaikan dengan ukuran dan usia tanaman). Interval pengkocoran adalah 7 hari sekali dan sebaiknya tidak dilakukan bersama pupuk kimia lain agar anda bisa melihat hasilnya.</Text>
                  <Text>3. Larutan micin juga bisa disemprotkan dengan konsentrasi 1 gr/300cc lalu disemprotkan ke daun sekitar 5 hari sekali. Daun akan nampak lebih hijau terang dan lebar. Setelah tanaman tampak subur maka penggunaan pupuk micin ini bisa dihentikan dan diberi pupuk kompos saja (khusu tanaman hias).</Text>
                  
                  </View>
            </View>
            
            </ScrollView>
            </ImageBackground>
            
            
     
    );
}

export default TipsCabe;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 5,
    marginTop: windowHeight * 0.2,
  },
  header: {
    width: windowWidth,
    height: windowHeight ,
    paddingHorizontal: 30,
    paddingTop: 10,
  },

  header2: {
    marginTop: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    top: "5%",
    paddingVertical: "10%",
    flex: 0.3,
  },
});