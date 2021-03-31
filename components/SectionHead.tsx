import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "./Icon";

type SectionHeadProps = {
  title: string;
  type: "monster" | "citizen";
};

const SectionHead: React.FC<SectionHeadProps> = ({ title, type }) => {
  return (
    <View style={styles.container}>
      <Icon type={type} />
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
