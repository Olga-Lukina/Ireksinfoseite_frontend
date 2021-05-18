export default {
    categories: [
      {
          /* categorie 1*/
        name: 'Смеси для хлебобулочных изделий',
        slug: "smesi-dla-xlebobuloshnich-izdeliy",
        image: "bread.jpg",
        numberOfProducts: '42',
        id: 1,
        productlisting: [
          {
            image: "bread.jpg",  
            name: "Абендброт",
            slug: "abendbrot",
          },
          {
            image: "bread.jpg",  
            name: "Био Микс",
            slug: "biomix",
          },
          {
            image: "bread.jpg",  
            name: "Бон Багет",
            slug: "bonbaget",
          }, 
        ]
      },
      {
           /* categorie 2*/
        name: 'Смеси для отделки хлебобулочных изделий',
        slug: "smesi-dla-otdelki-xlebobuloshnich-izdeliy",
        image: "bread.jpg",
        numberOfProducts: '22',
        id: 2,
      },
      {
          /* categorie 3*/
        name: 'Смеси для сдобных, слоеных и жаренных во фритюре изделий',
        slug: "smesi-dla-sdoblich-sloyonich-i-zarenych-vo-freture",
        image: "bread.jpg",
        numberOfProducts: '23',
        id: 3,
      },
      {
          /* categorie 4*/
        name: 'Улучшители',
        slug: "ylychitely",
        image: "bread.jpg",
        numberOfProducts: '22',
        id: 4,
      },
      {
          /* categorie 5*/
        name: 'Закваски',
        slug: "zakvasky",
        image: "bread.jpg",
        numberOfProducts: '15',
        id: 5,
      },
      {
          /* categorie 6*/
        name: 'Солодовые продукты. Эмульсии',
        slug: "solodovie-prodykty-emylsii",
        image: "bread.jpg",
        numberOfProducts: '18',
        id: 6,
      },
      {
          /* categorie 7*/
        name: 'Смеси для кондитерских изделий',
        slug: "smesy-dla-konditerskix-izdeliy",
        image: "bread.jpg",
        numberOfProducts: '10',
        id: 7,
        subcategories: [
            {
              name: "Смеси для заварных полуфабрикатов",
              slug: "smesi-dla-zavarnix-polyfabrikatov",
              image: "torte.jpg",
              numberOfProducts: '1',
              productlisting: [
                  {
                    image: "torte.jpg",  
                    name: "ПРОМА ЭКЛЕР",
                    slug: "proma-ekler",
                    productdetail:[
                              {
                              activImage: "torte.jpg",
                              images: [
                                "torte.jpg",
                                "torte.jpg",
                                "torte.jpg",
                                "torte.jpg"
                              ],
                              name: "ПРОМА ЭКЛЕР",
                              slug: "proma-ekler",
                              description: "Сухая смесь для приготовления заварного полуфабриката."
                            }
                            ]
                  },
              ]
            }
        ]
    },
      {
            /* categorie 8*/
        name: 'Смеси для кремов и начинок',
        slug: "smesi-dla-kremov-i-nachinok",
        image: "bread.jpg",
        numberOfProducts: '42',
        id: 8,
        subcategories: [
          {
            name: "Смеси для кремов",
            slug: "smesi-dla-kremov",
            image: "torte.jpg",
            numberOfProducts: '6',
            productdetail: [
                {
                  image: "torte.jpg",  
                  name: "АСТРИ КОЛД КРЕМ",
                  slug: "astry-cold-crem",
                },
            ]
          },
          {
            name: "Смеси для начинок",
            slug: "smesi-dla-nochinik",
            image: "torte.jpg",
            numberOfProducts: '8',
            productdetail: [
                {
                  image: "torte.jpg",  
                  name: "АСТРИ КАКАОС",
                  slug: "astry-cacaos",
                },
            ]
          },
        ]
      },
    ]

  };
  