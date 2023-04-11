import { StatusBar } from 'expo-status-bar';
import './src/constants/FireBase';
import RootNavigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>

  );
}

