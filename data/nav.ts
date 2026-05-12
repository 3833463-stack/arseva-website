export const PHONE1 = "8 (922) 188-60-07";
export const PHONE2 = "8 (343) 328-60-07";
export const PHONE1_HREF = "tel:+79221886007";
export const PHONE2_HREF = "tel:+73433286007";
export const EMAIL = "3286007@bk.ru";
export const ADDRESS = "Сибирский тракт, 57, Екатеринбург";
export const HOURS = "Круглосуточно, без выходных";

export const betonSubmenu = [
  { label: "Бетон М100 (В7.5)", href: "/beton/m100" },
  { label: "Бетон М150 (В12.5)", href: "/beton/m150" },
  { label: "Бетон М200 (В15)", href: "/beton/m200" },
  { label: "Бетон М250 (В20)", href: "/beton/m250" },
  { label: "Бетон М300 (В22.5)", href: "/beton/m300" },
  { label: "Бетон М350 (В25)", href: "/beton/m350" },
  { label: "Бетон М400 (В30)", href: "/beton/m400" },
];

export const mainNav = [
  { label: "Бетон", href: "/beton", submenu: betonSubmenu },
  { label: "Раствор", href: "/rastvor" },
  { label: "Керамзитобетон", href: "/keramzitobeton" },
  { label: "Отсев, Песок, Щебень", href: "/materialy" },
  { label: "Бетононасос", href: "/betonnasos" },
  { label: "О компании", href: "/o-kompanii" },
  { label: "Доставка", href: "/dostavka" },
  { label: "Прайс-лист", href: "/prajslajst" },
  { label: "Контакты", href: "/kontakty" },
  { label: "Статьи", href: "/stati" },
];

export const footerNav = [
  {
    title: "Продукция",
    links: [
      { label: "Бетон М100–М200", href: "/beton/m100" },
      { label: "Бетон М250–М400", href: "/beton/m250" },
      { label: "Раствор", href: "/rastvor" },
      { label: "Керамзитобетон", href: "/keramzitobeton" },
      { label: "Отсев, Песок, Щебень", href: "/materialy" },
      { label: "Бетононасос", href: "/betonnasos" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О компании", href: "/o-kompanii" },
      { label: "Доставка", href: "/dostavka" },
      { label: "Прайс-лист", href: "/prajslajst" },
      { label: "Статьи", href: "/stati" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: PHONE1, href: PHONE1_HREF },
      { label: PHONE2, href: PHONE2_HREF },
      { label: EMAIL, href: `mailto:${EMAIL}` },
    ],
  },
];
