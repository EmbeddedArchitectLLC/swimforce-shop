'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CATALOG, type Product } from '@/lib/products';

export type CartLine = {
  productId: string;
  quantity: number;
};

type CartState = {
  items: CartLine[];
  add: (productId: string, quantity?: number) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
  detailedItems: Array<{ product: Product; quantity: number; lineTotal: number }>;
};

const CartContext = createContext<CartState | null>(null);

const STORAGE_KEY = 'swimforce_cart_v1';

function priceOf(productId: string): number {
  return CATALOG.find((p) => p.id === productId)?.price ?? 0;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>(() => {
    // Client Components still render on the server in Next.js; guard window access.
    if (typeof window === 'undefined') return [];
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartLine[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const api = useMemo<CartState>(() => {
    const add = (productId: string, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.productId === productId);
        if (existing) {
          return prev.map((i) =>
            i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i
          );
        }
        return [...prev, { productId, quantity }];
      });
    };

    const remove = (productId: string) => {
      setItems((prev) => prev.filter((i) => i.productId !== productId));
    };

    const setQuantity = (productId: string, quantity: number) => {
      setItems((prev) =>
        prev
          .map((i) => (i.productId === productId ? { ...i, quantity } : i))
          .filter((i) => i.quantity > 0)
      );
    };

    const clear = () => setItems([]);

    const subtotal = items.reduce((sum, i) => sum + priceOf(i.productId) * i.quantity, 0);
    const count = items.reduce((sum, i) => sum + i.quantity, 0);

    const detailedItems = items
      .map((i) => {
        const product = CATALOG.find((p) => p.id === i.productId);
        if (!product) return null;
        const lineTotal = product.price * i.quantity;
        return { product, quantity: i.quantity, lineTotal };
      })
      .filter(Boolean) as Array<{ product: Product; quantity: number; lineTotal: number }>;

    return { items, add, remove, setQuantity, clear, subtotal, count, detailedItems };
  }, [items]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
