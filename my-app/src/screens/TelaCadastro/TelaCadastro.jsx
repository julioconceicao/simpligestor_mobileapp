import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import TelaCadastroComponents from '../../components/TelaCadastroComponents/TelaCadastro'
import { styles } from './TelaCadastroStyle';

export default function TelaCadastro() {

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.getParent()?.setOptions({ tabBarStyle: undefined });
    }
  }, [isFocused, navigation]);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [cargo, setCargo] = useState('');

  const cadastro = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não conferem");
      return;
    }
    try {
      await firestore.collection('usuarios').add({
        nome,
        email,
        telefone,
        senha,
        cpf,
        cep,
        logradouro,
        cargo,
      });
      alert("Usuário cadastrado com sucesso!");
      navigation.navigate('Login'); // Navegar para a tela de login ou outra tela após o cadastro
    } catch (error) {
      console.error("Erro ao cadastrar usuário: ", error);
      alert("Erro ao cadastrar usuário. Tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <TelaCadastroComponents />

      <TextInput style={styles.textInputNome} placeholder='Nome Completo' onChangeText={text => setNome(text)} />
      <TextInput style={styles.textInputEmail} placeholder='Email' onChangeText={text => setEmail(text)} />
      <TextInput style={styles.textInputTelefone} placeholder='Telefone' onChangeText={text => setTelefone(text)} />
      <TextInput style={styles.textInputSenha} placeholder='Senha' secureTextEntry={true} onChangeText={text => setSenha(text)} />
      <TextInput style={styles.textInputConfirmar} placeholder='Confirme a sua senha' secureTextEntry={true} onChangeText={text => setConfirmarSenha(text)} />
      <TextInput style={styles.textInputCpf} placeholder='CPF' onChangeText={text => setCpf(text)} />
      <TextInput style={styles.textInputCep} placeholder='CEP' onChangeText={text => setCep(text)} />
      <TextInput style={styles.textInputLogradouro} placeholder='Logradouro' onChangeText={text => setLogradouro(text)} />
      <TextInput style={styles.textInputCargo} placeholder='Cargo' onChangeText={text => setCargo(text)} />

      <TouchableOpacity onPress={() => cadastro()} style={styles.botaoCadastrar} >
        <Text style={{ fontWeight: 'bold', color: '#3E5DFF' }}>CADASTRAR</Text>
      </TouchableOpacity>

    </View>
  );
}