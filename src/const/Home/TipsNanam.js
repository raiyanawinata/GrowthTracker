import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Image } from "react-native";

const TipsNanam = ({ navigation }) =>{
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground 
        style={{ width: '100%',
        height: '100%' }}
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
  
                  <Text style={{color: "#22483E", fontWeight: "bold", fontSize: 20}}>11 Cara Menanam Sayuran Organik di Pekarangan Rumah</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>1. Persiapkan Tanah yang Baik</Text>
                  <Text style={{textAlign: "justify"}}>Semua tanaman akan memiliki hasil produksi yang baik bila ditanam pada tanah yang baik pula.
                Buatlah tanah yang mengandung banyak bahan organik seperti, kompos, dan bahan lainnya.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>2.  Pilih Lahan yang Terkena Sinar Matahari</Text>
                  <Text style={{textAlign: "justify",}}>Menanam sayuran secara organik lebih baiknya dilakukan pada lahan yang mendapat sinar matahari penuh.
                Lahan sayuran tersebut harus tersinari setidaknya 6 – 10 jam sehari.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>3. Memilih Tanaman yang Tepat</Text>
                  <Text style={{textAlign: "justify",}}>Agar tanaman sayuran organik berhasil, lakukan riset untuk mengetahui jenis sayuran dan varietas mana yang paling tepat untuk ditanam pada pekarangan milikmu.
                Pertimbangkan dari mulai julah sinar matahari yang diperlukan, cara merawat, hingga proses pertumbuhannya.</Text>
                <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>4. Tanam Beberapa Bunga </Text>
                  <Text style={{textAlign: "justify",}}>Proses pertumbuhan sayuran bergantung pada sifat alam, dan penyerbukan yang dapat membantu mereka.
                Ini merupakan salah satu faktor keberhasilan cara menanam sayuran organik di pekarangan rumah.
                Tanamlah beberapa bunga di dalam atau dekat taman sayuran untuk mengundang lebah melakukan penyerbukan.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>5. Gunakan Bibit Berkualitas </Text>
                  <Text style={{textAlign: "justify",}}>Cara menanam sayuran agar berhasil adalah membeli bibit-bibit organik yang sudah bersertifikat tanpa menggunakan pestisida atau bahan kimia lainnya.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>6.  Buat Kompos dan Mulsa Sendiri </Text>
                  <Text style={{textAlign: "justify",}}>Kompos dapat membantu tanah untuk mempertahankan kelembapan, sebagai nutrisi tanaman dan cacing serta mikroba yang bisa membantu memperbaiki tanah.
                Kamu dapat membuat kompos sendiri dari tumpukan campuran daun, potongan rumput, dan sampah rumah tangga seperti, kulit telur, dan bubuk kopi.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>7. Mengetahui Arah Angin </Text>
                  <Text style={{textAlign: "justify",}}>Rumahmu termasuk daerah yang memiliki angin yang kencang?
                Jika iya, sebaiknya perhatikan posisi kebun dan cobalah untuk membuat pertahanan sendiri seperti, membangun pagar tanaman, dinding, teralis, atau struktur lain agar efek angin kencang tidak mempengaruhi tanaman sayur kamu.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>8. Tanaman Pendamping di Kebun Sayur </Text>
                  <Text style={{textAlign: "justify",}}>Cara mengkombinasikan sayuran dengan tumbuhan atau sayuran lainnya bisa membantu meningkatkan hasil produksi.
                Selain itu dapat mencegah serangga, meminimalisir penyakit, dan meningkatkan rasa sayuran.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>9. Membangun Bedengan  </Text>
                  <Text style={{textAlign: "justify",}}>Cara terbaik untuk keberhasilan menanam sayuran organik adalah membangun sebuah bedengan.
                Hal ini dapat menyediakan sayuran-sayuran yang kamu miliki tumbuh dan memperpanjang musim tanam secara signifikan.
                Tanaman yang di tanam pada tempat tinggi akan menjadi hangat di awal musim semi serta memudahkan saat waktu panen tiba.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>10. Teknik Berkebun Vertikal </Text>
                  <Text style={{textAlign: "justify",}}>Gunakanlah teknik berkebun secara vertikal bila kamu memiliki area kebun yang kecil.
                Posisi ini dapat membantu memaksimalkan proses penanaman sayuran nanti. Keuntungan menanam sayuran dengan metode vertikal adalah meningkatkan sirkulasi, mencegah penyakit jamur, dan menjaga daun tanaman serta sayuran dari tanah.</Text>
                  <Text style={{textAlign: "justify", fontWeight: "bold", marginTop: 5}}>11. Rotasikan Tanaman </Text>
                  <Text style={{textAlign: "justify",}}>Merotasi tanaman setahun sekali adalah teknik umum yang dilakukan para petani sayuran. Mereka melakukan ini agar terhindar dari masalah hama, menipisnya tanah dari nutrisi, dan penyakit lainnya.
                   </Text>

                
                  </View>
                  </View>
        
      

      </ScrollView>
      </SafeAreaView>
     
    );
}

export default TipsNanam;


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