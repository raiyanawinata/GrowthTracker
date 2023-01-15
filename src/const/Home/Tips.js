import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


const Tips = () => {
  const navigation = useNavigation();

    return (
      <View style={{ flex: 1, flexDirection: "row" ,alignItems: "center", justifyContent:"space-between", paddingHorizontal: 15, margin:5 }}>
        <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden", marginRight: 8 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("TipsCabe")}>
            <Image
             source={require("../../const/assets/picture/chili.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125 }}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Tips and Trik!</Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            Melakukan Perawatan Tanaman Cabe Dengan Micin
            </Text>
          </View>
          </View>

      {/* TIPS 2 */}
     
        <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden",marginRight: 8 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("TipsBunga")}>
            <Image
             source={require("../../const/assets/picture/tips2.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125}}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Tips and Trik!</Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            Cara Menanam Bunga di Dalam Pot Yang Benar Agar Tumbuh Subur dan Sehat
            </Text>
          </View>
        </View>

        {/* TIPS 3 */}

        <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden", marginRight: 8 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("TipsNyiram")}>
            <Image
             source={require("../../const/assets/picture/tips3.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125 }}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Tips and Trik!</Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            Tips Menyiram Tanaman yang Benar

            </Text>
          </View>
        </View>

                 {/* TIPS 4 */}

        <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden", marginRight: 8 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("TipsNanam")}>
            <Image
             source={require("../../const/assets/picture/tips4.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125 }}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Tips and Trik!</Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            11 Cara Menanam Sayuran Organik di Pekarangan Rumah

            </Text>
          </View>
        </View>

                 {/* TIPS 5 */}

        <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden", }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("TipsKompos")}>
            <Image
             source={require("../../const/assets/picture/tips5.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125 }}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Tips and Trik!</Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            Cara Membuat Pupuk Kompos dari Sampah Organik Rumah Tangga

            </Text>
          </View>
        </View>

      </View>
     
      
    );
  }

export default Tips;

const styles = StyleSheet.create({
    Imagep :{
        height: 235,
        width: 250,
        borderRadius: 10,
        margin: 5

    }
});

