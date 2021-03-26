import { StatusBar } from "expo-status-bar";
import React, { useState, useReducer } from "react";
import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import {
  citizens as citizenDeck,
  drawCitizenCards,
  drawMonsterCards,
  monsters as monsterDeck,
} from "./data/Card";
import {
  useFonts,
  EBGaramond_800ExtraBold,
  EBGaramond_400Regular,
  EBGaramond_400Regular_Italic,
  EBGaramond_800ExtraBold_Italic,
} from "@expo-google-fonts/eb-garamond";
import {
  Header,
  CitizenItem,
  MonsterItem,
  SectionHead,
  Button,
} from "./components";

export default function App() {
  let [fontsLoaded] = useFonts({
    EBGaramond_400Regular,
    EBGaramond_400Regular_Italic,
    EBGaramond_800ExtraBold,
  });

  const [citizens, setCitizens] = useState(drawCitizenCards(citizenDeck));
  const [monsters, setMonsters] = useState(drawMonsterCards(monsterDeck));

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.groupButton}>
              <View style={styles.button}>
                <Button
                  type="all"
                  onPress={() => {
                    setMonsters(drawMonsterCards(monsterDeck));
                    setCitizens(drawCitizenCards(citizenDeck));
                  }}
                />
              </View>
              <View style={styles.button}>
                <Button
                  type="monster"
                  onPress={() => {
                    setMonsters(drawMonsterCards(monsterDeck));
                  }}
                />
              </View>
              <View style={styles.button}>
                <Button
                  type="citizen"
                  onPress={() => {
                    setCitizens(drawCitizenCards(citizenDeck));
                  }}
                />
              </View>
            </View>
            <SectionHead title={"Monstres"} type={"monster"} />
            {monsters.map((monster, index) => {
              return <MonsterItem key={`monster-${index}`} monster={monster} />;
            })}
            <SectionHead title={"Citoyens"} type={"citizen"} />
            {citizens.map((citizen, index) => {
              return <CitizenItem citizen={citizen} key={`citoyen-${index}`} />;
            })}
          </ScrollView>
        </SafeAreaView>
        <StatusBar style={"auto"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingBottom: 50,
    backgroundColor: "#fbfbfb",
  },
  groupButton: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
