import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './HistoricoStyle';
import SearchBar from '../../components/BarraDePesquisa/BarraDePesquisa';

export function Historico() {
  return (
    <View style={styles.container}>
        <SearchBar />
        <Text>Historico</Text>
    </View>
  );
}