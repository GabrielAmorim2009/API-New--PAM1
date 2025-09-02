import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { InputBANKS } from '../components/Inputs.jsx';
import CardBANKS from '../components/CardBANKS.jsx';

import * as objBANKS from '../services/banks.js';

export default function Tela_BANKS() {

  const [listaBANKS, setListaBANKS] = useState({});

  const exibirCoisasDoBANKS = (digito) => {
    function isNumero(valor) {
      return typeof valor === 'string' && valor.trim() !== '' && !isNaN(Number(valor));
    }
    
    if (!digito || digito.length !== 1 || !isNumero(digito)) {
      return;
    }

    objBANKS.getBANKS(digito)
    .then((resposta) => {
      console.log(resposta);
       setListaBANKS(resposta);
    })
    .catch((error) => {
      console.error('Error fetching BANKS:', error);
    });
  }

  return (
    <View style={styles.container}>
      <InputBANKS
        onChangeText={
          (banks)=>exibirCoisasDoBANKS(banks.trim())
        }
      />
<ScrollView>
  {Object.keys(listaBANKS).length > 0 && 
    <CardBANKS
      key={listaBANKS.code}
      ispb={listaBANKS.ispb}
      nome={listaBANKS.name}
      codigo={listaBANKS.code}
      nome_comp={listaBANKS.fullName}
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