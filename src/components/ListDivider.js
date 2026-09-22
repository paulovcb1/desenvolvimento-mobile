import { View, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export function ListDivider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: COLORS.BORDER,
    marginHorizontal: 24,
  },
});
