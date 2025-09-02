import { StyleSheet, View, Text } from 'react-native';

const CardBANKS = ({ ispb, nome, codigo, nome_comp }) => {
  return (
    <View style={styles.card}>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>ISPB:</Text>
        <Text style={styles.resposta}>{ispb}</Text>
      </View>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>Nome:</Text>
        <Text style={styles.resposta}>{nome}</Text>
      </View>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>Código:</Text>
        <Text style={styles.resposta}>{codigo}</Text>
      </View>
      <View style={styles.viewTextos}>
        <Text style={styles.texto}>Nome Completo:</Text>
        <Text style={styles.resposta}>{nome_comp}</Text>
      </View>
    </View>
  );
}

export default CardBANKS;

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    flexDirection: 'collumn',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  resposta: {
    fontSize: 18,
    color: '#333',
  },
});