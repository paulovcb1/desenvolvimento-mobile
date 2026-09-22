import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '../components/Background';
import { Header } from '../components/Header';
import { CategorySelect } from '../components/CategorySelect';
import { GameCover } from '../components/GameCover';
import { SmallInput } from '../components/SmallInput';
import { TextArea } from '../components/TextArea';
import { ButtonIcon } from '../components/ButtonIcon';
import { COLORS, FONTS } from '../theme';
import { CATEGORIES } from '../data/categories';
import { getGameById } from '../data/games';

const SELECTED_GUILD = { name: 'Valorosos', gameId: 'valorant' };

export function AppointmentCreate({ navigation }) {
  const insets = useSafeAreaInsets();
  const game = getGameById(SELECTED_GUILD.gameId);

  const [categorySelected, setCategorySelected] = useState(CATEGORIES[0].id);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  function handleSchedule() {
    Alert.alert('Agendada!', `Partida em ${SELECTED_GUILD.name} agendada com sucesso.`);
    navigation.navigate('Home');
  }

  return (
    <Background>
      <Header title="Agendar partida" />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'android' ? 'height' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets
          contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        >
        <Text style={styles.sectionLabel}>Categoria</Text>
        <CategorySelect
          categories={CATEGORIES}
          selectedCategoryId={categorySelected}
          onSelectCategory={setCategorySelected}
        />

        <View style={styles.content}>
          <TouchableOpacity style={styles.guildCard} activeOpacity={0.7}>
            <GameCover gameId={game.id} size={64} />
            <View style={styles.guildInfo}>
              <Text style={styles.guildName}>{SELECTED_GUILD.name}</Text>
              <Text style={styles.guildGame}>{game.title}</Text>
            </View>
            <Feather name="chevron-right" size={22} color={COLORS.TEXT} />
          </TouchableOpacity>

          <View style={styles.row}>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Dia e mês</Text>
              <View style={styles.fieldRow}>
                <SmallInput
                  placeholder="00"
                  value={day}
                  onChangeText={setDay}
                />
                <Text style={styles.separator}>/</Text>
                <SmallInput
                  placeholder="00"
                  value={month}
                  onChangeText={setMonth}
                />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Horário</Text>
              <View style={styles.fieldRow}>
                <SmallInput
                  placeholder="00"
                  value={hour}
                  onChangeText={setHour}
                />
                <Text style={styles.separator}>:</Text>
                <SmallInput
                  placeholder="00"
                  value={minute}
                  onChangeText={setMinute}
                />
              </View>
            </View>
          </View>

          <View style={styles.descriptionHeader}>
            <Text style={styles.fieldLabel}>Descrição</Text>
            <Text style={styles.maxLength}>Max 100 caracteres</Text>
          </View>
          <TextArea
            value={description}
            onChangeText={setDescription}
            maxLength={100}
          />

          <View style={styles.footer}>
            <ButtonIcon title="Agendar" icon={null} onPress={handleSchedule} />
          </View>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  sectionLabel: {
    color: COLORS.HEADING,
    fontFamily: FONTS.TITLE_SEMIBOLD,
    fontSize: 16,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  fieldLabel: {
    color: COLORS.HEADING,
    fontFamily: FONTS.TITLE_SEMIBOLD,
    fontSize: 16,
    marginBottom: 12,
  },
  content: {
    paddingHorizontal: 24,
    gap: 24,
    marginTop: 24,
  },
  guildCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 8,
    padding: 12,
  },
  guildInfo: {
    flex: 1,
  },
  guildName: {
    color: COLORS.HEADING,
    fontFamily: FONTS.TITLE_SEMIBOLD,
    fontSize: 16,
  },
  guildGame: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  field: {
    gap: 4,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  separator: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_MEDIUM,
    fontSize: 18,
  },
  descriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: -12,
  },
  maxLength: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 12,
  },
  footer: {
    marginTop: 8,
  },
});
