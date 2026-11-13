import Navbar from "./components/Navbar";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: {
    template: "%s | Фитнес Тренеры Москва метро Савеловская",
    default:
      "Персональный Фитнес в Москве возле метро Савеловская | Тренеры Михаил и Елена",
  },
  description:
    "Профессиональные фитнес-тренеры в Москве (метро Савеловская). Персональные тренировки, реабилитация, ЛФК, онлайн-занятия. Первая консультация бесплатно. Запишитесь!",
  keywords: [
    "фитнес",
    "персональный тренер",
    "метро Савеловская",
    "Савеловский вокзал",
    "Москва",
    "тренировки",
    "реабилитация",
    "ЛФК",
  ],
  openGraph: {
    title: "Персональные Фитнес-Тренеры в Москве (метро Савеловская)",
    description:
      "Достигните своих целей с персональными тренировками от Михаила и Елены.",
    siteName: "Фитнес Тренеры Москвы (метро Савеловская)",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Фитнес Тренеры в Москве (метро Савеловская)",
    description:
      "Персональные тренировки, реабилитация, ЛФК в Москве метро Савеловская",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Москва",
      addressRegion: "Московская область",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "55.796647",
      longitude: "37.595180",
    },

    telephone: "+7-903-874-18-98",
    priceRange: "от 3000 ₽",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "22:00",
      },
    ],
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>

        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(106095632, 'init', {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `}
        </Script>

        {/* Noscript для пользователей без JavaScript */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106095632"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
