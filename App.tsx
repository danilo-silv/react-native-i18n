import { StatusBar } from 'expo-status-bar';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AnimationEmpty from './AnimationEmpty';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <StatusBar style='auto' />

        <View style={styles.header}>
          <Text style={styles.title}>Favourites</Text>
          <Image source={require('./assets/profile.png')} />
        </View>
        <View style={styles.animation}>
          <AnimationEmpty />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>You don't have files</Text>
          <Text style={styles.infoDescription}>
            You'll find your files here!
          </Text>

          <Pressable style={styles.infoButton} onPress={() => {}}>
            <Text style={styles.infoButtonText}>Upload File</Text>
          </Pressable>
        </View>
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
    borderRadius: 4,
    backgroundColor: '#FFDBE1',
  },
  infoButtonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#FC6873',
  },
});
