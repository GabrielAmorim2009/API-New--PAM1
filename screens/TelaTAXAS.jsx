import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { InputTAXAS } from '../components/Inputs';
import CardTAXAS from '../components/CardTAXAS';

import * as objTAXAS from '../services/taxas.js';

export default function Tela_TAXAS() {

  const [listaTAXAS, setListaTAXAS] = useState({});

const exibirCoisasDaTAXAS = (digito) => {
  if (digito.length > 5) {
    setListaTAXAS({});
    return;
  }
  objTAXAS.getTAXAS(digito)
    .then(resposta => {
      setListaTAXAS(resposta);
    })
    .catch(error => {
      console.error(error);
      setListaTAXAS({});
    });
};

  return (
    <View style={styles.container}>
      <InputTAXAS
        onChangeText={
          (taxas)=>exibirCoisasDaTAXAS(taxas.trim())
        }
      />
      <ScrollView>
        {Object.keys(listaTAXAS).length > 0 && 
        <CardTAXAS
            key={listaTAXAS.nome}
            nome={listaTAXAS.nome}
            valor={listaTAXAS.valor}
        />
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