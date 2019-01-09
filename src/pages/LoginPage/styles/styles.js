import { StyleSheet, Dimensions } from "react-native";
import { height } from "window-size";

let screenWidth = Dimensions.get("window").width;

let screenHeight = Dimensions.get("window").height;

const wp = width => {
  const elemWidth = parseFloat(width);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const hp = height => {
  const elemHeight = parseFloat(height);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1464",
    width: wp("100%"),
    height: hp("100%"),

  },
  form: {
    backgroundColor: "#F5FCFF",
  },
  input: {},
  button: {}
});
