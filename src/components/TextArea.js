import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';

export function TextArea({ value, onChangeText, maxLength = 100 }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        multiline
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.TEXT}
        textAlignVertical="top"
      />
      <Text style={styles.counter}>
        {value.length}/{maxLength}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 120,
    borderRadius: 6,
    backgroundColor: COLORS.CARD,
    color: COLORS.HEADING,
    padding: 16,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 14,
  },
  counter: {
    position: 'absolute',
    right: 16,
    bottom: 12,
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 11,
  },
});
