import React from "react";
import { StyleSheet, View, Image } from "react-native";
import ImagePath from "../assets/images";

type IconProps = {
  icon: string;
};

const MonsterTypeIcon: React.FC<IconProps> = ({ icon }) => {
  return (
    <View>
      <Image style={styles.image} source={ImagePath[icon]} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 43,
    height: 43,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,
  },
});

export default MonsterTypeIcon;
