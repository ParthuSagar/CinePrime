import { View, Text, TouchableOpacity, StyleSheet, Animated, useWindowDimensions, Image } from 'react-native';
import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        accessible
        accessibilityLabel="CinePrime logo"
        source={require('../../assets/images/android-icon-background.png')}
        style={[styles.image, { opacity: fadeAnim, width: Math.min(260, width * 0.6), height: Math.min(260, width * 0.6) }]}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to CinePrime</Text>
      <Text style={styles.subtitle}>Discover movies and build your watchlist.</Text>

      <TouchableOpacity
        style={styles.loginButton}
        accessibilityRole="button"
        accessibilityLabel="Log in"
        // onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupButton}
        accessibilityRole="button"
        accessibilityLabel="Sign up"
        // onPress={() => router.push('/signup')}
      >
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    // Add resizeMode if needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#007AFF', // Blue color for primary action
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signupButton: {
    // Optional: a secondary button style
    paddingVertical: 12,
  },
  signupText: {
    color: '#007AFF',
    fontSize: 16,
  }
});
