import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Valeria Game Generator</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  header: {
    alignContent: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#e3e3e3",
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    fontFamily: "EBGaramond_800ExtraBold",
    color: "black",
    textAlign: "center",
  },
});

export default Header;
