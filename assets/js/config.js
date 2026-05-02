const CONFIG = {
  settings: {
    profitMargin: 60,
  },
  brand: {
    name: {
      en: 'ItsWatuyusei Bakery',
      es: 'Panadería ItsWatuyusei'
    },
    poweredBy: 'ItsWatuyusei',
    poweredByUrl: 'https://itswatuyusei.com',
    isWhitelabel: false,
    whatsapp: '584126763167'
  },
  erp: {
    apiUrl: 'https://ve.dolarapi.com/v1/dolares/oficial'
  },
  bcvRate: null,
  i18n: {
    en: {
      searchPlaceholder: 'Search products...',
      all: 'All',
      sweet: 'Sweet',
      savory: 'Savory',
      bestseller: 'Bestseller',
      new: 'New',
      limited: 'Limited',
      noResults: 'No products found.',
      copyright: 'Copyright ©',
      poweredBy: 'Powered by',
      buy: 'Buy now',
      back: 'Back to catalog',
      orderMessage: 'Hello! I am interested in ordering: ',
      promos: [
        'Free delivery on orders over $10!',
        'Baked with passion every morning at 6:00 AM',
        'Authentic Venezuelan flavors in every bite',
        'Premium quality artisan ingredients'
      ],
      addToCart: 'Add to order',
      cartTitle: 'My Order',
      total: 'Total (USD)',
      totalBcv: 'Total (VES)',
      bcvLabel: 'Bs. Rate',
      bcvUnavailable: 'Bs. rate unavailable',
      emptyCart: 'Your order is empty',
      sendOrder: 'Send Order to WhatsApp',
      checkoutMessage: 'Hello! I would like to place the following order:',
      clearCart: 'Clear Cart',
      alreadyInCart: 'in your order'
    },
    es: {
      searchPlaceholder: 'Buscar productos...',
      all: 'Todos',
      sweet: 'Dulces',
      savory: 'Salados',
      bestseller: 'Más Vendido',
      new: 'Nuevo',
      limited: 'Limitado',
      noResults: 'No se encontraron productos.',
      copyright: 'Copyright ©',
      poweredBy: 'Impulsado por',
      buy: 'Comprar ahora',
      back: 'Volver al catálogo',
      orderMessage: '¡Hola! Me gustaría pedir: ',
      promos: [
        '¡Envío gratis en pedidos superiores a $10!',
        'Horneado con pasión cada mañana a las 6:00 AM',
        'Auténtico sabor venezolano en cada bocado',
        'Ingredientes artesanales de primera calidad'
      ],
      addToCart: 'Añadir al pedido',
      cartTitle: 'Mi Pedido',
      total: 'Total (USD)',
      totalBcv: 'Total (VES)',
      bcvLabel: 'Tasa Bs.',
      bcvUnavailable: 'Tasa Bs. no disponible',
      emptyCart: 'Tu pedido está vacío',
      sendOrder: 'Enviar pedido por WhatsApp',
      checkoutMessage: '¡Hola! Me gustaría realizar el siguiente pedido:',
      clearCart: 'Limpiar Carrito',
      alreadyInCart: 'en el pedido'
    }
  },
  products: [
    {
      id: 'prod_01',
      name: { en: 'Catalinas', es: 'Catalinas' },
      category: 'sweet',
      price: 1.2,
      badge: 'bestseller',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/catalinas00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/catalinas01.webp'],
      description: {
        en: 'Iconic Creole cookies with a soft, spongy texture, prepared with authentic raw cane sugar syrup, cinnamon, and a secret blend of spices.',
        es: 'Icónicas galletas criollas de textura suave y esponjosa, preparadas con el auténtico melao de papelón, canela y un toque secreto de especias.'
      }
    },
    {
      id: 'prod_02',
      name: { en: 'Polvorosas', es: 'Polvorosas' },
      category: 'sweet',
      price: 1.2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3rdUKWy9pyKhSWyqfRwXB_mLb_XQ0wrl4w&s',
      description: {
        en: 'Artisan cookies of colonial heritage that melt in your mouth. Prepared with toasted flour and butter, lightly dusted with fine sugar.',
        es: 'Galletas artesanales de herencia colonial que se deshacen en el paladar. Preparadas con harina tostada y mantequilla, espolvoreadas con azúcar fina.'
      }
    },
    {
      id: 'prod_03',
      name: { en: 'Colombianito', es: 'Colombianito' },
      category: 'sweet',
      price: 1.53,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/colombianito00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/colombianito0.webp'],
      description: {
        en: 'A Venezuelan afternoon classic: sweet, soft bread rolls covered with a crunchy sugar coating that delights in every bite.',
        es: 'Un clásico de las tardes venezolanas: panecillos dulces y suaves, cubiertos con una crujiente capa de azúcar que deleita en cada bocado.'
      }
    },
    {
      id: 'prod_04',
      name: { en: 'Guava Bread', es: 'Pan de Guayaba' },
      category: 'sweet',
      price: 1.95,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panArequipe00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panArequipe01.webp'],
      description: {
        en: 'Artisan sweet bread with tender dough, generously filled with a dense and aromatic natural guava jam.',
        es: 'Pan dulce artesanal de masa tierna, generosamente relleno con una densa y aromática mermelada de guayaba natural.'
      }
    },
    {
      id: 'prod_05',
      name: { en: 'Arequipe Bread', es: 'Pan de Arequipe' },
      category: 'sweet',
      price: 1.72,
      badge: 'new',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panArequipe00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panArequipe01.webp'],
      description: {
        en: 'Spongy sweet dough surrounding a heart of creamy caramel (arequipe). The perfect balance between softness and sweetness.',
        es: 'Esponjosa masa dulce que envuelve un corazón de arequipe (dulce de leche) cremoso. El equilibrio perfecto entre suavidad y dulzor.'
      }
    },
    {
      id: 'prod_06',
      name: { en: 'Arequipe Pastry', es: 'Pastel de Arequipe' },
      category: 'sweet',
      price: 1.5,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/pastelArequipe00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/pastelArequipe01.webp'],
      description: {
        en: 'Crunchy and golden puff pastry, crafted with fine layers that enclose a premium caramel filling. Ideal for a special craving.',
        es: 'Hojaldre crujiente y dorado, elaborado con capas finas que encierran un relleno de arequipe premium. Ideal para un antojo especial.'
      }
    },
    {
      id: 'prod_07',
      name: { en: 'Guava Pastry', es: 'Pastel de Guayaba' },
      category: 'sweet',
      price: 1.5,
      badge: 'bestseller',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/pastelGuayaba00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/pastelGuayaba01.webp'],
      description: {
        en: 'The perfect combination of textures: very crunchy artisan puff pastry with the intense and tropical flavor of Venezuelan guava.',
        es: 'La combinación perfecta de texturas: hojaldre artesanal muy crujiente con el sabor intenso y tropical de la guayaba venezolana.'
      }
    },
    {
      id: 'prod_08',
      name: { en: 'Cheese Bread', es: 'Pan de Queso' },
      category: 'savory',
      price: 1.5,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panQueso00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panQueso01.webp'],
      description: {
        en: "Savory bread with soft dough, enriched with plenty of grated white 'llanero' cheese, both inside and on its golden crust.",
        es: 'Pan salado de masa suave, enriquecido con abundante queso blanco llanero rallado, tanto en su interior como en su corteza dorada.'
      }
    },
    {
      id: 'prod_09',
      name: { en: 'Quesadilla', es: 'Quesadilla' },
      category: 'sweet',
      price: 1.5,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/quesadilla00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/quesadilla01.webp'],
      description: {
        en: 'Traditional star-shaped delight, filled with a smooth sweet cheese cream and spices. A treasure of national bakery.',
        es: 'Delicia tradicional con forma de estrella, rellena de una suave crema de queso dulce y especias. Un tesoro de la panadería nacional.'
      }
    },
    {
      id: 'prod_10',
      name: { en: 'Cortadito', es: 'Cortadito' },
      category: 'sweet',
      price: 1.82,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/cortadito00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/cortadito01.webp'],
      description: {
        en: 'Dense and spiced cake squares, flavored with raw cane sugar and ginger. The quintessential traditional snack.',
        es: 'Cuadritos de bizcocho denso y especiado, aromatizados con papelón y jengibre. La merienda tradicional por excelencia.'
      }
    },
    {
      id: 'prod_11',
      name: { en: 'French Bread', es: 'Pan Francés' },
      category: 'savory',
      price: 1.1,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panSalado00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panSalado01.webp'],
      description: {
        en: 'The daily bread in Venezuela: thin and crunchy crust with a very soft and airy crumb. Ideal when freshly baked.',
        es: 'El pan de cada día en Venezuela: corteza fina y crujiente con una miga muy suave y aireada. Ideal para comer recién horneado.'
      }
    },
    {
      id: 'prod_12',
      name: { en: 'Canilla Bread', es: 'Pan Canilla' },
      category: 'savory',
      price: 1.2,
      badge: 'new',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panSalado00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panSalado01.webp'],
      description: {
        en: 'Elongated bread with golden crust and tender crumb. The essential companion on the Venezuelan table for any meal.',
        es: 'Pan alargado de corteza dorada y miga tierna. Es el acompañante indispensable en la mesa venezolana para cualquier comida.'
      }
    },
    {
      id: 'prod_13',
      name: { en: 'Golfiado', es: 'Golfiado' },
      category: 'sweet',
      price: 1.89,
      badge: 'limited',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/golfiado00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/golfiado01.webp'],
      description: {
        en: 'Sweet dough roll with anise essence, bathed in raw cane sugar syrup and topped with salty white cheese. An explosion of flavors.',
        es: 'Enrollado de masa dulce con esencia de anís, bañado en melao de papelón y cubierto con queso blanco salado. Una explosión de sabores.'
      }
    },
    {
      id: 'prod_14',
      name: { en: 'Coconut Cookies', es: 'Galletas de Coco' },
      category: 'sweet',
      price: 1.3,
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDF7fSTw92GVAq7sECTcDgRUB7tGF8ofY6fg&s'],
      description: {
        en: 'Rustic and crunchy cookies prepared with natural grated coconut. A little piece of the Caribbean in every bite.',
        es: 'Galletas rústicas y crujientes preparadas con coco natural rallado. Un pedacito del Caribe en cada mordisco.'
      }
    },
    {
      id: 'prod_15',
      name: { en: 'Milk Bread', es: 'Pan de Leche' },
      category: 'sweet',
      price: 1.1,
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4u68A4SPTPrxPPJNy7pSTYmEq8YAW8wZySA&s'],
      description: {
        en: 'Extremely soft rolls, made with fresh milk and butter. Their cloud-like texture makes them irresistible.',
        es: 'Panecillos de extrema suavidad, elaborados con leche fresca y mantequilla. Su textura de nube los hace irresistibles.'
      }
    },
    {
      id: 'prod_16',
      name: { en: 'Pinita Bread', es: 'Pan Piñita' },
      category: 'sweet',
      price: 1.1,
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4DajMk5cOEANh23U9mkuB3QtR7hKMzMI3A&s'],
      description: {
        en: 'Traditional sweet bread topped with granulated sugar. Its vanilla aroma and spongy texture evoke the best memories.',
        es: 'Pan dulce tradicional con costra de azúcar y un toque de vainilla. Su aroma a vainilla y su textura esponjosa evocan los mejores recuerdos.'
      }
    },
    {
      id: 'prod_17',
      name: { en: 'Pecho de Niña', es: 'Pecho de Niña' },
      category: 'sweet',
      price: 1.1,
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIs6NsclrbHEMZ6ZF3FJ_q9K_dt6bGTP8qw&s'],
      description: {
        en: 'Extra tender and delicate sweet bread, with a subtle aroma that captivates. A soft and comforting classic.',
        es: 'Pan dulce de masa extra tierna y delicada, con un sutil aroma que cautiva. Un clásico suave y reconfortante.'
      }
    }
  ]
};

window.CONFIG = CONFIG;
