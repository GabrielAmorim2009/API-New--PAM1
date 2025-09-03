import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export const InputDDD = ({ onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { borderBottomColor: isFocused ? 'white' : 'gray' }
        ]}
        maxLength={2}
        placeholder="Digite o DDD"
        placeholderTextColor="white"
        keyboardType="numeric"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const  InputCNPJ = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={14}
        placeholder="Digite o CNPJ"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
}

export const  InputCEP = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={8}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
}

export const  InputBANKS = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        placeholder="Digite o código do banco"
        keyboardType='numeric'
        onChangeText={onChangeText}
      />
    </View>
  );
}

export const  InputTAXAS = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={5}
        placeholder="Digite o nome da taxa"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: 'gray',
    color: 'white',
    textAlign: 'center',
    height: 40,
    outlineWidth: 0,
    borderBottomWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 26,
  },
});