import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


const Problems = () => {
  const navigation = useNavigation();

    return (
      <View style={{ flex: 1, flexDirection: "row" ,alignItems: "center", justifyContent:"space-between", paddingHorizontal: 15, margin:5 }}>
        <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden", marginRight: 8 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Problem1")}>
            <Image
             source={require("../../const/assets/picture/problem/problem1/problem1.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125 }}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Abiotic Disease</Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            Pencegahan dan Pengendalian
            </Text>
          </View>
          </View>

          {/* TIPS 4 */}

          <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden",marginRight: 8 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Problem2")}>
            <Image
             source={require("../../const/assets/picture/problem/problem1/problem3.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125 }}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Lack of Light</Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            Tanda Tanaman Kekurangan Sinar Matahari dan Solusinya
            </Text>
          </View>
        </View>
                 {/* TIPS 5 */}

                 <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden",marginRight: 8 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Problem3")}>
            <Image
             source={require("../../const/assets/picture/problem/problem1/problem5.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125 }}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Senesceen</Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            Penuaan Pada Tanaman
            </Text>
          </View>
        </View>

      {/* TIPS 2 */}
     
        <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden",marginRight: 8 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Problem4")}>
            <Image
             source={require("../../const/assets/picture/problem/problem1/problem2.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125 }}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Overwatered Plants </Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            Cara Memperbaiki Tanaman yang Kebanjiran 
            </Text>
          </View>
        </View>

        {/* TIPS 3 */}
        <View style={{ backgroundColor: "#22483E", borderRadius: 10, overflow: "hidden",marginRight: 8 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Problem5")}>
            <Image
             source={require("../../const/assets/picture/problem/problem1/problem4.jpg")}
              style={{
                height: 255,
                width: 355,
              }}
            />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, width: 325, height: 125 }}>
            <Text style={{fontWeight:"bold", fontSize:18, color:"#fff"}}>Low Temperature and Frost Damage</Text>
            <Text style={{ color: "#fff", paddingTop: 5, fontSize: 14 }}>
            Bagaimana Pengaruh Suhu Terhadap Pertumbuhan Tanaman
            </Text>
          </View>
        </View>
       

                 

      </View>
     
      
    );
  }

export default Problems;

const styles = StyleSheet.create({
    Imagep :{
        height: 235,
        width: 250,
        borderRadius: 10,
        margin: 5

    }
});

