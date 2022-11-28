import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }} // button press visual feedback for android
        style={({ pressed }) => [
          styles.button,
          (pressed && Platform.OS === 'ios') ? styles.buttonPressed_iOS : null,
        ]} // button press visual feedback for iOS
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    // shadow for Android (overflow:'hidden' hides the shadow in iOS)
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // shadow for iOS
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed_iOS: {
    opacity: 0.5,
  },
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
