import { StyleSheet, View, Text } from 'react-native';

const CardCNPJ = ({ cnpj, uf, municipio, razao_social, nome_fantasia }) => {
  return (
    <View style={styles.card}>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>CNPJ:</Text>
        <Text style={styles.resposta}>{cnpj}</Text>
      </View>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>UF:</Text>
        <Text style={styles.resposta}>{uf}</Text>
      </View>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>Munícipio:</Text>
        <Text style={styles.resposta}>{municipio}</Text>
      </View>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>Razão Social:</Text>
        <Text style={styles.resposta}>{razao_social}</Text>
      </View>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>Nome Fantasia:</Text>
        <Text style={styles.resposta}>{nome_fantasia}</Text>
      </View>
    </View>
  );
}

export default CardCNPJ;

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    flexDirection: 'collum',
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
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  resposta: {
    fontSize: 22,
    color: '#333',
  },
});