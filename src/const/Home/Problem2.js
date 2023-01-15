import React from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const Problem2 = ({ navigation }) =>{
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
        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Tanda Tanaman Kekurangan Sinar Matahari</Text>
  
            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>1. Tanaman berkaki panjang</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Kurangnya cahaya yang memadai dapat menyebabkan batang tanaman meregang secara ekstrem saat mereka mencari cahaya, menghasilkan versi tanaman menjadi kurus.
            Entah itu tanaman hias atau tanaman luar ruangan, batang yang tampak lebih panjang dengan daun lebih sedikit menandakan mereka membutuhkan lebih banyak cahaya.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>2. Tanaman miring</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Apakah tanaman hias indoor atau outdoor Anda tumbuh ke satu sisi atau sisi lain, bukannya lurus ke atas? Itu tanda tanaman kekurangan sinar matahari. Ketika tanaman bersandar ke sumber cahaya, ia mencoba menemukan cahaya yang dibutuhkannya untuk bertahan hidup. Akhirnya mungkin juga mengembangkan lebih sedikit daun dan batang lebih panjang.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>3. Daunnya berbeda</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Perubahan ukuran dan warna daun tanaman dapat menandakan kekurangan cahaya kritis. Untuk tanaman indoor dan outdoor, perhatikan daun yang mengecil atau terlihat pucat.  Tanaman semak, seperti dogwood beraneka ragam, membutuhkan sinar matahari agar bintik-bintik hijau dan berwarna krem berkembang di daun. Daun hijau solid menandakan masalah ringan.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>4. Tidak berbunga</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Beberapa tanaman dalam ruangan dipaksa untuk mekar. Tapi tanaman berbunga di luar ruangan seperti semak berbunga harusnya berbunga setiap tahun. Jika tanaman tidak berbunga, atau hanya menghasilkan beberapa bunga, kekurangan cahaya bisa menjadi penyebabnya.</Text>

            <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Cara Memberikan Lebih Banyak Cahaya Matahari ke Tanaman</Text>
            
            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>1. Ikuti pedoman </Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Tanaman dalam ruangan yang membutuhkan cahaya rendah mungkin cocok dengan jendela yang menghadap ke utara. Tanaman tahunan yang membutuhkan banyak sinar matahari langsung akan lebih baik menghadap matahari selatan atau barat.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>2. Pindahkan tanaman</Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Jika tanaman dalam ruangan Anda tampaknya berada di ruangan di mana mereka seharusnya mendapatkan cukup cahaya, tetapi mereka masih menderita, pindahkan mereka lebih dekat ke sumber cahaya. Tidak ada tempat untuk mengaturnya? Gantung mereka dari langit-langit dengan gantungan tanaman atau tinggikan dengan tegakan tanaman.
            Pilihan lain adalah berikan pencahayaan buatan. Lampu spektrum penuh dijual dalam berbagai konfigurasi, dari gaya klasik pencahayaan tabung panjang hingga lampu kontemporer.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>3.Ikuti matahari </Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Agar lebih mudah dipindahkan, letakkan tanaman hias atau tanaman teras di keranjang dengan pegangan atau di atas platform beroda.   Kemudian Anda dapat dengan mudah memindahkannya dari tempat yang cerah ke tempat yang cerah setiap hari. Atau pindahkan setiap beberapa hari untuk memberi mereka lebih banyak eksposur.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>4. Transplantsi </Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Transplantasi terkadang merupakan satu-satunya cara untuk memastikan tanaman mendapatkan cahaya yang dibutuhkannya.</Text>

            
                              
                  
                  </View>
                  </View>
                  </View>
        
                  </ScrollView>
            </ImageBackground>
     
    );
}

export default Problem2;
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