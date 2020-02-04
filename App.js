import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { creatStackNavigator, createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBP7hcksE1-V7nF2zybdkv64IWgURhbj0Y",
  authDomain: "manage-de1b2.firebaseapp.com",
  databaseURL: "https://manage-de1b2.firebaseio.com",
  projectId: "manage-de1b2",
  storageBucket: "manage-de1b2.appspot.com",
  messagingSenderId: "938754490049",
  appId: "1:938754490049:web:1eca657257e830a2e35e40",
  measurementId: "G-5YGVYV9QMM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
    Home: HomeScreen
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
