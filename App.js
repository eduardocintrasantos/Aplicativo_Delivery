import { View } from "react-native";
import Login from "./src/screens/login/login";
import Registro from "./src/screens/cadastro/registro";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
}
