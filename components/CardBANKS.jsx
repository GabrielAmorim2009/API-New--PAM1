import { StyleSheet, View, Text } from 'react-native';

const CardBANKS = ({ ispb, nome }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Código: {ispb}</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
    </View>
  );
}

export default CardBANKS;

const styles = StyleSheet.create({
  card: {
    width: '100%',
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
  texto: {
    fontSize: 16,
    color: '#333',
  },
});