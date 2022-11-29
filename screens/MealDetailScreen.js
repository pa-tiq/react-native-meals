import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import Card from '../components/Card';

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => {
    return meal.id === mealId;
  });
  return (
    <ScrollView style={styles.innerContainer}>
      <View>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailSimple}>{meal.duration}m</Text>
        <Text style={styles.detailSimple}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.detailSimple}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.detailList}>
        {meal.ingredients.map((ingredient, idx) => {
          return (
            <View style={styles.detailItem}>
              <Text style={styles.detailItemText} key={idx}>
                {ingredient}
              </Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.title}>Steps</Text>
      <View style={styles.detailList}>
        {meal.steps.map((step, idx) => {
          return (
            <View style={styles.detailItem}>
              <Text style={styles.detailItemText} key={idx}>
                {step}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 8,
    marginTop: 8,
    color: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginBottom: 5,
  },
  detailSimple: {
    marginHorizontal: 4,
    fontSize: 12,
    color: 'white',
  },
  detailList: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  detailItem:{
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 40,
    padding:10,
    marginVertical:4,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  detailItemText: {
    marginHorizontal: 4,
    marginTop: 2,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
