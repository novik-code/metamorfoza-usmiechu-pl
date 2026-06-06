export type Category =
  | 'metamorfozy'
  | 'licowki'
  | 'korony-protetyka'
  | 'wybielanie'
  | 'projekt-usmiechu-dsd'
  | 'cena-i-koszt'
  | 'pytania-i-watpliwosci';

export const categoryMeta: Record<Category, {
  label: string;
  shortDescription: string;
  description: string;
}> = {
  'metamorfozy': {
    label: 'Metamorfozy',
    shortDescription: 'Realne przemiany uśmiechu',
    description: 'Opisy przemian uśmiechu (case reports) — co realnie da się osiągnąć, jakimi metodami, w jakim czasie.',
  },
  'licowki': {
    label: 'Licówki',
    shortDescription: 'Licówki porcelanowe i kompozytowe',
    description: 'Licówki — porcelanowe i kompozytowe. Wskazania, trwałość, ile zębów, czy szlifować, pielęgnacja, cena.',
  },
  'korony-protetyka': {
    label: 'Korony i protetyka',
    shortDescription: 'Korony, mosty, odbudowa',
    description: 'Korony pełnoceramiczne, mosty i protetyka estetyczna — kiedy korona zamiast licówki, materiały, trwałość.',
  },
  'wybielanie': {
    label: 'Wybielanie',
    shortDescription: 'Gabinetowe i nakładkowe',
    description: 'Wybielanie zębów — metoda gabinetowa i nakładkowa, bezpieczeństwo, nadwrażliwość, trwałość efektu.',
  },
  'projekt-usmiechu-dsd': {
    label: 'Projekt uśmiechu (DSD)',
    shortDescription: 'Cyfrowe planowanie uśmiechu',
    description: 'Digital Smile Design — cyfrowy projekt uśmiechu i mock-up, dzięki którym widzisz efekt przed leczeniem.',
  },
  'cena-i-koszt': {
    label: 'Cena i koszt',
    shortDescription: 'Ile kosztuje metamorfoza',
    description: 'Koszt metamorfozy uśmiechu — od czego zależy cena licówek, koron, wybielania i pełnego makeoveru.',
  },
  'pytania-i-watpliwosci': {
    label: 'Pytania i wątpliwości',
    shortDescription: 'Najczęstsze pytania',
    description: 'Odpowiedzi na najczęstsze pytania o metamorfozę uśmiechu — naturalność, trwałość, ból, odwracalność, pielęgnacja.',
  },
};

export const allCategories = Object.keys(categoryMeta) as Category[];

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
}
