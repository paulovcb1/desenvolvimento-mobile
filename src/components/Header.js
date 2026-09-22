import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '../theme';

export function Header({ title, onActionPress, actionIcon }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 16 }]}>
      <TouchableOpacity
        onPress={navigation.goBack}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
      >
        <Feather name="arrow-left" size={24} color={COLORS.HEADING} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {actionIcon ? (
        <TouchableOpacity
          onPress={onActionPress}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Feather name={actionIcon} size={22} color={COLORS.PRIMARY} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.HEADER,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  title: {
    color: COLORS.HEADING,
    fontFamily: FONTS.TITLE,
    fontSize: 20,
  },
});
