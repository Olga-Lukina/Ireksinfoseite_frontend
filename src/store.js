export default {
  categories: [
    {
      /* categorie 1*/
      name: 'Смеси для хлебобулочных изделий',
      slug: 'smesi-dla-xlebobuloshnich-izdeliy',
      parentslug: '',
      image: 'bread.jpg',
      numberOfProducts: '42',
      id: 1,
    },
    {
      /* categorie 2*/
      name: 'Смеси для отделки хлебобулочных изделий',
      slug: 'smesi-dla-otdelki-xlebobuloshnich-izdeliy',
      parentslug: '',
      image: 'bread.jpg',
      numberOfProducts: '22',
      id: 2,
    },
    {
      /* categorie 3*/
      name: 'Смеси для сдобных, слоеных и жаренных во фритюре изделий',
      slug: 'smesi-dla-sdoblich-sloyonich-i-zarenych-vo-freture',
      parentslug: '',
      image: 'bread.jpg',
      numberOfProducts: '23',
      id: 3,
    },
    {
      /* categorie 4*/
      name: 'Улучшители',
      slug: 'ylychitely',
      parentslug: '',
      image: 'bread.jpg',
      numberOfProducts: '22',
      id: 4,
    },
    {
      /* categorie 5*/
      name: 'Закваски',
      slug: 'zakvasky',
      parentslug: '',
      image: 'bread.jpg',
      numberOfProducts: '15',
      id: 5,
    },
    {
      /* categorie 6*/
      name: 'Солодовые продукты. Эмульсии',
      slug: 'solodovie-prodykty-emylsii',
      parentslug: '',
      image: 'bread.jpg',
      numberOfProducts: '18',
      id: 6,
    },
    {
      /* categorie 7*/
      name: 'Смеси для кондитерских изделий',
      slug: 'smesy-dla-konditerskix-izdeliy',
      parentslug: '',
      image: 'torte.jpg',
      numberOfProducts: '10',
      id: 7,
    },
    {
      /* untercategorie 7(1)*/
      name: 'Смеси для бисквитов',
      slug: 'smesi-dla-beskvitov',
      parentslug: 'smesy-dla-konditerskix-izdeliy',
      image: 'torte.jpg',
      numberOfProducts: '8',
      id: 1,
    },
    {
      /* untercategorie 7(2)*/
      name: 'Смеси для масляных бисквитов, кексов, маффинов',
      slug: 'smesi-dla-maslanyx-beskvitov-keksov-mafinov',
      parentslug: 'smesy-dla-konditerskix-izdeliy',
      image: 'torte.jpg',
      numberOfProducts: '12',
      id: 1,
    },
    {
      /* untercategorie 7(3)*/
      name: 'Смеси для песочных полуфабрикатов',
      slug: 'smesi-dla-pesoshnix-polyfabrikatov',
      parentslug: 'smesy-dla-konditerskix-izdeliy',
      image: 'torte.jpg',
      numberOfProducts: '8',
      id: 1,
    },
    {
      /* untercategorie 7(4)*/
      name: 'Смеси для заварных полуфабрикатов',
      slug: 'smesi-dla-zavarnyx-polyfabrikatov',
      parentslug: 'smesy-dla-konditerskix-izdeliy',
      image: 'profitrol.jpg',
      numberOfProducts: '1',
      id: 1,
    },
    {
      /* untercategorie 7(5)*/
      name: 'Прочее',
      slug: 'proshee',
      parentslug: 'smesy-dla-konditerskix-izdeliy',
      image: 'torte.jpg',
      numberOfProducts: '7',
      id: 1,
    },
    {
      /* categorie 8*/
      name: 'Смеси для кремов и начинок',
      slug: 'smesi-dla-kremov-i-nachinok',
      parentslug: '',
      image: 'bread.jpg',
      numberOfProducts: '42',
      id: 8,
    },
  ],
  products: [
    {
      name: 'прома эклер',
      slug: 'proma-ekler',
      id: 1,
      images: [
        'eclir_1.jpg',
        'eclir_2.jpg',
        'eclir_3.jpg',
        'eclir_4.jpg',
        'eclir_5.jpg',
        'eclir_6.jpg',
        'eclir_7.jpg',
      ],
      description: 'Сухая смесь для приготовления заварного полуфабриката',
      categoryslug: 'smesi-dla-zavarnyx-polyfabrikatov',
    },
  ],
  recipes: [
    {
      name: 'Изделия a-la "Чуррос"',
      slug: 'izdelia-a-la-churos',
      id: 1,
      image: 'torte.jpg',
      productslug: 'proma-ekler',
    },
    {
      name: 'Кольцо с кракелином',
      slug: 'kolzo-s-krakelinom',
      id: 2,
      image: 'torte.jpg',
      productslug: 'proma-ekler',
    },
    {
      name: 'Пирожное Эклер Дарк',
      slug: 'peroznoe-eklir-dark',
      id: 3,
      image: 'torte.jpg',
      productslug: 'proma-ekler',
    },
  ],
};
