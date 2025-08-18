'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Cart, CartItem, Product } from '@/types';

interface CartState {
  cart: Cart;
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; quantity?: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' };

interface CartContextType extends CartState {
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.cart.items.findIndex(
        item => item.product.id === action.product.id
      );

      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        newItems = state.cart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + (action.quantity || 1) }
            : item
        );
      } else {
        newItems = [
          ...state.cart.items,
          { product: action.product, quantity: action.quantity || 1 }
        ];
      }

      return {
        cart: {
          items: newItems,
          total: calculateTotal(newItems),
          itemCount: calculateItemCount(newItems),
        }
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.cart.items.filter(
        item => item.product.id !== action.productId
      );

      return {
        cart: {
          items: newItems,
          total: calculateTotal(newItems),
          itemCount: calculateItemCount(newItems),
        }
      };
    }

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', productId: action.productId });
      }

      const newItems = state.cart.items.map(item =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );

      return {
        cart: {
          items: newItems,
          total: calculateTotal(newItems),
          itemCount: calculateItemCount(newItems),
        }
      };
    }

    case 'CLEAR_CART': {
      return {
        cart: {
          items: [],
          total: 0,
          itemCount: 0,
        }
      };
    }

    default:
      return state;
  }
};

const initialState: CartState = {
  cart: {
    items: [],
    total: 0,
    itemCount: 0,
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', product, quantity });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemCount = () => state.cart.itemCount;
  const getCartTotal = () => state.cart.total;

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
