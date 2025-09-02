import { StyleSheet, View, ImageBackground, Text } from "react-native";

const image = {uri: 'https://wallpapercave.com/wp/wp6953143.png'};

export default function Tela_HOME() {
    return(
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.container}
        >
          <View style={styles.viewtitulo}>
            <Text style={styles.txt1}>Consultar API's com</Text>
            <Text style={styles.txt2}>React Native</Text>
          </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'collumn',
    height: '100vh',
    width: '100vw',
  },
  gradiente: {
    backgroundColor: 'blue',
    height: '100%',
    width: '100%',
  },
  viewtitulo: {
    width: '100vw',
    height: 'auto',
    alignItems: 'center',
    padding: 10,
    marginBottom: 50,
  },
  txt1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  txt2: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00c3ffff',
  }
});