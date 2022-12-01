import { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import FavoritesContext from '../store/context/favorites-context';

const FavoritesScreen = ({ navigation }) => {
  const favoritesContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoritesContext.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
