import { FlatList, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../theme';

function CategoryCard({ category, selectable, selected, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={selectable ? 0.7 : 1}
      onPress={onPress}
      disabled={!selectable}
    >
      {selectable && (
        <View
          style={[
            styles.dot,
            selected ? styles.dotSelected : styles.dotUnselected,
          ]}
        />
      )}
      {category.image ? (
        <Image source={category.image} style={styles.icon} resizeMode="contain" />
      ) : (
        <MaterialCommunityIcons
          name={category.icon}
          size={32}
          color={COLORS.HEADING}
        />
      )}
      <Text style={styles.title}>{category.title}</Text>
    </TouchableOpacity>
  );
}

export function CategorySelect({ categories, selectedCategoryId, onSelectCategory }) {
  const isSelectable = typeof onSelectCategory === 'function';

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <CategoryCard
          category={item}
          selectable={isSelectable}
          selected={item.id === selectedCategoryId}
          onPress={() => onSelectCategory?.(item.id)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 24,
    gap: 12,
  },
  card: {
    width: 104,
    height: 112,
    borderRadius: 8,
    backgroundColor: COLORS.CARD,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  icon: {
    width: 32,
    height: 32,
  },
  title: {
    color: COLORS.HEADING,
    fontFamily: FONTS.TITLE_SEMIBOLD,
    fontSize: 13,
  },
  dot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 12,
    height: 12,
    borderRadius: 3,
  },
  dotSelected: {
    backgroundColor: COLORS.PRIMARY,
  },
  dotUnselected: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
  },
});
