import {  StyleSheet ,Text } from 'react-native';

export default function TabTwoScreen() {
  return (
      <>
        <Text style={styles.titleContainer}>Tab Two Screen</Text>
      </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});
