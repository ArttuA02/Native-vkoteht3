import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import SecondScreen from '../Screens/SecondScreen';

export default function CustomNavigationBar({navigation, route, options, back}) {
    const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title={title} />
        {route.name === 'Home' && (
            <Appbar.Action 
            icon={() => <MaterialIcons name="arrow-forward" size={24} />}
            onPress={() => navigation.navigate('Second')} 
        />
        )}
    </Appbar.Header>
  );
}