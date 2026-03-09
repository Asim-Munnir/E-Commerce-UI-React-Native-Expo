import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import TabNavigator from "./TabNavigator";
import ProductDetail from "../screens/ProductDetail";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Color";
import { useNavigation } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";


const Stack = createNativeStackNavigator()

export default function StackNavigator() {
    const navigation = useNavigation()
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} options={{ title: 'Sign Up' }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name="MainTabs"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
                title: "Product Details", headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("MainTabs", { screen: "Cart" })}>
                        <Ionicons name="cart-outline" size={24} color={Colors.black} />
                    </TouchableOpacity>
                )
            }} />
        </Stack.Navigator>
    )
}