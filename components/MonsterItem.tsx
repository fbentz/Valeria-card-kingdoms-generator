import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MonsterCard } from "../data/Card";
import MonsterTypeIcon from "./MonsterTypeIcon";

type MonsterItemProps = {
  monster: MonsterCard;
};

const MonsterItem: React.FC<MonsterItemProps> = ({ monster }) => {
  return (
    <View style={styles.view}>
      <MonsterTypeIcon icon={monster.image} />
      <Text style={styles.item}>{monster.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  item: {
    alignSelf: "center",
    fontFamily: "EBGaramond_800ExtraBold",
    fontSize: 24,
    marginLeft: 20,
  },
});

export default MonsterItem;
