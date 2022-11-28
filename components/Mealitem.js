import { StyleSheet, Text, View } from 'react-native';

const MealItem = ({ title }) => {

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
