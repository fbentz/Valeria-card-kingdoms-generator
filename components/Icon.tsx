import React from "react";
import { View, Image, StyleSheet } from "react-native";
import imagePath from "../assets/images";

type IconProps = {
  type: "citizen" | "monster";
};

const toHex = (type: IconProps["type"]): string => {
  switch (type) {
    case "monster":
      return "#606062";
    case "citizen":
      return "#628fca";
    default:
      return "#fff";
  }
};

const Icon: React.FC<IconProps> = ({ type }) => {
  return (
    <View style={[styles.wrapper, { backgroundColor: toHex(type) }]}>
      <Image style={styles.icon} source={imagePath[type]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 30,
    height: 40,
    paddingLeft: 1,
    marginLeft: 2,
    marginRight: 2,
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

export default Icon;
