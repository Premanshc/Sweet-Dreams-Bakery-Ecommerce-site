export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cakes' | 'pastries' | 'bread' | 'cookies' | 'seasonal';
  featured?: boolean;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  allergens: string[];
  inStock: boolean;
}

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  orderDate: string;
  deliveryDate?: string;
  notes?: string;
}
