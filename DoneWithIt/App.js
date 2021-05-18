import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SignInScreen";
import SignupScreen from "./screens/SignUpScreen";

const Stack = createStackNavigator();

function App() {
    console.log("here2");
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
