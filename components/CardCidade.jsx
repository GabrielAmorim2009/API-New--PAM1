import { StyleSheet, View, Text } from 'react-native';

const CardCidade = ({ nome, uf }) => {
  return (
    <View style={styles.card}>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>Cidade:</Text>
        <Text style={styles.resposta}>{nome}</Text>
      </View>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>UF:</Text>
        <Text style={styles.resposta}>{uf}</Text>
      </View>
    </View>
  );
}

export default CardCidade;

const styles = StyleSheet.create({
  card: {
    width: '95%',
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewTextos: {
    flexDirection: 'row',
  },
  texto: {
    marginRight: 5,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  resposta: {
    fontSize: 26,
    color: '#333',
  },
});