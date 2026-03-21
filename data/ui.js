// Instamoji UI Strings — Translations for interface elements

const UI = {
  en: {
    alphabetIcon: "ABC",
    categories: {
      alphabet: "Alphabet", numbers: "Numbers", food: "Food",
      colors: "Colors", shapes: "Shapes", animals: "Animals",
      vehicles: "Vroom!", actions: "Actions", body: "Body",
      weather: "Weather", clothes: "Clothes", feelings: "Feelings",
      stickers: "Tashkent!", kitchen: "Mix!",
      random: "Random Mix", all: "All Emojis"
    },
    home: "HOME",
    back: "BACK",
    greatJob: "Great job!"
  },
  ru: {
    alphabetIcon: "АБВ",
    categories: {
      alphabet: "Алфавит", numbers: "Числа", food: "Еда",
      colors: "Цвета", shapes: "Фигуры", animals: "Животные",
      vehicles: "Бип-бип!", actions: "Действия", body: "Тело",
      weather: "Погода", clothes: "Одежда", feelings: "Чувства",
      stickers: "Ташкент!", kitchen: "Миксуй!",
      random: "Случайный микс", all: "Все эмодзи"
    },
    home: "ДОМОЙ",
    back: "НАЗАД",
    greatJob: "Молодец!"
  },
  uk: {
    alphabetIcon: "АБВ",
    categories: {
      alphabet: "Абетка", numbers: "Числа", food: "Їжа",
      colors: "Кольори", shapes: "Фігури", animals: "Тварини",
      vehicles: "Біп-біп!", actions: "Дії", body: "Тіло",
      weather: "Погода", clothes: "Одяг", feelings: "Почуття",
      stickers: "Ташкент!", kitchen: "Мікс!",
      random: "Випадковий мікс", all: "Всі емоджі"
    },
    home: "ДОДОМУ",
    back: "НАЗАД",
    greatJob: "Молодець!"
  },
  pt: {
    alphabetIcon: "ABC",
    categories: {
      alphabet: "Alfabeto", numbers: "Números", food: "Comida",
      colors: "Cores", shapes: "Formas", animals: "Animais",
      vehicles: "Vrum!", actions: "Ações", body: "Corpo",
      weather: "Tempo", clothes: "Roupa", feelings: "Sentimentos",
      stickers: "Tashkent!", kitchen: "Mistura!",
      random: "Mistura", all: "Todos"
    },
    home: "INÍCIO",
    back: "VOLTAR",
    greatJob: "Muito bem!"
  }
};

// TTS language codes
const LANG_CODES = {
  en: "en-US",
  ru: "ru-RU",
  uk: "uk-UA",
  pt: "pt-PT"
};

// Language display info
const LANGUAGES = [
  { code: "en", flag: "\u{1F1EC}\u{1F1E7}" },
  { code: "ru", flag: "\u{1F1F7}\u{1F1FA}" },
  { code: "uk", flag: "\u{1F1FA}\u{1F1E6}" },
  { code: "pt", flag: "\u{1F1F5}\u{1F1F9}" }
];

// Category display order with icons
const CATEGORY_LIST = [
  { id: "alphabet", icon: null },
  { id: "numbers", icon: "\u{1F522}" },
  { id: "food", icon: "\u{1F34C}" },
  { id: "colors", icon: "\u{1F3A8}" },
  { id: "shapes", icon: "\u{2764}\u{FE0F}" },
  { id: "animals", icon: "\u{1F436}" },
  { id: "vehicles", icon: "\u{1F692}" },
  { id: "actions", icon: "\u{1F3C3}" },
  { id: "body", icon: "\u{1F440}" },
  { id: "weather", icon: "\u{2600}\u{FE0F}" },
  { id: "clothes", icon: "\u{1F45F}" },
  { id: "feelings", icon: "\u{1F970}" },
  { id: "stickers", icon: "\u{1F1FA}\u{1F1FF}" },
  { id: "kitchen", icon: "\u{1F52E}" }
];
