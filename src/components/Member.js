import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';
import { Avatar } from './Avatar';

const STATUS_LABEL = {
  available: 'Disponível',
  busy: 'Ocupado',
};

export function Member({ player }) {
  const isAvailable = player.status === 'available';

  return (
    <View style={styles.container}>
      <Avatar name={player.name} size={56} />

      <View style={styles.info}>
        <Text style={styles.name}>{player.name}</Text>
        <View style={styles.statusRow}>
          <View
            style={[
              styles.dot,
              { backgroundColor: isAvailable ? COLORS.SUCCESS : COLORS.PRIMARY },
            ]}
          />
          <Text style={styles.status}>{STATUS_LABEL[player.status]}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  info: {
    gap: 4,
  },
  name: {
    color: COLORS.HEADING,
    fontFamily: FONTS.TITLE_SEMIBOLD,
    fontSize: 15,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  status: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 13,
  },
});
