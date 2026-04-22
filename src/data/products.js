export const products = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 299.99,
    originalPrice: 399.99,
    description: 'Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e14?w=800'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: 'John D.', rating: 5, text: 'Amazing sound quality!', date: '2024-01-15' },
      { id: 2, user: 'Sarah M.', rating: 4, text: 'Great comfort but pricey', date: '2024-01-10' }
    ],
    stock: 15,
    isNew: true,
    sales: 234
  },
  {
    id: '2',
    name: 'Minimalist Leather Watch',
    category: 'Accessories',
    price: 189.99,
    originalPrice: null,
    description: 'Elegant timepiece with genuine leather strap and sapphire crystal. Water resistant to 50m.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800'
    ],
    rating: 4.6,
    reviews: [
      { id: 1, user: 'Mike R.', rating: 5, text: 'Beautiful design!', date: '2024-01-12' }
    ],
    stock: 8,
    isNew: false,
    sales: 156
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    price: 449.99,
    originalPrice: 549.99,
    description: 'Premium ergonomic chair with lumbar support, adjustable armrests, and breathable mesh back. Perfect for long work hours.',
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800',
      'https://images.unsplash.com/photo-1592078615290-033ee584e17f?w=800'
    ],
    rating: 4.9,
    reviews: [
      { id: 1, user: 'Lisa K.', rating: 5, text: 'Best chair I have ever owned!', date: '2024-01-18' },
      { id: 2, user: 'Tom B.', rating: 5, text: 'Worth every penny', date: '2024-01-14' }
    ],
    stock: 12,
    isNew: false,
    sales: 89
  },
  {
    id: '4',
    name: 'Smart Fitness Tracker',
    category: 'Electronics',
    price: 149.99,
    originalPrice: 179.99,
    description: 'Track your health metrics 24/7 with GPS, heart rate monitoring, sleep tracking, and 7-day battery life.',
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800',
      'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=800'
    ],
    rating: 4.5,
    reviews: [
      { id: 1, user: 'Emma S.', rating: 4, text: 'Great for running', date: '2024-01-16' }
    ],
    stock: 25,
    isNew: true,
    sales: 312
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    category: 'Accessories',
    price: 129.99,
    originalPrice: null,
    description: 'Premium UV400 protection with polarized lenses. Lightweight titanium frame for all-day comfort.',
    images: [
      'https://i.etsystatic.com/35084072/r/il/7eaa70/3999771282/il_570xN.3999771282_rtof.jpg',
      'https://i.etsystatic.com/35084072/r/il/7eaa70/3999771282/il_570xN.3999771282_rtof.jpg',
      'https://i.etsystatic.com/35084072/r/il/7eaa70/3999771282/il_570xN.3999771282_rtof.jpg',
      'https://i.etsystatic.com/35084072/r/il/7eaa70/3999771282/il_570xN.3999771282_rtof.jpg'
    ],
    rating: 4.7,
    reviews: [
      { id: 1, user: 'Alex P.', rating: 5, text: 'Very stylish!', date: '2024-01-11' }
    ],
    stock: 20,
    isNew: false,
    sales: 178
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 79.99,
    originalPrice: 99.99,
    description: 'Waterproof speaker with 360° sound. 12 hours playtime and rugged design for outdoor adventures.',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
      'https://images.unsplash.com/photo-1558538534-82f3c9f3e9b5?w=800'
    ],
    rating: 4.4,
    reviews: [
      { id: 1, user: 'Chris W.', rating: 4, text: 'Great sound for the price', date: '2024-01-13' }
    ],
    stock: 30,
    isNew: false,
    sales: 445
  },
  {
    id: '7',
    name: 'Canvas Backpack',
    category: 'Accessories',
    price: 69.99,
    originalPrice: null,
    description: 'Durable canvas backpack with laptop compartment. Perfect for work or travel.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800'
    ],
    rating: 4.3,
    reviews: [
      { id: 1, user: 'David L.', rating: 4, text: 'Very durable', date: '2024-01-09' }
    ],
    stock: 18,
    isNew: false,
    sales: 234
  },
  {
    id: '8',
    name: 'Ceramic Vase Set',
    category: 'Home',
    price: 89.99,
    originalPrice: 119.99,
    description: 'Set of 3 handcrafted ceramic vases in modern geometric shapes. Perfect for any interior.',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800',
      'https://images.unsplash.com/photo-1612196808214-b8e1d80470f5?w=800'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: 'Nina T.', rating: 5, text: 'Stunning craftsmanship!', date: '2024-01-17' }
    ],
    stock: 10,
    isNew: true,
    sales: 67
  },
  {
    id: '9',
    name: 'Yoga Mat Premium',
    category: 'Sports',
    price: 49.99,
    originalPrice: null,
    description: 'Extra thick eco-friendly yoga mat with alignment lines. Non-slip surface for perfect grip.',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800',
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800'
    ],
    rating: 4.6,
    reviews: [
      { id: 1, user: 'Julia R.', rating: 5, text: 'Love the grip!', date: '2024-01-15' }
    ],
    stock: 35,
    isNew: false,
    sales: 189
  },
  {
    id: '10',
    name: 'Pillow',
    category: 'Home',
    price: 23.99,
    originalPrice: 25.99,
    description: 'Comfortable and supportive pillow for a good nights sleep.',
    images: [
      'https://m.media-amazon.com/images/I/813+9DJ+VaL._AC_UF894,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/813+9DJ+VaL._AC_UF894,1000_QL80_.jpg'
    ],
    rating: 4.7,
    reviews: [
      { id: 1, user: 'Mark H.', rating: 5, text: 'Perfect morning coffee!', date: '2024-01-14' }
    ],
    stock: 14,
    isNew: false,
    sales: 123
  },
  {
    id: '11',
    name: 'Running Shoes Ultra',
    category: 'Sports',
    price: 139.99,
    originalPrice: null,
    description: 'Lightweight running shoes with responsive cushioning. Breathable mesh upper.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      'https://images.unsplash.com/photo-1606107557195-0e29a4cb5f42?w=800'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: 'Ryan M.', rating: 5, text: 'Best running shoes!', date: '2024-01-12' }
    ],
    stock: 22,
    isNew: true,
    sales: 267
  },
  {
    id: '12',
    name: 'Gaming Mouse RGB',
    category: 'Electronics',
    price: 59.99,
    originalPrice: 79.99,
    description: 'Precision gaming mouse with customizable RGB lighting. 6 buttons and adjustable DPI.',
    images: [
      'https://electrocity.b-cdn.net/acd-cgi/img/v1/2024/07/razer-basilisk-v3-wired-rgb-gaming-mouse-black-electrocity.ie00001.jpg?quality=100&width=1500&height=1080',
      'https://electrocity.b-cdn.net/acd-cgi/img/v1/2024/07/razer-basilisk-v3-wired-rgb-gaming-mouse-black-electrocity.ie00001.jpg?quality=100&width=1500&height=1080',
      'https://electrocity.b-cdn.net/acd-cgi/img/v1/2024/07/razer-basilisk-v3-wired-rgb-gaming-mouse-black-electrocity.ie00001.jpg?quality=100&width=1500&height=1080',
      'https://electrocity.b-cdn.net/acd-cgi/img/v1/2024/07/razer-basilisk-v3-wired-rgb-gaming-mouse-black-electrocity.ie00001.jpg?quality=100&width=1500&height=1080'
    ],
    rating: 4.5,
    reviews: [
      { id: 1, user: 'Gamer123', rating: 4, text: 'Great for gaming', date: '2024-01-10' }
    ],
    stock: 40,
    isNew: false,
    sales: 356
  },
  {
    id: '13',
    name: 'Keyboard Mechanical RGB',
    category: 'Accessories',
    price: 89.99,
    originalPrice: null,
    description: 'Mechanical keyboard with customizable RGB lighting. Quiet switches for a comfortable typing experience.',
    images: [
      'https://m.media-amazon.com/images/I/71+p3Hx03dL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71+p3Hx03dL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71+p3Hx03dL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71+p3Hx03dL._AC_SL1500_.jpg'
    ],
    rating: 4.9,
    reviews: [
      { id: 1, user: 'Sophia L.', rating: 5, text: 'Absolutely beautiful!', date: '2024-01-20' }
    ],
    stock: 25,
    isNew: true,
    sales: 78
  },
  {
    id: '14',
    name: 'Rog Strix Scar 18',
    category: 'Electronics',
    price: 2499.99,
    originalPrice: 2999.99,
    description: 'High-performance gaming laptop with NVIDIA RTX 50 series, Intel core ultra9 processor, and 64GB RAM. Perfect for gamers and content creators.',
    images: [
      'https://dlcdnwebimgs.asus.com/files/media/982b43f2-03f0-4780-b552-cf2a58d515bf/v1/images/m-kv_1.webp',
      'https://dlcdnwebimgs.asus.com/files/media/982b43f2-03f0-4780-b552-cf2a58d515bf/v1/images/m-kv_2.webp'
    ],
    rating: 4.6,
    reviews: [
      { id: 1, user: 'TechGuru', rating: 4, text: 'Very convenient for smart home setup', date: '2024-01-18' }
    ],
    stock: 20,
    isNew: false,
    sales: 145
  },
  {
    id: '15',
    name: 'Rog Zeperus G16',
    category: 'Electronics',
    price: 1599.99,
    originalPrice: 1749.99,
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, Intel i9 processor, and 32GB RAM.',
    images: [
      'https://dlcdnwebimgs.asus.com/gain/ECB739CB-4E3F-4B1E-89DF-A17A9D75E2DD',
      'https://dlcdnwebimgs.asus.com/gain/ECB739CB-4E3F-4B1E-89DF-A17A9D75E2DD'
    ],
    rating: 4.4,
    reviews: [
      { id: 1, user: 'Emily R.', rating: 4, text: 'Works well and looks great', date: '2024-01-17' }
    ],
    stock: 50,
    isNew: false,
    sales: 289
  },
  {
    id: '16',
    name: 'Rog Strix G17',
    category: 'Electronics',
    price: 1299.99,
    originalPrice: 1399.99,
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, Intel i7 processor, and 16GB RAM.',
    images: [
      'https://dlcdnwebimgs.asus.com/gain/9AC8B0E4-AF64-46FF-AEF7-A4827521671F',
      'https://dlcdnwebimgs.asus.com/gain/9AC8B0E4-AF64-46FF-AEF7-A4827521671F'
    ],
    rating: 4.5,
    reviews: [
      { id: 1, user: 'Michael S.', rating: 4, text: 'Great sound for the price', date: '2024-01-16' }
    ],
    stock: 30,
    isNew: false,
    sales: 210 
  },
  {
    id: '17',
    name: '3 Seater Sofa Couch',
    category: 'Furniture',
    price: 799.99,
    originalPrice: 999.99,
    description: 'Comfortable and stylish 3 seater sofa perfect for any living room.',
    images: [
      'https://i5.walmartimages.com/seo/3-Seater-Sofa-Couch-Modern-Linen-Tufed-Upholstered-2-Pillows-Armrest-Design-Wooden-Tapered-Legs-Accent-Arm-Sofas-Living-Room-Bedroom-Office-Grey_04ec8f14-062d-44d0-9aed-9dac7be853b9.5e2b287cd25bd91421fd9bb39412dbc8.jpeg',
      'https://i5.walmartimages.com/seo/3-Seater-Sofa-Couch-Modern-Linen-Tufed-Upholstered-2-Pillows-Armrest-Design-Wooden-Tapered-Legs-Accent-Arm-Sofas-Living-Room-Bedroom-Office-Grey_04ec8f14-062d-44d0-9aed-9dac7be853b9.5e2b287cd25bd91421fd9bb39412dbc8.jpeg'
    ],
    rating: 4.3,
    reviews: [
      { id: 1, user: 'Sarah J.', rating: 4, text: 'Very comfortable and well-made', date: '2024-01-15' }
    ],
    stock: 10,
    isNew: false,
    sales: 45
  },
  {
    id: '18',
    name: 'Luxury Bed Frame',
    category: 'Furniture',
    price: 1199.99,
    originalPrice: 1499.99,
    description: 'Elegant and sturdy bed frame made from premium materials. Available in queen and king sizes.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Y-OBiLA0NRuv0sKLgpY0sgXW24H7AfIL_Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Y-OBiLA0NRuv0sKLgpY0sgXW24H7AfIL_Q&s'
    ],
    rating: 4.7,
    reviews: [
      { id: 1, user: 'David K.', rating: 5, text: 'Beautiful and sturdy bed frame', date: '2024-01-14' }
    ],
    stock: 5,
    isNew: false,
    sales: 30
  },
  {
    id: '19',
    name: 'Modern Floor Lamp',
    category: 'Home',
    price: 129.99,
    originalPrice: 159.99,
    description: 'Sleek and modern floor lamp with adjustable brightness and color temperature.',
    images: [
      'https://m.media-amazon.com/images/I/71MCnR5XLTL.jpg',
      'https://m.media-amazon.com/images/I/71MCnR5XLTL.jpg'
    ],
    rating: 4.6,
    reviews: [
      { id: 1, user: 'Emily T.', rating: 4, text: 'Great addition to my living room', date: '2024-01-13' }
    ],
    stock: 20,
    isNew: true,
    sales: 60
  },
  {
    id: '20',
    name: 'Outdoor Patio Set',
    category: 'Home',
    price: 899.99,
    originalPrice: 1199.99,
    description: 'Complete outdoor patio set with table and 4 chairs. Weather-resistant materials for year-round use.',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: 'Mark T.', rating: 5, text: 'Perfect for outdoor dining!', date: '2024-01-12' }
    ],
    stock: 8,
    isNew: false,
    sales: 25
  },
  {
    id: '21',
    name: 'Rog Strix G18',
    category: 'Electronics',
    price: 1499.99,
    originalPrice: 1799.99,
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, Intel i7 processor, and 16GB RAM.',
    images: [
      'https://dlcdnwebimgs.asus.com/files/media/d5444a20-d912-40e3-9a48-bbacc1e3a4e6/v1/images/Strix_G18_KV_16x9.webp',
      'https://dlcdnwebimgs.asus.com/files/media/d5444a20-d912-40e3-9a48-bbacc1e3a4e6/v1/images/Strix_G18_KV_16x9.webp'
    ],
    rating: 4.9,
    reviews: [
      { id: 1, user: 'GamerPro', rating: 5, text: 'Incredible performance for gaming!', date: '2025-01-11' }
    ],
    stock: 10,
    isNew: true,
    sales: 150 
  }
]

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: 'laptop', count: 4 },
  { id: 'accessories', name: 'Accessories', icon: 'watch', count: 3 },
  { id: 'furniture', name: 'Furniture', icon: 'sofa', count: 1 },
  { id: 'home', name: 'Home', icon: 'lamp', count: 2 },
  { id: 'sports', name: 'Sports', icon: 'dumbbell', count: 2 }
]

export const categoryIcons = {
  laptop: { bg: '#EEF2FF', color: '#4F46E5' },
  watch: { bg: '#FEF3C7', color: '#D97706' },
  sofa: { bg: '#ECFDF5', color: '#059669' },
  lamp: { bg: '#FEF3C7', color: '#B45309' },
  dumbbell: { bg: '#FEE2E2', color: '#DC2626' }
}

export const coupons = [
  { code: 'SAVE10', discount: 10, type: 'percentage', minOrder: 50 },
  { code: 'SAVE20', discount: 20, type: 'fixed', minOrder: 100 },
  { code: 'WELCOME', discount: 15, type: 'percentage', minOrder: 0 }
]