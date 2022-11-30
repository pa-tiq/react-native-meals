import { View, StyleSheet, Text } from 'react-native';

const FavoritesScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Oie</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  }
});