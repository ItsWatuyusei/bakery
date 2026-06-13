const CONFIG = {
  settings: {
    profitMargin: 50,
    bulkDiscount: {
      enabled: true,
      minItems: 5,
      percentage: 5
    }
  },
  brand: {
    name: {
      en: 'ItsWatuyusei Bakery',
      es: 'Panadería ItsWatuyusei',
      pt: 'Padaria ItsWatuyusei'
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
        'Get 5% OFF on orders of 5 items or more!',
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
      alreadyInCart: 'in your order',
      discountApplied: 'Bulk Discount Applied!',
      from: 'From',
      sizeLabel: 'Bag Size'
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
        '¡Lleva 5 o más artículos y obtén un 5% de descuento!',
        '¡Envío gratis en pedidos superiores a $10!',
        'Horneado con pasión cada mañana a las 6:00 AM',
        'Auténtico sabor venezolano en cada bocado',
        'Ingredientes artesanales de primera calidad'
      ],
      addToCart: 'Añadir al pedido',
      cartTitle: 'Mi Pedido',
      total: 'Total (USD)',
      totalBcv: 'Total (VES)',
      totalOriginal: 'Subtotal',
      bcvLabel: 'Tasa Bs.',
      bcvUnavailable: 'Tasa Bs. no disponible',
      emptyCart: 'Tu pedido está vacío',
      sendOrder: 'Enviar pedido por WhatsApp',
      checkoutMessage: '¡Hola! Me gustaría realizar el siguiente pedido:',
      clearCart: 'Limpiar Carrito',
      alreadyInCart: 'en el pedido',
      discountApplied: '¡Descuento por volumen aplicado!',
      from: 'Desde',
      sizeLabel: 'Tamaño de bolsa'
    },
    pt: {
      searchPlaceholder: 'Buscar produtos...',
      all: 'Todos',
      sweet: 'Doces',
      savory: 'Salgados',
      bestseller: 'Mais Vendido',
      new: 'Novo',
      limited: 'Limitado',
      noResults: 'Nenhum produto encontrado.',
      copyright: 'Copyright ©',
      poweredBy: 'Impulsionado por',
      buy: 'Comprar agora',
      back: 'Voltar ao catálogo',
      orderMessage: 'Olá! Gostaria de pedir: ',
      promos: [
        'Leve 5 ou mais itens e ganhe 5% de desconto!',
        'Frete grátis em pedidos acima de $10!',
        'Assado com paixão todas as manhãs às 6h',
        'Autêntico sabor venezuelano em cada mordida',
        'Ingredientes artesanais de primeira qualidade'
      ],
      addToCart: 'Adicionar ao pedido',
      cartTitle: 'Meu Pedido',
      total: 'Total (USD)',
      totalBcv: 'Total (VES)',
      bcvLabel: 'Taxa Bs.',
      bcvUnavailable: 'Taxa Bs. indisponível',
      emptyCart: 'Seu pedido está vazio',
      sendOrder: 'Enviar pedido por WhatsApp',
      checkoutMessage: 'Olá! Gostaria de fazer o seguinte pedido:',
      clearCart: 'Limpar Carrinho',
      alreadyInCart: 'no pedido',
      discountApplied: 'Desconto por volume aplicado!',
      from: 'A partir de',
      sizeLabel: 'Tamanho do saco'
    }
  },
  products: [
    {
      id: 'prod_01',
      name: { en: 'Catalinas', es: 'Catalinas', pt: 'Catalinas' },
      category: 'sweet',
      price: 1.23,
      badge: 'bestseller',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/catalinas00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/catalinas01.webp'],
      description: {
        en: 'Iconic Creole cookies with a soft, spongy texture, prepared with authentic raw cane sugar syrup, cinnamon, and a secret blend of spices.',
        es: 'Icónicas galletas criollas de textura suave y esponjosa, preparadas con el auténtico melao de papelón, canela y un toque secreto de especias.',
        pt: 'Biscoitos crioulos icônicos com textura macia e esponjosa, preparados com melado de cana autêntico, canela e um toque secreto de especiarias.'
      }
    },
    {
      id: 'prod_02',
      name: { en: 'Polvorosas', es: 'Polvorosas', pt: 'Polvorosas' },
      category: 'sweet',
      price: 1.23,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3rdUKWy9pyKhSWyqfRwXB_mLb_XQ0wrl4w&s',
      description: {
        en: 'Artisan cookies of colonial heritage that melt in your mouth. Prepared with toasted flour and butter, lightly dusted with fine sugar.',
        es: 'Galletas artesanales de herencia colonial que se deshacen en el paladar. Preparadas con harina tostada y mantequilla, espolvoreadas con azúcar fina.',
        pt: 'Biscoitos artesanais de herança colonial que derretem na boca. Preparados com farinha torrada e manteiga, polvilhados com açúcar fino.'
      }
    },
    {
      id: 'prod_03',
      name: { en: 'Colombianito', es: 'Colombianito', pt: 'Colombianito' },
      category: 'sweet',
      price: 1.23,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/colombianito00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/colombianito0.webp'],
      description: {
        en: 'A Venezuelan afternoon classic: sweet, soft bread rolls covered with a crunchy sugar coating that delights in every bite.',
        es: 'Un clásico de las tardes venezolanas: panecillos dulces y suaves, cubiertos con una crujiente capa de azúcar que deleita en cada bocado.',
        pt: 'Um clássico das tardes venezuelanas: pãezinhos doces e macios, cobertos com uma camada crocante de açúcar que encanta em cada mordida.'
      }
    },
    {
      id: 'prod_04',
      name: { en: 'Guava Bread', es: 'Pan de Guayaba', pt: 'Pão de Goiaba' },
      category: 'sweet',
      price: 1.23,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panArequipe00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panArequipe01.webp'],
      description: {
        en: 'Artisan sweet bread with tender dough, generously filled with a dense and aromatic natural guava jam.',
        es: 'Pan dulce artesanal de masa tierna, generosamente relleno con una densa y aromática mermelada de guayaba natural.',
        pt: 'Pão doce artesanal de massa tenra, generosamente recheado com uma mermelada de goiaba natural densa e aromática.'
      }
    },
    {
      id: 'prod_05',
      name: { en: 'Arequipe Bread', es: 'Pan de Arequipe', pt: 'Pão de Doce de Leite' },
      category: 'sweet',
      price: 1.23,
      badge: 'new',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panArequipe00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panArequipe01.webp'],
      description: {
        en: 'Spongy sweet dough surrounding a heart of creamy caramel (arequipe). The perfect balance between softness and sweetness.',
        es: 'Esponjosa masa dulce que envuelve un corazón de arequipe (dulce de leche) cremoso. El equilibrio perfecto entre suavidad y dulzor.',
        pt: 'Massa doce esponjosa que envolve um coração de doce de leite cremoso. O equilíbrio perfeito entre suavidade e doçura.'
      }
    },
    {
      id: 'prod_06',
      name: { en: 'Arequipe Pastry', es: 'Pastel de Arequipe', pt: 'Pastel de Doce de Leite' },
      category: 'sweet',
      price: 1.85,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/pastelArequipe00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/pastelArequipe01.webp'],
      description: {
        en: 'Crunchy and golden puff pastry, crafted with fine layers that enclose a premium caramel filling. Ideal for a special craving.',
        es: 'Hojaldre crujiente y dorado, elaborado con capas finas que encierran un relleno de arequipe premium. Ideal para un antojo especial.',
        pt: 'Folhado crocante e dourado, elaborado com camadas finas que envolvem um recheio de doce de leite premium. Ideal para um desejo especial.'
      }
    },
    {
      id: 'prod_07',
      name: { en: 'Guava Pastry', es: 'Pastel de Guayaba', pt: 'Pastel de Goiaba' },
      category: 'sweet',
      price: 1.85,
      badge: 'bestseller',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/pastelGuayaba00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/pastelGuayaba01.webp'],
      description: {
        en: 'The perfect combination of textures: very crunchy artisan puff pastry with the intense and tropical flavor of Venezuelan guava.',
        es: 'La combinación perfecta de texturas: hojaldre artesanal muy crujiente con el sabor intenso y tropical de la guayaba venezolana.',
        pt: 'A combinação perfeita de texturas: folhado artesanal muito crocante com o sabor intenso e tropical da goiaba venezuelana.'
      }
    },
    {
      id: 'prod_08',
      name: { en: 'Cheese Bread', es: 'Pan de Queso', pt: 'Pão de Queijo' },
      category: 'savory',
      price: 1.85,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panQueso00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panQueso01.webp'],
      description: {
        en: "Savory bread with soft dough, enriched with plenty of grated white 'llanero' cheese, both inside and on its golden crust.",
        es: 'Pan salado de masa suave, enriquecido con abundante queso blanco llanero rallado, tanto en su interior como en su corteza dorada.',
        pt: 'Pão salgado de massa macia, enriquecido com abundante queijo branco llanero ralado, tanto no interior como na sua crosta dourada.'
      }
    },
    {
      id: 'prod_09',
      name: { en: 'Quesadilla', es: 'Quesadilla', pt: 'Quesadilla' },
      category: 'sweet',
      price: 1.85,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/quesadilla00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/quesadilla01.webp'],
      description: {
        en: 'Traditional star-shaped delight, filled with a smooth sweet cheese cream and spices. A treasure of national bakery.',
        es: 'Delicia tradicional con forma de estrella, rellena de una suave crema de queso dulce y especias. Un tesoro de la panadería nacional.',
        pt: 'Delícia tradicional em forma de estrela, recheada com um creme suave de queijo doce e especiarias. Um tesouro da padaria nacional.'
      }
    },
    {
      id: 'prod_10',
      name: { en: 'Cortadito', es: 'Cortadito', pt: 'Cortadinho' },
      category: 'sweet',
      price: 1.85,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/cortadito00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/cortadito01.webp'],
      description: {
        en: 'Dense and spiced cake squares, flavored with raw cane sugar and ginger. The quintessential traditional snack.',
        es: 'Cuadritos de bizcocho denso y especiado, aromatizados con papelón y jengibre. La merienda tradicional por excelencia.',
        pt: 'Quadradinhos de bolo denso e especiado, aromatizados com rapadura e gengibre. O lanche tradicional por excelência.'
      }
    },
    {
      id: 'prod_11',
      name: { en: 'French Bread', es: 'Pan Francés', pt: 'Pão Francês' },
      category: 'savory',
      price: 1.23,
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panSalado00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panSalado01.webp'],
      description: {
        en: 'The daily bread in Venezuela: thin and crunchy crust with a very soft and airy crumb. Ideal when freshly baked.',
        es: 'El pan de cada día en Venezuela: corteza fina y crujiente con una miga muy suave y aireada. Ideal para comer recién horneado.',
        pt: 'O pão de cada dia na Venezuela: crosta fina e crocante com um miolo muito macio e aerado. Ideal para comer recém-saído do forno.'
      }
    },
    {
      id: 'prod_12',
      name: { en: 'Canilla Bread', es: 'Pan Canilla', pt: 'Pão Canilha' },
      category: 'savory',
      price: 1.23,
      badge: 'new',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panSalado00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/panSalado01.webp'],
      description: {
        en: 'Elongated bread with golden crust and tender crumb. The essential companion on the Venezuelan table for any meal.',
        es: 'Pan alargado de corteza dorada y miga tierna. Es el acompañante indispensable en la mesa venezolana para cualquier comida.',
        pt: 'Pão alongado de crosta dourada e miolo tenro. É o acompanhante indispensável na mesa venezuelana para qualquer refeição.'
      }
    },
    {
      id: 'prod_13',
      name: { en: 'Golfiado', es: 'Golfiado', pt: 'Golfiado' },
      category: 'sweet',
      price: 1.85,
      badge: 'limited',
      image: ['https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/golfiado00.webp', 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/golfiado01.webp'],
      description: {
        en: 'Sweet dough roll with anise essence, bathed in raw cane sugar syrup and topped with salty white cheese. An explosion of flavors.',
        es: 'Enrollado de masa dulce con esencia de anís, bañado en melao de papelón y cubierto con queso blanco salado. Una explosión de sabores.',
        pt: 'Enrolado de massa doce com essência de erva-doce, banhado em melado de cana e coberto com queijo branco salgado. Uma explosão de sabores.'
      }
    },
    {
      id: 'prod_14',
      name: { en: 'Coconut Cookies', es: 'Galletas de Coco', pt: 'Biscoitos de Coco' },
      category: 'sweet',
      price: 1.23,
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDF7fSTw92GVAq7sECTcDgRUB7tGF8ofY6fg&s'],
      description: {
        en: 'Rustic and crunchy cookies prepared with natural grated coconut. A little piece of the Caribbean in every bite.',
        es: 'Galletas rústicas y crujientes preparadas con coco natural rallado. Un pedacito del Caribe en cada mordisco.',
        pt: 'Biscoitos rústicos e crocantes preparados com coco natural ralado. Um pedacinho do Caribe em cada mordida.'
      }
    },
    {
      id: 'prod_15',
      name: { en: 'Milk Bread', es: 'Pan de Leche', pt: 'Pão de Leite' },
      category: 'sweet',
      price: 1.23,
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4u68A4SPTPrxPPJNy7pSTYmEq8YAW8wZySA&s'],
      description: {
        en: 'Extremely soft rolls, made with fresh milk and butter. Their cloud-like texture makes them irresistible.',
        es: 'Panecillos de extrema suavidad, elaborados con leche fresca y mantequilla. Su textura de nube los hace irresistibles.',
        pt: 'Pãezinhos de extrema suavidade, elaborados com leite fresco e manteiga. Sua textura de nuvem os torna irresistíveis.'
      }
    },
    {
      id: 'prod_16',
      name: { en: 'Pinita Bread', es: 'Pan Piñita', pt: 'Pão Pinha' },
      category: 'sweet',
      price: 1.23,
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4DajMk5cOEANh23U9mkuB3QtR7hKMzMI3A&s'],
      description: {
        en: 'Traditional sweet bread topped with granulated sugar. Its vanilla aroma and spongy texture evoke the best memories.',
        es: 'Pan dulce tradicional con costra de azúcar y un toque de vainilla. Su aroma a vainilla y su textura esponjosa evocan los mejores recuerdos.',
        pt: 'Pão doce tradicional com crosta de açúcar e um toque de baunilha. Seu aroma de baunilha e sua textura esponjosa evocam as melhores lembranças.'
      }
    },
    {
      id: 'prod_17',
      name: { en: 'Pecho de Niña', es: 'Pecho de Niña', pt: 'Peito de Menina' },
      category: 'sweet',
      price: 1.23,
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIs6NsclrbHEMZ6ZF3FJ_q9K_dt6bGTP8qw&s'],
      description: {
        en: 'Extra tender and delicate sweet bread, with a subtle aroma that captivates. A soft and comforting classic.',
        es: 'Pan dulce de masa extra tierna y delicada, con un sutil aroma que cautiva. Un clásico suave y reconfortante.',
        pt: 'Pão doce de massa extra tenra e delicada, com um aroma sutil que cativa. Um clássico macio e reconfortante.'
      }
    },
    {
      id: 'prod_18',
      name: { en: 'Large Guava Bread', es: 'Pan de Guayaba Grande', pt: 'Pão de Goiaba Grande' },
      category: 'sweet',
      price: 1.85,
      image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtZciVEJQ7ihGKqcC4OzW3axSrLHiaAslvA&s'],
      description: {
        en: 'A larger version of our classic guava bread, with even more filling and a perfect golden crust.',
        es: 'Una versión más grande de nuestro clásico pan de guayaba, con mucho más relleno y una corteza dorada perfecta.',
        pt: 'Uma versão maior do nosso clássico pão de goiaba, com ainda mais recheio e uma crosta dourada perfecta.'
      }
    },
    {
      id: 'prod_19',
      name: { en: 'Candied Peanuts', es: 'Maní Garrapiñado', pt: 'Amendoim Caramelizado' },
      category: 'sweet',
      price: 0.40,
      badge: 'new',
      image: 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/maniGarrapinado.webp',
      description: {
        en: 'Delicious artisan candied peanuts, crispy, sweet, and freshly caramelized. Perfect as a sweet snack.',
        es: 'Delicioso maní garrapiñado tradicional artesanal, crujiente, dulce y recién caramelizado. Perfecto como merienda dulce.',
        pt: 'Delicioso amendoim caramelizado artesanal tradicional, crocante, doce e recém-caramelizado. Perfeito como um lanche doce.'
      },
      sizes: {
        '100g': 0.6667,
        '250g': 1.6667,
        '500g': 3.3333
      }
    },
    {
      id: 'prod_20',
      name: { en: 'Sesame Peanuts', es: 'Maní con Ajonjolí', pt: 'Amendoim com Gergelim' },
      category: 'sweet',
      price: 0.40,
      badge: 'new',
      image: 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/maniAjonjoli.webp',
      description: {
        en: 'Traditional artisan peanuts coated with crispy caramelized sesame seeds. A perfect combination of sweetness and crunch.',
        es: 'Maní artesanal tradicional recubierto con crujientes semillas de ajonjolí caramelizadas. Una combinación perfecta de dulzura y textura.',
        pt: 'Amendoim artesanal tradicional coberto com sementes de gergelim caramelizadas crocantes. Uma combinação perfeita de doçura e crocância.'
      },
      sizes: {
        '100g': 0.6667,
        '250g': 1.6667,
        '500g': 3.3333
      }
    },
    {
      id: 'prod_21',
      name: { en: 'Salted Peanuts', es: 'Maní Salado', pt: 'Amendoim Salgado' },
      category: 'savory',
      price: 0.40,
      badge: 'new',
      image: 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/maniSalado.webp',
      description: {
        en: 'Premium roasted peanuts lightly seasoned with fine sea salt. The classic, crisp savory snack.',
        es: 'Maní tostado premium ligeramente sazonado con sal marina fina. El clásico snack salado y crujiente.',
        pt: 'Amendoim torrado premium levemente temperado com sal marinho fino. O clássico lanche salgado e crocante.'
      },
      sizes: {
        '100g': 0.6667,
        '250g': 1.6667,
        '500g': 3.3333
      }
    },
    {
      id: 'prod_22',
      name: { en: 'Mixed Peanuts', es: 'Maní Mixto', pt: 'Amendoim Misto' },
      category: 'savory',
      price: 0.40,
      badge: 'new',
      image: 'https://ik.imagekit.io/ItsWatuyusei/Image/Bakery/maniMixto.webp',
      description: {
        en: 'A delicious mix of roasted peanuts with a variety of seasonings. The perfect crunchy snack for any occasion.',
        es: 'Una deliciosa mezcla de maní tostado con una variedad de condimentos. El snack crujiente perfecto para cualquier ocasión.',
        pt: 'Uma deliciosa mistura de amendoim torrado com uma variedade de temperos. O lanche crocante perfeito para qualquer ocasião.'
      },
      sizes: {
        '100g': 0.6667,
        '250g': 1.6667,
        '500g': 3.3333
      }
    }
  ]
};

window.CONFIG = CONFIG;
