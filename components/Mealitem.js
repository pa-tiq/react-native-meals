import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import PressableCard from './PressableCard';

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress }) => {
  return (
    <PressableCard onPress={onPress}>
      <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </View>
    </PressableCard>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 8,
    marginTop: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginBottom: 5
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
