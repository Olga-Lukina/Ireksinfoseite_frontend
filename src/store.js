export default {
    categories: [
      {
          /* categorie 1*/
        name: 'Смеси для хлебобулочных изделий',
        slug: "smesi-dla-xlebobuloshnich-izdeliy",
        parentslug: "",
        image: "bread.jpg",
        numberOfProducts: '42',
        id: 1,
      },
      {
        /* untercategorie 1*/
      name: 'Смеси для белого хлеба',
      slug: "smesi-dla-belogo-xleba",
      parentslug: "smesi-dla-xlebobuloshnich-izdeliy",
      image: "bread.jpg",
      numberOfProducts: '42',
      id: 1,
    },

      {
           /* categorie 2*/
        name: 'Смеси для отделки хлебобулочных изделий',
        slug: "smesi-dla-otdelki-xlebobuloshnich-izdeliy",
        parentslug: "",
        image: "bread.jpg",
        numberOfProducts: '22',
        id: 2,
      },
      {
          /* categorie 3*/
        name: 'Смеси для сдобных, слоеных и жаренных во фритюре изделий',
        slug: "smesi-dla-sdoblich-sloyonich-i-zarenych-vo-freture",
        parentslug: "",
        image: "bread.jpg",
        numberOfProducts: '23',
        id: 3,
      },
      {
          /* categorie 4*/
        name: 'Улучшители',
        slug: "ylychitely",
        parentslug: "",
        image: "bread.jpg",
        numberOfProducts: '22',
        id: 4,
      },
      {
          /* categorie 5*/
        name: 'Закваски',
        slug: "zakvasky",
        parentslug: "",
        image: "bread.jpg",
        numberOfProducts: '15',
        id: 5,
      },
      {
          /* categorie 6*/
        name: 'Солодовые продукты. Эмульсии',
        slug: "solodovie-prodykty-emylsii",
        parentslug: "",
        image: "bread.jpg",
        numberOfProducts: '18',
        id: 6,
      },
      {
          /* categorie 7*/
        name: 'Смеси для кондитерских изделий',
        slug: "smesy-dla-konditerskix-izdeliy",
        parentslug: "",
        image: "bread.jpg",
        numberOfProducts: '10',
        id: 7,  
    },
      {
            /* categorie 8*/
        name: 'Смеси для кремов и начинок',
        slug: "smesi-dla-kremov-i-nachinok",
        parentslug: "",
        image: "bread.jpg",
        numberOfProducts: '42',
        id: 8,
      },
    ],
    products:[
      {
        name: "ПРОМА ЭКЛЕР",
        slug: "proma-ekler",
        id: 1,
        images:[
          "torte.jpg",
           "torte.jpg",
           "torte.jpg",
           "torte.jpg"
        ], 
        description: "irgendwas",
        categoryslug: "smesi-dla-belogo-xleba"
      }
    ]

  };
  