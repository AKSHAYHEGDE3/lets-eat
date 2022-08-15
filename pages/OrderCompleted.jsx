import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
// import LottieView from "lottie-react-native";
// import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted() {
 
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        /> */}
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at AKzy has been placed for $10
        </Text>
        <ScrollView>
        
          {/* <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}