import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '../components/Background';
import { Avatar } from '../components/Avatar';
import { CategorySelect } from '../components/CategorySelect';
import { ListHeader } from '../components/ListHeader';
import { ListDivider } from '../components/ListDivider';
import { Appointment } from '../components/Appointment';
import { COLORS, FONTS } from '../theme';
import { CATEGORIES } from '../data/categories';
import { APPOINTMENTS } from '../data/appointments';
import { CURRENT_USER } from '../data/user';

export function Home({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <Background>
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <View style={styles.profile}>
          <Avatar name={CURRENT_USER.name} size={64} />
          <View>
            <Text style={styles.greeting}>
              Olá, <Text style={styles.greetingName}>{CURRENT_USER.name}</Text>
            </Text>
            <Text style={styles.subtitle}>{CURRENT_USER.greeting}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AppointmentCreate')}
        >
          <Feather name="plus" size={24} color={COLORS.WHITE} />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <CategorySelect categories={CATEGORIES} />
      </View>

      <ListHeader title="Partidas agendadas" count={APPOINTMENTS.length} />

      <FlatList
        style={styles.list}
        data={APPOINTMENTS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        ItemSeparatorComponent={ListDivider}
        renderItem={({ item }) => (
          <Appointment
            appointment={item}
            onPress={() =>
              navigation.navigate('AppointmentDetails', { appointmentId: item.id })
            }
          />
        )}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  greeting: {
    color: COLORS.HEADING,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 20,
  },
  greetingName: {
    fontFamily: FONTS.TITLE,
  },
  subtitle: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 14,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categories: {
    marginBottom: 24,
  },
  list: {
    marginTop: 16,
  },
});
