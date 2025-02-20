import { View } from "react-native";
import Login from "./src/screens/login/login";
import Registro from "./src/screens/registro/registro";
import RegistroEndereco from "./src/screens/registro_endereco/registro_endereco";


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RegistroEndereco />
    </View>
  );
}
