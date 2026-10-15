import type { Lang } from './i18n'

export type Category = 'kebabs' | 'steaks' | 'salads' | 'mains' | 'burgers' | 'sides' | 'drinks' | 'desserts'

export type MenuItem = {
  id: string
  category: Category
  name: string
  ru: string
  en: string
  description: string
  ruDescription: string
  enDescription: string
  price: string
  image: string
  popular?: boolean
  unit?: string
}

export const categories: Category[] = ['kebabs', 'steaks', 'salads', 'mains', 'burgers', 'sides', 'drinks', 'desserts']

export const menuItems: MenuItem[] = [
  { id: 'assorti-kabob', category: 'kebabs', name: 'Assorti kabob', ru: 'Ассорти-кебаб', en: 'Assorti kebab', description: 'Bir dasturxonda turli xil gril ta’mlari.', ruDescription: 'Разные виды мяса на гриле в одной подаче.', enDescription: 'A sharing platter of assorted grilled meats.', price: '340 000 so‘m', image: '/images/mixed-grill.webp', popular: true },
  { id: 'qiyma-kabob', category: 'kebabs', name: 'Qiyma kabob', ru: 'Кийма-кебаб', en: 'Qiyma kebab', description: 'Ko‘mirda pishgan shirali qiyma.', ruDescription: 'Сочный рубленый кебаб на углях.', enDescription: 'Juicy minced-meat kebab cooked over charcoal.', price: '22 000 so‘m', image: '/images/kebab.webp', popular: true },
  { id: 'jazz-kabob', category: 'kebabs', name: 'Jazz kabob', ru: 'Джаз-кебаб', en: 'Jazz kebab', description: 'Maxsus marinad va jonli olov ta’mi.', ruDescription: 'Фирменный маринад и аромат живого огня.', enDescription: 'A signature marinade with a smoky finish.', price: '38 000 so‘m', image: '/images/kebab.webp' },
  { id: 'napoleon-kabob', category: 'kebabs', name: 'Napoleon kabob', ru: 'Наполеон-кебаб', en: 'Napoleon kebab', description: 'An’anaviy uslubdagi gril taomi.', ruDescription: 'Блюдо на гриле в традиционном стиле.', enDescription: 'A traditional grill-house favourite.', price: '38 000 so‘m', image: '/images/grilled-meat.webp' },
  { id: 'jigar-kabob', category: 'kebabs', name: 'Jigar kabob', ru: 'Джигар-кебаб', en: 'Jigar kebab', description: 'Olovda qovurilgan jigar bo‘laklari.', ruDescription: 'Кусочки печени, обжаренные на огне.', enDescription: 'Liver pieces grilled over open flame.', price: '18 000 so‘m', image: '/images/grilled-meat.webp' },
  { id: 'sabzavot-kabob', category: 'kebabs', name: 'Sabzavotli kabob', ru: 'Овощной кебаб', en: 'Vegetable kebab', description: 'Grilda pishgan rang-barang sabzavotlar.', ruDescription: 'Разноцветные овощи, приготовленные на гриле.', enDescription: 'Colourful vegetables cooked on the grill.', price: '22 000 so‘m', image: '/images/kebab.webp' },
  { id: 'new-york', category: 'steaks', name: 'New York steyk', ru: 'Стейк New York', en: 'New York steak', description: 'Qovurilgan go‘sht, klassik garnir bilan.', ruDescription: 'Обжаренное мясо с классическим гарниром.', enDescription: 'Seared steak served with classic sides.', price: '87 500 so‘m', image: '/images/steak.webp', popular: true },
  { id: 'ribay', category: 'steaks', name: 'Ribay steyk', ru: 'Стейк рибай', en: 'Ribeye steak', description: 'Yumshoq tuzilish va kuchli gril aromati.', ruDescription: 'Мраморное мясо с насыщенным ароматом гриля.', enDescription: 'Richly flavoured steak with a smoky crust.', price: '29 500 so‘m / 100 g', image: '/images/steak.webp' },
  { id: 'bon-file', category: 'steaks', name: 'Bon file', ru: 'Бон-филе', en: 'Beef fillet', description: 'Yumshoq mol go‘shti, sariyog‘ bilan.', ruDescription: 'Нежная говядина со сливочным маслом.', enDescription: 'Tender beef fillet finished with butter.', price: '54 000 so‘m / 100 g', image: '/images/steak.webp' },
  { id: 't-bon', category: 'steaks', name: 'T-bon steyk', ru: 'Стейк T-bone', en: 'T-bone steak', description: 'Suyakli steyk — gril ishqibozlari uchun.', ruDescription: 'Стейк на кости для ценителей гриля.', enDescription: 'A bone-in steak for grill lovers.', price: '23 000 so‘m / 100 g', image: '/images/steak.webp' },
  { id: 'buglama', category: 'mains', name: 'Bug‘lama', ru: 'Буглама', en: 'Buglama', description: 'An’anaviy uslubda tayyorlangan go‘shtli taom.', ruDescription: 'Мясное блюдо, приготовленное традиционным способом.', enDescription: 'A traditional slow-cooked meat dish.', price: '320 000 so‘m', image: '/images/grilled-meat.webp', popular: true },
  { id: 'qozi-qafas', category: 'mains', name: 'Qo‘zi qafas', ru: 'Каре ягнёнка', en: 'Lamb rack', description: 'Grilda pishirilgan qo‘zi go‘shti.', ruDescription: 'Баранина, приготовленная на гриле.', enDescription: 'Lamb cooked over the grill.', price: '370 000 so‘m', image: '/images/grilled-meat.webp' },
  { id: 'asado', category: 'mains', name: 'Asado', ru: 'Асадо', en: 'Asado', description: 'Uzoq pishirilgan go‘sht va garnir.', ruDescription: 'Медленно приготовленное мясо с гарниром.', enDescription: 'Slow-cooked meat served with sides.', price: '270 000 so‘m', image: '/images/mixed-grill.webp' },
  { id: 'tovuq-file', category: 'mains', name: 'Tovuq filesi', ru: 'Куриное филе', en: 'Chicken fillet', description: 'Grilda pishirilgan tovuq filesi.', ruDescription: 'Куриное филе с гриля.', enDescription: 'Grilled chicken fillet.', price: '10 700 so‘m / 100 g', image: '/images/grilled-meat.webp' },
  { id: 'basturma', category: 'salads', name: 'Basturma salat', ru: 'Салат с бастурмой', en: 'Basturma salad', description: 'Rukola, pomidor va basturma.', ruDescription: 'Руккола, томаты и бастурма.', enDescription: 'Rocket leaves, tomatoes, and basturma.', price: '90 000 so‘m', image: '/images/salad.webp', popular: true },
  { id: 'grekcha', category: 'salads', name: 'Grekcha salat', ru: 'Греческий салат', en: 'Greek salad', description: 'Sabzavotlar, zaytun va fetaksa pishlog‘i.', ruDescription: 'Овощи, оливки и сыр фетакса.', enDescription: 'Fresh vegetables, olives, and fetaxa cheese.', price: '60 000 so‘m', image: '/images/salad.webp' },
  { id: 'sezar', category: 'salads', name: 'Sezar salat', ru: 'Салат Цезарь', en: 'Caesar salad', description: 'Tovuq filesi, aysberg, suxarik va parmesan.', ruDescription: 'Куриное филе, айсберг, сухарики и пармезан.', enDescription: 'Chicken, iceberg lettuce, croutons, and parmesan.', price: '80 000 so‘m', image: '/images/salad.webp', popular: true },
  { id: 'chef-salat', category: 'salads', name: 'Chef salat', ru: 'Салат шефа', en: 'Chef salad', description: 'Tovuq, qo‘ziqorin, til va parmesan.', ruDescription: 'Курица, грибы, язык и пармезан.', enDescription: 'Chicken, mushrooms, tongue, and parmesan.', price: '108 000 so‘m', image: '/images/salad.webp' },
  { id: 'choban', category: 'salads', name: 'Choban salat', ru: 'Салат чобан', en: 'Choban salad', description: 'Pomidor, bodring, bulg‘or qalampiri va piyoz.', ruDescription: 'Томаты, огурцы, сладкий перец и лук.', enDescription: 'Tomatoes, cucumber, sweet pepper, and onion.', price: '40 000 so‘m', image: '/images/salad.webp' },
  { id: 'burrata', category: 'salads', name: 'Burrata salat', ru: 'Салат с бурратой', en: 'Burrata salad', description: 'Burrata, qarsildoq baqlajon va cherri pomidor.', ruDescription: 'Буррата, хрустящий баклажан и томаты черри.', enDescription: 'Burrata, crispy aubergine, and cherry tomatoes.', price: '107 000 so‘m', image: '/images/salad.webp' },
  { id: 'zohid-burger', category: 'burgers', name: 'Zohid burger', ru: 'Бургер Zohid', en: 'Zohid burger', description: 'Maxsus burger, 20 sm.', ruDescription: 'Фирменный бургер, 20 см.', enDescription: 'Signature burger, 20 cm.', price: '65 000 so‘m', image: '/images/burger.webp', popular: true },
  { id: 'mini-burger', category: 'burgers', name: 'Mini burger', ru: 'Мини-бургер', en: 'Mini burger', description: 'Kichik o‘lchamdagi klassik burger.', ruDescription: 'Классический бургер небольшого размера.', enDescription: 'A smaller take on the classic burger.', price: '35 000 so‘m', image: '/images/burger.webp' },
  { id: 'quvvat-burger', category: 'burgers', name: 'Quvvat burger', ru: 'Бургер Quvvat', en: 'Quvvat burger', description: 'To‘yimli burger — katta ishtaha uchun.', ruDescription: 'Сытный бургер для хорошего аппетита.', enDescription: 'A hearty burger for a bigger appetite.', price: '60 000 so‘m', image: '/images/burger.webp' },
  { id: 'zohid-lavash', category: 'burgers', name: 'Zohid lavash', ru: 'Лаваш Zohid', en: 'Zohid lavash', description: 'Yumshoq lavash ichida issiq to‘ldirma.', ruDescription: 'Горячая начинка в мягком лаваше.', enDescription: 'A warm filling wrapped in soft lavash.', price: '65 000 so‘m', image: '/images/lavash.webp' },
  { id: 'tandir-lavash', category: 'burgers', name: 'Tandir lavash', ru: 'Тандыр-лаваш', en: 'Tandoor lavash', description: 'Tandirda pishirilgan lavash.', ruDescription: 'Лаваш, приготовленный в тандыре.', enDescription: 'Lavash finished in a tandoor oven.', price: '65 000 so‘m', image: '/images/lavash.webp' },
  { id: 'fri', category: 'sides', name: 'Kartoshka fri', ru: 'Картофель фри', en: 'French fries', description: 'Tillarang qovurilgan kartoshka.', ruDescription: 'Золотистый жареный картофель.', enDescription: 'Golden, crispy fries.', price: '16 000 so‘m', image: '/images/burger.webp' },
  { id: 'onion-rings', category: 'sides', name: 'Piyoz halqalari', ru: 'Луковые кольца', en: 'Onion rings', description: 'Qarsildoq qoplamadagi piyoz halqalari.', ruDescription: 'Луковые кольца в хрустящей панировке.', enDescription: 'Crispy battered onion rings.', price: '20 000 so‘m', image: '/images/mixed-grill.webp' },
  { id: 'sebzavot', category: 'sides', name: 'Gril sabzavotlari', ru: 'Овощи на гриле', en: 'Grilled vegetables', description: 'Mavsumiy sabzavotlar grilda pishirilgan.', ruDescription: 'Сезонные овощи, приготовленные на гриле.', enDescription: 'Seasonal vegetables cooked over the grill.', price: '22 000 so‘m', image: '/images/kebab.webp' },
  { id: 'apple-fresh', category: 'drinks', name: 'Olma fresh', ru: 'Свежий яблочный сок', en: 'Apple fresh juice', description: 'Yangi tayyorlangan olma sharbati.', ruDescription: 'Свежевыжатый яблочный сок.', enDescription: 'Freshly pressed apple juice.', price: '25 000 so‘m', image: '/images/fresh-juice.webp' },
  { id: 'orange-fresh', category: 'drinks', name: 'Apelsin fresh', ru: 'Свежий апельсиновый сок', en: 'Orange fresh juice', description: 'Yangi siqilgan apelsin sharbati.', ruDescription: 'Свежевыжатый апельсиновый сок.', enDescription: 'Freshly squeezed orange juice.', price: '50 000 so‘m', image: '/images/fresh-juice.webp', popular: true },
  { id: 'mango-marakya', category: 'drinks', name: 'Mango-marakuya', ru: 'Манго-маракуйя', en: 'Mango passion fruit', description: 'Mevali va tetiklantiruvchi ichimlik.', ruDescription: 'Фруктовый освежающий напиток.', enDescription: 'A refreshing tropical fruit drink.', price: '40 000 so‘m', image: '/images/fresh-juice.webp' },
  { id: 'zohid-mix-tea', category: 'drinks', name: 'Zohid mix choy', ru: 'Чай Zohid mix', en: 'Zohid mix tea', description: 'Meva va ziravorlar bilan choy.', ruDescription: 'Чай с фруктами и специями.', enDescription: 'Tea infused with fruit and spices.', price: '35 000 so‘m', image: '/images/tea.webp' },
  { id: 'latte', category: 'drinks', name: 'Latte', ru: 'Латте', en: 'Latte', description: 'Espresso va yumshoq sut ko‘pigi.', ruDescription: 'Эспрессо с нежной молочной пеной.', enDescription: 'Espresso topped with silky milk foam.', price: '28 000–35 000 so‘m', image: '/images/coffee.webp' },
  { id: 'san-sebastian', category: 'desserts', name: 'Klassik San Sebastian', ru: 'Классический сан-себастьян', en: 'Classic San Sebastian', description: 'Ustki qismi karamelizatsiyalangan cheesecake.', ruDescription: 'Чизкейк с карамелизированной корочкой.', enDescription: 'Cheesecake with a caramelised top.', price: '45 000 so‘m', image: '/images/dessert.webp', popular: true },
  { id: 'pistachio-san-sebastian', category: 'desserts', name: 'Fistashkali San Sebastian', ru: 'Фисташковый сан-себастьян', en: 'Pistachio San Sebastian', description: 'Pista ta’mli maxsus cheesecake.', ruDescription: 'Фирменный чизкейк с фисташкой.', enDescription: 'A signature cheesecake with pistachio.', price: '45 000 so‘m', image: '/images/dessert.webp' },
  { id: 'lotus-cheesecake', category: 'desserts', name: 'Lotus cheesecake', ru: 'Чизкейк Lotus', en: 'Lotus cheesecake', description: 'Lotus pechenyesi bilan cheesecake.', ruDescription: 'Чизкейк с печеньем Lotus.', enDescription: 'Cheesecake with Lotus biscuit.', price: '40 000 so‘m', image: '/images/dessert.webp' },
  { id: 'dubai-cake', category: 'desserts', name: 'Dubai', ru: 'Дубай', en: 'Dubai cake', description: 'Shokoladli desert.', ruDescription: 'Шоколадный десерт.', enDescription: 'A chocolate dessert.', price: '45 000 so‘m', image: '/images/dessert.webp' },
]

export function itemName(item: MenuItem, lang: Lang) {
  return lang === 'ru' ? item.ru : lang === 'en' ? item.en : item.name
}
export function itemDescription(item: MenuItem, lang: Lang) {
  return lang === 'ru' ? item.ruDescription : lang === 'en' ? item.enDescription : item.description
}
