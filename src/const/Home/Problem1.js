import React from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const Problem1 = ({ navigation }) =>{
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
        <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Penyakit Tanaman Abiotik</Text>
  
            <Text style={{textAlign:"justify"}}>Penyakit abiotik atau penyakit tidak menular disebabkan oleh agen tak hidup seperti cuaca, tanah, bahan kimia, atau cedera mekanis. Ini biasanya terjadi ketika tanaman tumbuh di luar habitat normal atau zona tumbuh, atau ketika manusia mengganggu lingkungan tumbuh tanaman. 
            Mereka dapat disebabkan oleh satu peristiwa lingkungan seperti pembekuan yang terlambat atau oleh kombinasi faktor atau peristiwa kumulatif.</Text>
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Mendiagnosis Penyakit Abiotik Pada Tumbuhan</Text>
                  <Text style={{textAlign: "justify",}}>Seperti penyakit biotik virus, penyakit abiotik sulit didiagnosis karena gejala yang sama dapat disebabkan oleh banyak hal. Beberapa gejala yang paling umum termasuk pertumbuhan kerdil, berkurangnya kekuatan dan layu pada batang, menguning dan layu daun tua, produksi biji berat, daun terbakar marginal, dan daun lebih kecil dari normal.
                  Untuk mendiagnosis penyakit abiotik secara akurat, Anda harus terlebih dahulu mengetahui semua gejala, serta garis waktu saat gejala muncul dan riwayat kondisi pertumbuhannya. Anda akan ingin mengamati tanaman lain di daerah yang memiliki spesies yang sama dan berbeda untuk melihat apakah mereka menunjukkan gejala yang sama. Lebih baik jika Anda dapat mengamati tanaman secara langsung.</Text>
                 
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Penyebab Penyakit Tanaman Abiotik</Text>
                  <Text>1. Pemadatan adalah masalah struktur tanah yang paling umum dan dapat disebabkan oleh lalu lintas yang padat dari pertanian atau peralatan konstruksi, hujan, dan kurangnya rotasi tanaman. Pemadatan mengurangi ruang pori antara partikel tanah dan menyebabkan limpasan mengurangi jumlah air dan oksigen yang tersedia untuk penyerapan.</Text>
                  <Text>2. pH adalah ukuran aktivitas ion H+ di dalam tanah. Dengan kata lain, ini mengukur keasaman relatif atau alkalinitas tanah dengan 7 netral. Tanah dengan pH di bawah 7 bersifat asam sedangkan tanah di atas 7 bersifat basa. Secara umum, pH tanah yang sedikit asam 6-7 lebih disukai untuk sebagian besar tanaman. PH mempengaruhi unsur dan senyawa yang tersedia di tanah untuk diserap oleh tanaman. Menanam tanaman di tanah dengan pH yang salah dapat menyebabkan penyakit abiotik.</Text>
                  <Text>3. Terlalu banyak nutrisi tertentu (terutama makronutrien seperti nitrogen) dapat menjadi racun bagi tanaman dan menyebabkan penyakit abiotik. Toksisitas mikronutrien umum terjadi dalam sistem produksi dan florikultura rumah kaca. Demikian pula, kekurangan nutrisi juga dapat menyebabkan penyakit abiotik.
                            Toksisitas dan defisiensi dapat terjadi karena kondisi tanah yang buruk seperti tingkat pH yang tidak tepat membuat nutrisi dalam tanah tidak tersedia untuk diserap.</Text>
                  <Text>4. Kelembaban ekstrim karena hujan atau irigasi yang berlebihan serta terlalu sedikit air dapat menyebabkan kerusakan tanaman dan akhirnya gejala abiotik. Terlalu banyak air dapat mengurangi oksigen yang tersedia di tanah yang diperlukan untuk penyerapan air dan nutrisi. Terlalu sedikit air dapat menyebabkan tanaman menutup stomata mereka untuk menghemat air yang juga mengurangi kemampuannya untuk berfotosintesis atau menghasilkan makanan yang dibutuhkan untuk pertumbuhan.</Text>
                  <Text>5. Baik suhu yang terlalu tinggi maupun rendah dapat merugikan. Mereka menyebabkan cedera tanaman, yang bervariasi dalam tingkat keparahan berdasarkan spesies tanaman, usianya, durasi peristiwa suhu ekstrim, waktu dalam setahun, dan banyak lagi.</Text>

                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>Cara Mencegah Gangguan Abiotik </Text>
                  <Text>1. Penggunaan bibit yang sehat </Text>
                  <Text>2. Disinfeksi air siraman</Text>
                  <Text>3. Pergiliran tanaman</Text>
                  <Text>4. Penggarapan tanah </Text>
                  <Text>5. Pemupukan</Text>   
                  <Text>6. Sterilisasi tanah pembibitan</Text>               
                  
                  </View>
                  </View>
                  </View>
        
                  </ScrollView>
            </ImageBackground>
     
    );
}

export default Problem1;
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