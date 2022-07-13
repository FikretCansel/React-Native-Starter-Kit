import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen";
import PlaceDetailScreen from "../pages/PlaceDetailScreen";
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import { Text } from "react-native";
import { auth } from "../firebase";
import {logOut, setUser} from "../redux-toolkit/userReducer"
import { useDispatch } from 'react-redux';

const Stack = createNativeStackNavigator();

//RealM

function NavigationController(props) {

    const dispatch = useDispatch();
  React.useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser));
        props.navigation.replace("Home");
      }else{
        dispatch(logOut());
        props.navigation.replace("Login");
      }
    })
    console.log("Çalıştı")
  }, [])



  return (
        <>
            <Text>HepGez</Text>
        </>
  );
}

export default NavigationController;