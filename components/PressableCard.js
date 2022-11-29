import { StyleSheet, View, Pressable, Platform } from 'react-native';

const PressableCard = (props) => {
  return (
    <View style={[styles.card, props.style]}>
      <Pressable
        android_ripple={{ color: '#ccc' }} // button press visual feedback for android
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed_iOS : null,
        ]} // button press visual feedback for iOS
        onPress={props.onPress}
      >
        {props.children}
      </Pressable>
    </View>
  );
};

export default PressableCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    // shadow for android:
    elevation: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // shadow for iOS:
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    shadowOpacity: 0.35,
  },
  button: {
    flex: 1,
  },
  buttonPressed_iOS: {
    opacity: 0.8,
  },
});
