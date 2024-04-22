import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable  } from 'react-native';
import  Icon  from 'react-native-vector-icons/Entypo'

export default function TelaInicial() {


  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo_azul_simpligestor2.png")}
        style={styles.logo}
      />
    </View>
  );
}
