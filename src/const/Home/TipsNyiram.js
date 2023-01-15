import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const TipsNyiram = ({ navigation }) =>{
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground 
        style={{ height: 335, }}
        source={require("../assets/picture/tips3.jpg")}
       >

            </ImageBackground>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            
            <View
            style={{
              backgroundColor: "white",
              marginTop: "-5%",
              paddingHorizontal: "5%",
              paddingTop: "5%",
            //   borderTopLeftRadius: 28,
            //   borderTopRightRadius: 28,
              paddingBottom: "50%",
              
            }}
          >
    
        <View>
        {/* <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Kandungan Msg Micin Untuk Tanaman Cabe</Text> */}
  
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Menyiram Tanaman Yang Benar</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>1. Kecukupan air yang benar</Text>
                  <Text style={{textAlign: "justify"}}>Tuangkan air secukupnya hingga mencapai akar tanaman. Hal ini agar tanaman memiliki cukup air.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>2. Beri air secara berkala</Text>
                  <Text style={{textAlign: "justify",}}>Pisahkan jenis tanaman yang perlu disiram rutin setiap hari, dan tanaman yang disiram secara berkala. Jika tanaman membutuhkan banyak air, maka sediakan wadah khusus disampingnya. Hal ini untuk menghindari tanah yang kering karena tidak baik bagi kesuburan tanaman.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>3. Ikuti musim</Text>
                  <Text style={{textAlign: "justify",}}>Kebutuhan pengairan akan berubah sesuai musim. Saat musim panas berarti lebih banyak air dibutuhkan untuk tanaman, sementara musim dingin dan hujan tidak memerlukan banyak penyiraman tanaman.</Text>
                
                  </View>
                  </View>
        
      

      </ScrollView>
      </SafeAreaView>
     
    );
}

export default TipsNyiram;


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