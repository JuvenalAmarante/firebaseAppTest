import { StyleSheet, Dimensions, PixelRatio } from "react-native";

screenWidth = Dimensions.get("window").width;

screenHeight = Dimensions.get("window").height;

export const wp = width => {
  const elemWidth = parseFloat(width);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const hp = height => {
  const elemHeight = parseFloat(height);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const styles = StyleSheet.create({
  
});
