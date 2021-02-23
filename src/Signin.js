import React, {useState} from 'react';
import { TextInput,View,Alert,Button,StyleSheet,Text } from 'react-native';

const Signin = () => {
  const [userValue, onChangeUser] = useState('Username');
  const [passValue, onChangePass] = useState('Password');

  return (
    <View style={styles.container}>
    <Text style={styles.title}>My Apps</Text>
    <TextInput style={styles.textInput}
      onChangeUser={text => onChangeUser(text)}
      placeholder={userValue}
      userValue={userValue}
    />
    <TextInput style={styles.textInput}
      onChangePass={text => onChangePass(text)}
      placeholder={passValue}
      passValue={passValue}
    />
     <Button
        title="Submit"
        color="#21908E" 
        onPress={() => Alert.alert('Submitted')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    textInput: {
        height: 40, 
        borderColor: 'green', 
        borderWidth: 1, 
        marginBottom:15,
        padding:10,
        color: 'grey',
       },
       title: {
        fontSize: 15,
        backgroundColor: "#21908E",
        padding: 10,
        color: "white",
       }
  })

export default Signin;