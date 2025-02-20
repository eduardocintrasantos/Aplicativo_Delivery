import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button";



function Registro() {
    return (
        <ScrollView>
        <View style={styles.container}>
            
           <Header texto="Crie sua Conta."/>

           <View style={styles.formGroup}>
                <View style={styles.form}>
                        <TextBox titulo="Nome Completo"/>
                </View>
                <View style={styles.form}>
                        <TextBox titulo="E-mail"/>
                </View>
                <View style={styles.form}>       
                        <TextBox titulo="Escolha uma Senha"/>
                </View>
                <View style={styles.form}>       
                        <TextBox titulo="Confirme a Senha"/>
                </View>

                <View style={styles.form}>
                    <Button tituloBtn="Proximo passo"/>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Acessar minha conta.</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

export default Registro;