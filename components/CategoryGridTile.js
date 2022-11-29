import { StyleSheet, Text, View } from 'react-native';
import PressableCard from './PressableCard';

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <PressableCard style={{ height: 150 }} onPress={onPress}>
      <View style={[styles.innerContainer, { backgroundColor: color }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </PressableCard>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
