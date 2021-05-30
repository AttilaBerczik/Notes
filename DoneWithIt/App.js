import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home/HomeScreen";
import SigninScreen from "./screens/Sign/SignInScreen";
import SignupScreen from "./screens/Sign/SignUpScreen";
import NewNote from "./screens/Note/NewNote";
import { LogBox } from "react-native";
const Stack = createStackNavigator();

function App() {
    LogBox.ignoreLogs(["Setting a timer"]);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen options={{ title: "My home" }} name="Home" component={HomeScreen} />
                <Stack.Screen name="NewNote" options={{ title: "Edit Note" }} component={NewNote} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
