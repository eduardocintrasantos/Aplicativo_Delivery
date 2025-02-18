import { View } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";



function Login() {
    return (
        <View style={styles.container}>
           <Header texto="Acesse sua Conta."/>
           <TextBox titulo="E-mail"/>
        </View>
    )
}

export default Login;