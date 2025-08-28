import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { InputCNPJ } from '../components/Inputs';
import CardCNPJ from '../components/CardCNPJ';

import * as objCNPJ from '../services/cnpj.js';

export default function Tela_CNPJ() {

  const [listaCNPJ, setListaCNPJ] = useState({});

  const exibirCoisasDoCNPJ = (digito) => {
    function isNumero(valor) {
      return typeof valor === 'string' && valor.trim() !== '' && !isNaN(Number(valor));
    }
    
    if (!digito || digito.length !== 14 || !isNumero(digito)) {
      return;
    }

    objCNPJ.getCNPJ(digito)
    .then((resposta) => {
      console.log(resposta);
       setListaCNPJ(resposta);
    })
    .catch((error) => {
      console.error('Error fetching CNPJ:', error);
    });
  }

  return (
    <View style={styles.container}>
      <InputCNPJ
        onChangeText={
          (cnpj)=>exibirCoisasDoCNPJ(cnpj.trim())
        }
      />
<ScrollView>
  {Object.keys(listaCNPJ).length > 0 && 
    <CardCNPJ
      key={listaCNPJ.cnpj}
      cnpj={listaCNPJ.cnpj}
      uf={listaCNPJ.uf}
      municipio={listaCNPJ.municipio}
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