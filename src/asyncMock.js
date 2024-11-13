const productos = [
    {
        id:1,
        title: 'Mouse Logitech',
        price: '1500',
        category: 'logitech',
        description:'Color negro, sensor HERO 2, 5 botones, PC/MAC',
        image:'https://netpc.uy/wp-content/uploads/2020/10/MOUSE-LOGITECH-G203-GAMING.jpg',
    },
    {
        id:2,
        title: 'Mouse Razer',
        price: '1200',
        category: 'razer',
        description:'Color negro, sensor Razer Viper, 6 botones, PC/MAC',
        image: 'https://static.wixstatic.com/media/44027c_30a04b6c89e14a4e9f56c5000c021095~mv2.jpg/v1/fill/w_1024,h_600,al_c,q_85,enc_auto/44027c_30a04b6c89e14a4e9f56c5000c021095~mv2.jpg',
    },
    {
        id:3,
        title: 'Mouse HyperX',
        price: '900',
        category: 'hyperx',
        description:'Color negro, sensor HyperxPRO, 6 botones, PC/MAC',
        image: 'https://f.fcdn.app/imgs/b47cb6/www.zonatecno.com.uy/zoteuy/1dd7/webp/catalogo/105078_105078_2/1500-1500/mouse-gamer-hyperx-pulsefire-haste-2-black-mouse-gamer-hyperx-pulsefire-haste-2-black.jpg',
    },
    {
        id:4,
        title: 'Teclado Logitech',
        price: '2500',
        category: 'logitech',
        description:'Color negro, PC/MAC',
        image:'https://f.fcdn.app/imgs/6213c8/www.zonatecno.com.uy/zoteuy/e6ef/webp/catalogo/103301_103301_2/1500-1500/teclado-logitech-gaming-920-010442-g413-tkl-se-teclado-logitech-gaming-920-010442-g413-tkl-se.jpg',
    },
    {
        id:5,
        title: 'Teclado Razer',
        price: '3400',
        category: 'razer',
        description:'Color negro, PC/MAC',
        image: 'https://f.fcdn.app/imgs/95a1ff/www.xuruguay.com.uy/xuruuy/8c6d/webp/catalogo/8116590387538116590387531/460x460/teclado-huntsman-mini-optico-60-gamer-razer-teclado-huntsman-mini-optico-60-gamer-razer.jpg',
    },
    {
        id:6,
        title: 'Teclado HyperX',
        price: '2450',
        category: 'hyperx',
        description:'Color negro, PC/MAC',
        image: 'https://microglobalpromos.com.ar/2022/img/082022/4P5P3AA_ABA_1.jpg',
    },
    {
        id:7,
        title: 'Auriculares Logitech',
        price: '1900',
        category: 'logitech',
        description:'Color negro, PC/MAC',
        image:'https://netpc.uy/wp-content/uploads/2020/10/AURICULARES-LOGITECH-G233.jpg',
    },
    {
        id:8,
        title: 'Auriculares Razer',
        price: '1200',
        category: 'razer',
        description:'Color negro, PC/MAC',
        image: 'https://netpc.uy/wp-content/uploads/2023/12/4-13.jpg',
    },
    {
        id:9,
        title: 'Auriculares HyperX',
        price: '1400',
        category: 'hyperx',
        description:'Color negro, PC/MAC',
        image: 'https://cdn.cs.1worldsync.com/58/7e/587e3f05-9de9-4607-8efd-eb53f8449820.jpg',
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

  export const getProductById = (id) =>{
    return productos.find((product)=> product.id == parseInt(id));
  };

  export const getProductByCategory = (category)=>{
    return productos.filter(product => product.category === category);
  };