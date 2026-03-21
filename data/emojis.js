// Instamoji Emoji Data — All categories with multilingual translations
// Languages: en (English), ru (Russian), uk (Ukrainian), pt (European Portuguese)

const EMOJIS = {

  // Alphabet is language-specific (different character sets)
  alphabet: {
    en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => ({ content: l, voice: l.toLowerCase() })),

    ru: [
      { content: "А", voice: "а" }, { content: "Б", voice: "бэ" }, { content: "В", voice: "вэ" },
      { content: "Г", voice: "гэ" }, { content: "Д", voice: "дэ" }, { content: "Е", voice: "е" },
      { content: "Ё", voice: "ё" }, { content: "Ж", voice: "жэ" }, { content: "З", voice: "зэ" },
      { content: "И", voice: "и" }, { content: "Й", voice: "и краткое" }, { content: "К", voice: "ка" },
      { content: "Л", voice: "эл" }, { content: "М", voice: "эм" }, { content: "Н", voice: "эн" },
      { content: "О", voice: "о" }, { content: "П", voice: "пэ" }, { content: "Р", voice: "эр" },
      { content: "С", voice: "эс" }, { content: "Т", voice: "тэ" }, { content: "У", voice: "у" },
      { content: "Ф", voice: "эф" }, { content: "Х", voice: "ха" }, { content: "Ц", voice: "цэ" },
      { content: "Ч", voice: "че" }, { content: "Ш", voice: "ша" }, { content: "Щ", voice: "ща" },
      { content: "Ъ", voice: "твёрдый знак" }, { content: "Ы", voice: "ы" },
      { content: "Ь", voice: "мягкий знак" }, { content: "Э", voice: "э" },
      { content: "Ю", voice: "ю" }, { content: "Я", voice: "я" }
    ],

    uk: [
      { content: "А", voice: "а" }, { content: "Б", voice: "бе" }, { content: "В", voice: "ве" },
      { content: "Г", voice: "ге" }, { content: "Ґ", voice: "ґе" }, { content: "Д", voice: "де" },
      { content: "Е", voice: "е" }, { content: "Є", voice: "є" }, { content: "Ж", voice: "же" },
      { content: "З", voice: "зе" }, { content: "И", voice: "и" }, { content: "І", voice: "і" },
      { content: "Ї", voice: "ї" }, { content: "Й", voice: "йот" }, { content: "К", voice: "ка" },
      { content: "Л", voice: "ел" }, { content: "М", voice: "ем" }, { content: "Н", voice: "ен" },
      { content: "О", voice: "о" }, { content: "П", voice: "пе" }, { content: "Р", voice: "ер" },
      { content: "С", voice: "ес" }, { content: "Т", voice: "те" }, { content: "У", voice: "у" },
      { content: "Ф", voice: "еф" }, { content: "Х", voice: "ха" }, { content: "Ц", voice: "це" },
      { content: "Ч", voice: "че" }, { content: "Ш", voice: "ша" }, { content: "Щ", voice: "ща" },
      { content: "Ь", voice: "м'який знак" }, { content: "Ю", voice: "ю" }, { content: "Я", voice: "я" }
    ],

    pt: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => ({ content: l, voice: l.toLowerCase() })),
  },

  // Numbers: universal digits, language-specific names
  numbers: [
    { content: "0", en: "Zero", ru: "Ноль", uk: "Нуль", pt: "Zero" },
    { content: "1", en: "One", ru: "Один", uk: "Один", pt: "Um" },
    { content: "2", en: "Two", ru: "Два", uk: "Два", pt: "Dois" },
    { content: "3", en: "Three", ru: "Три", uk: "Три", pt: "Tres" },
    { content: "4", en: "Four", ru: "Четыре", uk: "Чотири", pt: "Quatro" },
    { content: "5", en: "Five", ru: "Пять", uk: "П'ять", pt: "Cinco" },
    { content: "6", en: "Six", ru: "Шесть", uk: "Шість", pt: "Seis" },
    { content: "7", en: "Seven", ru: "Семь", uk: "Сім", pt: "Sete" },
    { content: "8", en: "Eight", ru: "Восемь", uk: "Вісім", pt: "Oito" },
    { content: "9", en: "Nine", ru: "Девять", uk: "Дев'ять", pt: "Nove" },
    { content: "10", en: "Ten", ru: "Десять", uk: "Десять", pt: "Dez" }
  ],

  // Emoji categories: universal emoji, language-specific names
  food: [
    { emoji: "\u{1F34E}", en: "Apple", ru: "Яблоко", uk: "Яблуко", pt: "Maçã" },
    { emoji: "\u{1F34C}", en: "Banana", ru: "Банан", uk: "Банан", pt: "Banana" },
    { emoji: "\u{1F347}", en: "Grapes", ru: "Виноград", uk: "Виноград", pt: "Uvas" },
    { emoji: "\u{1F349}", en: "Watermelon", ru: "Арбуз", uk: "Кавун", pt: "Melancia" },
    { emoji: "\u{1F353}", en: "Strawberry", ru: "Клубника", uk: "Полуниця", pt: "Morango" },
    { emoji: "\u{1F352}", en: "Cherries", ru: "Вишня", uk: "Вишня", pt: "Cerejas" },
    { emoji: "\u{1F966}", en: "Broccoli", ru: "Брокколи", uk: "Броколі", pt: "Brócolos" },
    { emoji: "\u{1F955}", en: "Carrot", ru: "Морковь", uk: "Морква", pt: "Cenoura" },
    { emoji: "\u{1F33D}", en: "Corn", ru: "Кукуруза", uk: "Кукурудза", pt: "Milho" },
    { emoji: "\u{1F355}", en: "Pizza", ru: "Пицца", uk: "Піца", pt: "Pizza" },
    { emoji: "\u{1F354}", en: "Burger", ru: "Бургер", uk: "Бургер", pt: "Hambúrguer" },
    { emoji: "\u{1F35F}", en: "Fries", ru: "Картофель фри", uk: "Картопля фрі", pt: "Batatas fritas" },
    { emoji: "\u{1F366}", en: "Ice Cream", ru: "Мороженое", uk: "Морозиво", pt: "Gelado" },
    { emoji: "\u{1F369}", en: "Donut", ru: "Пончик", uk: "Пончик", pt: "Donut" },
    { emoji: "\u{1F36A}", en: "Cookie", ru: "Печенье", uk: "Печиво", pt: "Bolacha" },
    { emoji: "\u{1F951}", en: "Avocado", ru: "Авокадо", uk: "Авокадо", pt: "Abacate" },
    { emoji: "\u{1F34D}", en: "Pineapple", ru: "Ананас", uk: "Ананас", pt: "Ananás" },
    { emoji: "\u{1F95D}", en: "Kiwi", ru: "Киви", uk: "Ківі", pt: "Kiwi" },
    { emoji: "\u{1F95E}", en: "Pancakes", ru: "Блины", uk: "Млинці", pt: "Panquecas" },
    { emoji: "\u{1F968}", en: "Pretzel", ru: "Крендель", uk: "Крендель", pt: "Pretzel" },
    { emoji: "\u{1F9C0}", en: "Cheese", ru: "Сыр", uk: "Сир", pt: "Queijo" },
    { emoji: "\u{1F95A}", en: "Egg", ru: "Яйцо", uk: "Яйце", pt: "Ovo" },
    { emoji: "\u{1F35E}", en: "Bread", ru: "Хлеб", uk: "Хліб", pt: "Pão" },
    { emoji: "\u{1F382}", en: "Cake", ru: "Торт", uk: "Торт", pt: "Bolo" },
    { emoji: "\u{1F36B}", en: "Chocolate", ru: "Шоколад", uk: "Шоколад", pt: "Chocolate" },
    { emoji: "\u{1F34B}", en: "Lemon", ru: "Лимон", uk: "Лимон", pt: "Limão" },
    { emoji: "\u{1F96B}", en: "Juice", ru: "Сок", uk: "Сік", pt: "Sumo" },
    { emoji: "\u{1F95B}", en: "Milk", ru: "Молоко", uk: "Молоко", pt: "Leite" },
    { emoji: "\u{1F96A}", en: "Sandwich", ru: "Бутерброд", uk: "Бутерброд", pt: "Sandes" },
    { emoji: "\u{1F35D}", en: "Spaghetti", ru: "Спагетти", uk: "Спагеті", pt: "Esparguete" }
  ],

  colors: [
    { emoji: "\u{1F534}", en: "Red", ru: "Красный", uk: "Червоний", pt: "Vermelho" },
    { emoji: "\u{1F7E0}", en: "Orange", ru: "Оранжевый", uk: "Помаранчевий", pt: "Laranja" },
    { emoji: "\u{1F7E1}", en: "Yellow", ru: "Жёлтый", uk: "Жовтий", pt: "Amarelo" },
    { emoji: "\u{1F7E2}", en: "Green", ru: "Зелёный", uk: "Зелений", pt: "Verde" },
    { emoji: "\u{1F535}", en: "Blue", ru: "Синий", uk: "Синій", pt: "Azul" },
    { emoji: "\u{1F7E3}", en: "Purple", ru: "Фиолетовый", uk: "Фіолетовий", pt: "Roxo" },
    { emoji: "\u{26AB}", en: "Black", ru: "Чёрный", uk: "Чорний", pt: "Preto" },
    { emoji: "\u{26AA}", en: "White", ru: "Белый", uk: "Білий", pt: "Branco" },
    { emoji: "\u{1F7E4}", en: "Brown", ru: "Коричневый", uk: "Коричневий", pt: "Castanho" }
  ],

  shapes: [
    { emoji: "\u{1F7E5}", en: "Square", ru: "Квадрат", uk: "Квадрат", pt: "Quadrado" },
    { emoji: "\u{1F53A}", en: "Triangle", ru: "Треугольник", uk: "Трикутник", pt: "Triângulo" },
    { emoji: "\u{1F534}", en: "Circle", ru: "Круг", uk: "Коло", pt: "Círculo" },
    { emoji: "\u{2B50}", en: "Star", ru: "Звезда", uk: "Зірка", pt: "Estrela" },
    { emoji: "\u{1F537}", en: "Diamond", ru: "Ромб", uk: "Ромб", pt: "Diamante" },
    { emoji: "\u{1F6D1}", en: "Octagon", ru: "Восьмиугольник", uk: "Восьмикутник", pt: "Octógono" },
    { emoji: "\u{2764}\u{FE0F}", en: "Red Heart", ru: "Красное сердце", uk: "Червоне серце", pt: "Coração vermelho" },
    { emoji: "\u{1F499}", en: "Blue Heart", ru: "Синее сердце", uk: "Синє серце", pt: "Coração azul" },
    { emoji: "\u{1F49A}", en: "Green Heart", ru: "Зелёное сердце", uk: "Зелене серце", pt: "Coração verde" },
    { emoji: "\u{1F49B}", en: "Yellow Heart", ru: "Жёлтое сердце", uk: "Жовте серце", pt: "Coração amarelo" },
    { emoji: "\u{1F49C}", en: "Purple Heart", ru: "Фиолетовое сердце", uk: "Фіолетове серце", pt: "Coração roxo" },
    { emoji: "\u{1F9E1}", en: "Orange Heart", ru: "Оранжевое сердце", uk: "Помаранчеве серце", pt: "Coração laranja" }
  ],

  animals: [
    { emoji: "\u{1F981}", en: "Lion", ru: "Лев", uk: "Лев", pt: "Leão" },
    { emoji: "\u{1F418}", en: "Elephant", ru: "Слон", uk: "Слон", pt: "Elefante" },
    { emoji: "\u{1F992}", en: "Giraffe", ru: "Жираф", uk: "Жирафа", pt: "Girafa" },
    { emoji: "\u{1F438}", en: "Frog", ru: "Лягушка", uk: "Жаба", pt: "Rã" },
    { emoji: "\u{1F436}", en: "Dog", ru: "Собака", uk: "Собака", pt: "Cão" },
    { emoji: "\u{1F431}", en: "Cat", ru: "Кот", uk: "Кіт", pt: "Gato" },
    { emoji: "\u{1F435}", en: "Monkey", ru: "Обезьяна", uk: "Мавпа", pt: "Macaco" },
    { emoji: "\u{1F42E}", en: "Cow", ru: "Корова", uk: "Корова", pt: "Vaca" },
    { emoji: "\u{1F437}", en: "Pig", ru: "Свинья", uk: "Свиня", pt: "Porco" },
    { emoji: "\u{1F986}", en: "Duck", ru: "Утка", uk: "Качка", pt: "Pato" },
    { emoji: "\u{1F414}", en: "Chicken", ru: "Курица", uk: "Курка", pt: "Galinha" },
    { emoji: "\u{1F43B}", en: "Bear", ru: "Медведь", uk: "Ведмідь", pt: "Urso" },
    { emoji: "\u{1F42F}", en: "Tiger", ru: "Тигр", uk: "Тигр", pt: "Tigre" },
    { emoji: "\u{1F430}", en: "Bunny", ru: "Зайчик", uk: "Зайчик", pt: "Coelho" },
    { emoji: "\u{1F43C}", en: "Panda", ru: "Панда", uk: "Панда", pt: "Panda" },
    { emoji: "\u{1F428}", en: "Koala", ru: "Коала", uk: "Коала", pt: "Coala" },
    { emoji: "\u{1F98A}", en: "Fox", ru: "Лиса", uk: "Лисиця", pt: "Raposa" },
    { emoji: "\u{1F993}", en: "Zebra", ru: "Зебра", uk: "Зебра", pt: "Zebra" },
    { emoji: "\u{1F422}", en: "Turtle", ru: "Черепаха", uk: "Черепаха", pt: "Tartaruga" },
    { emoji: "\u{1F433}", en: "Whale", ru: "Кит", uk: "Кит", pt: "Baleia" },
    { emoji: "\u{1F42C}", en: "Dolphin", ru: "Дельфин", uk: "Дельфін", pt: "Golfinho" },
    { emoji: "\u{1F988}", en: "Shark", ru: "Акула", uk: "Акула", pt: "Tubarão" },
    { emoji: "\u{1F427}", en: "Penguin", ru: "Пингвин", uk: "Пінгвін", pt: "Pinguim" },
    { emoji: "\u{1F989}", en: "Owl", ru: "Сова", uk: "Сова", pt: "Coruja" },
    { emoji: "\u{1F98B}", en: "Butterfly", ru: "Бабочка", uk: "Метелик", pt: "Borboleta" },
    { emoji: "\u{1F41D}", en: "Bee", ru: "Пчела", uk: "Бджола", pt: "Abelha" },
    { emoji: "\u{1F40C}", en: "Snail", ru: "Улитка", uk: "Равлик", pt: "Caracol" },
    { emoji: "\u{1F419}", en: "Octopus", ru: "Осьминог", uk: "Восьминіг", pt: "Polvo" },
    { emoji: "\u{1F40A}", en: "Crocodile", ru: "Крокодил", uk: "Крокодил", pt: "Crocodilo" },
    { emoji: "\u{1F577}\u{FE0F}", en: "Spider", ru: "Паук", uk: "Павук", pt: "Aranha" },
    { emoji: "\u{1F41E}", en: "Ladybug", ru: "Божья коровка", uk: "Сонечко", pt: "Joaninha" },
    { emoji: "\u{1F996}", en: "Dinosaur", ru: "Динозавр", uk: "Динозавр", pt: "Dinossauro" }
  ],

  vehicles: [
    { emoji: "\u{1F692}", en: "Fire Truck", ru: "Пожарная машина", uk: "Пожежна машина", pt: "Bombeiros" },
    { emoji: "\u{1F682}", en: "Train", ru: "Поезд", uk: "Поїзд", pt: "Comboio" },
    { emoji: "\u{1F3CD}\u{FE0F}", en: "Motorcycle", ru: "Мотоцикл", uk: "Мотоцикл", pt: "Mota" },
    { emoji: "\u{1F690}", en: "Van", ru: "Фургон", uk: "Фургон", pt: "Carrinha" },
    { emoji: "\u{1F691}", en: "Ambulance", ru: "Скорая", uk: "Швидка", pt: "Ambulância" },
    { emoji: "\u{1F695}", en: "Taxi", ru: "Такси", uk: "Таксі", pt: "Táxi" },
    { emoji: "\u{1F69C}", en: "Tractor", ru: "Трактор", uk: "Трактор", pt: "Trator" },
    { emoji: "\u{1F3CE}\u{FE0F}", en: "Race Car", ru: "Гоночная машина", uk: "Гоночна машина", pt: "Carro de corrida" },
    { emoji: "\u{1F6D1}", en: "Stop", ru: "Стоп", uk: "Стоп", pt: "Pare" },
    { emoji: "\u{1F693}", en: "Police Car", ru: "Полиция", uk: "Поліція", pt: "Polícia" },
    { emoji: "\u{1F68C}", en: "Bus", ru: "Автобус", uk: "Автобус", pt: "Autocarro" },
    { emoji: "\u{2708}\u{FE0F}", en: "Airplane", ru: "Самолёт", uk: "Літак", pt: "Avião" },
    { emoji: "\u{1F681}", en: "Helicopter", ru: "Вертолёт", uk: "Гелікоптер", pt: "Helicóptero" },
    { emoji: "\u{1F6E5}\u{FE0F}", en: "Boat", ru: "Лодка", uk: "Човен", pt: "Barco" },
    { emoji: "\u{1F6B2}", en: "Bicycle", ru: "Велосипед", uk: "Велосипед", pt: "Bicicleta" },
    { emoji: "\u{1F6F4}", en: "Scooter", ru: "Самокат", uk: "Самокат", pt: "Trotinete" },
    { emoji: "\u{1F680}", en: "Rocket", ru: "Ракета", uk: "Ракета", pt: "Foguetão" },
    { emoji: "\u{26F5}", en: "Sailboat", ru: "Парусник", uk: "Вітрильник", pt: "Veleiro" }
  ],

  actions: [
    { emoji: "\u{1F3C3}", en: "Running", ru: "Бежит", uk: "Біжить", pt: "A correr" },
    { emoji: "\u{1F938}", en: "Jumping", ru: "Прыгает", uk: "Стрибає", pt: "A saltar" },
    { emoji: "\u{1F3CA}", en: "Swimming", ru: "Плавает", uk: "Плаває", pt: "A nadar" },
    { emoji: "\u{1F483}", en: "Dancing", ru: "Танцует", uk: "Танцює", pt: "A dançar" },
    { emoji: "\u{1F634}", en: "Sleeping", ru: "Спит", uk: "Спить", pt: "A dormir" },
    { emoji: "\u{1F37D}\u{FE0F}", en: "Eating", ru: "Кушает", uk: "Їсть", pt: "A comer" },
    { emoji: "\u{1F44F}", en: "Clapping", ru: "Хлопает", uk: "Плескає", pt: "A bater palmas" },
    { emoji: "\u{1F44B}", en: "Waving", ru: "Машет", uk: "Махає", pt: "A acenar" },
    { emoji: "\u{1F6B6}", en: "Walking", ru: "Идёт", uk: "Іде", pt: "A andar" },
    { emoji: "\u{1F6B4}", en: "Biking", ru: "Катается", uk: "Катається", pt: "A andar de bicicleta" },
    { emoji: "\u{1F9D7}", en: "Climbing", ru: "Лезет", uk: "Лізе", pt: "A escalar" },
    { emoji: "\u{26BD}", en: "Playing", ru: "Играет", uk: "Грає", pt: "A jogar" },
    { emoji: "\u{1F3A8}", en: "Painting", ru: "Рисует", uk: "Малює", pt: "A pintar" },
    { emoji: "\u{1F6C1}", en: "Bathing", ru: "Купается", uk: "Купається", pt: "A tomar banho" },
    { emoji: "\u{1F3B6}", en: "Singing", ru: "Поёт", uk: "Співає", pt: "A cantar" }
  ],

  body: [
    { emoji: "\u{1F440}", en: "Eyes", ru: "Глаза", uk: "Очі", pt: "Olhos" },
    { emoji: "\u{1F443}", en: "Nose", ru: "Нос", uk: "Ніс", pt: "Nariz" },
    { emoji: "\u{1F444}", en: "Mouth", ru: "Рот", uk: "Рот", pt: "Boca" },
    { emoji: "\u{1F442}", en: "Ear", ru: "Ухо", uk: "Вухо", pt: "Orelha" },
    { emoji: "\u{270B}", en: "Hand", ru: "Рука", uk: "Рука", pt: "Mão" },
    { emoji: "\u{1F9B6}", en: "Foot", ru: "Нога", uk: "Нога", pt: "Pé" },
    { emoji: "\u{1F9B7}", en: "Teeth", ru: "Зубы", uk: "Зуби", pt: "Dentes" },
    { emoji: "\u{1F4AA}", en: "Strong", ru: "Сильный", uk: "Сильний", pt: "Forte" },
    { emoji: "\u{1F9E0}", en: "Brain", ru: "Мозг", uk: "Мозок", pt: "Cérebro" }
  ],

  weather: [
    { emoji: "\u{2600}\u{FE0F}", en: "Sun", ru: "Солнце", uk: "Сонце", pt: "Sol" },
    { emoji: "\u{1F327}\u{FE0F}", en: "Rain", ru: "Дождь", uk: "Дощ", pt: "Chuva" },
    { emoji: "\u{2744}\u{FE0F}", en: "Snow", ru: "Снег", uk: "Сніг", pt: "Neve" },
    { emoji: "\u{1F308}", en: "Rainbow", ru: "Радуга", uk: "Веселка", pt: "Arco-íris" },
    { emoji: "\u{2601}\u{FE0F}", en: "Cloud", ru: "Облако", uk: "Хмара", pt: "Nuvem" },
    { emoji: "\u{26A1}", en: "Lightning", ru: "Молния", uk: "Блискавка", pt: "Relâmpago" },
    { emoji: "\u{1F319}", en: "Moon", ru: "Луна", uk: "Місяць", pt: "Lua" },
    { emoji: "\u{2B50}", en: "Star", ru: "Звезда", uk: "Зірка", pt: "Estrela" },
    { emoji: "\u{1F30A}", en: "Wave", ru: "Волна", uk: "Хвиля", pt: "Onda" },
    { emoji: "\u{1F525}", en: "Fire", ru: "Огонь", uk: "Вогонь", pt: "Fogo" },
    { emoji: "\u{1F332}", en: "Tree", ru: "Дерево", uk: "Дерево", pt: "Árvore" },
    { emoji: "\u{1F33B}", en: "Flower", ru: "Цветок", uk: "Квітка", pt: "Flor" }
  ],

  clothes: [
    { emoji: "\u{1F455}", en: "Shirt", ru: "Рубашка", uk: "Сорочка", pt: "Camisa" },
    { emoji: "\u{1F456}", en: "Pants", ru: "Штаны", uk: "Штани", pt: "Calças" },
    { emoji: "\u{1F45F}", en: "Shoes", ru: "Кроссовки", uk: "Кросівки", pt: "Sapatos" },
    { emoji: "\u{1F9E2}", en: "Hat", ru: "Кепка", uk: "Кепка", pt: "Chapéu" },
    { emoji: "\u{1F9E6}", en: "Socks", ru: "Носки", uk: "Шкарпетки", pt: "Meias" },
    { emoji: "\u{1F457}", en: "Dress", ru: "Платье", uk: "Плаття", pt: "Vestido" },
    { emoji: "\u{1F9E5}", en: "Coat", ru: "Куртка", uk: "Куртка", pt: "Casaco" },
    { emoji: "\u{1F97E}", en: "Boots", ru: "Ботинки", uk: "Чоботи", pt: "Botas" }
  ],

  feelings: [
    { emoji: "\u{1F970}", en: "Loved", ru: "Любимый", uk: "Коханий", pt: "Amado" },
    { emoji: "\u{1F973}", en: "Party", ru: "Веселье", uk: "Веселощі", pt: "Festa" },
    { emoji: "\u{1F631}", en: "Surprise", ru: "Удивление", uk: "Здивування", pt: "Surpresa" },
    { emoji: "\u{1F602}", en: "Silly", ru: "Смешной", uk: "Смішний", pt: "Tonto" },
    { emoji: "\u{1F60A}", en: "Happy", ru: "Счастливый", uk: "Щасливий", pt: "Feliz" },
    { emoji: "\u{1F60E}", en: "Cool", ru: "Крутой", uk: "Крутий", pt: "Fixe" },
    { emoji: "\u{1F914}", en: "Thinking", ru: "Думает", uk: "Думає", pt: "A pensar" },
    { emoji: "\u{1F609}", en: "Wink", ru: "Подмигивание", uk: "Підморгування", pt: "Piscadela" },
    { emoji: "\u{1F929}", en: "Star Struck", ru: "Восхищение", uk: "Захоплення", pt: "Deslumbrado" },
    { emoji: "\u{1F622}", en: "Sad", ru: "Грустный", uk: "Сумний", pt: "Triste" },
    { emoji: "\u{1F620}", en: "Angry", ru: "Злой", uk: "Злий", pt: "Zangado" },
    { emoji: "\u{1F634}", en: "Sleepy", ru: "Сонный", uk: "Сонний", pt: "Sonolento" },
    { emoji: "\u{1F922}", en: "Sick", ru: "Тошнит", uk: "Нудить", pt: "Enjoado" },
    { emoji: "\u{1F628}", en: "Scared", ru: "Испуганный", uk: "Наляканий", pt: "Assustado" },
    { emoji: "\u{1F610}", en: "Bored", ru: "Скучно", uk: "Нудно", pt: "Aborrecido" },
    { emoji: "\u{1F927}", en: "Sneezing", ru: "Апчхи!", uk: "Апчхі!", pt: "Atchim!" },
    { emoji: "\u{1F915}", en: "Ouch", ru: "Ой!", uk: "Ой!", pt: "Ai!" },
    { emoji: "\u{1F62D}", en: "Crying", ru: "Плачет", uk: "Плаче", pt: "A chorar" }
  ]
};
