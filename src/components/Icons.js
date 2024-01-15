// src/components/Icon/IconButton.js
import React from "react";
import { IconButton } from "react-native-paper";

const CustomIconButton = ({ icon, iconColor, onPress }) => {
  return <IconButton icon={icon} color={iconColor} onPress={onPress} />;
};

export default CustomIconButton;
