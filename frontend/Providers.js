'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import { CartProvider } from './contexts/CartContext';

export function Providers({ children }) {
  return (
    <UserProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </UserProvider>
  );
}