import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { TextInput,View,Button,StyleSheet,Text } from 'react-native';

const Signin = () => (
  <>
    <StatusBar />
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>My App</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
        <View style={{ marginTop: 20 }}>
          <Button title="Submit" color="#008891" />
        </View>
      </View>
    </View>
  </>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e7de',
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: '#008891',
    padding: 15,
  },
  text: {
    color: '#e7e7de',
    fontSize: 18,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderColor: '#008891',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default Signin;