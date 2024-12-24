import React from 'react';
import { View, StyleSheet } from 'react-native';
import FutsalScoreApp from './src/components/FutsalScoreApp';

const App = () => {
  return (
    <View style={styles.container}>
      <FutsalScoreApp teamAName="JUVENTUS" teamBName="REAL BETIS" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
