import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { InputDDD } from '../components/Inputs';
import CardCidade from '../components/CardCidade';

import * as objDDD from '../services/ddd.js';

export default function Tela_ddd() {

  const [listaCidades, setListaCidades] = useState({});

  const exibirCidadesDoDDD = (digito) => {
    function isNumero(valor) {
      return typeof valor === 'string' && valor.trim() !== '' && !isNaN(Number(valor));
    }
    
    if (!digito || digito.length !== 2 || !isNumero(digito)) {
      return;
    }

    objDDD.getDDD(digito)
    .then((resposta) => {
      console.log(resposta);
       setListaCidades(resposta);
    })
    .catch((error) => {
      console.error('Error fetching DDD:', error);
    });
  }

  return (
    <View style={styles.container}>
      <InputDDD 
        onChangeText={
          (ddd)=>exibirCidadesDoDDD(ddd.trim())
        }
      />
      <ScrollView>
        {Object.keys(listaCidades).length > 0 && 
          listaCidades.cities.map((cidade) => (
            <CardCidade
              key={cidade}
              nome={cidade}
              uf={listaCidades.state}
            />
          ))
        } 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});