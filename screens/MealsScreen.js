import { StyleSheet, Text, View, FlatList } from 'react-native';
import MealItem from '../components/Mealitem';
import { MEALS } from '../data/dummy-data';

const MealsScreen = ({ route }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => {
          meal.id;
        }}
        renderItem={(itemData) => {
          return <MealItem title={itemData.item.title}/>
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
