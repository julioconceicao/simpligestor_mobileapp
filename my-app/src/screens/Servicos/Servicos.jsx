import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './ServicosStyle';
import SearchBar from '../../components/BarraDePesquisa/BarraDePesquisa';

export function Servicos() {
  return (
    <View style={styles.container}>
        <SearchBar />
        <Text>Serviços</Text>
    </View>
  );
}