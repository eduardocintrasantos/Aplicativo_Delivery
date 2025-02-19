import { Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const styles = {
  container: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    minHeight: Dimensions.get('window').height,
  },
  form: {
    width: "100%",
    marginBottom: 15
  },
  formGroup: {
    width: "100%",
    marginTop: 30
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  footerText: {
    textAlign: 'center',
    color: themas.colors.cinza_escuro,
    fontSize: themas.font_size.m
  }
};
