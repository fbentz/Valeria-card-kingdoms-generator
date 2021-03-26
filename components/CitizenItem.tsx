import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CitizenCard } from "../data/Card";
import Dice from "./Dice";
import ResourcesType from "./ResourceType";
import CitizenRole from "./CitizenRole";

type CitizenItemProps = {
  citizen: CitizenCard;
};

const CitizenItem: React.FC<CitizenItemProps> = ({ citizen }) => {
  return (
    <View style={styles.view}>
      <View style={styles.left}>
        <CitizenRole role={citizen.role} />
        <Text style={styles.item}>{citizen.name}</Text>
      </View>
      <View style={styles.right}>
        {citizen.resource && <ResourcesType resource={citizen.resource} />}
        <Dice value={citizen.value} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingLeft: 20,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    alignSelf: "center",
    fontFamily: "EBGaramond_800ExtraBold",
    fontSize: 24,
    marginLeft: 20,
  },
});

export default CitizenItem;
