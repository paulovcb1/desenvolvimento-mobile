import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../theme';

export function Background({ children, style }) {
  return (
    <LinearGradient
      colors={[COLORS.BACKGROUND_TOP, COLORS.BACKGROUND]}
      style={[styles.container, style]}
    >
      <StatusBar style="light" />
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
