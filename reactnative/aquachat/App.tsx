import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, TextInput} from 'react-native';

const App: React.FC= () => (
  <View style={styles.container}>
    <Text> Hello React</Text>
  </View>
);

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;