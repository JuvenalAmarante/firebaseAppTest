import { StyleSheet, Dimensions, PixelRatio } from "react-native";

screenWidth = Dimensions.get("window").width;

screenHeight = Dimensions.get("window").height;

const wp = width => {
  const elemWidth = parseFloat(width);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const hp = height => {
  const elemHeight = parseFloat(height);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const styles = StyleSheet.create({
  background: {
    paddingTop: hp("10%"),
    paddingBottom: hp("25%"),
    paddingRight: wp("12%"),
    paddingLeft: wp("12%"),
    width: wp("100%"),
    height: hp("100%")
  },
  logo: {
    width: null,
    height: hp("20%"),
    resizeMode: "center",
    zIndex: 2
  },
  backForm: {
    marginTop: hp("31%"),
    marginBottom: hp("25%"),
    marginRight: wp("12%"),
    marginLeft: wp("12%"),
    position: "absolute",
    width: wp("76%"),
    height: hp("60%"),
    borderRadius: hp("2%"),
    backgroundColor: "#F5FCFF",
    opacity: 0.6,
    zIndex: 0
  },
  form: {
    paddingTop: hp("3%"),
    paddingBottom: hp("3%"),
    paddingLeft: wp("5%"),
    paddingRight: wp("5%"),
    zIndex: 1
  },
  input: {
    marginTop: hp("0.5%"),
    marginBottom: hp("1%"),
    borderBottomWidth: wp("0.6%"),
    borderBottomColor: "#FFC312",
    paddingLeft: wp("2%")
  },
  button: {
    padding: hp("3.5%"),
    marginTop: hp("2%"),
    backgroundColor: "#FFC312",
    borderRadius: hp("0.8%")
  },
  textButton: {
    color: "white",
    textAlign: "center",
  },
  alert: {
    width: wp("100%"),
    height: hp("100%"),
  },
  modal: {
    backgroundColor: "#F5FCFF",
    borderRadius: hp("0.8%"),
    marginTop: hp("25%"),
    marginBottom: hp("25%"),
    marginRight: wp("10%"),
    marginLeft: wp("10%"),
    paddingTop: hp("3%"),
    paddingBottom: hp("3%"),
    paddingLeft: wp("5%"),
    paddingRight: wp("5%"),
  },
  titleModal: {
    marginVertical: hp("1%")
  },
  titleTextModal: {
    fontSize: hp('5%'),
    color: 'green',
    textAlign: "center",
    fontWeight: "bold"
  },
  bodyModal: {
    marginBottom: hp("3%")
  },
  bodyTextModal: {
    fontSize: hp('3%'),
    textAlign: "justify"
  },
  buttonModal: {
    borderWidth: wp('0.5%'),
    borderColor: '#FFC312',
    padding: hp("2.5%"),
    borderRadius: hp("0.8%")
  },
  textButtonModal: {
    color: "#FFC312",
    textAlign: "center",
  },
});

export default styles;
