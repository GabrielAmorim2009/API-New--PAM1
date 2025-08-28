import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaDDD from './screens/TelaDDD';
import TelaCEP from './screens/TelaCEP';
import TelaCNPJ from './screens/TelaCNPJ';
import TelaBANKS from './screens/TelaBANKS';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}> {/* fundo cinza */}
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="DDD"
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#000', // fundo do drawer
            },
            headerStyle: {
              backgroundColor: '#000',     // fundo do header
              borderBottomWidth: 2,        // borda inferior do header
              borderBottomColor: '#000',   // cor da borda preta
            },
            headerTintColor: '#fff',        // cor do texto do header
            drawerActiveTintColor: '#fff',  // item ativo no drawer
            drawerInactiveTintColor: '#ccc',// item inativo
          }}
        >
          <Drawer.Screen name="DDD" component={TelaDDD} />
          <Drawer.Screen name="CEP" component={TelaCEP} />
          <Drawer.Screen name="CNPJ" component={TelaCNPJ} />
          <Drawer.Screen name="BANKS" component={TelaBANKS} />
        </Drawer.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc', // fundo cinza
  },
});