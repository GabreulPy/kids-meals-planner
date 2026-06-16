const RECIPES = [
  {
    "id": "bocaditos-dragon-verde",
    "name": "Bocaditos de Dragón Verde",
    "realName": "Muffins de brócoli y queso cheddar",
    "category": "almuerzo",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en fibra", "Sin gluten", "Rico en calcio"],
    "pickyEaters": true,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "brócoli", "amount": "1 taza (picado muy fino)"},
      {"name": "huevo", "amount": "2 unidades"},
      {"name": "queso", "amount": "1/2 taza (queso cheddar rallado)"},
      {"name": "harina de avena", "amount": "3 cucharadas"},
      {"name": "polvo de hornear", "amount": "1/2 cucharadita"}
    ],
    "instructions": [
      "Precalienta la freidora de aire a 180°C (o el horno).",
      "En un tazón, mezcla enérgicamente todos los ingredientes hasta integrar.",
      "Divide la mezcla en 4 moldes pequeños de silicona para muffins.",
      "Cocina en la freidora de aire por 8-10 minutos hasta que estén dorados y esponjosos."
    ],
    "tips": "Para niños muy selectivos, tritura el brócoli por completo antes de mezclarlo con los huevos. ¡Parecerá bizcocho de duendecillo!",
    "image": "🥦"
  },
  {
    "id": "barquitos-pirata",
    "name": "Barquitos Crujientes de Pirata",
    "realName": "Hojas de cogollo con pollo deshebrado y maíz",
    "category": "almuerzo",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en proteína", "Bajo en carbohidratos", "Cero cocción"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "lechuga", "amount": "4 hojas grandes de cogollo (lavadas)"},
      {"name": "pollo", "amount": "1 taza (pollo cocido deshebrado)"},
      {"name": "maíz", "amount": "3 cucharadas (maíz dulce cocido)"},
      {"name": "yogur", "amount": "2 cucharadas (yogur griego natural)"},
      {"name": "aguacate", "amount": "1/2 unidad (pisado)"}
    ],
    "instructions": [
      "Mezcla en un bol el pollo deshebrado, el maíz dulce, el aguacate pisado y el yogur griego hasta formar una pasta cremosa.",
      "Coloca las hojas de cogollo bien secas sobre un plato simulando la quilla de un barco.",
      "Rellena cada hoja con la mezcla de pollo de manera uniforme.",
      "Corona con un palillo de dientes que sujete un triángulo de pimiento rojo para hacer la bandera pirata."
    ],
    "tips": "¡Deja que los niños monten su propia bandera pirata! Fomenta la autonomía y les da curiosidad por probarlo.",
    "image": "⛵"
  },
  {
    "id": "moneditas-oro",
    "name": "Torre de Moneditas de Oro",
    "realName": "Mini tortitas de avena y plátano",
    "category": "desayuno",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin azúcar añadido", "Alto en potasio", "Rico en fibra"],
    "pickyEaters": false,
    "cookMode": "stove",
    "ingredients": [
      {"name": "plátano", "amount": "1 unidad (maduro)"},
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "harina de avena", "amount": "4 cucharadas"},
      {"name": "leche", "amount": "2 cucharadas (de vaca o vegetal)"},
      {"name": "canela", "amount": "1 pizca"}
    ],
    "instructions": [
      "Pisa el plátano con un tenedor hasta que quede puré sin grumos.",
      "Bate el huevo y añádelo junto a la harina de avena, la leche y la pizca de canela en un tazón.",
      "Calienta una sartén antiadherente con unas gotas de aceite de oliva o coco a fuego medio-bajo.",
      "Vierte cucharadas pequeñas de la mezcla para hacer minitortitas del tamaño de una moneda.",
      "Cocina 2 minutos por lado hasta que burbujeen y doren."
    ],
    "tips": "Sírvelas apiladas como una torre de monedas de oro del tesoro. Puedes acompañarlas con frutos del bosque.",
    "image": "🥞"
  },
  {
    "id": "varitas-magicas",
    "name": "Varitas Mágicas de Pescado",
    "realName": "Bastones de merluza rebozados en sésamo",
    "category": "almuerzo",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en Omega-3", "Rico en fósforo", "Freidora de Aire"],
    "pickyEaters": true,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "pescado", "amount": "300g (lomo de merluza o pescado blanco limpio sin espinas)"},
      {"name": "huevo", "amount": "1 unidad (batido)"},
      {"name": "harina de avena", "amount": "3 cucharadas (para el primer rebozado)"},
      {"name": "pan rallado", "amount": "4 cucharadas (o copos de maíz triturados)"},
      {"name": "sésamo", "amount": "1 cucharada (semillas de sésamo)"}
    ],
    "instructions": [
      "Corta el pescado blanco en tiras largas de aproximadamente 2 cm de ancho (forma de bastones).",
      "Pasa cada bastón primero por la harina de avena, luego por el huevo batido y finalmente por el pan rallado mezclado con semillas de sésamo.",
      "Coloca las varitas en la canasta de la freidora de aire sin amontonar.",
      "Rocía con un poco de aceite en aerosol y cocina a 190°C durante 8-10 minutos, volteándolas a mitad del tiempo."
    ],
    "tips": "El rebozado con copos de maíz triturados o sésamo les da un crujido extra que encanta a los niños, mucho mejor que los nuggets industriales.",
    "image": "🪄"
  },
  {
    "id": "pelo-troll",
    "name": "Espaguetis de Pelo de Troll",
    "realName": "Pasta integral con pesto cremoso de espinaca y aguacate",
    "category": "cena",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en fibra", "Grasas saludables", "Sin azúcar añadido"],
    "pickyEaters": true,
    "cookMode": "stove",
    "ingredients": [
      {"name": "pasta", "amount": "150g (espaguetis integrales)"},
      {"name": "espinaca", "amount": "1 taza (hojas de espinaca fresca)"},
      {"name": "aguacate", "amount": "1/2 unidad"},
      {"name": "queso", "amount": "2 cucharadas (queso parmesano rallado)"},
      {"name": "aceite de oliva", "amount": "2 cucharadas"},
      {"name": "ajo", "amount": "1/4 de diente (opcional)"}
    ],
    "instructions": [
      "Pon a cocer la pasta en agua hirviendo con una pizca de sal según las instrucciones del paquete (aprox. 9-10 minutos).",
      "Mientras se cocina la pasta, pon en una batidora o procesador las espinacas, el aguacate, el queso parmesano, el aceite de oliva y el ajo.",
      "Tritura hasta obtener una crema verde brillante y homogénea.",
      "Escurre la pasta guardando 2 cucharadas del agua de cocción. Mezcla la pasta caliente con la crema verde y el agua reservada en la misma olla."
    ],
    "tips": "Es la forma perfecta de camuflar la espinaca. Al ser cremosa por el aguacate, los niños no notarán que comen hojas verdes y les encantará el color 'troll'.",
    "image": "🍝"
  },
  {
    "id": "pocima-hulk",
    "name": "Pócima Mágica de Hulk",
    "realName": "Batido verde frutal de plátano, piña y espinacas",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Rico en vitamina C", "Sin lácteos", "Cero cocción"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "espinaca", "amount": "1/2 taza (hojas frescas de espinaca)"},
      {"name": "plátano", "amount": "1/2 unidad (rodajas)"},
      {"name": "piña", "amount": "1/2 taza (piña natural picada)"},
      {"name": "leche", "amount": "1 taza (leche de avellanas, avena o coco)"}
    ],
    "instructions": [
      "Coloca todos los ingredientes en el vaso de la licuadora.",
      "Licúa a velocidad alta durante 1-2 minutos hasta que no queden grumos de hojas de espinaca.",
      "Sirve de inmediato en un vaso divertido con una pajita de colores."
    ],
    "tips": "El dulzor natural del plátano maduro y la piña enmascara completamente el sabor de la espinaca, dando una textura cremosa de helado.",
    "image": "🥤"
  },
  {
    "id": "volcan-lava-fria",
    "name": "Volcán de Lava Fría",
    "realName": "Parfait de yogur griego con puré de fresas y chía",
    "category": "desayuno",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["Alto en proteína", "Rico en antioxidantes", "Sin azúcar añadido"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "yogur", "amount": "1 taza (yogur griego natural sin azúcar)"},
      {"name": "fresas", "amount": "1/2 taza (fresas frescas)"},
      {"name": "chía", "amount": "1 cucharadita (semillas de chía)"},
      {"name": "avena", "amount": "2 cucharadas (copos de avena tostados)"}
    ],
    "instructions": [
      "En una taza pequeña, tritura las fresas con un tenedor junto con la chía para hacer una mermelada rápida sin cocción. Deja reposar 2 minutos.",
      "En un vaso transparente, coloca una base con el yogur griego.",
      "Vierte el puré de fresas sobre el centro del yogur, simulando la 'lava' de un volcán.",
      "Espolvorea la avena alrededor del borde como si fuera ceniza o rocas del volcán."
    ],
    "tips": "Es visualmente impresionante y súper nutritivo. La chía ayuda a espesar el puré de fresas instantáneamente.",
    "image": "🍧"
  },
  {
    "id": "snickers-datil",
    "name": "Bocados Crujientes estilo Snickers",
    "realName": "Dátiles rellenos de crema de cacahuete con cobertura de cacao",
    "category": "reposteria",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Sin azúcar refinado", "Grasas saludables", "Cero cocción"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "dátil", "amount": "6 unidades (dátiles deshuesados)"},
      {"name": "crema de cacahuete", "amount": "3 cucharaditas (natural, sin azúcar)"},
      {"name": "cacao", "amount": "1 cucharada (cacao puro en polvo)"},
      {"name": "aceite de coco", "amount": "1 cucharada"}
    ],
    "instructions": [
      "Abre los dátiles por la mitad longitudinalmente (retira el hueso si lo tienen).",
      "Rellena el centro de cada dátil con media cucharadita de crema de cacahuete.",
      "Mezcla el cacao en polvo con el aceite de coco derretido hasta formar una salsa ligera.",
      "Vierte un hilo de la salsa de cacao sobre los dátiles rellenos y congela 2 minutos para que endurezca."
    ],
    "tips": "Saben exactamente igual que una barrita Snickers, pero son 100% fruta seca y grasas saludables. El dátil aporta toda la dulzura.",
    "image": "🍫"
  },
  {
    "id": "momia-divertida",
    "name": "Rollitos de Momia Divertida",
    "realName": "Wrap de pan plano de avena con pavo y tiras de queso",
    "category": "cena",
    "time": 8,
    "difficulty": "Fácil",
    "nutritionTags": ["Bajo en grasa", "Fácil transporte", "Cero cocción"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "tortilla", "amount": "2 unidades (tortillas integrales o de avena)"},
      {"name": "pavo", "amount": "4 lonchas (jamón de pechuga de pavo)"},
      {"name": "queso", "amount": "2 tiras de queso mozarela deshebrable"},
      {"name": "queso crema", "amount": "2 cucharadas"}
    ],
    "instructions": [
      "Extiende las tortillas y unta una capa fina de queso crema en la superficie.",
      "Coloca las lonchas de pavo cubriendo la base.",
      "Deshebra el queso mozarela en tiras finas y colócalas de forma cruzada sobre el pavo, imitando las vendas de una momia.",
      "Enrolla el wrap y córtalo en rodajas de 3 cm de grosor. Usa dos trocitos pequeños de aceituna negra para hacer los ojos de la momia en cada rodaja."
    ],
    "tips": "Es una cena divertidísima de preparar. Los ojitos de aceituna hacen que el plato cobre vida al instante.",
    "image": "🌯"
  },
  {
    "id": "pizza-pita",
    "name": "Pizza Express del Espacio",
    "realName": "Mini pizza en pan pita con salsa de verduras camufladas",
    "category": "cena",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Bajo en grasa", "Picky Eaters", "Freidora de Aire"],
    "pickyEaters": true,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "pan pita", "amount": "2 unidades (integrales)"},
      {"name": "tomate", "amount": "4 cucharadas (salsa de tomate casera triturada con zanahoria y calabacín)"},
      {"name": "queso", "amount": "1/2 taza (queso mozzarella rallado)"},
      {"name": "orégano", "amount": "1 pizca"}
    ],
    "instructions": [
      "Coloca los panes pita en una tabla.",
      "Unta la salsa de tomate (que ya tiene verduras trituradas escondidas) de manera uniforme sobre el pan.",
      "Espolvorea generosamente el queso mozzarella y añade la pizca de orégano.",
      "Cocina en la freidora de aire a 180°C durante 5-6 minutos hasta que el queso esté burbujeante y dorado, o en el horno precalentado."
    ],
    "tips": "La salsa de tomate es tu mejor aliada para camuflar: cocina tomates maduros con calabacín pelado y zanahoria, tritúralo todo muy bien y parecerá solo salsa de tomate tradicional.",
    "image": "🍕"
  },
  {
    "id": "nuggets-dino",
    "name": "Nuggets de Dinosaurio Caseros",
    "realName": "Nuggets de pollo y zanahoria al horno",
    "category": "almuerzo",
    "time": 15,
    "difficulty": "Medio",
    "nutritionTags": ["Rico en betacaroteno", "Alto en proteína", "Freidora de Aire"],
    "pickyEaters": true,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "pollo", "amount": "250g (pechuga de pollo picada)"},
      {"name": "zanahoria", "amount": "1/2 unidad (rallada ultrafina)"},
      {"name": "queso crema", "amount": "1 cucharada"},
      {"name": "huevo", "amount": "1 unidad (batido)"},
      {"name": "pan rallado", "amount": "4 cucharadas"}
    ],
    "instructions": [
      "En un bol grande, mezcla la pechuga de pollo con la zanahoria rallada fina y la cucharada de queso crema hasta lograr una masa homogénea.",
      "Toma porciones de masa y dales forma plana divertida (puedes usar un cortador de galletas o simplemente moldear círculos).",
      "Pasa cada nugget por el huevo batido y después por el pan rallado presionando bien.",
      "Coloca en la freidora de aire precalentada a 190°C, rocía con aceite y cocina 10-12 minutos hasta que estén bien cocidos por dentro y crujientes por fuera."
    ],
    "tips": "La zanahoria no se siente pero le da un tono anaranjado divertido y jugosidad al nugget para evitar que quede seco.",
    "image": "🦖"
  },
  {
    "id": "helado-magico",
    "name": "Helado de Fresa Mágico e Instantáneo",
    "realName": "Helado cremoso de fresa y plátano 100% fruta",
    "category": "reposteria",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["100% fruta", "Sin lácteos", "Cero cocción"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "plátano", "amount": "2 unidades (congelados en rodajas)"},
      {"name": "fresas", "amount": "1 taza (fresas congeladas)"},
      {"name": "yogur", "amount": "2 cucharadas (para cremosidad)"}
    ],
    "instructions": [
      "Saca la fruta congelada del congelador unos 2-3 minutos antes de empezar.",
      "Introduce el plátano y las fresas congeladas en una batidora potente o procesador de alimentos.",
      "Tritura a pulsaciones al principio y luego a velocidad constante. Añade el yogur si lo deseas.",
      "Sigue batiendo hasta obtener una textura suave, densa y cremosa de helado suave. Sirve inmediatamente."
    ],
    "tips": "¡No necesita azúcar añadido! El plátano congelado aporta la textura de crema y el dulzor exacto. ¡Postre saludable en 5 minutos!",
    "image": "🍦"
  },
  {
    "id": "batido-selva",
    "name": "Batido de la Selva Tropical",
    "realName": "Zumo denso de mango, naranja y zanahoria",
    "category": "jugos-batidos",
    "time": 5,
    "difficulty": "Fácil",
    "nutritionTags": ["Vit-C reforzada", "Sin azúcar añadido", "Sin lácteos"],
    "pickyEaters": true,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "naranja", "amount": "1 unidad (exprimida)"},
      {"name": "mango", "amount": "1/2 taza (mango maduro)"},
      {"name": "zanahoria", "amount": "1/2 de unidad (zanahoria pelada y picada muy fino)"},
      {"name": "agua", "amount": "1/2 taza"}
    ],
    "instructions": [
      "Coloca el zumo de naranja, los trozos de mango y la zanahoria bien picada en el vaso de la licuadora.",
      "Licúa durante 2 minutos hasta lograr un color naranja brillante muy homogéneo y sin pulpa.",
      "Añade hielo picado si lo prefieres bien frío."
    ],
    "tips": "El mango aporta una textura densa espectacular que hace que la zanahoria se integre perfectamente. ¡Un chute de energía saludable!",
    "image": "🦁"
  },
  {
    "id": "galletas-monstruo",
    "name": "Galletas de Avena del Monstruo",
    "realName": "Galletas de plátano, avena y chips de chocolate",
    "category": "reposteria",
    "time": 12,
    "difficulty": "Fácil",
    "nutritionTags": ["Rico en fibra", "Sin azúcar refinado", "Listo en minutos"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "plátano", "amount": "1 unidad (maduro)"},
      {"name": "avena", "amount": "1/2 taza (copos de avena)"},
      {"name": "chocolate", "amount": "2 cucharadas (chips de chocolate negro)"}
    ],
    "instructions": [
      "Pisa el plátano con un tenedor en un plato hondo hasta tener un puré líquido.",
      "Agrega los copos de avena poco a poco mezclando con una espátula hasta formar una masa pegajosa pero maleable. Agrega los chips de chocolate.",
      "Divide la masa en 4 pequeñas bolas y aplástalas sobre papel para hornear dándoles forma de galleta.",
      "Cocina en la freidora de aire a 180°C durante 6-8 minutos hasta que los bordes estén dorados."
    ],
    "tips": "Una receta súper fácil que requiere solo 3 ingredientes básicos de la despensa. Ideal para la merienda escolar.",
    "image": "🍪"
  },
  {
    "id": "canapes-mariquita",
    "name": "Canapés de Mariquitas Coloridas",
    "realName": "Tostadas con queso crema y tomatitos cherry",
    "category": "cena",
    "time": 10,
    "difficulty": "Fácil",
    "nutritionTags": ["Vistoso y divertido", "Bajo en calorías", "Cero cocción"],
    "pickyEaters": false,
    "cookMode": "zero-cook",
    "ingredients": [
      {"name": "pan", "amount": "2 rodajas (pan integral tostado)"},
      {"name": "queso crema", "amount": "2 cucharadas"},
      {"name": "tomate", "amount": "4 tomatitos cherry"},
      {"name": "aceitunas", "amount": "2 aceitunas negras sin hueso"},
      {"name": "espinaca", "amount": "4 hojas de espinaca baby"}
    ],
    "instructions": [
      "Tuesta el pan y úntale una buena capa de queso crema.",
      "Coloca dos hojitas de espinaca baby encima.",
      "Corta un tomatito cherry por la mitad y luego hazle un corte en V en un extremo simulando las alas abiertas de la mariquita.",
      "Corta un trozo de aceituna negra para que haga de cabeza y pégala junto al tomate. Con minúsculos pedacitos de aceituna, haz las motas de las alas."
    ],
    "tips": "Es una manualidad deliciosa. Ayuda a que los niños coman tomate crudo sin problemas de forma divertida.",
    "image": "🐞"
  },
  {
    "id": "huevo-nube",
    "name": "Huevo en la Nube del Astronauta",
    "realName": "Clara batida al horno con yema tierna al centro",
    "category": "desayuno",
    "time": 12,
    "difficulty": "Medio",
    "nutritionTags": ["Alto en proteína", "Rico en grasas saludables", "Freidora de Aire"],
    "pickyEaters": false,
    "cookMode": "airfryer",
    "ingredients": [
      {"name": "huevo", "amount": "1 unidad"},
      {"name": "queso", "amount": "1 cucharada (queso parmesano rallado)"},
      {"name": "pan", "amount": "1 rebanada"}
    ],
    "instructions": [
      "Separa con mucho cuidado la clara de la yema, reservando la yema en una taza pequeña intacta.",
      "Bate la clara a punto de nieve con una pizca de sal utilizando una varilla eléctrica hasta que esté súper firme. Mezcla suavemente el queso parmesano rallado.",
      "Coloca la clara batida en la freidora de aire sobre papel de horno formando una nube esponjosa. Haz un hueco en el centro.",
      "Cocina la nube de clara a 180°C durante 4 minutos. Abre la freidora, coloca la yema reservada en el hueco del centro y cocina por 2 minutos más."
    ],
    "tips": "Queda con una textura exterior crujiente y un interior de nube de algodón. La yema queda líquida para mojar su tostada del espacio.",
    "image": "☁️"
  }
];

if (typeof window !== 'undefined') {
  window.RECIPES = RECIPES;
}
