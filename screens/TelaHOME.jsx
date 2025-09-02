import { StyleSheet, View } from "react-native";

export default function Tela_HOME() {
    return <View style={styles.container}>
        <ImageBrackground
          
        ></ImageBrackground>
    </View>
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texto:{
    color: 'black',
    fontSize: 20,
  }
});