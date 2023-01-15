import React from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const Problem4 = ({ navigation }) =>{
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

        <View>
        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Apa yang terjadi pada tanaman yang terlalu banyak air?</Text>
        <Text style={{textAlign: "justify", fontSize: 12}}>Saat kamu menyirami tanaman dengan air yang berlebihan, tanaman tidak dapat bertukar gas dengan baik atau menyerap semua nutrisi yang dibutuhkannya. Proses ini dikenal sebagai asfiksia akar. Akibat lain dari kelebihan air dan kekurangan oksigenasi adalah jamur dapat memengaruhi akar tanaman. Masalah dalam kasus ini adalah biasanya tidak terdeteksi untuk waktu yang lama. Dan pada saat terdeteksi, tidak ada fungisida terbaik yang dapat menyelamatkan tanaman.</Text>

            <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Gejala yang perlu di waspadai</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>1. Tidak ada tunas baru yang muncul.</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>2. Tanaman layu</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>3. Daunnya tumbuh sangat lama</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>4. Muncul warna kekuningan atau kecoklatan</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>5. Beberapa daun dan bunga rontok</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>6. Lapisan bawah tanah tampak padat dan bisa berubah menjadi kehijauan</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>7. Pangkal batang menyempit</Text>

            <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Cara menyelamatkan tanaman yang terlalu banyak air</Text>
        

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>1. Keringkan tanaman </Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Untuk melakukan ini, kamu harus mengeluarkan tanamanmu dari pot dan membuang semua lapisan tanah yang menempel di akarnya. Biarkan mengering selama sekitar 12 jam. Dengan cara ini, tanamanmu bisa bernafas.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>2. Periksa keadaan akarnya </Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Setelah mengurangi kelembaban berlebih, kamu akan bisa memeriksa kondisi akarnya. Ini adalah kuncinya, karena tanamanmu akan atau tidak akan dapat terus hidup tergantung pada keadaannya. Jika akarnya putih, kamu beruntung karena mereka masih sehat. Sebaliknya, jika kamu menemukan akar hitam atau sudah mulai membusuk, kamu harus memangkasnya sebelum menanamnya kembali. Dalam hal ini, direkomendasikan penanaman kembali di pot lain, karena pot lama mungkin memiliki jamur. Tetapi jika kamu sangat menyukai pot lama, cuci dan desinfektan sebelum ditanam untuk memastikannya benar-benar bebas jamur.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>3. Saatnya transplantasi </Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Dalam hal menyelamatkan tanaman yang kelebihan air, kamu perlu memberinya kesempatan hidup baru. Untuk hal ini, tanaman harus memiliki ruang yang kaya nutrisi. Gunakan subsoil (lapisan tanah) yang bagus agar tanaman bisa tumbuh dengan baik. Jangan lupa pastikan pot yang kamu pilih memiliki lubang drainase. Dengan cara ini, kamu bisa mencegah genangan air. Tanaman harus bisa menghilangkan kelebihan air. Tips yang baik adalah menghindari penggunaan kompos atau pupuk. Ingatlah bahwa akarnya sensitif dan bisa rusak oleh semua nutrisi yang dikandung produk ini.</Text>

            
                              
                  
                  </View>
                  </View>
                  </View>
        
                  </ScrollView>
            </ImageBackground>
     
    );
}

export default Problem4;
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
 
});