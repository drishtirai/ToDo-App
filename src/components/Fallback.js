import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Fallback = () => {
  return (
    <View style={styles.view}>
      <Image
        source={require("../../assets/to-do-list.png")}
        style={styles.image}
      />
      <Text style={{fontWeight: "900"}}>Start Adding Your Task</Text>
    </View>
  );
};

export default Fallback;
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
  view: {
    alignItems: "center",
  },
});
