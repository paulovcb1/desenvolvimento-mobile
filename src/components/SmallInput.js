import { TextInput, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';

export function SmallInput({ maxLength = 2, ...rest }) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      maxLength={maxLength}
      placeholderTextColor={COLORS.TEXT}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: COLORS.CARD,
    color: COLORS.HEADING,
    textAlign: 'center',
    fontFamily: FONTS.BODY_MEDIUM,
    fontSize: 16,
  },
});
