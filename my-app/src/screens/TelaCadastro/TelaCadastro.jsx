import React, {useState} from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import TelaCadastroComponents from '../../components/TelaCadastroComponents/TelaCadastro'
import { styles } from './TelaCadastroStyle';

export default function TelaCadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [cargo, setCargo] = useState('');

    const cadastro = () => {
        // alert(nome);
        // alert(email);
        // alert(telefone);
        // alert(senha);
        // alert(confirmarSenha);
        // alert(cpf);
        // alert(cep);
        // alert(logradouro);
        // alert(cargo);
        //fazer chamada no back-end para cadastro.
    }


  return (
    
    
    
    <View style={styles.container}>
        <TelaCadastroComponents/>
        

        <TextInput style={styles.textInputNome} placeholder='Nome Completo' onChangeText={text => setNome(text)} />
        <TextInput style={styles.textInputEmail } placeholder='Email' onChangeText={text => setEmail(text)} />
        <TextInput style={styles.textInputTelefone} placeholder='Telefone' onChangeText={text => setTelefone(text)} />
        <TextInput style={styles.textInputSenha} placeholder='Senha' secureTextEntry={true} onChangeText={text => setSenha(text)}/>
        <TextInput style={styles.textInputConfirmar} placeholder='Confirme a sua senha' secureTextEntry={true} onChangeText={text => setConfirmarSenha(text)}/>
        <TextInput style={styles.textInputCpf} placeholder='CPF'onChangeText={text => setCpf(text)}/>
        <TextInput style={styles.textInputCep} placeholder='CEP' onChangeText={text => setCep(text)} />
        <TextInput style={styles.textInputLogradouro} placeholder='Logradouro' onChangeText={text => setLogradouro(text)} />
        <TextInput style={styles.textInputCargo} placeholder='Cargo' onChangeText={text => setCargo(text)} />

        <TouchableOpacity onPress={() => cadastro()} style={styles.botaoCadastrar} >
            <Text style={{fontWeight: 'bold', color: '#3E5DFF'}}>CADASTRAR</Text>
        </TouchableOpacity>

    </View>
  );
}




