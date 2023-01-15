import React from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const Problem3 = ({ navigation }) =>{
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
        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Pola Penuaan</Text>
        <Text style={{textAlign: "justify", fontSize: 12}}>Penuaan (senescence) dapat diartikan sebagai proses menuju tua yang terprogram dan mengarah kematian. Penuaan terjadi bisa untuk penyembuhan, pembuangan bagian yang terserang penyakit, terluka dan lain-lain. Pola penuaan bisa menyeluruh pada tanaman semusim, baik pada bagian atas tanaman saja, herba tahunan, tumbuhan yang mengugurkan daun, maupun tanaman berkayu yang gugur tiap tahun. Ada pula yang bersifat progresif dan adaptif dimana beberapa daun gugur akibat faktor lingkungan seperti suhu, kekeringan, dan kekurangan hara.</Text>
  
        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20, marginBottom:5}}>Tipe-tipe penuaan (senescence) yang dijumpai dalam tumbuhan</Text>
            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E",marginBottom:5}}>1. Senescence yang meliputi keseluruhan tubuh tanaman (overall senescence).</Text>
            <Text style={{textAlign: "justify", fontSize: 12, marginBottom:5}}>Akar dan bagian tanaman di atas tanah mati semua. Tanaman mati sesudah menyelesaikan semua satu siklus kehidupannya.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E", marginBottom:5}}>2. Senescence yang meliputi hanya bagian tanaman di atas tanah (top senescence).</Text>
            <Text style={{textAlign: "justify", fontSize: 12, marginBottom:5}}>Bagian tanaman di atas tanah mati, sedangkan bagian tanaman yang berada di dalam tanah tetap hidup</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E", marginBottom:5}}>3. Senescence yang meliputi hanya daun–daunnya (decidous senescence).</Text>
            <Text style={{textAlign: "justify", fontSize: 12, marginBottom:5}}>Tanaman menggugurkan semua daun-daunnya, sementara organ tanaman lain tetap hidup.</Text>

            <Text style={{textAlign:"justify", fontSize: 16, fontWeight:"bold",color: "#22483E", marginBottom:5}}>4. Senescence yang meliputi hanya daun-daun yang terdapat di bagian bawah suatu tanaman (progessive senescence).</Text>
            <Text style={{textAlign: "justify", fontSize: 12, marginBottom:5}}>Tanaman hanya menggugurkan daun-daunnya yang terdapat di bagian bawah saja (daun – daun yang tua),sedang daun-daun yang lebih atas dan organ tanaman lain tetap hidup.</Text>

            <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Beberapa faktor luar dapat menghambat atau mempercepat terjadinya senescence</Text>
            
            <Text style={{textAlign: "justify", fontSize: 12, marginBottom:5}}>1. Penaikan suhu, keadaan gelap, kekurangan air dapat mempercepat terjadinya senescence daun</Text>
            <Text style={{textAlign: "justify", fontSize: 12,marginBottom:5}}>2. Penghapusan bunga atau buah akan menghambat senescence tanaman</Text>
            <Text style={{textAlign: "justify", fontSize: 12, marginBottom:5}}>3.Pengurangan unsur-unsur hara dalam tanah, air, penaikan suhu, berakibat menekan pertumbuhan tanaman yang berarti mempercepat senescence</Text>
            
                              
                  
                  </View>
                  </View>
                  </View>
        
                  </ScrollView>
            </ImageBackground>
     
    );
}

export default Problem3;
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