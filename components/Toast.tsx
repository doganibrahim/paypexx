import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

interface ToastProps {
  visible: boolean;
  message: string;
  onHide: () => void;
}

const Toast: React.FC<ToastProps> = ({ visible, message, onHide }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.delay(1500),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start(() => onHide());
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    left: '25%',
    right: '25%',
    backgroundColor: 'rgba(70, 70, 70, 0.85)',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});

export default Toast; 