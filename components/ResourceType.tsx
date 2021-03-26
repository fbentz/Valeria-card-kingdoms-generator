import React from "react";
import { StyleSheet, View, Image } from "react-native";
import ImagePath from "../assets/images";
import { Resource } from "../data/Card";

type ResourceTypeProps = {
  resource: Resource;
};

const ResourcesType: React.FC<ResourceTypeProps> = ({ resource }) => {
  return <Image style={styles.image} source={ImagePath[resource]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 38,
    height: 38,
    marginRight: 10,
  },
});

export default ResourcesType;
