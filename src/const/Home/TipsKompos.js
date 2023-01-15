import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const TipsKompos = ({ navigation }) =>{
    return (
        
        <ImageBackground 
        style={{ height: 335, marginTop: -15 }}
        source={require("../../const/assets/picture/tips5.jpg")}
       >
        

          <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

          <SafeAreaView style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>

            
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
        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Membuat Kompos dari Sampah Organik</Text>
  
            <Text style={{textAlign:"justify"}}>Bahan organik yang dimaksud pada pengertian kompos adalah rumput, jerami, sisa ranting dan dahan, kotoran hewan, bunga yang rontok, air kencing hewan ternak, 
            serta bahan organik lainnya. Semua bahan organik tersebut akan mengalami pelapukan yang diakibatkan oleh mikroorganisme yang tumbuh subur pada lingkungan lembap dan basah. Keuntungan yang diberikan kompos tidak hanya untuk saat ini, tetapi untuk jangka panjang hingga berpuluh-puluh tahun kemudian. Saat ini sudah banyak masyarakat yang mulai beralih untuk menggunakan pupuk organik, salah satunya adalah kompos. Karena menggunakan bahan organik yang sudah dianggap sampah, harga pupuk kompos pun relatif murah.
            </Text>
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Sampah yang Bisa dan Tak Bisa Dijadikan Pupus Kompos</Text>
                  <Text style={{textAlign: "justify",}}>1. Sampah sisa makanan mulai dari sayur-sayuran hingga daging busuk</Text>
                  <Text>2. Kertas bekas maupun tisu yang sudah tak terpakai lagi</Text>
                  <Text>3. Dedaunan serta rumput</Text>
                  <Text>4. Potongan kayu</Text>
                  <Text>5. Bumbu dapur kedaluwarsa</Text>
                  <Text>6. Bulu hewan yang rontok</Text>
                  <Text>7. Debu dari belakang lemari es</Text>
                  <Text>8. Kotoran hewan peliharaan</Text>

                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Cara Membuat Pupuk Kompos dari Sampah Organik Rumah Tangga</Text>
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 18}}>Alat Membuat Pupuk Kompos</Text>
                  <Text>1. Wadah berukuran besar dengan penutup (tong atau ember)</Text>
                  <Text>2. Sarung tangan</Text>
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 18}}>Bahan Membuat Pupuk Kompos</Text>
                  <Text>1. Sampah rumah tangga (bisa sisa makanan atau bekas sayuran) </Text>
                  <Text>2. Tanah</Text>
                  <Text>3. Air secukupnya</Text>
                  <Text>4. Arang sekam</Text>
                  <Text>5. Kapur</Text>
                  <Text>6. Cairan pupuk EM4 sebagai tambahan</Text>
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 18}}>Langkah Membuat Pupuk Kompos</Text>
                  <Text style={{textAlign:"justify"}}>1. Siapkan sampah rumah tangga yang akan diolah menjadi pupuk kompos.</Text>
                  <Text style={{textAlign:"justify"}}>2. Pisahkan sampah organik (sisa makanan/dedaunan) dengan sampah plastik. Sampah organiklah yang nantinya akan digunakan sebagai pupuk kompos.</Text>
                  <Text style={{textAlign:"justify"}}>3. Siapkan wadah berukuran besar untuk membuat pupuk kompos. Jangan lupa bahwa wadah harus dilengkapi dengan penutup agar pupuk yang dibuat tidak akan terkontaminasi.</Text>
                  <Text style={{textAlign:"justify"}}>4. Masukkan tanah secukupnya ke dalam wadah yang telah diisi dengan sampah organik. Ketebalannya bisa kamu sesuaikan dengan wadah dan banyaknya sampah organik.</Text>
                  <Text style={{textAlign:"justify"}}>5. Siram permukaan tanah tersebut menggunakan air secukupnya.</Text>
                  <Text style={{textAlign:"justify"}}>6. Masukkan sampah organik yang telah dicampur arang sekam(optional) dan kapur pertanian ke dalam wadah.</Text>
                  <Text style={{textAlign:"justify"}}>7. Pastikan sampah disimpan secara merata. Sebisa mungkin ketebalan sampah setara dengan ketebalan tanah</Text>
                  <Text style={{textAlign:"justify"}}>8. Siram dengan air yang telah bercampur EM4</Text>
                  <Text style={{textAlign:"justify"}}>9. Masukkan lagi tanah ke dalam wadah. Kali ini tanah berperan sebagai penutup sampah.</Text>
                  <Text style={{textAlign:"justify"}}>10. Tutup wadah dengan rapat dan biarkan sekitar tiga minggu.</Text>

                  </View>
                  </View>
        
      

      </ScrollView>
      </SafeAreaView>
      </ImageBackground>
     
    );
}

export default TipsKompos;


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