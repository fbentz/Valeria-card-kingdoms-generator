import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import CitizenIcon from "./CitizenIcon";
import MonsterIcon from "./MonsterIcon";

type ButtonProps = {
  onPress: () => void;
  type: "all" | "citizen" | "monster";
};

const Button: React.FC<ButtonProps> = ({ onPress, type }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>
        {type === "citizen" && <CitizenIcon />}
        {type === "monster" && <MonsterIcon />}
        {type === "all" && (
          <>
            <MonsterIcon />
            <CitizenIcon />
          </>
        )}
      </View>
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
