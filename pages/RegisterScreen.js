import React, { useState,useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import {setUser} from "../redux-toolkit/userReducer"

function RegisterScreen(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const dispatch = useDispatch();


  const handleSubmit = () => {
    setResult(email);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(setUser(result))
        props.navigation.replace.replate("Home");
      })
      .catch((err) => console.log(err));

    console.log(email);
  };

  const handlePushLogin=()=>{
    props.navigation.replace("Login");
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
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePushLogin} style={styles.pushSignInText}>
        <Text>you have a acount? click for sign in</Text>
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
  pushSignInText:{
    marginTop:25
  }
});

export default RegisterScreen;
