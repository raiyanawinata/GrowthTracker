import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const TipsBunga = ({ navigation }) =>{
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground 
        style={{ height: 335, marginTop: -15 }}
        source={require("../assets/picture/tips2.jpg")}
       >
          
        
            <View style={style.header2}></View>
            </ImageBackground>
            
            <View
            style={{
              backgroundColor: "white",
              marginTop: "-5%",
              paddingHorizontal: "5%",
              paddingTop: "5%",
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              paddingBottom: "10%",
            }}
          >
    
        <View>
        {/* <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Kandungan Msg Micin Untuk Tanaman Cabe</Text> */}
  
            <Text style={{textAlign:"justify"}}>Menanam Bunga didalam pot jika tidak dilakukan dengan benar akan menyebabkan bunga atau tanaman layu
            bahkan mati. Oleh karena itu GrowthTracker akan berbagi cara tepat menanam bunga didalam pot
            agar tetap tumbuh subur dan sehat.</Text>
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Cara Menanam Tanaman didalam Pot</Text>
                  <Text style={{textAlign: "justify"}}>1. Ukuran pot harus sesuai dengan ukuran tanaman</Text>
                  <Text style={{textAlign: "justify"}}>2. Pot harus dipastikan berlubang di bagian bawah, agar tidak terjadi genangan saat penyiraman.
                    Air yang tergenang menyebabkan akar membusuk</Text>
                  <Text style={{textAlign: "justify",}}>3. Media tanam harus memiliki kemampuan mengikat air dalam waktu lama. Gunakan sabut kelapa sebagai salah satu media 
                  tanamannya agar air terikat di dalam pot</Text>
                  <Text style={{textAlign: "justify",}}>4. Tambahkan pecahan genting atau keramik dibagian dasar pot.</Text>
                  <Text style={{textAlign: "justify",}}>5. Saat memindahkan tanaman, pastikan media tanam yang ada di dalam polibag tidak dibuang,
                  tapi masukan langsung ke dalam pot</Text>
                  <Text style={{textAlign: "justify",}}>6. Tambahkan pupuk kompos</Text>
                  <Text style={{textAlign: "justify",}}>7. Susun media tanam di awali oleh pecahan genting, kemudian sabut kelapa, kemudian kompos, kemudian tanaman, kemudian ditambahkan lagi pupuk diatasnya.</Text>
                  <Text style={{textAlign: "justify",}}>8. Lakukan penyiraman secara merata</Text>
                  <Text style={{textAlign: "justify",}}>9. Penanaman tanaman sebaiknya pagi hari dan jangan langsung terkena sinar matahri yang menyengat, dikhawatirkan belum siap sehingga menjadi layu.</Text>                 
                  </View>
                  </View>
        
      

      </ScrollView>
      </SafeAreaView>
     
    );
}

export default TipsBunga;


const style = StyleSheet.create({
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