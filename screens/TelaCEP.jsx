import { StyleSheet, View, Text} from 'react-native';

function TelaCEP() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.titulo}>Consultar CEP</Text>
        </View>

     );
}

export default TelaCEP;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2e2e2e',
    },
    titulo: {
        width: "100vw",
        backgroundColor: "#000",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 26,
        paddingTop: 0,
        paddingLeft: 15,
        paddingBottom: 10,
        paddingRight: 0,
    }
});