import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button";



function Login() {

    //const screenHeight = Dimensions.get('window').height;

    return (
        <ScrollView style={{flexGrow:1}}>
            <View style={[styles.container/*, { height: screenHeight }*/]}>
                
            <Header texto="Acesse sua Conta."/>

            <View style={[styles.formGroup]}>
                    <View style={styles.form}>
                            <TextBox titulo="E-mail"/>
                    </View>
                    <View style={styles.form}>       
                            <TextBox titulo="Senha" placeholder="Digite sua Senha..."
                                isPassword={true}/>
                    </View>

                    <View style={styles.form}>
                        <Button tituloBtn="Acessar"/>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Criar minha conta.</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </ScrollView>
    )
}

export default Login;