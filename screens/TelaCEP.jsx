import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { InputCEP } from '../components/Inputs';
import CardCEP from '../components/CardCEP';

import * as objCEP from '../services/cep.js';

export default function Tela_CEP() {

  const [listaCEP, setListaCEP] = useState({});

  const exibirCoisasDoCEP = (digito) => {
    function isNumero(valor) {
      return typeof valor === 'string' && valor.trim() !== '' && !isNaN(Number(valor));
    }
    
    if (!digito || digito.length !== 8 || !isNumero(digito)) {
      return;
    }

    objCEP.getCEP(digito)
    .then((resposta) => {
      console.log(resposta);
       setListaCEP(resposta);
    })
    .catch((error) => {
      console.error('Error fetching CEP:', error);
    });
  }

  return (
    <View style={styles.container}>
      <InputCEP
        onChangeText={
          (cep)=>exibirCoisasDoCEP(cep.trim())
        }
      />
        <ScrollView>
        {Object.keys(listaCEP).length > 0 && 
        <CardCEP
            key={listaCEP.cep}
            cep={listaCEP.cep}
            uf={listaCEP.state}
            cidade={listaCEP.city}
            bairro={listaCEP.neighborhood}
            rua={listaCEP.street}
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