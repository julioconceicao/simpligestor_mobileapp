import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../../components/BarraDePesquisa/BarraDePesquisa';
; // Importe a função HomePageTab do seu arquivo de rotas



import { styles } from './AgendaDiariaStyle';

export default function AgendaDiaria() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text>Agenda Diaria</Text>
    </View>
  );
}