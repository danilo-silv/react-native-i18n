import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimationEmpty: FunctionComponent = () => (
  <View style={styles.animationContainer}>
    <LottieView
      autoPlay
      loop
      style={{
        width: 311,
        height: 400,
      }}
      resizeMode='cover'
      source={require('./assets/lottie/empty.json')}
    />
  </View>
);

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(AnimationEmpty);
