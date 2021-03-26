import React from "react";
import { StyleSheet, View, Text } from "react-native";

type TwoValuesProps = {
  value: number;
};

const TwoValues: React.FC<TwoValuesProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={value === 9 ? styles.valueUpWithOneNumber : styles.valueUp}>
        {value}
      </Text>
      <View style={styles.divider} />
      <Text style={styles.valueDown}>{value + 1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  valueUp: {
    fontFamily: "EBGaramond_800ExtraBold",
    position: "absolute",
    top: 0,
    left: 4,
    color: "white",
    fontSize: 18,
  },
  valueUpWithOneNumber: {
    fontFamily: "EBGaramond_800ExtraBold",
    position: "absolute",
    top: -1,
    left: 6,
    color: "white",
    fontSize: 22,
  },
  valueDown: {
    fontFamily: "EBGaramond_800ExtraBold",
    position: "absolute",
    bottom: -46,
    right: 4,
    color: "white",
    fontSize: 18,
  },
  divider: {
    position: "absolute",
    top: 22,
    left: -2,
    width: 50,
    height: 2,
    backgroundColor: "white",
    borderRadius: 1,
    transform: [{ rotate: "-45deg" }],
  },
});

export default TwoValues;
