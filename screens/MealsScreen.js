import { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MealItem from '../components/Mealitem';
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
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => {
          return meal.id;
        }}
        renderItem={(itemData) => {
          return (
            <MealItem
              title={itemData.item.title}
              imageUrl={itemData.item.imageUrl}
              affordability={itemData.item.affordability}
              complexity={itemData.item.complexity}
              duration={itemData.item.duration}
            />
          );
        }}
      />
    </View>
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
