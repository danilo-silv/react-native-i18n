import { StatusBar } from 'expo-status-bar';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AnimationEmpty from './AnimationEmpty';
import { Languages } from './src/components';

import './src/utils/i18n';

import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <StatusBar style='auto' />

        <View style={styles.header}>
          <Text style={styles.title}>{t('favourites')}</Text>
          <Image source={require('./assets/profile.png')} />
        </View>
        <View style={styles.animation}>
          <AnimationEmpty />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>{t('have-files')}</Text>
          <Text style={styles.infoDescription}>{t('your-files')}</Text>

          <Pressable style={styles.infoButton} onPress={() => {}}>
            <Text style={styles.infoButtonText}>{t('button-upload')}</Text>
          </Pressable>
        </View>

        <Languages />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 22,
    color: '#191D21',
    letterSpacing: 0.5,
  },
  animation: {
    paddingTop: 50,
    paddingBottom: 24,
  },

  info: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTitle: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 32,
    color: '#191D21',
    letterSpacing: 0.5,
  },
  infoDescription: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#656F77',
    paddingBottom: 24,
  },
  infoButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    backgroundColor: '#FFDBE1',
  },
  infoButtonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#FC6873',
  },
});
