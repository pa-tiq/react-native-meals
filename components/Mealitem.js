import { Image, StyleSheet, Text, View, Pressable} from 'react-native';

const MealItem = ({ title, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
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
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  }
});
