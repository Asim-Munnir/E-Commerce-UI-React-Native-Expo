import { NavigationContainer } from "@react-navigation/native";
import react from "react";
import StackNavigator from "./src/navigation/StackNavigator";
// import { CartProvider } from './src/context/CartContext'
import Toast from "react-native-toast-message";
import { StripeProvider } from '@stripe/stripe-react-native';


export default function App() {
  return (
    <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_KEY} >
      <NavigationContainer>
        <StackNavigator />
        <Toast />
      </NavigationContainer>
    </StripeProvider>
  );
}