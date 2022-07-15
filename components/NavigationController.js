import * as React from "react";
import {Text,StyleSheet} from "react-native";
import { Stack, ActivityIndicator } from "@react-native-material/core";
import { auth } from "../firebase";
import {logOut, setUser} from "../redux-toolkit/userReducer"
import { useDispatch } from 'react-redux';


//RealM

function NavigationController(props) {

    const dispatch = useDispatch();
  React.useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser));
        props.navigation.replace("Profile")
      }else{
        dispatch(logOut());
        props.navigation.replace("Login");
      }
    })
    console.log("Çalıştı")
  }, [])



  return (
    <Stack fill center spacing={4}>
    <ActivityIndicator size="large" />
    <Text style={styles.baseText}>Hep Gez</Text>
  </Stack>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default NavigationController;