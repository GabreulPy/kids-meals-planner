const RECIPES = [
  // --- GRUPO 1: LIBRO DE RECETAS INFANTILES DEL PDF (1 a 20) ---
  {
    "id": "panquetitos-banana-avena",
    "name": "Panquetitos de Banana y Avena",
    "realName": "Panqueques de plátano sin azúcar",
    "category": "desayuno",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin azúcar añadida", "Saludable", "Alto en potasio"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "plátano", "amount": "1 unidad (maduro)"},
      {"name": "avena", "amount": "1 taza (en hojuelas)"},
      {"name": "leche", "amount": "1 taza"},
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "miel", "amount": "1 cucharadita (opcional)"},
      {"name": "canela", "amount": "1/2 cucharadita"}
    ],
    "instructions": [
      "Machaca la banana en un tazón hasta obtener un puré.",
      "Agrega el huevo, la avena, la leche, la miel y la canela. Mezcla bien hasta homogeneizar.",
      "Engrasa una sartén caliente con unas gotas de aceite o mantequilla.",
      "Vierte porciones de mezcla y cocina 2-3 minutos por lado hasta que estén dorados."
    ],
    "tips": "Para unos panqueques más esponjosos, agrega una cucharadita de polvo de hornear.",
    "image": "🥞"
  },
  {
    "id": "bollo-manzana-sarten",
    "name": "Bollo de Manzana en Sartén",
    "realName": "Mini bizcocho de manzana rallada",
    "category": "desayuno",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Naturalmente dulce", "Textura suave", "Sin horno"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "manzana", "amount": "1 unidad (rallada gruesa)"},
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "harina de avena", "amount": "2 cucharadas (o de trigo)"},
      {"name": "canela", "amount": "1 pizca"}
    ],
    "instructions": [
      "Ralla la manzana y presiona ligeramente con la mano para quitar el exceso de agua.",
      "Bate el huevo durante 10-15 segundos en un bol.",
      "Incorpora la manzana rallada y la canela. Añade la harina poco a poco mezclando bien.",
      "Pon una sartén antiadherente a fuego bajo con un hilo de aceite.",
      "Coloca cucharadas pequeñas de la mezcla, aplasta con la cuchara y cocina 2-3 minutos por lado."
    ],
    "tips": "La canela es la mejor aliada para que los niños acepten la receta sin necesidad de azúcar.",
    "image": "🍎"
  },
  {
    "id": "pan-queso-sarten",
    "name": "Pan de Queso en Sartén",
    "realName": "Pão de queijo rápido sin gluten",
    "category": "desayuno",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin gluten", "Rápido", "Rico en calcio"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "tapioca", "amount": "3 cucharadas (almidón de yuca)"},
      {"name": "queso", "amount": "1 cucharada (queso cheddar o mozzarella rallado)"},
      {"name": "yogur", "amount": "1 cucharada (natural o requesón)"}
    ],
    "instructions": [
      "Bate el huevo con el yogur y una pizca de sal en un bol pequeño.",
      "Añade la tapioca y mezcla vigorosamente hasta que no queden grumos.",
      "Agrega el queso rallado y revuelve suavemente.",
      "Vierte toda la mezcla en una sartén pequeña engrasada a fuego bajo.",
      "Tapa y cocina 2-3 minutos, dale la vuelta como un panqueque y cocina 1 minuto más."
    ],
    "tips": "Puedes doblarlo a la mitad e introducir una loncha de queso extra para que se derrita en el centro.",
    "image": "🧀"
  },
  {
    "id": "muffin-salado-vegetales",
    "name": "Muffin Salado de Vegetales",
    "realName": "Muffins de huevo y verduras camufladas",
    "category": "almuerzo",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Nutritivo", "Colorido", "Perfecto para lonchera"],
    "pickyEaters": true,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "harina", "amount": "3 cucharadas (trigo o avena)"},
      {"name": "leche", "amount": "2 cucharadas"},
      {"name": "calabacín", "amount": "2 cucharadas (rallado fino)"},
      {"name": "zanahoria", "amount": "1 cucharada (rallada fina)"},
      {"name": "queso", "amount": "1 cucharada (rallado)"},
      {"name": "polvo de hornear", "amount": "1/2 cucharadita"}
    ],
    "instructions": [
      "Bate el huevo con la leche y una pizca de sal.",
      "Añade la harina y el polvo de hornear poco a poco hasta lograr una masa lisa.",
      "Incorpora la zanahoria, el calabacín y el queso rallado.",
      "Vierte la masa en moldes de silicona engrasados hasta llenar 3/4 partes.",
      "Cocina en la freidora de aire a 180°C durante 10 minutos (o en horno a 180°C por 15 minutos)."
    ],
    "tips": "Escurre muy bien las verduras ralladas con un paño seco antes de añadirlas para evitar que ablanden demasiado la masa.",
    "image": "🥦"
  },
  {
    "id": "panecito-banana-horneado",
    "name": "Panecito de Banana Horneado",
    "realName": "Panecito de plátano en molde individual",
    "category": "desayuno",
    "time": 15,
    "difficulty": "Fácil",
    "nutritionTags": ["Naturalmente dulce", "Esponjoso", "Ideal para niños"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "plátano", "amount": "1 unidad (maduro, machacado)"},
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "avena", "amount": "3 cucharadas (harina o copos suaves)"},
      {"name": "polvo de hornear", "amount": "1/2 cucharadita"}
    ],
    "instructions": [
      "Tritura el plátano hasta obtener un puré suave.",
      "Bate el huevo en un bol y revuelve con el puré de plátano.",
      "Incorpora la avena y el polvo de hornear hasta tener una masa cremosa y espesa.",
      "Engrasa moldes pequeños de silicona y rellena a 3/4 partes.",
      "Cocina en la freidora de aire a 180°C durante 10-12 minutos (u horno por 15 minutos)."
    ],
    "tips": "Puedes enriquecer la masa añadiendo una cucharadita de uvas pasas o chips de chocolate negro.",
    "image": "🍞"
  },
  {
    "id": "sandwich-caliente-sarten",
    "name": "Sándwich Caliente en Sartén",
    "realName": "Tostado clásico con toque crujiente",
    "category": "cena",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["Práctico", "Rápido", "Favorito de los niños"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "pan", "amount": "2 rebanadas (molde integral)"},
      {"name": "queso", "amount": "1 rebanada"},
      {"name": "pavo", "amount": "1 rebanada (jamón cocido)"},
      {"name": "mantequilla", "amount": "1 cucharadita (o aceite)"}
    ],
    "instructions": [
      "Coloca el queso y el jamón de pavo entre las dos rebanadas de pan.",
      "Unta una capa muy fina de mantequilla en las caras externas del sándwich.",
      "Calienta una sartén a fuego medio-bajo.",
      "Dora el sándwich presionando ligeramente con una espátula por 2-3 minutos por lado hasta fundir el queso.",
      "Corta en triángulos o tiras para facilitar su consumo por parte de los niños."
    ],
    "tips": "Déjalo enfriar sobre una rejilla un minuto antes de cortarlo para que el pan mantenga su toque crujiente y no se humedezca.",
    "image": "🥪"
  },
  {
    "id": "pate-pollo-cremoso",
    "name": "Paté de Pollo Simple Cremoso",
    "realName": "Paté casero de pollo y yogur griego",
    "category": "almuerzo",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en proteína", "Suave", "Cero cocción"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pollo", "amount": "1 taza (pollo cocido desmenuzado)"},
      {"name": "zanahoria", "amount": "2 cucharadas (rallada muy fina)"},
      {"name": "yogur", "amount": "2 cucharadas (griego natural o queso crema)"},
      {"name": "mayonesa", "amount": "1 cucharada"}
    ],
    "instructions": [
      "Asegúrate de que el pollo cocido esté bien desmenuzado y picado muy fino.",
      "En un cuenco, mezcla el pollo con la zanahoria rallada.",
      "Añade el yogur natural, la mayonesa y una mini pizca de sal.",
      "Revuelve enérgicamente con un tenedor hasta obtener una pasta cremosa untable."
    ],
    "tips": "Es la forma perfecta de aprovechar las sobras de pollo. Sírvelo sobre tostadas o galletas saladas.",
    "image": "🍗"
  },
  {
    "id": "panquequita-zanahoria-colorida",
    "name": "Panquequita de Zanahoria Colorida",
    "realName": "Panqueques de zanahoria rallada",
    "category": "desayuno",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Rico en betacaroteno", "Color llamativo", "Saludable"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "zanahoria", "amount": "2 cucharadas (rallada muy fina)"},
      {"name": "harina de avena", "amount": "2 cucharadas"},
      {"name": "leche", "amount": "1 cucharada"}
    ],
    "instructions": [
      "Ralla la zanahoria por la parte más fina del rallador para que apenas se note la textura.",
      "Bate el huevo con una pizca de sal y añade la leche.",
      "Incorpora la harina y la zanahoria hasta integrar en una pasta uniforme.",
      "Cocina pequeñas porciones en una sartén engrasada caliente por 2 minutos de cada lado."
    ],
    "tips": "Sírvela cortada en tiras simulando 'rayitas de tigre' para motivar a los niños.",
    "image": "🥕"
  },
  {
    "id": "omelete-colorido-infantil",
    "name": "Omelete Colorido Infantil",
    "realName": "Tortilla de huevo con maíz y zanahoria",
    "category": "cena",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Proteico", "Sin olor fuerte", "Llamativo"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "zanahoria", "amount": "1 cucharada (rallada)"},
      {"name": "maíz", "amount": "1 cucharada (dulce desgranado)"},
      {"name": "queso", "amount": "1 cucharada (rallado)"}
    ],
    "instructions": [
      "Bate el huevo en una taza durante 15 segundos con un tenedor.",
      "Añade la zanahoria rallada, el maíz dulce y el queso.",
      "Calienta una sartén pequeña engrasada a fuego medio-bajo.",
      "Vierte la mezcla y cocina tapada por 2 minutos hasta que cuaje. Dale la vuelta con cuidado y doralas por el otro lado."
    ],
    "tips": "Cocinar la tortilla tapada a fuego bajo ayuda a que quede esponjosa y evita el olor intenso a huevo que repele a algunos niños.",
    "image": "🍳"
  },
  {
    "id": "galletitas-avena-banana",
    "name": "Galletitas de Avena y Banana",
    "realName": "Galletas rústicas de 2 ingredientes",
    "category": "reposteria",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin azúcar refinado", "Saciante", "100% natural"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "plátano", "amount": "1 unidad (maduro)"},
      {"name": "avena", "amount": "4 cucharadas (copos suaves)"},
      {"name": "canela", "amount": "1 pizca"}
    ],
    "instructions": [
      "Precalienta la freidora de aire a 180°C.",
      "Tritura el plátano con un tenedor hasta formar un puré húmedo.",
      "Agrega la avena y la canela. Mezcla hasta que los copos absorban el plátano y formen una masa moldeable.",
      "Forma pequeñas galletas con las manos y colócalas sobre papel de hornear en la canasta.",
      "Cocina a 180°C durante 8-10 minutos hasta que estén firmes y doradas."
    ],
    "tips": "Un dulce saludable y saciante ideal para llevar de merienda escolar en la mochila.",
    "image": "🍪"
  },
  {
    "id": "tapioca-banana-queso",
    "name": "Tapioca de Banana con Queso",
    "realName": "Tapioca brasileña dulce y salada",
    "category": "desayuno",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin gluten", "Equilibrada", "Energética"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "tapioca", "amount": "3 cucharadas (goma de tapioca hidratada)"},
      {"name": "plátano", "amount": "1/2 unidad (en rodajas finas)"},
      {"name": "queso", "amount": "1 loncha (mozzarella o semicurado)"}
    ],
    "instructions": [
      "Calienta una sartén antiadherente a fuego medio-bajo sin aceite.",
      "Tamiza la goma de tapioca directamente sobre la sartén cubriendo toda la superficie uniformemente.",
      "Cocina por 1 minuto hasta que la harina se una formando un disco firme.",
      "Coloca el queso y las rodajas de plátano en una mitad del disco.",
      "Dobla la tapioca a la mitad (forma de medialuna) y cocina 30 segundos por lado hasta que el queso se derrita."
    ],
    "tips": "El plátano debe ser bien maduro para aportar todo el contraste dulce al queso derretido.",
    "image": "🍌"
  },
  {
    "id": "crepioca-simple",
    "name": "Crepioca Simple de Sartén",
    "realName": "Tortitas de huevo y almidón de tapioca",
    "category": "cena",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin gluten", "Rápido", "Bajo en carbohidratos"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "tapioca", "amount": "2 cucharadas (goma de tapioca hidratada)"},
      {"name": "sal", "amount": "1 pizca"}
    ],
    "instructions": [
      "Bate el huevo con la pizca de sal en una taza hasta que esté espumoso.",
      "Agrega la tapioca y mezcla con el tenedor hasta que se disuelva por completo.",
      "Vierte en una sartén pequeña engrasada y caliente a fuego medio.",
      "Cocina como si fuera un panqueque por 2 minutos, voltéalo con una espátula y cocina 1 minuto más."
    ],
    "tips": "Sirve como base neutra para enrollar pavo, queso, aguacate o mermelada saludable.",
    "image": "🥚"
  },
  {
    "id": "bolitas-arroz-horno",
    "name": "Bolitas de Arroz al Horno",
    "realName": "Croquetas de arroz y queso cheddar",
    "category": "almuerzo",
    "time": 15,
    "difficulty": "Fácil",
    "nutritionTags": ["Aprovechamiento", "Textura crujiente", "Cero desperdicio"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "arroz", "amount": "1 taza (arroz cocido)"},
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "queso", "amount": "2 cucharadas (queso rallado)"},
      {"name": "harina de avena", "amount": "1 cucharada (si requiere consistencia)"}
    ],
    "instructions": [
      "En un bol, mezcla el arroz cocido frío con el huevo y el queso rallado.",
      "Si la mezcla se siente muy húmeda, agrega la cucharada de harina de avena para ligar.",
      "Forma pequeñas bolitas apretadas con las manos húmedas.",
      "Colócalas en la freidora de aire a 200°C por 8-10 minutos hasta que estén doradas y crujientes."
    ],
    "tips": "Puedes esconder un mini cubo de mozzarella en el centro de cada bolita para que los niños tengan una sorpresa elástica al morder.",
    "image": "🍙"
  },
  {
    "id": "panecillo-yogur-suave",
    "name": "Panecillo de Yogur Rápido",
    "realName": "Panecillos de yogur y harina leudante",
    "category": "desayuno",
    "time": 15,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin levadura biológica", "Esponjoso", "Muy práctico"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "yogur", "amount": "3 cucharadas (yogur natural sin azúcar)"},
      {"name": "harina", "amount": "3 cucharadas (harina de trigo leudante o avena)"},
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "polvo de hornear", "amount": "1/2 cucharadita"}
    ],
    "instructions": [
      "Bate el huevo con el yogur natural en un bol pequeño.",
      "Añade la harina y el polvo de hornear, mezclando con una espátula hasta formar una masa suave.",
      "Coloca la masa en pequeños moldes de silicona individuales.",
      "Cocina en la freidora de aire a 180°C durante 10-12 minutos hasta que insertes un palillo y salga seco."
    ],
    "tips": "Para una versión salada, añade una pizca de orégano y queso parmesano a la masa.",
    "image": "🧁"
  },
  {
    "id": "fruta-yogur-cremoso",
    "name": "Postre de Fruta y Yogur Cremoso",
    "realName": "Fruta de estación batida con yogur natural",
    "category": "reposteria",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["100% natural", "Refrescante", "Sin azúcar refinado"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "yogur", "amount": "3 cucharadas (yogur griego o natural)"},
      {"name": "manzana", "amount": "1/2 unidad (o fresa, plátano, mango)"},
      {"name": "canela", "amount": "1 pizca"}
    ],
    "instructions": [
      "Corta la fruta seleccionada en cubitos muy pequeños aptos para niños.",
      "Coloca el yogur natural en un potecito divertido.",
      "Añade la fruta picada y mezcla suavemente.",
      "Espolvorea una pizca de canela antes de servir."
    ],
    "tips": "Machaca un trozo de plátano en el fondo del yogur para endulzar el plato de forma 100% natural sin añadir miel ni azúcar.",
    "image": "🍓"
  },
  {
    "id": "heladito-natural-fruta",
    "name": "Heladito Natural de Fruta",
    "realName": "Polos de fruta batida congelada",
    "category": "reposteria",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["100% fruta", "Refrescante", "Sin azúcar añadido"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "plátano", "amount": "1 unidad (muy maduro)"},
      {"name": "fresas", "amount": "1 taza (frescas o arándanos)"},
      {"name": "agua", "amount": "1/2 vaso (o leche vegetal)"}
    ],
    "instructions": [
      "Licúa el plátano, las fresas y el agua hasta obtener un puré homogéneo y líquido.",
      "Vierte la mezcla en moldes de polo o en bolsitas para heladitos (tipo marcianos o bolis).",
      "Introduce en el congelador durante al menos 4-6 horas antes de servir."
    ],
    "tips": "Es la mejor alternativa a los helados industriales. El dulzor lo aporta íntegramente el plátano maduro.",
    "image": "🍦"
  },
  {
    "id": "bolitas-patata-queso",
    "name": "Bolitas de Patata con Queso",
    "realName": "Croquetas de puré de patata y queso",
    "category": "cena",
    "time": 15,
    "difficulty": "Fácil",
    "nutritionTags": ["Suave por dentro", "Textura crujiente", "Versátil"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "patata", "amount": "1 taza (puré de patata ya cocida)"},
      {"name": "queso", "amount": "1/2 taza (queso mozzarella o cheddar en cubitos)"},
      {"name": "huevo", "amount": "1 unidad (batido)"},
      {"name": "pan rallado", "amount": "4 cucharadas (para rebozar)"}
    ],
    "instructions": [
      "Toma una porción de puré de patata y aplástala en tu mano. Coloca un cubito de queso en el centro y forma una bolita cerrando el puré.",
      "Pasa cada bolita por el huevo batido y después por el pan rallado cubriéndola por completo.",
      "Colócalas en la canasta de la freidora de aire.",
      "Cocina a 190°C por 10 minutos hasta que estén bien crujientes y doradas."
    ],
    "tips": "Puedes cocer las patatas rápidamente en el microondas en 5 minutos para agilizar la receta al instante.",
    "image": "🥔"
  },
  {
    "id": "sandwich-pate-atun",
    "name": "Sándwich de Paté de Atún",
    "realName": "Sándwich untable de atún y mayonesa",
    "category": "almuerzo",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en Omega-3", "Listo en minutos", "Cero cocción"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "atún", "amount": "1 lata (atún al natural o en aceite escurrido)"},
      {"name": "mayonesa", "amount": "2 cucharadas (o yogur natural)"},
      {"name": "pan", "amount": "2 rebanadas (de molde)"},
      {"name": "limón", "amount": "3 gotas de jugo"}
    ],
    "instructions": [
      "Escurre completamente el líquido de la lata de atún.",
      "Mezcla el atún desmenuzado en un bol con la mayonesa y las gotas de limón.",
      "Unta el paté de manera uniforme sobre una de las rebanadas de pan.",
      "Cierra el sándwich y córtalo en cuartos pequeños aptos para manos infantiles."
    ],
    "tips": "Si deseas un sándwich extra fresco y crujiente, añade cebolla picada muy fina o rodajas de pepino.",
    "image": "🐟"
  },
  {
    "id": "mini-pan-pizza",
    "name": "Mini Pan Pizza Express",
    "realName": "Tostadas de pan con mozzarella y tomate",
    "category": "cena",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["Éxito garantizado", "Fácil", "Personalizable"],
    "pickyEaters": true,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "pan", "amount": "2 rebanadas (pan de molde o baguette)"},
      {"name": "tomate", "amount": "3 cucharadas (salsa de tomate triturada)"},
      {"name": "queso", "amount": "1/2 taza (queso mozzarella rallado)"},
      {"name": "orégano", "amount": "1 pizca"}
    ],
    "instructions": [
      "Extiende las rebanadas de pan sobre una tabla.",
      "Reparte la salsa de tomate sobre el pan de forma homogénea.",
      "Cubre con queso mozzarella rallado y espolvorea el orégano.",
      "Cocina en la freidora de aire a 180°C durante 5 minutos hasta que el queso esté totalmente fundido."
    ],
    "tips": "Es la mejor forma de camuflar calabacín o zanahoria rallándolos finamente dentro de la salsa de tomate.",
    "image": "🍕"
  },
  {
    "id": "bolitas-lluvia-banana",
    "name": "Bolitas de Lluvia de Banana",
    "realName": "Buñuelos de plátano sin azúcar",
    "category": "reposteria",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Tradicional", "Sin azúcar refinado", "Sin fritura"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "plátano", "amount": "2 unidades (maduros)"},
      {"name": "harina", "amount": "1 taza (trigo integral)"},
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "canela", "amount": "1/2 cucharadita"}
    ],
    "instructions": [
      "Machaca las bananas hasta lograr un puré fino sin grumos.",
      "Añade el huevo, la harina de trigo integral y la canela. Revuelve hasta crear una masa pegajosa.",
      "Con dos cucharas, toma porciones de masa dándoles forma redonda.",
      "Colócalas sobre papel vegetal en la freidora de aire y cocina a 180°C por 8-10 minutos hasta que estén dorados."
    ],
    "tips": "Sírvelos espolvoreados con un toque extra de canela. Son perfectos para una tarde de lluvia.",
    "image": "🍌"
  },

  // --- GRUPO 2: JUGOTERAPIA DEL LIBRO PDF (21 a 55) ---
  {
    "id": "jugo-manzana-pepino",
    "name": "Jugo Fresco de Manzana y Pepino",
    "realName": "Zumo verde digestivo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Digestivo", "Hidratante", "Sin azúcar añadido"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pepino", "amount": "1/2 unidad"},
      {"name": "manzana", "amount": "1 unidad (verde)"},
      {"name": "limón", "amount": "1/2 unidad (jugo)"}
    ],
    "instructions": [
      "Lava muy bien los ingredientes y córtalos en trozos adecuados para tu licuadora o extractor.",
      "Procesa el pepino y la manzana en tu juguera.",
      "Mezcla con el jugo de limón y sirve en un vaso con hielo."
    ],
    "tips": "El limón evita la oxidación rápida de la manzana y aporta un toque cítrico que refresca el paladar infantil.",
    "image": "🥤"
  },
  {
    "id": "limonada-esparrago",
    "name": "Limonada Verde de Espárrago",
    "realName": "Zumo depurativo de espárrago y manzana",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Rico en antioxidantes", "Depurativo", "Alto en hierro"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "manzana", "amount": "2 unidades (verdes)"},
      {"name": "espárragos", "amount": "6 tallos frescos (sin la base dura)"},
      {"name": "limón", "amount": "1/2 unidad (pelado)"}
    ],
    "instructions": [
      "Trocea las manzanas verdes en cuartos.",
      "Pasa los espárragos y el limón por el extractor.",
      "Pasa las manzanas verdes inmediatamente después para arrastrar toda la pulpa de espárrago.",
      "Sirve bien frío en un vaso con hielos."
    ],
    "tips": "La dulzura ácida de las dos manzanas verdes enmascara por completo el fuerte sabor terroso de los espárragos.",
    "image": "🥤"
  },
  {
    "id": "jugo-remolacha-naranja",
    "name": "Jugo de Remolacha y Naranja",
    "realName": "Zumo energizante rojo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Energético", "Rico en vitamina C", "Color llamativo"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "naranja", "amount": "2 unidades (peladas)"},
      {"name": "remolacha", "amount": "1 unidad (pequeña, con hojas)"}
    ],
    "instructions": [
      "Pela las naranjas retirando la piel externa pero dejando la pulpa blanca tersa.",
      "Corta la remolacha en cuartos.",
      "Procesa todos los ingredientes en el extractor.",
      "Mezcla bien para unificar el color rojo brillante y sirve de inmediato."
    ],
    "tips": "Las hojas de remolacha contienen gran cantidad de hierro. ¡No las tires, procésalas con el zumo!",
    "image": "🥤"
  },
  {
    "id": "jugo-blueberries-manzana",
    "name": "Zumo de Arándanos y Manzana",
    "realName": "Zumo antioxidante morado",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Antioxidante", "Mejora memoria", "Súper dulce"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "arándanos", "amount": "1 taza (arándanos azules frescos)"},
      {"name": "manzana", "amount": "2 unidades"}
    ],
    "instructions": [
      "Corta las manzanas en trozos que entren en tu juguera.",
      "Introduce los arándanos en el extractor apagado y tápalo con el accesorio de empuje para evitar salpicaduras.",
      "Enciende y procesa los arándanos seguidos por los cuartos de manzana.",
      "Sirve en un vaso grande. Rinde 1 porción."
    ],
    "tips": "Los arándanos son excelentes para el cerebro y el desarrollo cognitivo escolar de los niños.",
    "image": "🥤"
  },
  {
    "id": "limonada-zanahoria-pepino",
    "name": "Limonada de Zanahoria y Pepino",
    "realName": "Zumo refrescante nutritivo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Vit-A concentrada", "Muy hidratante", "Sin lácteos"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "4 unidades (medianas)"},
      {"name": "pepino", "amount": "1 unidad (pequeño)"},
      {"name": "jengibre", "amount": "1 trozo (de 2 cm)"},
      {"name": "limón", "amount": "1/2 unidad"}
    ],
    "instructions": [
      "Lava y corta las zanahorias y el pepino.",
      "Pasa todos los ingredientes por la licuadora o extractor.",
      "Mezcla enérgicamente y sirve de inmediato."
    ],
    "tips": "Aporta una gran cantidad de betacarotenos excelentes para la salud de la piel y de la vista.",
    "image": "🥤"
  },
  {
    "id": "extracto-zanahoria-manzana",
    "name": "Extracto de Zanahoria y Manzana",
    "realName": "Zumo clásico vitaminico",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Vitamina A", "Endulzado natural", "Muy ligero"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "4 unidades (medianas)"},
      {"name": "manzana", "amount": "1 unidad"}
    ],
    "instructions": [
      "Trocea las zanahorias y la manzana.",
      "Pásalas juntas por el extractor alternando los trozos.",
      "Sirve de inmediato. Rinde 1 porción."
    ],
    "tips": "Es la receta de iniciación por excelencia. Gusta a todos los niños por su dulzura natural.",
    "image": "🥤"
  },
  {
    "id": "coctel-zanahoria-naranja-jengibre",
    "name": "Cóctel de Zanahoria, Naranja y Jengibre",
    "realName": "Zumo estimulador inmune",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Sabor picante alegre", "Sistema inmune", "Antioxidante"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "naranja", "amount": "1 unidad (pelada)"},
      {"name": "jengibre", "amount": "1 trocito pequeño"}
    ],
    "instructions": [
      "Procesa en la licuadora o extractor todos los ingredientes cortados.",
      "Mezcla muy bien para integrar la frescura cítrica de la naranja con el toque picante del jengibre.",
      "Sirve frío."
    ],
    "tips": "El jengibre fresco ayuda a combatir los resfriados y a calentar el cuerpo de forma natural en invierno.",
    "image": "🥤"
  },
  {
    "id": "jugo-arandano-rojo-manzana",
    "name": "Zumo de Arándano Rojo y Manzana",
    "realName": "Zumo protector urinario",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Antibacteriano", "Dulce y ácido", "Cero grasas"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "arándanos", "amount": "1 taza (arándanos rojos frescos)"},
      {"name": "manzana", "amount": "2 unidades"}
    ],
    "instructions": [
      "Introduce los arándanos rojos en el extractor apagado.",
      "Enciende y procésalos seguidos inmediatamente por los trozos de manzana dulce.",
      "Mezcla y sirve frío."
    ],
    "tips": "El jugo de arándano rojo es ideal para combatir de forma natural las infecciones bacterianas.",
    "image": "🥤"
  },
  {
    "id": "refresco-pepino-lima",
    "name": "Refresco de Pepino y Lima",
    "realName": "Zumo súper hidratante de pepino",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Bajo índice glucémico", "Bajísimo en calorías", "Hidratación extrema"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pepino", "amount": "1 unidad (grande)"},
      {"name": "limón", "amount": "1 unidad (lima verde, pelada)"}
    ],
    "instructions": [
      "Trocea el pepino y la lima.",
      "Pasa ambos por el extractor de zumos.",
      "Mezcla bien y sirve con cubos de hielo."
    ],
    "tips": "Una bebida perfecta para reponer agua e hidratar en días muy calurosos de verano.",
    "image": "🥤"
  },
  {
    "id": "jugo-hinojo-manzana",
    "name": "Jugo de Hinojo y Manzana",
    "realName": "Zumo digestivo de hinojo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Excelente digestión", "Alivia gases", "Aroma anisado"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "hinojo", "amount": "1/4 de bulbo (con sus hojas)"},
      {"name": "manzana", "amount": "2 unidades (verdes)"}
    ],
    "instructions": [
      "Corta el bulbo de hinojo y las manzanas verdes en rodajas.",
      "Procesa en tu juguera alternando los ingredientes.",
      "Sirve recién preparado."
    ],
    "tips": "El hinojo aporta un dulzor anisado único y es genial para calmar dolores de estómago infantiles.",
    "image": "🥤"
  },
  {
    "id": "coctel-higo-zanahoria",
    "name": "Cóctel de Higo y Zanahoria",
    "realName": "Zumo reconstituyente dulce",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Súper dulce", "Reconstituyente", "Rico en fibra"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "higos", "amount": "3 unidades (frescos)"},
      {"name": "manzana", "amount": "1/2 unidad"}
    ],
    "instructions": [
      "Lava muy bien los higos frescos.",
      "Procesa los higos enteros, la manzana y las zanahorias en el extractor.",
      "Revuelve bien y sirve frío."
    ],
    "tips": "El higo aporta una textura densa y un dulzor increíble que hace que a los niños les parezca un batido de caramelos.",
    "image": "🥤"
  },
  {
    "id": "combinado-verduras-ajo",
    "name": "Combinado de Verduras con Ajo",
    "realName": "Zumo de vegetales con mini pizca de ajo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Antibiótico natural", "Salud cardiovascular", "Defensas fuertes"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "4 unidades"},
      {"name": "limón", "amount": "1 unidad"},
      {"name": "espinaca", "amount": "1 puñado (de berros)"},
      {"name": "ajo", "amount": "1 diente (sin pelar)"}
    ],
    "instructions": [
      "Trocea las zanahorias y el limón.",
      "Pasa el puñado de berros/espinacas por el extractor arrollados en sí mismos.",
      "Añade el diente de ajo y finalmente las zanahorias para empujar la esencia.",
      "Mezcla con cuidado y sirve frío."
    ],
    "tips": "El ajo es un potente antibiótico natural que estimula el sistema inmunológico infantil.",
    "image": "🥤"
  },
  {
    "id": "combinacion-manzana-apio",
    "name": "Combinación de Manzana y Apio",
    "realName": "Zumo ligero y depurativo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Muy ligero", "Bajo en azúcar", "Depurativo"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "manzana", "amount": "2 unidades (verdes)"},
      {"name": "apio", "amount": "4 pencas (con sus hojas)"}
    ],
    "instructions": [
      "Corta el apio en trozos pequeños para no enredar las fibras en la cuchilla.",
      "Trocea las manzanas en cuartos.",
      "Procesa ambos ingredientes en tu extractor de zumos y mezcla."
    ],
    "tips": "Las hojas de apio contienen valiosos minerales alcalinizantes. ¡No las retires!",
    "image": "🥤"
  },
  {
    "id": "extracto-guayaba-kiwi",
    "name": "Extracto de Guayaba y Kiwi",
    "realName": "Zumo súper Vitamina C",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Bomba Vitamina C", "Sin lácteos", "Sabor exótico"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "guayaba", "amount": "2 tazas (fresca picada)"},
      {"name": "kiwi", "amount": "2 unidades (pelados)"},
      {"name": "limón", "amount": "1/2 unidad (lima verde)"}
    ],
    "instructions": [
      "Lava y corta las guayabas retirando las semillas gruesas si son muy duras.",
      "Pasa las guayabas, los kiwis y la lima por la juguera.",
      "Mezcla el zumo resultante y sirve de inmediato."
    ],
    "tips": "Es una de las mejores combinaciones para reforzar las defensas de los niños durante los cambios de estación.",
    "image": "🥤"
  },
  {
    "id": "jugo-remolacha-pepino",
    "name": "Jugo con Remolacha y Pepino",
    "realName": "Zumo rojo hidratante",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Rojo intenso divertido", "Muy hidratante", "Antianémico"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "2 unidades"},
      {"name": "pepino", "amount": "1 unidad (pelado)"},
      {"name": "manzana", "amount": "1 unidad"},
      {"name": "remolacha", "amount": "1/2 unidad (con hojas)"}
    ],
    "instructions": [
      "Corta todos los vegetales en trozos medianos.",
      "Pásalos juntos por tu extractor alternando vegetales blandos con duros.",
      "Sirve en un vaso. Consumir de inmediato."
    ],
    "tips": "La remolacha da un color 'pócima roja' fascinante para jugar a los hechiceros mientras toman verduras.",
    "image": "🥤"
  },
  {
    "id": "extracto-jicama-zanahoria",
    "name": "Extracto de Jícama y Zanahoria",
    "realName": "Zumo refrescante de raíz",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Refrescante", "Muy ligero", "Sin azúcar añadido"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "2 unidades"},
      {"name": "jícama", "amount": "1 trozo (de 10 cm, pelado)"}
    ],
    "instructions": [
      "Pela la jícama y córtala en tiras gruesas.",
      "Trocea las zanahorias.",
      "Pasa ambos ingredientes por tu juguera y sirve con hielo."
    ],
    "tips": "La jícama es 90% agua y aporta un dulzor neutro crujiente fantástico.",
    "image": "🥤"
  },
  {
    "id": "clasica-limonada-manzana",
    "name": "Limonada Clásica de Manzana",
    "realName": "Zumo dulce-ácido de limón y manzana",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Familiar", "Muy refrescante", "Sin azúcar refinado"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "manzana", "amount": "2 unidades"},
      {"name": "limón", "amount": "1 unidad (amarillo, pelado)"}
    ],
    "instructions": [
      "Trocea las manzanas en cuartos.",
      "Pasa las manzanas y el limón pelado por el extractor.",
      "Sirve recién hecho con hielo picado."
    ],
    "tips": "Es la alternativa natural perfecta a los refrescos azucarados industriales.",
    "image": "🥤"
  },
  {
    "id": "refresco-lima-albaricoque",
    "name": "Refresco de Lima y Albaricoque",
    "realName": "Zumo dulce de albaricoque",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Exótico", "Rico en Vitamina A", "Súper dulce"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "manzana", "amount": "1 unidad"},
      {"name": "albaricoques", "amount": "2 unidades (deshuesados)"},
      {"name": "limón", "amount": "1/2 unidad (lima verde)"}
    ],
    "instructions": [
      "Deshuesa los albaricoques cortándolos a la mitad.",
      "Procesa los albaricoques, la manzana y la lima en el extractor.",
      "Mezcla bien y sirve en vaso con hielo."
    ],
    "tips": "El albaricoque aporta una textura sedosa muy agradable y dulce.",
    "image": "🥤"
  },
  {
    "id": "bebida-naranja-pepino",
    "name": "Bebida de Naranja y Pepino",
    "realName": "Zumo súper hidratante cítrico",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Hidratante", "Vitamina C", "Bajo en calorías"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pepino", "amount": "1 unidad (mediano)"},
      {"name": "naranja", "amount": "1 unidad (pelada)"}
    ],
    "instructions": [
      "Pela la naranja retirando la cáscara dura.",
      "Corta el pepino en rodajas.",
      "Pasa ambos ingredientes por tu juguera y sirve bien frío."
    ],
    "tips": "Combina la hidratación del pepino con la energía rápida y vitamina C de la naranja.",
    "image": "🥤"
  },
  {
    "id": "refresco-naranja-rabano",
    "name": "Refresco de Naranja y Rábano",
    "realName": "Zumo desintoxicante de rábano",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Defensas fuertes", "Desintoxicante", "Toque alegre"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "naranja", "amount": "2 unidades (peladas)"},
      {"name": "rábanos", "amount": "4 unidades (con tallos y hojas)"}
    ],
    "instructions": [
      "Lava muy bien los rábanos, conservando sus hojas frescas.",
      "Procesa los rábanos enteros y la naranja pelada en el extractor.",
      "Mezcla el zumo y sirve de inmediato."
    ],
    "tips": "El dulzor cítrico de las naranjas contrarresta por completo el picor característico del rábano crudo.",
    "image": "🥤"
  },
  {
    "id": "limonada-perejil-zanahoria",
    "name": "Limonada de Perejil y Zanahoria",
    "realName": "Zumo verde y naranja de perejil",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Remineralizante", "Vitamina A y C", "Salud ósea"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "manzana", "amount": "2 unidades"},
      {"name": "perejil", "amount": "1 puñado (hojas frescas)"},
      {"name": "limón", "amount": "1 unidad (pelado)"}
    ],
    "instructions": [
      "Corta la manzana y las zanahorias en cuartos.",
      "Pasa el perejil por el extractor junto al limón.",
      "Pasa las manzanas y zanahorias al final para limpiar el conducto.",
      "Sirve bien frío."
    ],
    "tips": "El perejil es una de las plantas más ricas en hierro y vitamina C del reino vegetal.",
    "image": "🥤"
  },
  {
    "id": "jugo-fortaleza-pimiento",
    "name": "Jugo Fortaleza con Pimiento",
    "realName": "Zumo vitamínico de pimiento rojo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Antioxidante", "Mejora defensas", "Rojo brillante"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "pepino", "amount": "1/2 unidad (pelado)"},
      {"name": "pimiento", "amount": "1/4 de unidad (rojo o verde)"}
    ],
    "instructions": [
      "Retira las semillas y membranas internas del pimiento.",
      "Trocea las zanahorias y el pepino.",
      "Pasa todos los ingredientes por el extractor y sirve."
    ],
    "tips": "El pimiento rojo aporta incluso más vitamina C que los cítricos más populares.",
    "image": "🥤"
  },
  {
    "id": "combinado-pina-esparrago",
    "name": "Combinado de Piña y Espárrago",
    "realName": "Zumo diurético de piña y espárrago",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Diurético", "Depurativo", "Dulce y tropical"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "espárragos", "amount": "6 tallos frescos"},
      {"name": "limón", "amount": "1/2 unidad (lima verde)"},
      {"name": "piña", "amount": "1/4 de unidad (pelada)"}
    ],
    "instructions": [
      "Trocea la piña en dados.",
      "Pasa los espárragos, la lima y finalmente los trozos de piña por el extractor.",
      "Sirve recién batido con hielo."
    ],
    "tips": "La piña aporta enzimas digestivas (bromelina) muy beneficiosas para estómagos perezosos.",
    "image": "🥤"
  },
  {
    "id": "coctel-rojo-pasion",
    "name": "Cóctel Rojo Pasión",
    "realName": "Zumo rojo de manzana y remolacha",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Antianémico", "Gran sabor", "Color fantástico"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "manzana", "amount": "1 unidad (verde)"},
      {"name": "remolacha", "amount": "1/2 unidad (con hojas)"},
      {"name": "pepino", "amount": "1 unidad"}
    ],
    "instructions": [
      "Corta la manzana, la remolacha y el pepino.",
      "Pásalos juntos por tu extractor alternando ingredientes.",
      "Sirve en un vaso grande con hielo."
    ],
    "tips": "El pepino diluye la remolacha suavizando el zumo para un sabor muy equilibrado.",
    "image": "🥤"
  },
  {
    "id": "jugo-tomate-frio",
    "name": "Jugo de Tomate Frío",
    "realName": "Zumo salado de tomate y rábano",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Salado refrescante", "Rico en licopeno", "Bajo en calorías"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "tomate", "amount": "2 unidades (maduros)"},
      {"name": "rábanos", "amount": "4 unidades (lavados)"},
      {"name": "limón", "amount": "1/2 unidad (o lima)"}
    ],
    "instructions": [
      "Trocea los tomates y los rábanos.",
      "Pasa todos los ingredientes por la licuadora o extractor.",
      "Sirve frío con una pizca de sal opcional."
    ],
    "tips": "Una alternativa refrescante y salada para variar los zumos dulces frutales.",
    "image": "🥤"
  },
  {
    "id": "bebida-naranja-picante",
    "name": "Bebida de Naranja Picante",
    "realName": "Zumo cítrico con jengibre",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Acelera metabolismo", "Vit-C reforzada", "Toque alegre"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "naranja", "amount": "1 unidad (pelada)"},
      {"name": "pepino", "amount": "1 unidad"},
      {"name": "jengibre", "amount": "1 trozo (de 2 cm)"}
    ],
    "instructions": [
      "Corta todos los ingredientes.",
      "Procésalos juntos en el extractor.",
      "Revuelve bien y sirve de inmediato."
    ],
    "tips": "El jengibre le da un toque picante suave que divierte y ayuda a la garganta.",
    "image": "🥤"
  },
  {
    "id": "refresco-tomate-dulce",
    "name": "Refresco de Tomate Dulce",
    "realName": "Zumo de tomate dulce y zanahoria",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Dulce natural", "Licopeno", "Mejora vista"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "manzana", "amount": "1 unidad (verde)"},
      {"name": "tomate", "amount": "1 unidad"}
    ],
    "instructions": [
      "Trocea la manzana, la zanahoria y el tomate.",
      "Pásalos juntos por tu extractor y sirve de inmediato."
    ],
    "tips": "La zanahoria y la manzana aportan el dulzor ideal para neutralizar la acidez natural del tomate crudo.",
    "image": "🥤"
  },
  {
    "id": "combinacion-tomate-apio",
    "name": "Combinación de Tomate y Apio",
    "realName": "Zumo refrescante salado",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Rico en sodio natural", "Hidratación", "Mineralizante"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "tomate", "amount": "2 unidades"},
      {"name": "apio", "amount": "2 pencas (con hojas)"}
    ],
    "instructions": [
      "Trocea los tomates y corta las pencas de apio.",
      "Pasa todo por el extractor de zumos y mezcla bien antes de servir."
    ],
    "tips": "Una receta clásica y excelente para recuperar sales minerales tras jugar o hacer deporte.",
    "image": "🥤"
  },
  {
    "id": "mezcla-manzana-pepino-apio",
    "name": "Mezcla de Manzana, Pepino y Apio",
    "realName": "Zumo verde balanceado",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Bajo índice glucémico", "Equilibrado", "Rico en clorofila"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "manzana", "amount": "1 unidad (verde)"},
      {"name": "apio", "amount": "3 pencas (con hojas)"},
      {"name": "limón", "amount": "1 unidad (pelado)"},
      {"name": "pepino", "amount": "1/2 unidad"}
    ],
    "instructions": [
      "Corta todos los ingredientes en trozos medianos.",
      "Procesa en la juguera alternándolos y sirve bien frío con hielo."
    ],
    "tips": "El pepino e hinojo son fantásticos para limpiar el tracto digestivo de forma natural.",
    "image": "🥤"
  },
  {
    "id": "rucula-manzana-limon",
    "name": "Jugo de Rúcula, Manzana y Limón",
    "realName": "Zumo verde amargo camuflado",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Anticancerígeno", "Hierro y Vitamina C", "Toque cítrico"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pepino", "amount": "1 unidad (pelado)"},
      {"name": "limón", "amount": "1 unidad (pelado)"},
      {"name": "manzana", "amount": "1 unidad (verde)"},
      {"name": "rúcula", "amount": "1 puñado (pequeño)"}
    ],
    "instructions": [
      "Trocea el pepino, la manzana y el limón.",
      "Introduce el puñado de rúcula en la juguera seguido por el limón y pepino para empujar.",
      "Mezcla bien y consume frío."
    ],
    "tips": "La rúcula estimula las enzimas desintoxicantes del cuerpo. La manzana enmascara su sabor picante.",
    "image": "🥤"
  },
  {
    "id": "jugo-verde-colinabo-col",
    "name": "Jugo Verde de Colinabo y Col Rizada",
    "realName": "Zumo de col rizada y colinabo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Súper nutritivo", "Rico en Calcio", "Calidad ósea"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "colinabo", "amount": "1 unidad (pequeño, con hojas)"},
      {"name": "col", "amount": "1 hoja (col rizada/kale)"},
      {"name": "kiwi", "amount": "1 unidad"},
      {"name": "apio", "amount": "2 pencas"},
      {"name": "manzana", "amount": "1 unidad"},
      {"name": "limón", "amount": "1/2 unidad"}
    ],
    "instructions": [
      "Enrolla las hojas de col rizada e introdúcelas en el extractor con el kiwi y el colinabo.",
      "Sigue procesando con la manzana, el apio y el limón.",
      "Mezcla hasta unificar y sirve de inmediato."
    ],
    "tips": "El colinabo aporta gran cantidad de calcio, fundamental para el crecimiento de los huesos infantiles.",
    "image": "🥤"
  },
  {
    "id": "manzana-pepino-liviano",
    "name": "Manzana y Pepino Liviano",
    "realName": "Zumo verde refrescante de jengibre",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Muy ligero", "Antiinflamatorio", "Saludable"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "manzana", "amount": "2 unidades"},
      {"name": "apio", "amount": "2 pencas"},
      {"name": "pepino", "amount": "1 unidad"},
      {"name": "jengibre", "amount": "1 trozo (de 2 cm)"}
    ],
    "instructions": [
      "Lava y corta todos los vegetales.",
      "Procesa en el extractor alternando ingredientes duros y blandos.",
      "Sirve fresco."
    ],
    "tips": "Excelente para desinflamar el estómago tras comidas copiosas de fin de semana.",
    "image": "🥤"
  },
  {
    "id": "jugo-remolacha-jengibre",
    "name": "Jugo de Remolacha y Jengibre",
    "realName": "Zumo rojo de remolacha y ajo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Color vibrante", "Estimulante", "Antianémico"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "col", "amount": "2 hojas (col rizada)"},
      {"name": "remolacha", "amount": "1 unidad (pequeña)"},
      {"name": "jengibre", "amount": "1 trozo (de 2 cm)"},
      {"name": "limón", "amount": "1 unidad"},
      {"name": "ajo", "amount": "1 diente"}
    ],
    "instructions": [
      "Corta todos los ingredientes.",
      "Pásalos juntos por tu extractor y sirve de inmediato."
    ],
    "tips": "El ajo crudo y el jengibre combinados son ideales para proteger la garganta en los meses fríos.",
    "image": "🥤"
  },
  {
    "id": "bebida-brocoli-energia",
    "name": "Bebida con Brócoli para Energía",
    "realName": "Zumo verde de brócoli y apio",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Útil para diabéticos", "Nutrición celular", "Sin azúcar"],
    "ingredients": [
      {"name": "zanahoria", "amount": "2 unidades"},
      {"name": "brócoli", "amount": "3 grumos (tallo incluido)"},
      {"name": "apio", "amount": "2 pencas"},
      {"name": "pepino", "amount": "1 unidad"},
      {"name": "limón", "amount": "1 unidad"}
    ],
    "instructions": [
      "Lava y trocea el brócoli y las zanahorias.",
      "Pasa todos los ingredientes por el extractor y sirve."
    ],
    "tips": "¡No tires el tallo del brócoli! Es súper rico en sulforafano y se procesa perfectamente en jugos.",
    "image": "🥤"
  },
  {
    "id": "mezcla-verde-col-fresa",
    "name": "Mezcla Verde de Col Rizada y Fresa",
    "realName": "Zumo verde dulce de fresa",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Antioxidante", "Rico en hierro", "Sabor dulce"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "col", "amount": "3 hojas (col rizada/acelga)"},
      {"name": "naranja", "amount": "2 unidades (peladas)"},
      {"name": "fresas", "amount": "1 taza (con hojas)"}
    ],
    "instructions": [
      "Trocea las naranjas peladas.",
      "Pasa las hojas verdes arrolladas junto a las fresas y naranjas por el extractor.",
      "Revuelve muy bien y sirve frío."
    ],
    "tips": "Las hojas que coronan las fresas son comestibles y ricas en minerales, ¡pásalas también por la juguera!",
    "image": "🥤"
  },

  // --- GRUPO 3: DESAYUNOS ADICIONALES SALUDABLES (56 a 75) ---
  {
    "id": "brochetas-fruta-arcoiris",
    "name": "Brochetas de Frutas del Arcoíris",
    "realName": "Pinchos de frutas variadas con miel",
    "category": "desayuno",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["100% natural", "Vistoso", "Fácil preparación"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "fresas", "amount": "4 unidades"},
      {"name": "plátano", "amount": "1 unidad (rodajas)"},
      {"name": "piña", "amount": "1/2 taza (en dados)"},
      {"name": "uvas", "amount": "8 unidades (uvas sin semillas)"},
      {"name": "miel", "amount": "1 cucharadita"}
    ],
    "instructions": [
      "Lava y corta la fruta en trozos del mismo tamaño.",
      "Inserta alternadamente las frutas en palitos de madera para brocheta, creando los colores del arcoíris.",
      "Coloca en un plato divertido y vierte un hilo muy fino de miel por encima."
    ],
    "tips": "¡Deja que los niños armen las brochetas! Manipular las frutas aumenta las probabilidades de que se las coman.",
    "image": "🍓"
  },
  {
    "id": "huevos-nido-pimiento",
    "name": "Huevos en Nido de Pimiento",
    "realName": "Huevos a la plancha dentro de aros de pimiento",
    "category": "desayuno",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en proteína", "Colorido", "Bajo en carbohidratos"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "huevo", "amount": "2 unidades"},
      {"name": "pimiento", "amount": "2 aros gruesos (pimiento rojo o amarillo)"},
      {"name": "aceite de oliva", "amount": "1 cucharadita"}
    ],
    "instructions": [
      "Corta dos aros gruesos de pimiento (de unos 2 cm de grosor).",
      "Calienta una sartén con el aceite de oliva a fuego medio.",
      "Coloca los aros de pimiento y cocínalos por 1 minuto.",
      "Casca un huevo dentro de cada aro de pimiento.",
      "Tapa la sartén y cocina a fuego bajo por 3-4 minutos hasta que la clara esté firme."
    ],
    "tips": "Usa pimientos de diferentes colores para hacer 'ojos' o nidos divertidos en el plato.",
    "image": "🍳"
  },
  {
    "id": "avena-trasnochada-fresa",
    "name": "Avena Trasnochada Mágica de Fresa",
    "realName": "Overnight oats de fresas",
    "category": "desayuno",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin cocción", "Rico en fibra", "Súper práctico"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "avena", "amount": "4 cucharadas (copos)"},
      {"name": "leche", "amount": "1/2 taza"},
      {"name": "yogur", "amount": "2 cucharadas (yogur griego)"},
      {"name": "fresas", "amount": "3 unidades (picadas)"},
      {"name": "chía", "amount": "1 cucharadita"}
    ],
    "instructions": [
      "En un tarro de cristal con tapa, introduce la avena, la chía, el yogur y la leche.",
      "Mezcla muy bien con una cuchara y añade las fresas picadas encima.",
      "Cierra el tarro y guárdalo en la nevera durante toda la noche.",
      "Revuelve a la mañana siguiente y sirve directamente."
    ],
    "tips": "Es el desayuno definitivo para los días de semana escolares más ocupados: ¡abrir y comer!",
    "image": "🥣"
  },
  {
    "id": "tostada-osito-cacahuete",
    "name": "Tostada de Osito Dulce",
    "realName": "Tostada con crema de cacahuete y frutas",
    "category": "desayuno",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Grasas saludables", "Divertido", "Listo en minutos"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pan", "amount": "1 rebanada (pan integral tostado)"},
      {"name": "crema de cacahuete", "amount": "1 cucharada (natural)"},
      {"name": "plátano", "amount": "3 rodajas"},
      {"name": "arándanos", "amount": "3 unidades"}
    ],
    "instructions": [
      "Tuesta la rebanada de pan integral y úntale la crema de cacahuete.",
      "Coloca dos rodajas de plátano en las esquinas superiores para hacer las orejas.",
      "Coloca la tercera rodaja de plátano en el centro de la tostada para simular el hocico.",
      "Usa dos arándanos como ojos y el tercero encima de la rodaja central como nariz."
    ],
    "tips": "El osito cobrará vida en 1 minuto. Puedes usar mermelada saludable para dibujar la boca si lo deseas.",
    "image": "🐻"
  },
  {
    "id": "waffles-espinaca-dulce",
    "name": "Waffles de Espinaca Dulce",
    "realName": "Waffles verdes de avena y espinacas",
    "category": "desayuno",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Picky Eaters", "Color brillante", "Saludable"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "espinaca", "amount": "1 taza (hojas frescas)"},
      {"name": "harina de avena", "amount": "4 cucharadas"},
      {"name": "leche", "amount": "3 cucharadas"},
      {"name": "plátano", "amount": "1/2 unidad"}
    ],
    "instructions": [
      "Coloca todos los ingredientes en el vaso de la licuadora.",
      "Licúa a alta velocidad hasta obtener una masa verde brillante homogénea.",
      "Vierte la masa en una waflera caliente previamente engrasada.",
      "Cocina por 4-5 minutos hasta que el waffle esté ligeramente crujiente por fuera."
    ],
    "tips": "La dulzura del plátano oculta totalmente el sabor de la espinaca, creando waffles de un tono 'Shrek' que les encanta.",
    "image": "🧇"
  },
  {
    "id": "gachas-avena-chocolate",
    "name": "Gachas de Avena Súper Chocolate",
    "realName": "Porridge de avena con cacao y plátano",
    "category": "desayuno",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Energético", "Rico en fibra", "Desayuno reconfortante"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "avena", "amount": "1/2 taza (copos)"},
      {"name": "leche", "amount": "1 taza"},
      {"name": "cacao", "amount": "1 cucharadita (cacao puro en polvo)"},
      {"name": "plátano", "amount": "1/2 unidad (machacado)"}
    ],
    "instructions": [
      "En una olla pequeña, mezcla la avena, la leche, el plátano machacado y el cacao en polvo.",
      "Calienta a fuego medio removiendo constantemente con una cuchara de madera.",
      "Cocina por 5 minutos hasta que la avena absorba la leche y espese como una crema espesa.",
      "Sirve caliente en un bol divertido."
    ],
    "tips": "Adorna con rodajas de plátano fresco y fresas para aportar color y dulzor extra.",
    "image": "🥣"
  },
  {
    "id": "rollitos-tostada-francesa",
    "name": "Rollitos de Tostada Francesa",
    "realName": "Wraps dulces de pan de molde con canela",
    "category": "desayuno",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Divertido", "Rápido", "Ideal para meriendas"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "pan", "amount": "2 rebanadas (pan de molde integral)"},
      {"name": "huevo", "amount": "1 unidad (batido)"},
      {"name": "leche", "amount": "2 cucharadas"},
      {"name": "canela", "amount": "1/2 cucharadita"},
      {"name": "queso crema", "amount": "1 cucharada (o crema de cacahuete)"}
    ],
    "instructions": [
      "Quita los bordes al pan de molde y aplana la miga con un rodillo o botella limpia.",
      "Unta el queso crema sobre la superficie y espolvorea un poco de canela.",
      "Enrolla cada rebanada sobre sí misma apretando bien.",
      "Pasa cada rollo por la mezcla de huevo y leche batida.",
      "Cocina en una sartén con mantequilla a fuego medio por 3-4 minutos girándolos hasta dorar por completo."
    ],
    "tips": "Los niños pueden comer estos rollitos con las manos directamente sin ensuciarse.",
    "image": "🥖"
  },
  {
    "id": "huevos-revueltos-astronauta",
    "name": "Huevos Revueltos del Astronauta",
    "realName": "Huevos revueltos cremosos de microondas",
    "category": "desayuno",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Ultra rápido", "Proteico", "Textura suave"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "huevo", "amount": "2 unidades"},
      {"name": "leche", "amount": "1 cucharada (o agua)"},
      {"name": "queso", "amount": "1 cucharada (rallado)"}
    ],
    "instructions": [
      "Casca los huevos en una taza apta para microondas.",
      "Añade la leche, una pizca de sal y bate enérgicamente con un tenedor.",
      "Cocina en el microondas a potencia máxima durante 45 segundos.",
      "Saca la taza, remueve con el tenedor desmigando los huevos, espolvorea el queso y cocina 30 segundos más."
    ],
    "tips": "Es el huevo revuelto más rápido del mundo. Queda súper esponjoso y no ensucia sartenes.",
    "image": "🍳"
  },
  {
    "id": "tostada-aguacate-monstruo",
    "name": "Tostada de Aguacate del Monstruo",
    "realName": "Tostada con guacamole simple e infantil",
    "category": "desayuno",
    "time": 6,
    "difficulty": "Fácil",
    "nutritionTags": ["Grasas saludables", "Color divertido", "Rápido"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pan", "amount": "1 rebanada (integral)"},
      {"name": "aguacate", "amount": "1/2 unidad (maduro)"},
      {"name": "tomate", "amount": "1 rodaja (cherry para decoración)"},
      {"name": "limón", "amount": "3 gotas"}
    ],
    "instructions": [
      "Pisa el aguacate con un tenedor y añade las gotas de limón y una pizca de sal.",
      "Tuesta la rebanada de pan y unta el puré de aguacate verde.",
      "Usa dos mitades de tomate cherry para hacer los ojos del monstruo.",
      "Usa finas tiras de pimiento para dibujar una sonrisa divertida."
    ],
    "tips": "El aguacate es rico en grasas saludables indispensables para la energía escolar de los niños.",
    "image": "🥑"
  },
  {
    "id": "quesadilla-desayuno",
    "name": "Quesadilla Express de Desayuno",
    "realName": "Tortilla de trigo con queso y jamón de pavo",
    "category": "desayuno",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["Muy práctico", "Queso derretido", "Energético"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "tortilla", "amount": "1 unidad (de trigo o maíz)"},
      {"name": "queso", "amount": "1/2 taza (mozzarella rallada)"},
      {"name": "pavo", "amount": "1 loncha (picada)"}
    ],
    "instructions": [
      "Coloca la tortilla en una sartén a fuego medio.",
      "Espolvorea el queso y el jamón de pavo picado en una mitad de la tortilla.",
      "Dobla la tortilla sobre sí misma cubriendo el relleno.",
      "Cocina por 2 minutos de cada lado hasta que la tortilla esté crujiente y el queso derretido."
    ],
    "tips": "Corta la quesadilla en pequeños triángulos simulando 'dientes de dinosaurio' para motivar su consumo.",
    "image": "🌮"
  },
  {
    "id": "brocheta-tapioca-queso",
    "name": "Brocheta Crujiente de Tapioca",
    "realName": "Daditos de tapioca al horno con queso",
    "category": "desayuno",
    "time": 15,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin gluten", "Forma divertida", "Crujiente"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "tapioca", "amount": "4 cucharadas (goma hidratada)"},
      {"name": "queso", "amount": "2 cucharadas (queso parmesano rallado)"},
      {"name": "huevo", "amount": "1 unidad (batido)"}
    ],
    "instructions": [
      "Mezcla la tapioca con el queso parmesano y el huevo batido hasta crear una masa densa.",
      "Extiende la masa en un molde pequeño de silicona dándole un espesor de 2 cm.",
      "Cocina en la freidora de aire a 190°C por 10 minutos.",
      "Saca de la freidora, córtalo en dados gruesos y ensártalos en palitos de brocheta."
    ],
    "tips": "Acompáñalos con una salsa de yogur o puré de frutas casero para mojar.",
    "image": "🍢"
  },
  {
    "id": "muffins-huevo-espinaca",
    "name": "Muffins de Huevo y Espinaca",
    "realName": "Mini tortillas de espinaca en molde",
    "category": "desayuno",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Rico en hierro", "Picky Eaters", "Bajo en carbohidratos"],
    "pickyEaters": true,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "huevo", "amount": "2 unidades"},
      {"name": "espinaca", "amount": "1/2 taza (picada muy fina)"},
      {"name": "queso", "amount": "2 cucharadas (queso cheddar rallado)"}
    ],
    "instructions": [
      "Bate los huevos con una pizca de sal en un bol.",
      "Añade la espinaca picada muy fina y el queso rallado.",
      "Distribuye en 3 moldes de silicona para muffin.",
      "Cocina en la freidora de aire a 180°C por 8-10 minutos hasta que estén inflados y firmes."
    ],
    "tips": "Parecen pequeños pastelillos verdes de duende. ¡Presentarlos con un nombre de fantasía ayuda muchísimo!",
    "image": "🧁"
  },
  {
    "id": "tostada-francesa-astronauta",
    "name": "Tostada Francesa del Astronauta",
    "realName": "Tostada francesa al horno rápida",
    "category": "desayuno",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Esponjosa", "Desayuno clásico", "Fácil"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "pan", "amount": "2 rebanadas (pan del día anterior)"},
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "leche", "amount": "1/4 de taza"},
      {"name": "canela", "amount": "1/2 cucharadita"}
    ],
    "instructions": [
      "Bate el huevo, la leche y la canela en un plato hondo.",
      "Sumerge las rebanadas de pan en la mezcla durante 15 segundos por lado.",
      "Coloca el pan empapado sobre papel vegetal en la freidora de aire.",
      "Cocina a 180°C por 8 minutos, volteando a mitad del tiempo."
    ],
    "tips": "Quedan crujientes por fuera y súper tiernas por dentro, sin exceso de grasa por fritura.",
    "image": "🍞"
  },
  {
    "id": "rollitos-platano-tortilla",
    "name": "Rollitos de Plátano y Tortilla",
    "realName": "Wrap dulce de plátano y crema de cacahuete",
    "category": "desayuno",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin cocción", "Alto en potasio", "Muy rápido"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "tortilla", "amount": "1 unidad (tortilla de trigo integral)"},
      {"name": "crema de cacahuete", "amount": "1 cucharada"},
      {"name": "plátano", "amount": "1 unidad"}
    ],
    "instructions": [
      "Extiende la tortilla y úntale la crema de cacahuete en toda la superficie.",
      "Coloca el plátano pelado entero en un extremo de la tortilla.",
      "Enrolla la tortilla envolviendo el plátano por completo de manera compacta.",
      "Corta el wrap resultante en rodajas de 2 cm (estilo sushi dulce)."
    ],
    "tips": "A los niños les encanta comer 'sushi' de plátano por la mañana. ¡Es divertido y súper nutritivo!",
    "image": "🍌"
  },
  {
    "id": "arepita-maiz-queso",
    "name": "Arepitas de Maíz y Queso",
    "realName": "Arepas de maíz rellenas de mozzarella",
    "category": "desayuno",
    "time": 15,
    "difficulty": "Medio",
    "nutritionTags": ["Sin gluten", "Queso fundido", "Muy sabroso"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "harina", "amount": "1/2 taza (harina de maíz precocida)"},
      {"name": "agua", "amount": "1/2 taza (tibia)"},
      {"name": "queso", "amount": "1/2 taza (mozzarella rallada)"}
    ],
    "instructions": [
      "En un bol, mezcla el agua tibia con la harina de maíz y una pizca de sal. Amasa 2 minutos.",
      "Añade la mitad del queso a la masa y amasa un poco más.",
      "Forma pequeñas bolas y aplástalas hasta obtener discos de 1 cm de grosor.",
      "Cocina en una sartén caliente con aceite por 4-5 minutos por lado.",
      "Ábrelas por la mitad caliente e introduce el resto del queso para que se funda."
    ],
    "tips": "El queso fundido en el interior es irresistible. Al usar harina precocida, la masa se hace al instante.",
    "image": "🫓"
  },

  // --- GRUPO 4: PLATOS FUERTES ADICIONALES (76 a 105) ---
  {
    "id": "hamburguesitas-lentejas",
    "name": "Mini Hamburguesas de Lentejas",
    "realName": "Hamburguesas de lenteja cocida express",
    "category": "almuerzo",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en fibra", "Vegano", "Rico en hierro"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "lentejas", "amount": "1 taza (lentejas cocidas escurridas)"},
      {"name": "pan rallado", "amount": "3 cucharadas (o harina de avena)"},
      {"name": "ajo", "amount": "1/4 cucharadita (en polvo)"},
      {"name": "perejil", "amount": "1 cucharadita (picado)"}
    ],
    "instructions": [
      "Pisa las lentejas cocidas con un tenedor hasta formar una pasta rústica.",
      "Añade el ajo en polvo, el perejil, una pizca de sal y el pan rallado.",
      "Mezcla bien hasta formar una masa manejable con las manos.",
      "Divide en 4 pequeñas hamburguesas.",
      "Cocina en una sartén engrasada caliente durante 3 minutos por lado."
    ],
    "tips": "Al usar lentejas de bote ya cocidas, te ahorras el tiempo de cocción y las preparas en minutos.",
    "image": "🍔"
  },
  {
    "id": "tacitas-huevo-espinaca",
    "name": "Tacitas de Huevo y Espinaca",
    "realName": "Mini quiches de verdura sin masa",
    "category": "almuerzo",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en proteína", "Picky Eaters", "Freidora de Aire"],
    "pickyEaters": true,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "huevo", "amount": "2 unidades"},
      {"name": "espinaca", "amount": "1/2 taza (picada muy fina)"},
      {"name": "pavo", "amount": "2 lonchas (picadas)"},
      {"name": "queso", "amount": "2 cucharadas (mozzarella)"}
    ],
    "instructions": [
      "Bate los huevos con sal y pimienta en un cuenco.",
      "Añade la espinaca muy fina, el jamón de pavo y el queso mozzarella.",
      "Vierte la mezcla en 3 moldes de silicona para muffins.",
      "Cocina en la freidora de aire a 180°C por 8 minutos hasta dorar."
    ],
    "tips": "Sírvelas calientes o llévalas frías en la lonchera, ¡mantienen su textura perfecta!",
    "image": "🧁"
  },
  {
    "id": "quesadilla-frijoles-queso",
    "name": "Quesadilla de Frijoles y Queso",
    "realName": "Quesadilla mexicana rápida de alubias",
    "category": "cena",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["Rico en fibra", "Alto en proteína", "Muy sabroso"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "tortilla", "amount": "1 unidad (de trigo)"},
      {"name": "frijoles", "amount": "3 cucharadas (frijoles negros cocidos machacados)"},
      {"name": "queso", "amount": "1/2 taza (queso cheddar o gouda rallado)"}
    ],
    "instructions": [
      "Machaca los frijoles negros con un tenedor hasta hacer un puré.",
      "Extiende el puré de frijoles sobre una mitad de la tortilla de trigo.",
      "Espolvorea el queso sobre los frijoles y dobla la tortilla.",
      "Dora en la sartén a fuego medio por 2 minutos por lado hasta fundir el queso."
    ],
    "tips": "El queso fundido se une a los frijoles creando una textura súper cremosa que encanta a los niños.",
    "image": "🌮"
  },
  {
    "id": "rollitos-calabacin-pavo",
    "name": "Rollitos de Calabacín y Pavo",
    "realName": "Rollitos de calabacín a la plancha",
    "category": "cena",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Bajo en carbohidratos", "Vistoso", "Muy saludable"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "calabacín", "amount": "1 unidad (en láminas largas)"},
      {"name": "pavo", "amount": "4 lonchas (jamón cocido)"},
      {"name": "queso", "amount": "4 láminas (queso fundido suave)"}
    ],
    "instructions": [
      "Usa un pelador de patatas para cortar el calabacín en láminas largas y finas.",
      "Coloca una lámina de calabacín, coloca una tira de pavo y otra de queso encima.",
      "Enrolla firmemente y sujétalo con un palillo.",
      "Cocina los rollitos en una sartén caliente con unas gotas de aceite durante 2 minutos por lado hasta ablandar el calabacín y fundir el queso."
    ],
    "tips": "Una presentación enrollada hace que los calabacines parezcan divertidos rollitos de espías.",
    "image": "🥒"
  },
  {
    "id": "mac-cheese-calabaza",
    "name": "Mac and Cheese de Calabaza",
    "realName": "Macarrones con salsa cremosa de calabaza y queso",
    "category": "almuerzo",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Picky Eaters", "Cremoso", "Rico en vitamina A"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "pasta", "amount": "100g (macarrones integrales)"},
      {"name": "calabaza", "amount": "1/2 taza (puré de calabaza cocida)"},
      {"name": "leche", "amount": "1/4 de taza"},
      {"name": "queso", "amount": "1/2 taza (queso cheddar rallado)"}
    ],
    "instructions": [
      "Cuece la pasta en agua hirviendo según las instrucciones.",
      "Mientras, en una cacerola pequeña, calienta el puré de calabaza con la leche y el queso rallado hasta lograr una salsa homogénea y fundida.",
      "Escurre la pasta y mézclala bien con la salsa de queso y calabaza dorada."
    ],
    "tips": "El color naranja del puré de calabaza imita perfectamente al queso procesado de caja, camuflando la verdura por completo.",
    "image": "🍝"
  },
  {
    "id": "bastoncitos-pollo-coco",
    "name": "Bastoncitos de Pollo con Coco",
    "realName": "Tiras de pollo rebozadas en coco rallado",
    "category": "almuerzo",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Toque tropical", "Alto en proteína", "Freidora de Aire"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "pollo", "amount": "200g (pechuga cortada en tiras)"},
      {"name": "huevo", "amount": "1 unidad (batido)"},
      {"name": "coco", "amount": "4 cucharadas (coco rallado seco sin azúcar)"},
      {"name": "harina de avena", "amount": "2 cucharadas"}
    ],
    "instructions": [
      "Pasa las tiras de pechuga de pollo por la harina de avena.",
      "Sumerge en el huevo batido y empánalas en el coco rallado apretando bien.",
      "Coloca en la freidora de aire precalendada a 180°C.",
      "Cocina durante 8-10 minutos, volteándolas a la mitad del tiempo hasta que el coco esté dorado."
    ],
    "tips": "El coco rallado tostado da un sabor dulce sutil y un crujido asombroso sin necesidad de pan rallado.",
    "image": "🍗"
  },
  {
    "id": "rollitos-pepino-hummus",
    "name": "Rollitos de Pepino y Hummus",
    "realName": "Láminas de pepino enrolladas con hummus",
    "category": "cena",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["Cero cocción", "Rico en fibra", "Muy fresco"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pepino", "amount": "1 unidad (grande)"},
      {"name": "garbanzos", "amount": "4 cucharadas (hummus de garbanzos casero o comprado)"},
      {"name": "zanahoria", "amount": "2 cucharadas (rallada fina)"}
    ],
    "instructions": [
      "Usa un pelador para sacar tiras largas y delgadas de pepino.",
      "Extiende las tiras de pepino sobre papel de cocina para retirar el exceso de agua.",
      "Unte una fina capa de hummus y espolvorea zanahoria rallada.",
      "Enrolla firmemente cada lámina de pepino y sirve de inmediato."
    ],
    "tips": "Es una merienda o cena veraniega súper ligera y colorida que aporta proteínas vegetales.",
    "image": "🥒"
  },
  {
    "id": "tostadas-aguacate-salmon",
    "name": "Tostada de Aguacate y Salmón",
    "realName": "Tostada de aguacate con salmón ahumado",
    "category": "desayuno",
    "time": 6,
    "difficulty": "Fácil",
    "nutritionTags": ["Grasas saludables", "Omega-3", "Cero cocción"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pan", "amount": "2 rodajas (tostadas)"},
      {"name": "aguacate", "amount": "1/2 unidad"},
      {"name": "salmón", "amount": "50g (salmón ahumado)"}
    ],
    "instructions": [
      "Machaca el aguacate en un cuenco con una mini pizca de sal.",
      "Tuesta el pan integral.",
      "Extiende el aguacate untado sobre el pan.",
      "Coloca tiras de salmón ahumado encima."
    ],
    "tips": "Aporta una dosis excepcional de Omega-3 y grasas insaturadas clave para el cerebro.",
    "image": "🥑"
  },
  {
    "id": "mini-brochetas-pavo-queso",
    "name": "Pinchos de Momia de Pavo y Queso",
    "realName": "Brochetas frías de pavo, queso y uvas",
    "category": "almuerzo",
    "time": 7,
    "difficulty": "Fácil",
    "nutritionTags": ["Muy divertido", "Cero cocción", "Proteico"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pavo", "amount": "4 lonchas (jamón grueso de pavo)"},
      {"name": "queso", "amount": "100g (queso gouda o mozzarella en cubos)"},
      {"name": "uvas", "amount": "8 unidades (sin semillas)"}
    ],
    "instructions": [
      "Corta el jamón de pavo en cuadrados gruesos.",
      "Inserta en un palito de dientes o brocheta pequeña: una uva, un cubo de queso, un trozo de jamón de pavo doblado, otro cubo de queso y otra uva."
    ],
    "tips": "La mezcla de uva dulce con el salado del queso y pavo es un éxito asegurado en platos infantiles.",
    "image": "🍢"
  },
  {
    "id": "arroz-frito-express",
    "name": "Arroz Frito Mágico Express",
    "realName": "Arroz salteado con guisantes y huevo",
    "category": "almuerzo",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Aprovechamiento", "Alto en proteína", "Rápido"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "arroz", "amount": "1 taza (arroz cocido frío)"},
      {"name": "huevo", "amount": "1 unidad (batido)"},
      {"name": "guisantes", "amount": "2 cucharadas (cocidos)"},
      {"name": "zanahoria", "amount": "2 cucharadas (picada muy fina)"},
      {"name": "soja", "amount": "1 cucharadita (salsa de soja baja en sodio)"}
    ],
    "instructions": [
      "Calienta una sartén con unas gotas de aceite.",
      "Añade la zanahoria picada fina y los guisantes, salteando por 2 minutos.",
      "Vierte el huevo batido y remueve rápidamente para hacer huevo revuelto dentro de la sartén.",
      "Añade el arroz cocido frío y la salsa de soja. Saltea a fuego alto por 2-3 minutos removiendo constantemente."
    ],
    "tips": "El arroz frío del día anterior se saltea mucho mejor y evita que el grano se rompa o quede pastoso.",
    "image": "🍚"
  },
  {
    "id": "crema-calabacin-quesito",
    "name": "Crema de Calabacín del Duende",
    "realName": "Puré suave de calabacín y quesitos en porciones",
    "category": "cena",
    "time": 15,
    "difficulty": "Fácil",
    "nutritionTags": ["Picky Eaters", "Textura sedosa", "Muy suave"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "calabacín", "amount": "2 unidades (pelados y picados)"},
      {"name": "patata", "amount": "1/2 unidad (picada)"},
      {"name": "queso", "amount": "2 porciones (tipo quesitos en porciones)"},
      {"name": "leche", "amount": "2 cucharadas"}
    ],
    "instructions": [
      "Pon a cocer los calabacines pelados (para que no quede verde oscuro la crema) y la patata en agua hirviendo durante 8-10 minutos hasta que estén blandos.",
      "Escurre el agua dejando un par de cucharadas.",
      "Añade los quesitos en porciones, la leche y bate con la batidora de mano directamente en la olla hasta obtener una crema suave y sedosa."
    ],
    "tips": "Pelar los calabacines por completo hace que la crema tenga un tono crema blanquecino suave que los niños no relacionan con 'verdura verde'.",
    "image": "🥣"
  },
  {
    "id": "pasta-pesto-guisantes",
    "name": "Pasta Pesto Mágico de Guisantes",
    "realName": "Pasta con pesto dulce de guisantes",
    "category": "cena",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Picky Eaters", "Alto en proteína vegetal", "Color verde brillante"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "pasta", "amount": "100g (espirales o plumas)"},
      {"name": "guisantes", "amount": "1/2 taza (cocidos)"},
      {"name": "queso", "amount": "2 cucharadas (queso parmesano)"},
      {"name": "aceite de oliva", "amount": "2 cucharadas"}
    ],
    "instructions": [
      "Cuece la pasta según las instrucciones.",
      "Mientras, licúa o tritura los guisantes cocidos, el queso parmesano y el aceite de oliva hasta crear un puré verde brillante muy homogéneo.",
      "Mezcla la pasta caliente con el pesto dulce de guisantes."
    ],
    "tips": "El dulzor natural de los guisantes hace que este pesto sea mucho más aceptado por los niños que el pesto tradicional de albahaca.",
    "image": "🍝"
  },
  {
    "id": "rollitos-losa-salmon",
    "name": "Rollitos de Losa de Salmón",
    "realName": "Wraps fríos de salmón y queso crema",
    "category": "cena",
    "time": 7,
    "difficulty": "Fácil",
    "nutritionTags": ["Cero cocción", "Rico en grasas saludables", "Muy vistoso"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "tortilla", "amount": "2 unidades (tortillas integrales)"},
      {"name": "queso crema", "amount": "3 cucharadas"},
      {"name": "salmón", "amount": "80g (tiras de salmón ahumado)"},
      {"name": "espinaca", "amount": "1/2 taza (hojas tiernas baby)"}
    ],
    "instructions": [
      "Extiende las tortillas y úntales queso crema.",
      "Coloca hojas de espinaca baby y cubre con tiras de salmón ahumado.",
      "Enrolla firmemente y córtalo en rodajas de 2 cm antes de servir."
    ],
    "tips": "El salmón aporta ácidos grasos insaturados de alta calidad para el cerebro infantil.",
    "image": "🌯"
  },
  {
    "id": "ensalada-pasta-veraniega",
    "name": "Ensalada de Pasta Veraniega",
    "realName": "Pasta fría con cherry, queso y pavo",
    "category": "almuerzo",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Fresca", "Ideal para llevar", "Muy rápido"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "pasta", "amount": "100g (lazos o hélices)"},
      {"name": "tomate", "amount": "6 unidades (tomates cherry partidos)"},
      {"name": "queso", "amount": "1/2 taza (mozzarella fresca en perlas)"},
      {"name": "pavo", "amount": "50g (jamón de pavo en cubitos)"},
      {"name": "aceite de oliva", "amount": "1 cucharada"}
    ],
    "instructions": [
      "Cuece la pasta, escúrrela y enfríala bajo el chorro de agua fría.",
      "En un bol grande, mezcla la pasta con los tomates cherry partidos, las perlas de mozzarella y los cubos de jamón de pavo.",
      "Aliña con el aceite de oliva y una pizca de sal antes de servir."
    ],
    "tips": "Es la comida perfecta para picnics o paseos escolares veraniegos.",
    "image": "🥗"
  },
  {
    "id": "panecillos-avena-zanahoria",
    "name": "Panecillos de Avena y Zanahoria",
    "realName": "Muffins rápidos de zanahoria dulce",
    "category": "reposteria",
    "time": 15,
    "difficulty": "Fácil",
    "nutritionTags": ["Rico en betacaroteno", "Dulce natural", "Esponjoso"],
    "pickyEaters": true,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "zanahoria", "amount": "1/2 taza (rallada fina)"},
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "avena", "amount": "4 cucharadas (harina)"},
      {"name": "miel", "amount": "1 cucharada"},
      {"name": "polvo de hornear", "amount": "1/2 cucharadita"}
    ],
    "instructions": [
      "Bate el huevo con la miel.",
      "Agrega la harina de avena, la zanahoria rallada fina y el polvo de hornear.",
      "Rellena moldes individuales de silicona.",
      "Cocina en la freidora de aire a 180°C por 10 minutos."
    ],
    "tips": "Tiene un sabor muy parecido a la tarta de zanahoria clásica, pero sin azúcares refinados ni harinas blancas.",
    "image": "🧁"
  },
  {
    "id": "jugo-tomate-picante",
    "name": "Jugo de Tomate Picante",
    "realName": "Zumo de tomate con salsa picante",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Toque picante", "Rico en licopeno", "Bajo en calorías"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "tomate", "amount": "2 unidades (maduros)"},
      {"name": "perejil", "amount": "1 pequeño manojo"},
      {"name": "lechuga", "amount": "2 hojas (verde oscuro)"},
      {"name": "rábanos", "amount": "2 unidades"},
      {"name": "limón", "amount": "1/2 unidad"},
      {"name": "salsa picante", "amount": "1 gota (opcional)"}
    ],
    "instructions": [
      "Lava y trocea todos los vegetales.",
      "Pásalos juntos por el extractor alternando ingredientes blandos y duros.",
      "Agrega la gota de salsa picante y remueve bien antes de servir."
    ],
    "tips": "El picante ayuda a despejar las vías respiratorias en procesos gripales suaves.",
    "image": "🥤"
  },
  {
    "id": "refresco-limon-hinojo",
    "name": "Refresco de Limón e Hinojo",
    "realName": "Zumo digestivo cítrico de hinojo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Gran digestión", "Refrescante", "Sin azúcar"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "hinojo", "amount": "1 bulbo fresco (con hojas)"},
      {"name": "pepino", "amount": "1 unidad"},
      {"name": "limón", "amount": "1 unidad (amarillo)"}
    ],
    "instructions": [
      "Trocea el bulbo de hinojo, el pepino y pela el limón.",
      "Pasa todo por el extractor de zumos y sirve frío en vasos con hielo."
    ],
    "tips": "El hinojo disminuye los gases estomacales y la inflamación de forma muy efectiva.",
    "image": "🥤"
  },
  {
    "id": "mucha-menta-manzana",
    "name": "Menta en Jugo de Manzana",
    "realName": "Zumo refrescante de manzana y menta",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Refrescante", "Aroma dulce", "Digestivo"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "menta", "amount": "2 racimos (hojas frescas)"},
      {"name": "lechuga", "amount": "1 hoja (verde oscuro)"},
      {"name": "manzana", "amount": "2 unidades"}
    ],
    "instructions": [
      "Lava bien las manzanas y la menta.",
      "Pasa la menta y la lechuga envueltas en sí mismas por el extractor, seguido de las manzanas.",
      "Sirve de inmediato con hielos."
    ],
    "tips": "La menta aporta un frescor increíble que mitiga la acidez de las manzanas verdes.",
    "image": "🥤"
  },
  {
    "id": "jugo-refrescante-lima",
    "name": "Jugo Refrescante de Lima",
    "realName": "Limonada de lima con stevia",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Bajísimo en calorías", "Cero azúcar", "Muy refrescante"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "manzana", "amount": "2 unidades (verdes)"},
      {"name": "limón", "amount": "1 unidad (lima verde, pelada)"},
      {"name": "agua", "amount": "1 taza (gasificada)"}
    ],
    "instructions": [
      "Procesa las manzanas y la lima en tu extractor.",
      "Vierte el zumo concentrado en un vaso grande, añade el agua gasificada y remueve suavemente."
    ],
    "tips": "El agua con burbujas simula un refresco de lima-limón comercial, pero 100% natural.",
    "image": "🥤"
  },
  {
    "id": "refresco-mango-pepino",
    "name": "Refresco de Mango y Pepino",
    "realName": "Zumo cítrico de mango y pepino",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Sabor tropical", "Hidratante", "Rico en Vitamina C"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "mango", "amount": "1 unidad (maduro y deshuesado)"},
      {"name": "pepino", "amount": "1 unidad"},
      {"name": "cilantro", "amount": "1 puñado pequeño"},
      {"name": "limón", "amount": "1/2 unidad (lima verde)"},
      {"name": "naranja", "amount": "1/2 unidad"}
    ],
    "instructions": [
      "Pela el mango y retira el hueso.",
      "Pasa el mango, el pepino, el cilantro, la lima y la naranja por el extractor.",
      "Mezcla muy bien y sirve frío."
    ],
    "tips": "El cilantro aporta un toque de aroma exótico muy especial y propiedades depurativas.",
    "image": "🥤"
  },
  {
    "id": "jugo-tomate-especias",
    "name": "Jugo de Tomate con Especias",
    "realName": "Zumo salado con toques de canela y páprika",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Sabor especiado", "Remineralizante", "Antioxidante"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "tomate", "amount": "2 unidades"},
      {"name": "pepino", "amount": "1/2 unidad"},
      {"name": "jengibre", "amount": "1 trozo (de 1 cm)"},
      {"name": "comino", "amount": "1/8 cucharadita"},
      {"name": "canela", "amount": "1 pizca"}
    ],
    "instructions": [
      "Pasa los tomates, el pepino y el jengibre por el extractor.",
      "Añade el comino y la pizca de canela al zumo resultante y revuelve vigorosamente."
    ],
    "tips": "La pizca de canela suaviza la acidez y le da un sabor misterioso y agradable para los niños.",
    "image": "🥤"
  },
  {
    "id": "combo-de-la-huerta",
    "name": "Combo de la Huerta",
    "realName": "Zumo de vegetales variados de huerto",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Súper vitamínico", "Mineralizante", "Sin lácteos"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "col", "amount": "1 hoja (col rizada)"},
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "apio", "amount": "2 pencas"},
      {"name": "tomate", "amount": "1 unidad"},
      {"name": "brócoli", "amount": "1 tallo"}
    ],
    "instructions": [
      "Corta todos los vegetales en trozos medianos.",
      "Pásalos juntos por el extractor alternando hojas con vegetales más jugosos para arrastrar la pulpa.",
      "Sirve fresco."
    ],
    "tips": "Reúne lo mejor del huerto en un vaso. Ideal para tomar a media mañana como chute de energía.",
    "image": "🥤"
  },
  {
    "id": "coctel-nectarina-lima-pepino",
    "name": "Cóctel de Nectarina y Lima",
    "realName": "Zumo cítrico de nectarina y jalapeño",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Sabor fresco", "Vitamina C", "Toque exótico"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "nectarina", "amount": "3 unidades (maduras y deshuesadas)"},
      {"name": "limón", "amount": "1 unidad (lima verde, pelada)"},
      {"name": "pepino", "amount": "1/2 unidad"},
      {"name": "cilantro", "amount": "1 puñado"}
    ],
    "instructions": [
      "Retira el hueso de las nectarinas.",
      "Pasa las nectarinas, la lima, el pepino y el cilantro por el extractor.",
      "Mezcla bien y sirve de inmediato."
    ],
    "tips": "La nectarina aporta un color anaranjado-rosado muy llamativo y textura densa de batido.",
    "image": "🥤"
  },
  {
    "id": "jugo-menta-naranja",
    "name": "Jugo de Menta y Naranja",
    "realName": "Zumo cítrico de naranja y menta",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Vitamina C", "Muy refrescante", "Sin azúcar"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "naranja", "amount": "2 unidades (peladas)"},
      {"name": "limón", "amount": "1 unidad (amarillo)"},
      {"name": "menta", "amount": "1 manojo (hojas frescas)"}
    ],
    "instructions": [
      "Pela las naranjas y el limón.",
      "Pasa las frutas y las hojas de menta juntas por el extractor.",
      "Sirve en un vaso con hielos."
    ],
    "tips": "El limón resalta la acidez natural cítrica de la naranja haciendo la bebida súper refrescante.",
    "image": "🥤"
  },
  {
    "id": "mezcla-con-chirivia",
    "name": "Mezcla con Chirivía",
    "realName": "Zumo dulce de zanahoria y chirivía",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Gran aporte energético", "Rico en potasio", "Naturalmente dulce"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "2 unidades"},
      {"name": "chirivía", "amount": "1 unidad (pelada)"},
      {"name": "naranja", "amount": "1 unidad (pelada)"}
    ],
    "instructions": [
      "Trocea las zanahorias y la chirivía.",
      "Pasa todos los ingredientes por el extractor y sirve de inmediato."
    ],
    "tips": "La chirivía es una raíz parecida a la zanahoria pero blanca, con un dulzor terroso riquísimo.",
    "image": "🥤"
  },
  {
    "id": "version-pina-colada",
    "name": "Versión Ligera de Piña Colada",
    "realName": "Zumo de piña, col y agua de coco",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin alcohol", "Toque tropical", "Bajo en calorías"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "limón", "amount": "1 unidad (lima verde)"},
      {"name": "col", "amount": "4 hojas (col rizada o acelga)"},
      {"name": "piña", "amount": "1/4 de unidad"},
      {"name": "agua de coco", "amount": "1/2 taza"}
    ],
    "instructions": [
      "Pasa la lima, las hojas de col y la piña por el extractor.",
      "Mezcla el zumo resultante con el agua de coco y hielo picado."
    ],
    "tips": "El agua de coco aporta sales minerales excelentes para reponer tras jugar.",
    "image": "🥤"
  },
  {
    "id": "batido-verde-feliz",
    "name": "Un Batido Verde y Feliz",
    "realName": "Zumo verde de apio, perejil y pepino",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Clorofila concentrada", "Alcalinizante", "Muy ligero"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "perejil", "amount": "1 manojo"},
      {"name": "lechuga", "amount": "2 hojas (verde oscuro)"},
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "apio", "amount": "2 pencas"},
      {"name": "pepino", "amount": "1 unidad"},
      {"name": "limón", "amount": "1 unidad"}
    ],
    "instructions": [
      "Pasa el perejil y la lechuga envueltas por el extractor junto al pepino y apio.",
      "Procesa los ingredientes restantes y sirve de inmediato."
    ],
    "tips": "Ayuda a limpiar el organismo infantil de forma suave y a regular el tránsito intestinal.",
    "image": "🥤"
  },
  {
    "id": "jugo-especial-pina",
    "name": "Jugo Especial de Piña",
    "realName": "Zumo verde de piña, jengibre y col",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Antiinflamatorio", "Muy tropical", "Esencia de jengibre"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "piña", "amount": "1/4 de unidad"},
      {"name": "col", "amount": "6 hojas (col rizada)"},
      {"name": "apio", "amount": "2 pencas"},
      {"name": "jengibre", "amount": "1 trozo (de 2 cm)"}
    ],
    "instructions": [
      "Trocea la piña y corta el apio.",
      "Pasa todos los ingredientes por el extractor y sirve recién hecho."
    ],
    "tips": "El jengibre fresco aporta propiedades protectoras para las vías respiratorias en invierno.",
    "image": "🥤"
  },
  {
    "id": "jugo-manzana-sin-igual",
    "name": "Jugo de Manzana Sin Igual",
    "realName": "Zumo de manzana dulce con toque de ajo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Antibacteriano", "Dulce e intenso", "Saludable"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "perejil", "amount": "1 manojo pequeño"},
      {"name": "lechuga", "amount": "1 hoja (verde)"},
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "apio", "amount": "2 pencas"},
      {"name": "ajo", "amount": "2 dientes"},
      {"name": "manzana", "amount": "2 unidades (Newton Pippin)"}
    ],
    "instructions": [
      "Junte el perejil con la lechuga y llévalos al extractor.",
      "Procesa los ingredientes restantes incluyendo el ajo crudo.",
      "Mezcla muy bien y sirve frío."
    ],
    "tips": "El dulzor de las manzanas enmascara por completo el ajo crudo, creando un zumo muy potente contra resfriados.",
    "image": "🥤"
  },
  {
    "id": "jugo-con-calabaza",
    "name": "Jugo Dorado con Calabaza",
    "realName": "Zumo de calabaza cruda y manzana",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Color dorado", "Rico en Vitamina A", "Digestivo"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "calabaza", "amount": "1 taza (en cubos, sin cáscara)"},
      {"name": "manzana", "amount": "2 unidades"},
      {"name": "pepino", "amount": "1/2 unidad"},
      {"name": "apio", "amount": "2 pencas"}
    ],
    "instructions": [
      "Corta la calabaza cruda en cubos muy pequeños para no atascar la licuadora/extractor.",
      "Procesa todos los ingredientes y consume de inmediato."
    ],
    "tips": "La calabaza cruda da un tono amarillo brillante 'sol' que atrae la curiosidad de los niños.",
    "image": "🥤"
  },
  {
    "id": "combinacion-manzana-membrillo",
    "name": "Manzana y Membrillo con Canela",
    "realName": "Zumo otoñal de membrillo",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Sabor otoñal", "Muy dulce", "Aroma reconfortante"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "membrillo", "amount": "1 unidad (grande)"},
      {"name": "manzana", "amount": "1 unidad"},
      {"name": "limón", "amount": "1 unidad"},
      {"name": "canela", "amount": "1 pizca"}
    ],
    "instructions": [
      "Lava y corta el membrillo retirando el corazón duro.",
      "Pasa el membrillo, la manzana y el limón por el extractor.",
      "Añade la pizca de canela al zumo y revuelve."
    ],
    "tips": "El membrillo crudo da una acidez frutal deliciosa al combinarse con canela y manzana.",
    "image": "🥤"
  },
  {
    "id": "bebida-zanahoria-colirrabano",
    "name": "Bebida de Zanahoria y Colinabo",
    "realName": "Zumo de raíces con colirrábano",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en Calcio", "Muy mineralizante", "Sin lácteos"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "zanahoria", "amount": "5 unidades"},
      {"name": "rábanos", "amount": "5 unidades (con hojas)"},
      {"name": "pepino", "amount": "1 unidad"},
      {"name": "limón", "amount": "1 unidad"},
      {"name": "colinabo", "amount": "1/2 unidad"}
    ],
    "instructions": [
      "Corta todos los ingredientes en cuartos.",
      "Pásalos juntos por el extractor y sirve bien frío."
    ],
    "tips": "El colirrábano aporta azufre y calcio idóneos para proteger las articulaciones.",
    "image": "🥤"
  },
  {
    "id": "jugo-verduras-crudas",
    "name": "Jugo de Verduras Crudas",
    "realName": "Zumo verde de espinaca, tomate y apio",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Súper remineralizante", "Sodio natural", "Sin lácteos"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "espinaca", "amount": "1 taza"},
      {"name": "col", "amount": "2 hojas (col rizada)"},
      {"name": "tomate", "amount": "1 unidad"},
      {"name": "apio", "amount": "3 pencas"},
      {"name": "zanahoria", "amount": "4 unidades"},
      {"name": "remolacha", "amount": "1/2 unidad"},
      {"name": "limón", "amount": "1 unidad"}
    ],
    "instructions": [
      "Junte las hojas verdes (espinaca y col) e introdúcelas al extractor.",
      "Procesa los ingredientes restantes terminando con la zanahoria para limpiar el conducto.",
      "Sirve recién hecho."
    ],
    "tips": "Un concentrado brutal de minerales que recarga las pilas de los niños de forma instantánea.",
    "image": "🥤"
  },
  {
    "id": "jugo-repollo-perejil-zanahoria",
    "name": "Jugo de Repollo Rojo y Zanahoria",
    "realName": "Zumo morado de repollo y zanahoria",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Color morado espectacular", "Vit-A concentrada", "Protector de estómago"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "perejil", "amount": "1 puñado"},
      {"name": "lechuga", "amount": "1 hoja"},
      {"name": "zanahoria", "amount": "3 unidades"},
      {"name": "jícama", "amount": "1 trozo (de 10 cm)"},
      {"name": "repollo", "amount": "1/4 de unidad (repollo rojo)"},
      {"name": "limón", "amount": "1 unidad"}
    ],
    "instructions": [
      "Junte el perejil con la lechuga.",
      "Pasa todos los ingredientes por el extractor alternando hojas con las raíces duras.",
      "Sirve en un vaso y consume frío."
    ],
    "tips": "El repollo rojo crea un tono morado brillante 'pocima mágica' que enamora visualmente a los niños.",
    "image": "🥤"
  },
  {
    "id": "jugo-rojo-remolacha-naranja",
    "name": "Jugo Rojo de Remolacha y Naranja",
    "realName": "Zumo antianémico de remolacha y jengibre",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Antianémico", "Gran aporte de hierro", "Sistema inmune"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "naranja", "amount": "1 unidad"},
      {"name": "col", "amount": "4 hojas (col rizada morada)"},
      {"name": "repollo", "amount": "1/4 de unidad (rojo)"},
      {"name": "limón", "amount": "1 unidad"},
      {"name": "remolacha", "amount": "1/2 de unidad"},
      {"name": "jengibre", "amount": "1 trozo (de 2 cm)"}
    ],
    "instructions": [
      "Trocea las frutas y las raíces.",
      "Pásalos juntos por el extractor alternando hojas y raíces duras.",
      "Sirve recién batido."
    ],
    "tips": "Una inyección concentrada de hierro asimilable gracias al ácido cítrico de la naranja y el limón.",
    "image": "🥤"
  }
];

if (typeof window !== 'undefined') {
  window.RECIPES = RECIPES;
}
