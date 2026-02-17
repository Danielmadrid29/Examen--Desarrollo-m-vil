import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { BankProvider } from './components/BankContext';
import { NavigationContainer } from '@react-navigation/native';
import { inicioScreen } from './hooks/inicioScreen';
import { TransferScreen } from './hooks/TransferenciaScreen';
import { HistorialScreen } from './hooks/HistorialScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
     <BankProvider>
     <NavigationContainer>
     <Stack.Navigator>

      <Stack.Screen name='inicio' component={inicioScreen}></Stack.Screen>
      <Stack.Screen name='Transferir' component={TransferScreen}></Stack.Screen>
       <Stack.Screen name='Historial' component={HistorialScreen}></Stack.Screen>





     </Stack.Navigator>






     </NavigationContainer>





     </BankProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
