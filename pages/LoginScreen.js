import React, { useState,useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import tw from "tailwind-react-native-classnames";
import { auth } from "../firebase";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux-toolkit/userReducer';


function LoginScreen(props) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const dispatch = useDispatch()

  


  const handleSubmit = () => {
    setResult(email);

    auth
      .signInWithEmailAndPassword(email,password)
      .then((result) => {
        dispatch(setUser(result))
        props.navigation.replace.replate("Home");
      })
      .catch((err) => console.log(err));

    console.log(email);
  };

  const handlePushRegister=()=>{
    props.navigation.replace("Register");
  }

  return (
    <View style={tw`p-4 bg-red-300 flex-col`}>
      <TextInput
        onChangeText={setEmail}
        value={email}
        style={styles.textInput}
        placeholder="Email"
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        style={styles.textInput}
        placeholder="Password"
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePushRegister} style={styles.pushSignUpText}>
        <Text>you don't have acount? click for sign up</Text>
      </TouchableOpacity>
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 50,
  },
  loginButton: {
    marginTop: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 25,
  },
  pushSignUpText:{
    marginTop:25
  }
});

export default LoginScreen;
