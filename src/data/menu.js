export const categories = [
  {
    name: 'Hamburguesas',
    description: 'Jugosas y con todo el sabor',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85',
    icon: '☰',
  },
  {
    name: 'Perros calientes',
    description: 'El clásico que nunca falla',
    image: 'https://images.unsplash.com/photo-1768250708131-23da8d1cb5ad?auto=format&fit=crop&w=700&q=85',
    icon: '↝',
  },
  {
    name: 'Salchipapas',
    description: 'Papas, salchicha y mucho más',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85',
    icon: '♨',
  },
  {
    name: 'Fritos',
    description: 'Crujientes y deliciosos',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85',
    icon: '✦',
  },
];

export const products = [
  {
    id: 'producto-1',
    name: 'Hamburguesa Clásica',
    description: 'Carne de res, queso, lechuga, tomate, cebolla y salsa de la casa',
    price: 12000,
    image: categories[0].image,
  },
  {
    id: 'producto-2',
    name: 'Salchipapa Especial',
    description: 'Papas fritas, salchicha, queso y salsa de la casa',
    price: 15000,
    image: categories[2].image,
  },
];

export const drinks = [
  {
    name: 'Jugos naturales',
    description: 'Refrescantes y llenos de sabor',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Gaseosas',
    description: 'Postobon, Coca-Cola, Pepsi y más',
    image: 'https://images.unsplash.com/photo-1544241907-f3f1f5ded15a?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Limonadas',
    description: 'Natural, de coco, cerezada y más',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=700&q=85',
  },
];

export const combos = [
  {
    id: 'combo-1',
    name: 'Combo clásico',
    description: 'Hamburguesa + papas fritas + gaseosa',
    price: 16900,
    image: categories[0].image,
  },
  {
    id: 'combo-2',
    name: 'Combo salchipapa',
    description: 'Salchipapa especial + gaseosa',
    price: 13900,
    image: categories[2].image,
  },
  {
    id: 'combo-3',
    name: 'Combo perro',
    description: 'Perro americano + papas + gaseosa',
    price: 14900,
    image: categories[1].image,
  },
  {
    id: 'combo-4',
    name: 'Combo dúo',
    description: 'Dos hamburguesas + papas para compartir',
    price: 29900,
    image: categories[0].image,
  },
];

export const formatPrice = (price) =>
  price.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  });
