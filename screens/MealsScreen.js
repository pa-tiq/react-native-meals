import { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import MealsList from '../components/MealsList';
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return (
    <MealsList navigation={navigation} items={displayedMeals} />
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
