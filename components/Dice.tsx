import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TwoValues from "./TwoValues";

type DiceProps = {
  value: number;
};

const Dice: React.FC<DiceProps> = ({ value }) => {
  return (
    <View style={styles.wrapper}>
      {value === 9 || value === 11 ? (
        <TwoValues value={value} />
      ) : (
        <Text style={styles.number}>{value}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  number: {
    fontFamily: "EBGaramond_800ExtraBold",
    color: "white",
    fontSize: 36,
    marginTop: -2,
    textAlign: "center",
  },
  wrapper: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.11,
    elevation: 15,
  },
});

export default Dice;
