//App.js

import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import like from './src/assets/like.json'
import beer from './src/assets/beer-loading.json'

const App = () => {
  // Se usa el ref para que el valor de la animación se cree una vez y no cada que se monte el componente 
  const progress = useRef(new Animated.Value(0)).current;

  const [hasLiked, setHasLiked] = useState(false);

  const handleLikeAnimation = () => {
    const newValue = hasLiked ? 0 : 1;

    Animated.timing(progress, {
      toValue: newValue,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setHasLiked(!hasLiked);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.main}>
        <TouchableOpacity onPress={handleLikeAnimation} style={styles.opacity}>
          <LottieView progress={progress} source={like} />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <LottieView source={beer} autoPlay loop />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacity: {
    width: 200,
    height: 200,
  },
});

export default App;