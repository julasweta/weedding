import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ua: {
    translation: {
      "about us": "Про нас",
      "about p1": "Наша історія — це історія двох сердець, які зустрілись у потрібний момент. Від перших поглядів до довгих розмов, від подорожей до мрій — усе вело нас до цього особливого дня.",
      "about p2": "Разом ми навчилися бути підтримкою, радістю та спокоєм один для одного. Любов, яка зростала з кожним днем, стала міцною основою нашої майбутньої сім’ї.",
      "about p3": "Ми віримо, що кожен день разом — це нова сторінка нашої історії, яку ми пишемо з любов’ю та турботою.",
      "about names": "💗 Владислав & Анастасія 💗",

      "main title p1": "Ми щасливі, що ви розділите з нами особливий день — наше весілля, яке відбудеться 3 липня 2025 року у Варшаві!",
      "main title p2": "Щоб усе пройшло легко і приємно, ділимося з вами ключовою інформацією:",

      "ceremony": "📍 Церемонія та святкування",
      "location": "Локація:",
      "address": "Ресторан Dwor Złotopolska Dolina\nАдреса: Trębki Nowe 89, 05-170",
      "program": "Програма дня:",
      "program list": [
        "07:00–9:00 — Сніданок у готелі",
        "10:30 — Трансфер з готелю",
        "12:00 — Вінчання в церкві Успіння Пресвятої Богородиці",
        "13:00 — Трансфер до ресторану",
        "15:00 — Аперитив із шампанським та закусками",
        "16:00 — Урочиста церемонія",
        "17:00 — Святковий банкет"
      ],

      "accommodation": "🏨 Проживання",
      "check-in": "🛎️ Заселення — ви зможете заселитися, назвавши своє прізвище на рецепції.",
      "evening": "Якщо ви плануєте приїхати раніше, будемо раді зустрітись із вами на затишній вечері 2 липня о 19:00 в готелі — це наш маленький подарунок для вас ❤️",
      "stay note": "Проживання в ніч після весілля (з 3 на 4 липня) вже включене з нашого боку.",

      "no flowers": "🍷 Замість квітів та алкоголю",
      "no gifts": "У зв’язку з нашою дорогою після весілля, ми щиро просимо не дарувати квітів та алкоголю.",
      "celebrate with us": "Просто приходьте з гарним настроєм та бажанням святкувати з нами — це саме те, що нам найбільше потрібно! ❤️",

      "after party": "🏊 After-party: Relax & Splash",
      "after party desc": "Після офіційної частини й танців до пізньої ночі планується нічне купання в басейні на території комплексу.",
      "swimwear": "Будь ласка, не забудьте взяти купальники та плавки, якщо хочете приєднатись до after-party в стилі “relax & splash”! 💦",

      "see you": "До зустрічі на святі кохання!\nЗ любов’ю,\nВладислав та Анастасія 💗"
    }
  },
  en: {
    translation: {
      "about us": "About Us",
      "about p1": "Our story is one of two hearts that met at the right moment. From first glances to long conversations, from travels to dreams — everything led us to this special day.",
      "about p2": "Together we learned to be support, joy, and calm for each other. The love that grew with each day became a strong foundation for our future family.",
      "about p3": "We believe that every day together is a new page in our story, which we write with love and care.",
      "about names": "💗 Vladyslav & Anastasiia 💗",

      "main title p1": "We are happy you will share with us a special day — our wedding, which will take place on July 3, 2025 in Warsaw!",
      "main title p2": "To make everything smooth and pleasant, we share with you the key information:",

      "ceremony": "📍 Ceremony & Celebration",
      "location": "Location:",
      "address": "Restaurant Dwor Złotopolska Dolina\nAddress: Trębki Nowe 89, 05-170",
      "program": "Program of the Day:",
      "program list": [
        "07:00–9:00 — Breakfast at the hotel",
        "10:30 — Transfer from the hotel",
        "12:00 — Wedding ceremony at the Church of the Assumption of the Blessed Virgin Mary",
        "13:00 — Transfer to the restaurant",
        "15:00 — Aperitif with champagne and snacks",
        "16:00 — Official ceremony",
        "17:00 — Festive banquet"
      ],

      "accommodation": "🏨 Accommodation",
      "check-in": "🛎️ Check-in — you can check in by giving your last name at the reception.",
      "evening": "If you plan to arrive earlier, we would be happy to meet you for a cozy dinner on July 2 at 19:00 at the hotel — this is our little gift to you ❤️",
      "stay note": "Accommodation for the night after the wedding (from July 3 to 4) is already covered by us.",

      "no flowers": "🍷 Instead of Flowers and Alcohol",
      "no gifts": "Due to our journey after the wedding, we kindly ask not to bring flowers or alcohol.",
      "celebrate with us": "Just come with a good mood and a desire to celebrate with us — that’s exactly what we need the most! ❤️",

      "after party": "🏊 After-party: Relax & Splash",
      "after party desc": "After the official part and dancing late into the night, there will be a night swim at the pool on site.",
      "swimwear": "Please don’t forget your swimsuits if you’d like to join the after-party in the style of “relax & splash”! 💦",

      "see you": "See you at the celebration of love!\nWith love,\nVladyslav and Anastasiia 💗"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ua",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
