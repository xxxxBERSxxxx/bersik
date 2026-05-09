import Hero from './components/sections/Hero/Hero';
import MapSection from './components/sections/MapSection/MapSection';
import Features from './components/sections/Features/Features';
import CTA from './components/sections/CTA/CTA';
import OnlyneTren from './components/sections/OnlyneTren/OnlyneTren';
import ContactSection from './contacts/page';
import Trenera from './trenera/page';


// Метаданные главной страницы переопределяют default из layout
export const metadata = {
  title: 'Персональные Фитнес-Тренеры в Одинцово и Москве | Бесплатная Консультация',
  description: 'Ищете персонального тренера в Одинцово? Михаил Соловьев и Елена Петухова — эксперты по фитнесу, реабилитации и ЛФК. Индивидуальные программы, онлайн и офлайн тренировки. Результат гарантирован!',
};

export default function Home() {
  return (
    <>
      <Hero />
      <MapSection />
      <Trenera />
      <Features />
      <CTA />
      <OnlyneTren />
      <ContactSection />
    </>
  );
}