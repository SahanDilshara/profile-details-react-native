import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar as NativeStatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const PROFILE = {
  name: 'Diluka',
  email: 'diluka.w@nsbm.ac.lk',
};

function ProfileAvatar() {
  return (
    <View style={styles.avatarFrame} accessibilityLabel="Verified profile avatar">
      <View style={styles.avatarFace}>
        <View style={styles.hair} />
        <View style={styles.glassesRow}>
          <View style={styles.glass} />
          <View style={styles.glassesBridge} />
          <View style={styles.glass} />
        </View>
        <View style={styles.body} />
      </View>
      <View style={styles.verifiedBadge}>
        <Text style={styles.verifiedText}>✓</Text>
      </View>
    </View>
  );
}

function DetailItem({ label, icon, children }) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <View style={styles.detailValueRow}>
        {icon ? <Text style={styles.detailIcon}>{icon}</Text> : null}
        <Text style={styles.detailValue}>{children}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor="#050505" />
      <View style={styles.screen}>
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>My Profile</Text>
        </View>

        <View style={styles.content}>
          <ProfileAvatar />
          <View style={styles.divider} />

          <DetailItem label="Name">{PROFILE.name}</DetailItem>
          <DetailItem label="Email" icon="✉">{PROFILE.email}</DetailItem>
          <DetailItem label="Points" icon="★">{points}</DetailItem>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Add one point"
          onPress={() => setPoints((currentPoints) => currentPoints + 1)}
          style={({ pressed }) => [styles.floatingButton, pressed && styles.floatingButtonPressed]}
        >
          <Text style={styles.plusIcon}>＋</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#050505',
    paddingTop: Platform.OS === 'android' ? NativeStatusBar.currentHeight : 0,
  },
  screen: {
    flex: 1,
    backgroundColor: '#f8f6f6',
  },
  appBar: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#050505',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 3,
    elevation: 5,
  },
  appBarTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  avatarFrame: {
    width: 116,
    height: 116,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 58,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  avatarFace: {
    width: 96,
    height: 96,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 48,
    backgroundColor: '#f2c7b5',
  },
  hair: {
    width: 62,
    height: 36,
    marginTop: -2,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 12,
    backgroundColor: '#242424',
    transform: [{ rotate: '-3deg' }],
  },
  glassesRow: {
    position: 'absolute',
    top: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  glass: {
    width: 27,
    height: 17,
    borderWidth: 3,
    borderColor: '#171717',
    borderRadius: 7,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  glassesBridge: {
    width: 6,
    height: 3,
    backgroundColor: '#171717',
  },
  body: {
    position: 'absolute',
    bottom: -20,
    width: 82,
    height: 60,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    backgroundColor: '#343434',
  },
  verifiedBadge: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#f8f6f6',
    borderRadius: 17,
    backgroundColor: '#15d900',
  },
  verifiedText: {
    marginTop: -2,
    color: '#ffffff',
    fontSize: 21,
    fontWeight: '900',
  },
  divider: {
    height: 2,
    marginTop: 10,
    marginBottom: 18,
    backgroundColor: '#292929',
  },
  detailItem: {
    marginBottom: 24,
  },
  detailLabel: {
    marginBottom: 7,
    color: '#151515',
    fontSize: 16,
    fontWeight: '700',
  },
  detailValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    width: 26,
    color: '#050505',
    fontSize: 17,
  },
  detailValue: {
    color: '#252525',
    fontSize: 15,
  },
  floatingButton: {
    position: 'absolute',
    right: 22,
    bottom: 24,
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 29,
    backgroundColor: '#050505',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.32,
    shadowRadius: 7,
    elevation: 9,
  },
  floatingButtonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.92 }],
  },
  plusIcon: {
    marginTop: -3,
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '300',
  },
});
