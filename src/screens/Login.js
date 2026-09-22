import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '../components/Background';
import { ButtonIcon } from '../components/ButtonIcon';
import { COLORS, FONTS } from '../theme';

const heroSource = require('../../assets/leesin-login-icon.png');
const { width: imgW, height: imgH } = Image.resolveAssetSource(heroSource);

export function Login({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <Background>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <View style={styles.hero}>
          <Image source={heroSource} style={styles.heroImage} resizeMode="cover" />
          <LinearGradient
            colors={['transparent', COLORS.BACKGROUND_TOP]}
            style={styles.heroFade}
            pointerEvents="none"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}e organize suas{'\n'}jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Text>

          <View style={styles.buttonWrapper}>
            <ButtonIcon
              title="Entrar com Discord"
              icon="discord"
              onPress={() => navigation.replace('Home')}
            />
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  hero: {
    width: '100%',
    maxHeight: 360,
    aspectRatio: imgW / imgH, 
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '45%',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: -40,
  },
  title: {
    color: COLORS.HEADING,
    fontFamily: FONTS.HERO_TITLE,
    fontSize: 40,
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: COLORS.TEXT,
    fontFamily: FONTS.BODY_REGULAR,
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    marginBottom: 64,
  },
  buttonWrapper: {
    width: '100%',
  },
});