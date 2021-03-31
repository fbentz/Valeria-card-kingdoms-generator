import React, { ReactFragment } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

type ButtonProps = {
  onPress: () => void;
  icon: View | ReactFragment;
};

const Button: React.FC<ButtonProps> = ({ onPress, icon }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>{icon}</View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: "#9a9a9a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  label: {
    fontFamily: "EBGaramond_800ExtraBold",
    fontSize: 22,
    textAlign: "center",
    color: "white",
  },
});

export default Button;
