import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaDDD from './screens/TelaDDD';
import TelaCEP from './screens/TelaCEP';
import TelaCNPJ from './screens/TelaCNPJ';
import TelaBANKS from './screens/TelaBANKS';
import TelaHOME from './screens/TelaHOME';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}> {/* fundo cinza */}
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HOME"
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#000', // fundo do drawer
            },
            headerStyle: {
              backgroundColor: '#000',     // fundo do header
              borderBottomWidth: 2,        // borda inferior do header
              borderBottomColor: '#000',   // cor da borda preta
              boxShadow: '0 0 15px black',
            },
            headerTintColor: '#fff',        // cor do texto do header
            drawerActiveTintColor: '#fff',  // item ativo no drawer
            drawerInactiveTintColor: '#ccc',// item inativo
          }}
        >
          <Drawer.Screen name="HOME" component={TelaHOME} options={{
            drawerIcon:({color, size}) => (
              <Ionicons size={size} color={color} name='home'/>
            ),
            drawerActiveTintColor: "#00c3ffff",
          }}/>
          <Drawer.Screen name="DDD" component={TelaDDD} options={{
            drawerIcon:({color, size}) => (
              <Ionicons size={size} color={color} name="map"/>
            ),
            drawerActiveTintColor: "#00c3ffff",
          }}/>
          <Drawer.Screen name="CEP" component={TelaCEP} options={{
            drawerIcon:({color, size}) => (
              <Ionicons size={size} color={color} name="location-sharp"/>
            ),
            drawerActiveTintColor: "#00c3ffff",
          }}/>
          <Drawer.Screen name="CNPJ" component={TelaCNPJ} options={{
            drawerIcon:({color, size}) => (
              <Ionicons size={size} color={color} name="business"/>
            ),
            drawerActiveTintColor: "#00c3ffff",
          }}/>
          <Drawer.Screen name="BANKS" component={TelaBANKS} options={{
            drawerIcon:({color, size}) => (
              <Ionicons size={size} color={color} name="bag-sharp"/>
            ),
            drawerActiveTintColor: "#00c3ffff",
          }}/>
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