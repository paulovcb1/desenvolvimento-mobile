import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, FONTS } from '../theme';

export function ButtonIcon({ title, icon = 'discord', onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {icon ? (
        <View style={styles.iconWrapper}>
          <FontAwesome5 name={icon} size={20} color={COLORS.WHITE} />
        </View>
      ) : null}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 6,
    overflow: 'hidden',
  },
  iconWrapper: {
    height: '100%',
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.2)',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.WHITE,
    fontFamily: FONTS.BODY_BOLD,
    fontSize: 15,
  },
});
