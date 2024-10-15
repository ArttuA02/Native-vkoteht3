import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import SecondScreen from './Screens/SecondScreen';
import CustomNavigationBar from './components/Appbar';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerTitle: 'Home', }} />
          <Stack.Screen name='Second' component={SecondScreen} option={{ title: 'Second', headerTitle: 'Second', }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
