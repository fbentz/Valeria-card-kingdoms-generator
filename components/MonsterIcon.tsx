import React from "react";
import { StyleSheet, View, Image } from "react-native";

const MonsterIcon: React.FC<{}> = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.icon}
        source={require("../assets/monstres.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#606062",
    width: 30,
    height: 40,
    paddingLeft: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default MonsterIcon;
