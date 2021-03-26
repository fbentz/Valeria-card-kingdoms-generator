import React from "react";
import { Image, StyleSheet } from "react-native";
import ImagePath from "../assets/images";
import { Role } from "../data/Card";

type CitizenRoleProps = {
  role: Role;
};

const CitizenRole: React.FC<CitizenRoleProps> = ({ role }) => {
  return <Image style={styles.image} source={ImagePath[role]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 39,
  },
});

export default CitizenRole;
