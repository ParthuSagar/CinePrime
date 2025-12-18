import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';

export default function EntryScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoScale, { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.timing(logoOpacity, { toValue: 1, duration: 700, useNativeDriver: true }),
      ]),
      Animated.timing(textOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.delay(800),
    ]).start(() => {
      // After animation finishes, replace with main tabs
      router.replace('/(tabs)');
    });
  }, [logoScale, logoOpacity, textOpacity, router]);

  const size = Math.min(320, width * 0.6);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/android-icon-background.png')}
        style={[styles.logo, { width: size, height: size, transform: [{ scale: logoScale }], opacity: logoOpacity }]}
        resizeMode="contain"
        accessible
        accessibilityLabel="CinePrime logo"
      />

      <Animated.Text style={[styles.title, { opacity: textOpacity, transform: [{ translateY: textOpacity.interpolate({ inputRange: [0, 1], outputRange: [8, 0] }) }] }]}>CinePrime</Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },
});
