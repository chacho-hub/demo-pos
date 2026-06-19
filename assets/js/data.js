// data.js

const GYOZA_DEMO_DATA = {
  users: [
    { id: 1, name: 'Administrador Demo', email: 'admin@demo.com', password: 'admin123', role: 'Administrador' },
    { id: 2, name: 'Laura Mesera', email: 'mesera@demo.com', password: 'mesera123', role: 'Mesero' }
  ],
  menu: [
    { 
      id: 101, 
      name: 'Gyoza de pollo', 
      category: 'Entradas', 
      price: 18000, 
      prepTime: '12 min', 
      description: 'Porción de gyozas artesanales rellenas de pollo y vegetales.',
      // REEMPLAZA ESTA URL con la ruta de tu imagen local
      // Ejemplo: imagen: 'assets/img/gyoza.jpg'
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBveJ_EcRVKdc3v0oJWPtWkTmGs3JpGo92gMEptUxKA&s=10'
    },
    { 
      id: 102, 
      name: 'Ramen especial', 
      category: 'Fuertes', 
      price: 32000, 
      prepTime: '18 min', 
      description: 'Caldo concentrado, fideos, proteína marinada y toppings frescos.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV29AvdF8t27fX6CIX6EGoBjLjYhPkAA-YqZID4ZefvQ&s=10'
    },
    { 
      id: 103, 
      name: 'Arroz yakimeshi', 
      category: 'Fuertes', 
      price: 24000, 
      prepTime: '14 min', 
      description: 'Arroz salteado con vegetales, huevo y salsa de la casa.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjMYLuA6Ej_-a0wdhkURRt5FllqIGqLd5tuD7ehCXNA&s=10'
    },
    { 
      id: 104, 
      name: 'Té frío de limón', 
      category: 'Bebidas', 
      price: 7000, 
      prepTime: '4 min', 
      description: 'Bebida refrescante preparada al instante.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWYjINXYBFw7hJIh01tfl4ciGNjQRRVWJdbUuIv310Q&s=10'
    },
    { 
      id: 105, 
      name: 'Cheesecake de matcha', 
      category: 'Postres', 
      price: 15000, 
      prepTime: '5 min', 
      description: 'Postre cremoso con suave sabor a matcha.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTij5T4JH1-PHT5vCwCXLqbr_oHrCpnee327MOa3zpcXg&s=10 '
    },
    { 
      id: 106, 
      name: 'Combo ejecutivo', 
      category: 'Promociones', 
      price: 39000, 
      prepTime: '20 min', 
      description: 'Incluye plato fuerte, bebida y postre del día.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsj5VPCRgk3_EYmFsH2iOlY29yhs--qgxlTzae1PtuQ&s=10'
    }
  ],
  tables: [
    { id: 1, name: 'Mesa 1', seats: 4, status: 'libre', waiter: 'Laura', currentOrderId: null },
    { id: 2, name: 'Mesa 2', seats: 2, status: 'ocupada', waiter: 'Camilo', currentOrderId: 5002 },
    { id: 3, name: 'Mesa 3', seats: 6, status: 'libre', waiter: 'Laura', currentOrderId: null },
    { id: 4, name: 'Mesa 4', seats: 4, status: 'en espera', waiter: 'Sofía', currentOrderId: 5003 },
    { id: 5, name: 'Mesa 5', seats: 8, status: 'libre', waiter: 'Camilo', currentOrderId: null },
    { id: 6, name: 'Mesa 6', seats: 2, status: 'listo', waiter: 'Laura', currentOrderId: 5001 },
    { id: 7, name: 'Mesa 7', seats: 4, status: 'libre', waiter: 'Sofía', currentOrderId: null },
    { id: 8, name: 'Mesa 8', seats: 4, status: 'pagado', waiter: 'Camilo', currentOrderId: null }
  ],
  orders: [
    {
      id: 5001, tableId: 6, tableName: 'Mesa 6', waiter: 'Laura', status: 'listo',
      createdAt: '2026-04-21 11:30', sentToKitchenAt: '2026-04-21 11:35', paidAt: null,
      items: [{ menuId: 101, name: 'Gyoza de pollo', qty: 2, price: 18000 }, { menuId: 104, name: 'Té frío de limón', qty: 2, price: 7000 }]
    },
    {
      id: 5002, tableId: 2, tableName: 'Mesa 2', waiter: 'Camilo', status: 'en cocina',
      createdAt: '2026-04-21 12:05', sentToKitchenAt: '2026-04-21 12:10', paidAt: null,
      items: [{ menuId: 102, name: 'Ramen especial', qty: 1, price: 32000 }, { menuId: 105, name: 'Cheesecake de matcha', qty: 1, price: 15000 }]
    },
    {
      id: 5003, tableId: 4, tableName: 'Mesa 4', waiter: 'Sofía', status: 'abierto',
      createdAt: '2026-04-21 12:20', sentToKitchenAt: null, paidAt: null,
      items: [{ menuId: 103, name: 'Arroz yakimeshi', qty: 2, price: 24000 }]
    },
    {
      id: 5000, tableId: 8, tableName: 'Mesa 8', waiter: 'Camilo', status: 'pagado',
      createdAt: '2026-04-21 10:10', sentToKitchenAt: '2026-04-21 10:15', paidAt: '2026-04-21 10:55',
      items: [{ menuId: 106, name: 'Combo ejecutivo', qty: 2, price: 39000 }, { menuId: 104, name: 'Té frío de limón', qty: 2, price: 7000 }]
    }
  ],
  purchases: [
    { id: 9001, date: '2026-04-21', item: 'Pollo marinado', supplier: 'Proveedor Oriental SAS', qty: 10, unitPrice: 18000, note: 'Compra para producción del día' },
    { id: 9002, date: '2026-04-21', item: 'Gaseosas y té', supplier: 'Bebidas del Centro', qty: 24, unitPrice: 3000, note: 'Reposición refrigeradores' },
    { id: 9003, date: '2026-04-20', item: 'Queso crema', supplier: 'Lácteos Premium', qty: 6, unitPrice: 14000, note: 'Postres y recetas especiales' }
  ],
  activity: [
    { id: 1, title: 'Sistema inicializado', detail: 'Se cargaron mesas, pedidos, compras y catálogo base.' },
    { id: 2, title: 'Mesa 2 enviada a cocina', detail: 'El pedido 5002 fue tomado por Camilo y ya está en preparación.' },
    { id: 3, title: 'Mesa 8 facturada', detail: 'Se registró una venta cerrada con dos combos ejecutivos.' }
  ]
};
