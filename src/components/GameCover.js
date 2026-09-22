import { View, Image, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../theme';
import { getGameById } from '../data/games';

export function GameCover({ gameId, size = 64 }) {
  const game = getGameById(gameId);

  if (game?.image) {
    return (
      <Image
        source={game.image}
        style={[styles.container, { width: size, height: size }]}
        resizeMode="cover"
      />
    );
  }

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, backgroundColor: game?.color ?? COLORS.CARD },
        styles.placeholder,
      ]}
    >
      <MaterialCommunityIcons
        name={game?.icon ?? 'gamepad-variant'}
        size={size * 0.42}
        color={COLORS.HEADING}
      />
      <Text numberOfLines={1} style={styles.label}>
        {game?.title?.split(' ')[0] ?? ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    overflow: 'hidden',
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  label: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_MEDIUM,
    fontSize: 9,
  },
});
