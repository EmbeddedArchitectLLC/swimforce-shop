export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
};

// Placeholder catalog (Phase 0). Next step: move to Stripe Products + Price IDs.
export const CATALOG: Product[] = [
  {
    id: 'paddles-pro',
    name: 'Pro Swim Paddles',
    description: 'Build strength and improve catch mechanics.',
    price: 34.99,
    category: 'paddles',
  },
  {
    id: 'fins-blue',
    name: 'Training Fins - Blue',
    description: 'Improve kick power and ankle flexibility.',
    price: 49.99,
    category: 'fins',
  },
  {
    id: 'pullbuoy-pro',
    name: 'Pull Buoy Pro',
    description: 'Isolate upper body and improve body position.',
    price: 24.99,
    category: 'buoys',
  },
  {
    id: 'kickboard-elite',
    name: 'Kickboard Elite',
    description: 'Target kick sets with better ergonomics.',
    price: 29.99,
    category: 'kickboards',
  },
  {
    id: 'snorkel',
    name: 'Swim Snorkel',
    description: 'Focus on technique without turning to breathe.',
    price: 39.99,
    category: 'snorkels',
  },
  {
    id: 'bands',
    name: 'Resistance Bands Set',
    description: 'Dryland training for shoulder stability and power.',
    price: 44.99,
    category: 'resistance',
  },
  {
    id: 'tempo-trainer',
    name: 'Tempo Trainer Pro',
    description: 'Set stroke cadence and pace discipline.',
    price: 59.99,
    category: 'electronics',
  },
  {
    id: 'mesh-bag',
    name: 'Mesh Gear Bag',
    description: 'Carry gear with fast drainage and durability.',
    price: 19.99,
    category: 'bags',
  },
];

export const CATEGORIES: { id: string; name: string }[] = [
  { id: 'all', name: 'All Products' },
  { id: 'paddles', name: 'Paddles' },
  { id: 'fins', name: 'Fins' },
  { id: 'buoys', name: 'Pull Buoys' },
  { id: 'kickboards', name: 'Kickboards' },
  { id: 'snorkels', name: 'Snorkels' },
  { id: 'resistance', name: 'Resistance' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'bags', name: 'Bags' },
];
