import { StyleSheet, View, Text } from 'react-native';

const CardCNPJ = ({ cnpj, uf, municipio, razao_social, nome_fantasia }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>CNPJ: {cnpj}</Text>
      <Text style={styles.texto}>UF: {uf}</Text>
      <Text style={styles.texto}>Munícipio: {municipio}</Text>
      <Text style={styles.texto}>Razão Social: {razao_social}</Text>
      <Text style={styles.texto}>Nome Fantasia: {nome_fantasia}</Text>
    </View>
  );
}

export default CardCNPJ;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    flexDirection: 'center',
    align: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  texto: {
    color: '#333',
    marginTop: 5,
    fontSize: 16,
  },
});