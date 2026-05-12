export const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Accessories',
    price: 299.99,
    originalPrice: 399.99,
    description: 'Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions.',
    images: [
      'https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha',
      'https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha',
      'https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha'
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
    name: 'iWatch',
    category: 'Accessories',
    price: 189.99,
    originalPrice: null,
    description: 'Elegant timepiece with genuine leather strap and sapphire crystal. Water resistant to 50m.',
    images: [
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-compare-202509_GEO_US_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=MHRQLytDVGpzanZQOHZNM1JPY0puZStCWEw0aFlCQTRuS29hNFhhLzZVZTlUcElRWllkVEsyai8yOFl3aXFEVmlKajJrWE1laEVSL0xjK1hPMUNLMkV0RmgycTRGTHI3SUVxVFVFNFI5QzgyZDIzeVIvalBlTFAyTXZ6M0owVnA',
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-compare-202509_GEO_US_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=MHRQLytDVGpzanZQOHZNM1JPY0puZStCWEw0aFlCQTRuS29hNFhhLzZVZTlUcElRWllkVEsyai8yOFl3aXFEVmlKajJrWE1laEVSL0xjK1hPMUNLMkV0RmgycTRGTHI3SUVxVFVFNFI5QzgyZDIzeVIvalBlTFAyTXZ6M0owVnA'
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
    name: 'Galaxy Watch 8',
    category: 'Accessories',
    price: 249.99,
    originalPrice: 299.99,
    description: 'Track your health metrics 24/7 with GPS, heart rate monitoring, sleep tracking, and 7-day battery life.',
    images: [
      'https://www.telstra.com.au/content/dam/tcom/library/cam-campaign/CAM-DCAEG-83593-Samsung-W8-headerDesktopTall-692x500-2x.jpg',
      'https://www.telstra.com.au/content/dam/tcom/library/cam-campaign/CAM-DCAEG-83593-Samsung-W8-headerDesktopTall-692x500-2x.jpg'
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
    name: 'Smart Glasses Ray-Ban Meta',
    category: 'Accessories',
    price: 129.99,
    originalPrice: null,
    description: 'Premium UV400 protection with polarized lenses. Lightweight titanium frame for all-day comfort.',
    images: [
      'https://www.digitaltrends.com/tachyon/2025/05/ray-ban-meta-front.jpg?resize=1200%2C720',
      'https://www.digitaltrends.com/tachyon/2025/05/ray-ban-meta-front.jpg?resize=1200%2C720',
      'https://www.digitaltrends.com/tachyon/2025/05/ray-ban-meta-front.jpg?resize=1200%2C720'
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
    name: 'AirPods Pro 2',
    category: 'Accessories',
    price: 189.99,
    originalPrice: 209.99,
    description: 'Active Noise Cancellation and Transparency mode. Adaptive Audio adjusts to your environment.',
    images: [
      'https://sokly.sgp1.digitaloceanspaces.com/Accessories/Apple/Bluetooth-Earphone/Air-Pods-Pro-2nd/1-1696925372pt9Py.png',
      'https://arystorephone.com/wp-content/uploads/2023/10/AirPods-Pro-2nd-generation-with-MagSafe-Charging-Case-USB%E2%80%91C-2.jpg?v=1764053239'
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
    name: 'Rolex Watch',
    category: 'Accessories',
    price: 6999.99,
    originalPrice: null,
    description: 'Elegant luxury watch with premium materials and precise movement.',
    images: [
      'https://assets.theluxuryhut.com/cms/admin/upload/1724418702secrets-of-rolex-watches.jpg',
      'https://assets.theluxuryhut.com/cms/admin/upload/1724418702secrets-of-rolex-watches.jpg'
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
    name: 'NEKE Air Jorden Max 90',
    category: 'Sports',
    price: 249.99,
    originalPrice: null,
    description: 'High-quality sports equipment for your fitness routine.',
    images: [
      'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/22e78278-d735-4cbe-b509-814f7233e32e/NIKE+AIR+MAX+PLUS+VII+PRM.png',
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6a9f9c9-9070-4c8c-b826-fb880e2b6c18/NIKE+AIR+MAX+PLUS+VII+PRM.png'
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
    name: 'NEKE Air Jorden 2',
    category: 'Sports',
    price: 139.99,
    originalPrice: null,
    description: 'High-quality sports equipment for your fitness routine.',
    images: [
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/AIR+JORDAN+1+LOW.png',
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ec7999ad-5139-47ae-b782-adfcd30e3e7c/AIR+JORDAN+1+LOW.png'
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
    name: 'iWatch',
    category: 'Accessories',
    price: 259.99,
    originalPrice: 279.99,
    description: 'Elegant timepiece with genuine leather strap and sapphire crystal. Water resistant to 50m.',
    images: [
      'https://cactuskh.com/public/images/apple-watch-s11-jetblack-01.webp',
      'https://brain-images-ssl.cdn.dixons.com/1/7/10290371/l_10290371_001.jpg'
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
    name: 'Samsung Galaxy Watch 8',
    category: 'Accessories',
    price: 489.99,
    originalPrice: null,
    description: 'Elegant timepiece with genuine leather strap and sapphire crystal. Water resistant to 50m.',
    images: [
      'https://images.samsung.com/is/image/samsung/p6pim/ca_fr/f2507/gallery/ca-fr-galaxy-watch8-l325-sm-l325fzsaxac-thumb-547653418?$Q90_330_330_F_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/ca_fr/f2507/gallery/ca-fr-galaxy-watch8-l325-sm-l325fzsaxac-thumb-547653418?$Q90_330_330_F_PNG$'
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
      'https://dlcdnwebimgs.asus.com/gain/736A72C5-AC53-4D86-B4A1-008B7826AE4F'
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
      'https://dlcdnwebimgs.asus.com/files/media/135b75ed-c0f7-4bb9-928f-2b1a1e9cb34f/v2/img/design/color/strix-g-2022-green.png'
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
      'https://dlcdnwebimgs.asus.com/gain/DF5BB4C7-EC0E-49F0-A4B9-02F5868E24F6/w1000/h732'
    ],
    rating: 4.9,
    reviews: [
      { id: 1, user: 'GamerPro', rating: 5, text: 'Incredible performance for gaming!', date: '2025-01-11' }
    ],
    stock: 10,
    isNew: true,
    sales: 150 
  },
  {
    id: '22',
    name: 'MSI Stealth GS77', 
    category: 'Electronics',
    price: 1799.99,
    originalPrice: 1999.99,
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, Intel i9 processor, and 32GB RAM.',
    images: [
      'https://i5.walmartimages.com/asr/7f312a28-f96f-46cf-b5e5-ce72704f1f78.1b83b656fa536e22690b9796719e6f6b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      'https://media.ldlc.com/r1600/ld/products/00/05/93/81/LD0005938158_1_0005992188.jpg'
    ],
    rating: 4.7,
    reviews: [
      { id: 1, user: 'Emily R.', rating: 4, text: 'Works well and looks great', date: '2024-01-17' }
    ],
    stock: 20,
    isNew: false,
    sales: 200
  },
  {
    id: '23',
    name: 'Alienware x17 R2', 
    category: 'Electronics',
    price: 2199.99,
    originalPrice: 2499.99,
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, Intel i9 processor, and 64GB RAM.',
    images: [
      'https://www.techspot.com/articles-info/2530/images/2022-09-18-image-2.jpg',
      'https://www.digitaltrends.com/tachyon/2022/09/alienware-x17-r2-review-12.jpg?resize=1200%2C720'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: 'GamerPro', rating: 5, text: 'Incredible performance for gaming!', date: '2025-01-11' }
    ],
    stock: 15,
    isNew: true,
    sales: 120
  },
  {
    id: '24',
    name: 'Razer Blade 15', 
    category: 'Electronics',
    price: 1599.99,
    originalPrice: 1799.99,
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, Intel i7 processor, and 16GB RAM.',
    images: [
      'https://www.notebookcheck.net/fileadmin/Notebooks/Razer/Blade_15_Base_Model/Blade_15_Fall_2018_Base_Model_Render_13.png',
      'https://i5.walmartimages.com/seo/Razer-Blade-15-6-FHD-i7-10875H-16-512-SSD-RTX-2070-SUPER-RZ09-03304E42-R3U1_58715c0c-160c-442e-b837-d1f1d629109b.6afe0ae769ee2952cdf2a890bf7f58e1.jpeg'
    ],
    rating: 4.6,
    reviews: [
      { id: 1, user: 'TechGuru', rating: 4, text: 'Very convenient for smart home setup', date: '2024-01-18' }
    ],
    stock: 25,
    isNew: false,
    sales: 180
  },
  {
    id: '25',
    name: 'ASUS TUF Gaming F15', 
    category: 'Electronics',
    price: 999.99,
    originalPrice: 1199.99,
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, Intel i5 processor, and 8GB RAM.',
    images: [
      'https://shop.villman.com/cdn/shop/files/1_16_d6111a21-2d8f-4459-a8b1-e79dfb749294_800x.jpg?v=1699945499',
      'https://www.gigahertz.com.ph/cdn/shop/files/asus-tuf-gaming-f15-2022-fx507zc4-hn081w-i5-12500h-geforce-rtx-3050-8gb-ram-512gb-ssd-win-11-asus-gigahertz-200318.jpg?v=1721109907&width=1200'
    ],
    rating: 4.5,
    reviews: [
      { id: 1, user: 'Michael S.', rating: 4, text: 'Great sound for the price', date: '2024-01-16' }
    ],
    stock: 40,
    isNew: false,
    sales: 300
  },
  {
    id: '26',
    name: 'Lenovo Legion 5', 
    category: 'Electronics',
    price: 1099.99,
    originalPrice: 1299.99,
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, AMD Ryzen 7 processor, and 16GB RAM.',
    images: [
      'https://www.bhphotovideo.com/images/fb/lenovo_82jh008jus_legion_5i_i7_16g_1669912.jpg',
      'https://p2-ofp.static.pub/fes/cms/2022/06/24/lk85guee450vthrvz638kisz3k79nc125094.png'
    ],
    rating: 4.7,
    reviews: [
      { id: 1, user: 'GamerPro', rating: 5, text: 'Incredible performance for gaming!', date: '2025-01-11' }
    ],
    stock: 30,
    isNew: false,
    sales: 250
  },
  {
    id: '27',
    name: 'HP Omen 15', 
    category: 'Electronics',
    price: 1199.99,
    originalPrice: 1399.99,
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, Intel i7 processor, and 16GB RAM.',
    images: [
      'https://static.beebom.com/wp-content/uploads/2018/08/omen-15-battery.jpg',
      'https://www.hp.com/content/dam/sites/omen/worldwide/laptops/2022-omen-15-laptop-amd-2-0/VALKYR~3.png'
    ],
    rating: 4.6,
    reviews: [
      { id: 1, user: 'TechGuru', rating: 4, text: 'Very convenient for smart home setup', date: '2024-01-18' }
    ],
    stock: 20,
    isNew: false,
    sales: 150
  },
  {
    id: '28',
    name: 'NEKE Air Jorden 1', 
    category: 'Sports',
    price: 129.99,
    originalPrice: 139.99,
    description: 'High-quality sports equipment for your fitness routine.',
    images: [
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/38364157-29a7-44c2-9f96-9ff4c1813db5/AIR+JORDAN+1+LOW.png',
      'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32b0f17a-38ba-40fa-9de7-31c5bb1661e3/AIR+JORDAN+1+LOW.png'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: 'FitnessFan', rating: 5, text: 'Excellent quality and performance!', date: '2026-01-20' }
    ],
    stock: 50,
    isNew: true,
    sales: 200
  },
  {
    id: '29',
    name: 'NEKE Air Jorden Max', 
    category: 'Sports',
    price: 229.99,
    originalPrice: 239.99,
    description: 'High-quality sports equipment for your fitness routine.',
    images: [
      'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/49c3e628-1b11-444b-b05c-546e94ad6bae/AIR+MAX+90+SE.png',
      'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/49c3e628-1b11-444b-b05c-546e94ad6bae/AIR+MAX+90+SE.png'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: 'FitnessFan', rating: 5, text: 'Excellent quality and performance!', date: '2026-01-20' }
    ],
    stock: 50,
    isNew: true,
    sales: 200
  },
  {
    id: '30',
    name: 'NEKE Air Jorden Max 95', 
    category: 'Sports',
    price: 229.99,
    originalPrice: 239.99,
    description: 'High-quality sports equipment for your fitness routine.',
    images: [
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/61af7d17-cb0d-4714-a014-ac3e4d21d22c/W+NIKE+AIR+MAX+95+BIG+BUBBLE.png',
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc45227e-a01b-4251-a5c0-28e0278d573c/W+NIKE+AIR+MAX+95+BIG+BUBBLE.png'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: 'FitnessFan', rating: 5, text: 'Excellent quality and performance!', date: '2026-01-20' }
    ],
    stock: 50,
    isNew: true,
    sales: 200
  },
  {
    id: '31',
    name: 'NEKE Free Metcon 7', 
    category: 'Sports',
    price: 229.99,
    originalPrice: 239.99,
    description: 'High-quality sports equipment for your fitness routine.',
    images: [
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/664c0ff8-c3d3-4d56-a203-c4bc67a25011/NIKE+FREE+METCON+7.png',
      'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ff42cfe7-9b5d-47c8-a1d7-063353c02b55/NIKE+FREE+METCON+7.png'
    ],
    rating: 4.8,
    reviews: [
      { id: 1, user: 'FitnessFan', rating: 5, text: 'Excellent quality and performance!', date: '2026-01-20' }
    ],
    stock: 50,
    isNew: true,
    sales: 200
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