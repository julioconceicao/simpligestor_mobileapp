import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity   } from 'react-native';
import { styles } from './TelaLoginStyle';

import SwipeButton from '../../components/swipeButton/SwipeButton.jsx';

export default function TelaLogin() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo_azul_simpligestor2.png")}
        style={styles.logo}
      />
      
      <TextInput style={styles.textInputEmail} placeholder='Email' />
      <TextInput style={styles.textInputSenha} placeholder='Senha' secureTextEntry={true} />

      <TouchableOpacity style={styles.botaoEntrar} >
        <Text style={styles.text}>Acessar</Text>
      </TouchableOpacity>
      
      <SwipeButton/>
      
    </View>
    
  );
}

