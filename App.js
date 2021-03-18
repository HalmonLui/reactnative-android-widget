import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{padding: 40, fontSize: 20}}>React Native Widget Trial</Text>
      <View style={styles.inputContainer}>
        <Text style={{padding: 20}}>Widget Text:</Text>
        <TextInput
          style={{
          height: 40,
          width: 150,
          borderColor: 'gray',
          borderWidth: 1
          }}
          defaultValue="test"></TextInput>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    width: 300,
    padding: 10,
  }
});
