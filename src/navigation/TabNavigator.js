import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import ExploreScreen from "../screens/ExploreScreen";
import NotificationScreen from "../screens/NotificationScreen";
import Header from "../../components/Header";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    const { cartItems } = useContext(CartContext);
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                title: "Home",
                header: () => <Header />,
                headerShown: true,
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                )
            }} />

            <Tab.Screen name="Explore" component={ExploreScreen} options={{
                title: "Explore",
                headerShown: true,
                tabBarIcon: ({ color }) => (
                    <Ionicons name="search-outline" size={22} color={color} />
                )
            }} />

            <Tab.Screen name="Notifications" component={NotificationScreen} options={{
                title: "Notifications",
                headerShown: true,
                tabBarIcon: ({ color }) => (
                    <Ionicons name="notifications-outline" size={22} color={color} />
                )
            }} />

            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    title: "Cart",
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart-outline" size={size} color={color} />
                    ),

                    // 👇 badge yahan show hoga
                    tabBarBadge: cartItems.length > 0 ? cartItems.length : null,
                    tabBarBadgeStyle: {
                        backgroundColor: "red",
                        color: "white",
                        fontSize: 10,
                    }
                }}
            />

            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                title: 'Profile',
                headerShown: true,
                tabBarIcon: ({ color }) => (
                    <Ionicons name='person-outline' size={22} color={color} />
                )
            }} />

        </Tab.Navigator>
    )
}