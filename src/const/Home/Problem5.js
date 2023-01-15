import React from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const Problem5 = ({ navigation }) =>{
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
        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Pengaruh suhu pada pertumbuhan tanaman</Text>
        <Text style={{textAlign: "justify", fontSize: 12}}>Suhu yang dibutuhkan dalam pertumbuhan dan perkembangan tanaman dikenal sebagai suhu kerdinal yaitu meliputi suhu optimum, suhu minimum dan suhu maksimum.
        Suhu kardinal berbeda-beda tergantung pada jenis tanamannya. Suhu di bawah batas maksimum atau di atas optimum tidak baik untuk tanaman, keadaan ini disebut suhu ekstrim.</Text>
  

        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Suhu Optimum</Text>
        <Text style={{textAlign: "justify", fontSize: 12}}>Batas suhu yang membantu pertumbuhan dan perkembangan tanaman diketahui sebagai suhu optimum. Pada batas ini semua proses dalam perkembangan dan pertumbuhan tanaman akan berjalan baik dari segi morfologi maupun fisiologinya.
        Tanaman yang menghendaki batas suhu optimum yang rendah (tanaman musim dingin), yaitu tanaman yang tumbuh baik pada suhu 45-600F. Sedangkan, tanaman yang menghendaki batas suhu optimum yang tinggi (musim panas), yaitu tanaman yang tumbuh baik pada suhu antara 600F sampai 750F</Text>
            
        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Batas suhu yang merugikan</Text>
            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>1. Respirasi </Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Terjadinya proses respirasi dan absobsi air yang tinggi sehingga terjadi proses-proses perombakan protein dan terhambatnya kinerja enzim (denaturasi).</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>2. Terganggunya pembentukan sel generatif </Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Terjadi karena rusaknya pembelahan sel secara mitosis sehingga biji akan mandul atau kosong.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E"}}>3. Terjadinya translokasi </Text>
            <Text style={{textAlign: "justify", fontSize: 12}}>Terganggunya proses pengangkutan dan penyebarann assimilat (hasil fotosintesis) dari sumber fotosintesis ke bagian-bagian tanaman yang menggunakan atau menyimpan cadangan makanan seperti : buah, batang dan umbi.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E", marginBottom:10}}>4. Terjadinya mutasi gen akibat adanaya suhu yang terlalu tinggi yang menyebabkan berubahnya susunan genetik tanaman atau adanya sinar gamma. </Text>
           

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E", marginBottom:10}}>5. Tanaman kekurangan unsur hara, karena suhu tinggi dapat mengganggu perombakan-perombakan senyawa-senyawa penting bagi tanaman. </Text>
            
            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E", marginBottom:10}}>6. Tanaman menjadi layu akibat suhu yang tinggi sehingga absorbsi air yang rendah dan tingginya evapotranspirasi. </Text>
           
            
                              
                  
                  </View>
                  </View>
                  </View>
        
                  </ScrollView>
            </ImageBackground>
     
    );
}

export default Problem5;
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