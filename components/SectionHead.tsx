import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CitizenIcon from "./CitizenIcon";
import MonsterIcon from "./MonsterIcon";

type SectionHeadProps = {
  title: string;
  type: "monster" | "citizen" | "none";
};

const SectionHead: React.FC<SectionHeadProps> = ({ title, type }) => {
  return (
    <View style={styles.container}>
      {type === "monster" && <MonsterIcon />}
      {type === "citizen" && <CitizenIcon />}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#dfdfdf",
  },
  title: {
    fontFamily: "EBGaramond_800ExtraBold",
    fontSize: 24,
    lineHeight: 40,
    marginLeft: 10,
  },
});

export default SectionHead;
