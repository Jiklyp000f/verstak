import Navigation from "../componets/Navigate/Navigate";
import logo_white from "../assets/logo_white.png"
import ContentSection from "../componets/Content/ContentSection";
import { useState } from "react";
import telegram from "../assets/telegram.png"
import whatsapp from "../assets/whatsapp.png"
import BeLogo from "../assets/Be.png"
import mailImg from "../assets/mail.png"
import octagon from "../assets/octagon.png"
import Button from "../componets/Button/Button";
import rose from "../assets/rose_beverage.png"
import InfoSection from "../componets/InfoSection/InfoSection";
import GallerySection from "../componets/GallerySection/GallerySection";


function mainPage() {
  const navLinks = [
    { label: 'Главная', url: '/' },
    { label: 'О нас', url: '/about' },
    { label: 'Контакты', url: '/contacts' },
  ];

    const [buttons, setButtons] = useState([
    { label: 'Веб-разработка', selected: false },
    { label: 'Брендирование и дизайн', selected: false },
    { label: 'Продвижение и маркетинг', selected: false },
    { label: '3D и VR-решения для увеличения продаж', selected: false },
    { label: 'Опыт в разных нишах', selected: false },
    { label: 'Смотреть кейсы', selected: false },
  ]);

  const handleButtonClick = (index: number) => {
    setButtons((prev: any[]) => prev.map((btn, i) => 
      i === index ? { ...btn, selected: !btn.selected } : btn
    ));
  };

  const galleryCards = [
  { type: 'image' as const, src: rose, alt: 'Работа 1' },
  { type: 'image' as const, src: rose, alt: 'Работа 2' },
  { type: 'image' as const, src: rose, alt: 'Работа 3' },
  { type: 'image' as const, src: rose, alt: 'Работа 4' },
  { type: 'image' as const, src: rose, alt: 'Работа 5' },
  {
    type: 'special' as const,
    label: '10+',
    button: <Button>Смотреть все</Button>,
  },
];

  return (<>
        <Navigation logo={{
          type: "image",
          src: logo_white,
        alt: 'Логотип',
      }} links={navLinks}     />
        <ContentSection
        leftTopText={
          <h6>
            Анализируем бизнес, проектируем решения, создаём сайты и CRM, внедряем 3D и VR,
            подключаем маркетинг и автоматизацию — чтобы продавать больше и тратить меньше.
          </h6>
        }
        leftButton={<Button variant="primary">Стать клиентом</Button>}
        leftEmail={<span>hi@verstakdigital.ru</span>}
        leftLogos={[telegram, whatsapp, BeLogo, mailImg]}
        backgroundImage={octagon}
        cards={[
          { big: '100+', small: 'проектов', bigColor: '#831FCB' },
          { big: '50', small: 'клиентов', bigColor: '#831FCB' },
          { big: '24/7', small: 'поддержка', bigColor: '#831FCB' },
          { big: '10', small: 'наград', bigColor: '#831FCB' },
        ]}
        buttons={buttons}
        onButtonClick={handleButtonClick}
        bottomBigText="Цифровая мастерская для девелоперов, производителей и госсектора"
      />
      <InfoSection
        title="Сделайте ваш проект, нашей гордостью"
        text="Бесплатная 15 минутная консультация"
        button={<Button variant="primary">Получить консультацию</Button>}
        smallText="Познакомимся, ответим на все Ваши вопросы. Это Вас ни к чему не обязывает!"
      />

      <GallerySection
        title="Наши партнеры"
        text="Мы работаем с гос. организациями, девелоперами, студиями дизайна, риэлторами, IT сообществами, студиями ремонта, застройщиками"
        cards={galleryCards}
      />
  </>
    
      
  );
}

export default mainPage;