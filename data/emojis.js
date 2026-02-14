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
    { emoji: "\u{1F9C0}", en: "Cheese", ru: "Сыр", uk: "Сир", pt: "Queijo" }
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
    { emoji: "\u{1F422}", en: "Turtle", ru: "Черепаха", uk: "Черепаха", pt: "Tartaruga" }
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
    { emoji: "\u{1F6E5}\u{FE0F}", en: "Boat", ru: "Лодка", uk: "Човен", pt: "Barco" }
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
