import { View, Text, ImageBackground, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '../components/Background';
import { Header } from '../components/Header';
import { ListHeader } from '../components/ListHeader';
import { ListDivider } from '../components/ListDivider';
import { Member } from '../components/Member';
import { ButtonIcon } from '../components/ButtonIcon';
import { COLORS, FONTS } from '../theme';
import { getAppointmentById } from '../data/appointments';
import { getGameById } from '../data/games';

export function AppointmentDetails({ route }) {
  const insets = useSafeAreaInsets();
  const { appointmentId } = route.params;
  const appointment = getAppointmentById(appointmentId);
  const game = getGameById(appointment.gameId);

  return (
    <Background>
      <Header title="Detalhes" actionIcon="share-2" />

      <ImageBackground source={game.image} style={styles.banner}>
        <LinearGradient
          colors={['transparent', COLORS.BACKGROUND]}
          style={styles.bannerFade}
        >
          <Text style={styles.guildName}>{appointment.guild.name}</Text>
          <Text style={styles.guildDescription}>{appointment.guild.description}</Text>
        </LinearGradient>
      </ImageBackground>

      <ListHeader title="Jogadores" count={appointment.players.length} />

      <FlatList
        data={appointment.players}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 8 }}
        ItemSeparatorComponent={ListDivider}
        renderItem={({ item }) => <Member player={item} />}
      />

      <View style={[styles.footer, { paddingBottom: insets.bottom + 24 }]}>
        <ButtonIcon title="Entrar na partida" icon="discord" onPress={() => {}} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 220,
    marginBottom: 8,
  },
  bannerFade: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
    gap: 8,
  },
  guildName: {
    color: COLORS.HEADING,
    fontFamily: FONTS.TITLE,
    fontSize: 28,
  },
  guildDescription: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
});
