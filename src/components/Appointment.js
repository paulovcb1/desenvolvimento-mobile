import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../theme';
import { GameCover } from './GameCover';
import { CATEGORIES } from '../data/categories';

export function Appointment({ appointment, onPress }) {
  const category = CATEGORIES.find((item) => item.id === appointment.categoryId);
  const isOwner = appointment.guild.owner;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <GameCover gameId={appointment.gameId} size={64} />

      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.title}>{appointment.guild.name}</Text>
          <Text style={styles.category}>{category?.title}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Feather name="calendar" size={14} color={COLORS.PRIMARY} />
            <Text style={styles.date}>{appointment.date}</Text>
          </View>

          <View style={styles.rowItem}>
            <Ionicons
              name="person"
              size={14}
              color={isOwner ? COLORS.PRIMARY : COLORS.SUCCESS}
            />
            <Text
              style={[
                styles.owner,
                { color: isOwner ? COLORS.PRIMARY : COLORS.SUCCESS },
              ]}
            >
              {isOwner ? 'Anfitrião' : 'Visitante'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    color: COLORS.HEADING,
    fontFamily: FONTS.TITLE,
    fontSize: 16,
  },
  category: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 13,
  },
  date: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 13,
  },
  owner: {
    fontFamily: FONTS.BODY_MEDIUM,
    fontSize: 13,
  },
});
