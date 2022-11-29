import { StyleSheet, View, Platform } from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.card, props.style]}>
      {props.children}
    </View>
  );
};

export default Card;

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
});
