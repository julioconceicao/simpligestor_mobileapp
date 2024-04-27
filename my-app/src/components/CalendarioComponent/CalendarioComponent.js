import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const CalendarioComponent = () => {
  // Formatar a data atual para exibir o nome do mês
  const dataAtual = moment().format('YYYY-MM-DD');

  return (
    <View>
      <Calendar
        style={{ 
          width: 400, 
          borderRadius: 8, 
          position: 'absolute',
          alignSelf: 'center',
          top: -280
        }}
        current={dataAtual} // Usar a data formatada com o nome do mês
        minDate={'2024-01-01'}
        maxDate={'2024-12-31'}
        onDayPress={(day) => { console.log('dia selecionado', day) }}
        monthFormat={'MMMM yyyy'} // Formato do nome do mês e do ano
        markedDates={{
          
          '2024-04-26': { disabled: true },
          '2024-04-27': { selected: true, marked: true, selectedColor: '#f08080' },
          '2024-04-28': { selected: true, marked: true, selectedColor: '#f08080' },
          '2024-04-29': { selected: true, marked: true, selectedColor: '#f08080' },
          '2024-04-30': { selected: true, marked: true, selectedColor: '#f08080' },
          '2024-05-01': { selected: true, marked: true, selectedColor: '#00ced1' },
          '2024-05-02': { selected: true, marked: true, selectedColor: '#00ced1' },
          '2024-05-03': { selected: true, marked: true, selectedColor: '#00ced1' },
          '2024-05-04': { marked: true },
          '2024-05-05': { marked: true },
          
        }}
      />

      <Text style={styles.agenda}>Agenda Mensal</Text>
      
      <Text style={styles.disponiveis}></Text> 
      <Text style={styles.disponiveisText}> Disponíveis</Text> 
      
      <Text style={styles.cheia}></Text> 
      <Text style={styles.cheiaText}>cheia</Text> 


    </View>
  );
}


export const styles = StyleSheet.create({
  agenda: {
    
    fontSize: 20,
    position: 'absolute',
    top: -330,
    alignSelf: 'center',
    color: 'grey',
    
  },

  disponiveis: {
    
    position: 'absolute',
    width: 20,
    height: 20,
    top: 100,
    left: -200,
    color: 'grey',
    backgroundColor: '#00ced1',
    borderRadius: 55
    
  },

  disponiveisText: {
    
    position: 'absolute',
    fontSize: 20,
    top: 95,
    left: -170,
    color: 'grey',
    
    
  },

  cheia: {
    
    position: 'absolute',
    width: 20,
    height: 20,
    top: 150,
    left: -200,
    backgroundColor: '#f08080',
    borderRadius: 55
    
  },

  cheiaText: {
    
    position: 'absolute',
    fontSize: 20,
    top: 142,
    left: -170,
    color: 'grey',
    
    
  }
});



export default CalendarioComponent;
