import { ScrollView, View } from "react-native";
import React, { useState } from 'react';
import { styles } from "./registro_endereco.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button";

import axios from 'axios';

import AntDesign from '@expo/vector-icons/AntDesign';



function RegistroEndereco() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);
    const [erro, setErro] = useState('');

    // Campos do endereço
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [uf, setUf] = useState('');
    
    const buscarEndereco = async () => {
        try {
            setErro('');
            setEndereco(null);
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            //const data = await response.json();
    
            //console.log(data);
        
        if (response.data.erro) {
            setErro('CEP não encontrado');
        } else {
            setEndereco(data);
            // Atualizar os campos com os dados da API
            setLogradouro(data.logradouro || '');
            setBairro(data.bairro || '');
            setLocalidade(data.localidade || '');
            setUf(data.uf || '');
        }
        } catch (err) {
            setErro('Erro ao buscar o CEP');
        }
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            
           <Header texto="Informe seu endereço."/>

           <View style={styles.formGroup}>
                <View style={styles.formHorizontal}>
                    <View style={styles.form70}> 
                        <TextBox titulo="Endereço"
                            value={logradouro}
                            onChangeText={setLogradouro}
                        />
                    </View>
                    <View style={styles.form25}> 
                        <TextBox titulo="Num."/>
                    </View>
                </View>
                <View style={styles.form}>       
                        <TextBox titulo="Bairro"
                        value={bairro}
                        ></TextBox>
                </View>
                <View style={styles.formHorizontal}>  
                    <View style={styles.form70}>     
                        <TextBox titulo="Cidade"/>
                    </View>
                    <View style={styles.form25}>
                        <TextBox titulo="UF"/>
                    </View>
                </View>
                <View style={styles.formHorizontal}>       
                    <View style={styles.form70}>
                        <TextBox titulo="CEP"
                            value={cep}
                            onChangeText={setCep}
                        />
                    </View>
                    <View style={[styles.form25, {marginTop:15}]}>
                        <Button tituloBtn={<AntDesign name="search1" size={24} color="black" />}
                            onPress={buscarEndereco}
                        />
                    </View>
                </View>
                <View style={styles.form}>
                        <Button tituloBtn="Criar minha conta"/>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default RegistroEndereco;