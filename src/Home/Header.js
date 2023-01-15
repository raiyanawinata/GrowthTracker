import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Header = () => {
    return (
        <View>
            <ImageBackground source={require("./plant.jpg")} resizeMode="cover" style={styles.image}>
                <View style={styles.subheader}>
                    <Text style={styles.headerTitle} >Hi, Growth Tracker</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop: "10%",
        paddingHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    subheader: {
        paddingHorizontal: "5%",
        marginTop: "30%",
    },
    headerTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 25,
    },
    inputContainer: {
        height: 60,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        position: "absolute",
        flexDirection: "row",
        paddingHorizontal: "2%",
        alignItems: "center",
        elevation: 12,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});