import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home/HomeScreen";
import SigninScreen from "./screens/Sign/SignInScreen";
import SignupScreen from "./screens/Sign/SignUpScreen";
import NewNote from "./screens/Note/NewNote";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="NewNote" component={NewNote} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
