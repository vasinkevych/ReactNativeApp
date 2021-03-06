import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const styles = StyleSheet.create({
  formContainer: {
    color: Colors.secondaryColor,
    alignItems: "center",
  },
  textInputWrapper: {
    width: 270,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.9)",
    borderStyle: "solid",
    backgroundColor: "rgba(196, 196, 196, 0.5)",
    borderRadius: 20,
    marginBottom: 40,
    alignSelf: "center",
  },
  textInput: {
    height: 43,
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.base,
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.3)",
    padding: 10,
  },
  passwordWrapper: {
    marginBottom: 43,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputPassword: {
    left: 30,
    marginRight: 15,
    width: 220,
    paddingLeft: 10,
    paddingRight: 20,
  },
  icon: {
    justifyContent: "center",
    flex: 1,
  },
  button: {
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 217,
    justifyContent: "center",
  },
  buttonPress: {
    borderColor: Colors.pressButton,
    height: 40,
    width: 217,
    borderRadius: 20,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  buttonText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.black,
    textAlign: "center",
  },
  errorMsg: {
    textAlign: "center",
    fontFamily: Fonts.base,
    color: Colors.errorColor,
    marginTop: 20,
  },
});

export default styles;
