import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './Mealitem';

const MealsList = ({ navigation, items }) => {
  const renderMealItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('ItemDetails', { mealId: itemData.item.id });
    };
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        onPress={pressHandler}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
