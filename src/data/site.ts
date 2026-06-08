// Centralna konfiguracja brandu — metamorfoza-usmiechu.pl
// STRONA KRAJOWA (premium): metamorfoza uśmiechu / smile makeover — licówki, DSD, wybielanie.
// Intent KRAJOWY. Konwersja → klinika Mikrostomart.

export const site = {
  url: 'https://metamorfoza-usmiechu.pl',
  title: 'Metamorfoza uśmiechu — licówki, projekt uśmiechu, nowy uśmiech | dr Marcin Nowosielski',
  shortTitle: 'Metamorfoza uśmiechu',
  description:
    'Metamorfoza uśmiechu — kompletny przewodnik: licówki, korony, wybielanie i cyfrowy projekt uśmiechu (DSD). Naturalny, harmonijny nowy uśmiech. Sygnowane przez lek. dent. Marcina Nowosielskiego, M.Sc. RWTH Aachen. Leczenie w klinice Mikrostomart.',
  ogImage: '/og-default.png',
  locale: 'pl-PL',
  author: {
    name: 'Marcin Nowosielski',
    honorificPrefix: 'lek. dent.',
    honorificSuffix: 'M.Sc.',
    canonicalUrl: 'https://nowosielski.pl',
    canonicalId: 'https://nowosielski.pl/#person',
    jobTitle: 'Lekarz dentysta, stomatologia estetyczna, M.Sc. RWTH Aachen',
    image: '/dr-marcin.webp',
    email: 'kontakt@nowosielski.pl',
  },
  clinic: {
    name: 'Mikrostomart',
    legalName: 'Mikrostomart — Klinika Stomatologii Premium',
    url: 'https://mikrostomart.pl',
    bookingUrl: 'https://mikrostomart.pl/rezerwacja',
    implantPageUrl: 'https://mikrostomart.pl/oferta/implantologia',
    implantLandingUrl: 'https://mikrostomart.pl/implanty-opole',
    contactUrl: 'https://mikrostomart.pl/kontakt',
    phone: '+48 570 270 470',
    phoneAlt: '+48 570 810 800',
    phoneHref: 'tel:+48570270470',
    email: 'gabinet@mikrostomart.pl',
    address: {
      street: 'ul. Centralna 33a',
      city: 'Opole',
      region: 'opolskie',
      postalCode: '45-940',
      country: 'PL',
    },
    geo: {
      latitude: 50.6751,
      longitude: 17.9213,
    },
    openingHours: [
      { day: 'Monday', opens: '09:00', closes: '20:00' },
      { day: 'Tuesday', opens: '09:00', closes: '20:00' },
      { day: 'Wednesday', opens: '09:00', closes: '20:00' },
      { day: 'Thursday', opens: '09:00', closes: '20:00' },
      { day: 'Friday', opens: '09:00', closes: '16:00' },
    ],
    gbpUrl: 'https://share.google/uqFxAL4vtBaH3ATbg',
    sameAs: [
      'https://share.google/uqFxAL4vtBaH3ATbg',
      'https://www.znanylekarz.pl/placowki/gabinet-mikrostomart-2',
      'https://www.facebook.com/mikrostomart',
      'https://www.instagram.com/mikrostomart_opole/',
    ],
  },
  // SEO — frazy KRAJOWE (premium estetyka)
  keywords: [
    'metamorfoza uśmiechu',
    'projektowanie uśmiechu',
    'nowy uśmiech',
    'smile makeover',
    'licówki',
    'licówki porcelanowe',
    'digital smile design',
    'odbudowa uśmiechu',
    'piękny uśmiech',
  ],
};

export const nav = [
  { label: 'Metamorfozy', href: '/metamorfozy' },
  { label: 'Licówki', href: '/licowki' },
  { label: 'Wybielanie', href: '/wybielanie' },
  { label: 'Projekt uśmiechu', href: '/projekt-usmiechu-dsd' },
  { label: 'Cennik', href: '/cennik' },
  { label: 'Blog', href: '/blog' },
  { label: 'O autorze', href: '/o-autorze' },
];
