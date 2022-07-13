import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./pages/HomeScreen";
import PlaceDetailScreen from "./pages/PlaceDetailScreen";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store.js";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import NavigationController from "./components/NavigationController";

const Stack = createNativeStackNavigator();

//RealM

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="NavigationController" component={NavigationController} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true }} />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={PlaceDetailScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
