import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
    cartItems: [],

    // ✅ Add to cart
    addToCart: (product) =>
        set((state) => {
            const existing = state.cartItems.find(
                (item) => item._id === product._id
            );

            if (existing) {
                return {
                    cartItems: state.cartItems.map((item) =>
                        item._id === product._id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    cartItems: [
                        ...state.cartItems,
                        { ...product, quantity: 1 },
                    ],
                };
            }
        }),

    // ✅ Increase Quantity
    increaseQty: (productId) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item._id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        })),

    // ✅ Decrease Quantity
    decreaseQty: (productId) =>
        set((state) => ({
            cartItems: state.cartItems
                .map((item) =>
                    item._id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0), // 👈 auto remove if 0
        })),

    // ✅ Remove Item
    removeFromCart: (id) =>
        set((state) => ({
            cartItems: state.cartItems.filter(
                (item) => item._id !== id
            ),
        })),

    // clear cart
    clearCart: () => set({ cartItems: [] })

}));