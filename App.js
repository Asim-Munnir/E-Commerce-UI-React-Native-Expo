import { NavigationContainer } from "@react-navigation/native";
import react from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { CartProvider } from './src/context/CartContext'

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}