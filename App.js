import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#060505' }, //header color
            headerTintColor: 'white', // header text color
            contentStyle: { backgroundColor: '#665c4a' }, // background color
          }}
        >
          <Stack.Screen
            name='Categories'
            component={CategoryScreen}
            options={{ title: 'All Categories' }}
          />
          <Stack.Screen
            name='CategoryDetails'
            component={MealsScreen}
          />          
          <Stack.Screen
            name='ItemDetails'
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
