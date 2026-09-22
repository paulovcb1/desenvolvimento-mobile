import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';

export function ListHeader({ title, count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {count !== undefined && <Text style={styles.count}>Total {count}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.HEADING,
    fontFamily: FONTS.TITLE,
    fontSize: 18,
  },
  count: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 13,
  },
});
