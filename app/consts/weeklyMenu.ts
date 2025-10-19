export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Dish {
  name: string;
  ingredients: Ingredient[];
}

export interface Meal {
  breakfast: Dish;
  secondBreakfast: Dish;
  lunch: Dish;
  dinner: Dish;
}

export interface PersonMeals {
  filip: Meal;
  agata: Meal;
}

export type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export const weeklyMenu: Record<Day, PersonMeals> = {
  monday: {
    filip: {
      breakfast: {
        name: "KANAPKI Z SEREM ŻÓŁTYM I POMIDOREM",
        ingredients: [
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 60, unit: "g" },
          { name: "Sałata", amount: 20, unit: "g" },
          { name: "Masło ekstra", amount: 10, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "SKYR Z JABŁKIEM",
        ingredients: [
          { name: "Jabłko", amount: 150, unit: "g" },
          { name: "Skyr smakowy (różne rodzaje)", amount: 150, unit: "g" },
          { name: "Orzechy nerkowca (bez soli)", amount: 40, unit: "g" },
        ],
      },
      lunch: {
        name: "SPAGHETTI Z SOSEM MIĘSNO-POMIDOROWYM",
        ingredients: [
          { name: "Pomidory z puszki (krojone)", amount: 200, unit: "g" },
          { name: "Makaron spaghetti pełnoziarnisty", amount: 100, unit: "g" },
          { name: "Mięso mielone wołowe", amount: 80, unit: "g" },
          { name: "Cebula", amount: 25, unit: "g" },
          { name: "Czosnek", amount: 5, unit: "g" },
        ],
      },
      dinner: {
        name: "TOSTY Z SZYNKĄ, SEREM I WARZYWAMI",
        ingredients: [
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 60, unit: "g" },
          { name: "Ser, gouda tłusty", amount: 60, unit: "g" },
          { name: "Rukola", amount: 20, unit: "g" },
          { name: "Keczup", amount: 15, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "KANAPKI Z SEREM ŻÓŁTYM I POMIDOREM",
        ingredients: [
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Chleb żytni jasny", amount: 90, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 45, unit: "g" },
          { name: "Sałata", amount: 15, unit: "g" },
          { name: "Masło ekstra", amount: 8, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "JOGURT Z MALINAMI",
        ingredients: [
          { name: "Jogurt naturalny", amount: 200, unit: "g" },
          { name: "Maliny", amount: 120, unit: "g" },
          { name: "Orzechy nerkowca (bez soli)", amount: 30, unit: "g" },
          { name: "Miód pszczeli", amount: 10, unit: "g" },
        ],
      },
      lunch: {
        name: "SPAGHETTI Z SOSEM MIĘSNO-POMIDOROWYM",
        ingredients: [
          { name: "Pomidory z puszki (krojone)", amount: 200, unit: "g" },
          { name: "Makaron spaghetti pełnoziarnisty", amount: 100, unit: "g" },
          { name: "Mięso mielone wołowe", amount: 80, unit: "g" },
          { name: "Cebula", amount: 25, unit: "g" },
          { name: "Czosnek", amount: 5, unit: "g" },
        ],
      },
      dinner: {
        name: "TOSTY Z SZYNKĄ, SEREM I WARZYWAMI",
        ingredients: [
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 30, unit: "g" },
          { name: "Ser, gouda tłusty", amount: 30, unit: "g" },
          { name: "Rukola", amount: 20, unit: "g" },
          { name: "Keczup", amount: 15, unit: "g" },
        ],
      },
    },
  },
  tuesday: {
    filip: {
      breakfast: {
        name: "MOZZARELLA Z POMIDOREM",
        ingredients: [
          { name: "Ser mozzarella, light", amount: 125, unit: "g" },
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "JOGURT Z BANANEM",
        ingredients: [
          { name: "Jogurt naturalny", amount: 200, unit: "g" },
          { name: "Banan", amount: 120, unit: "g" },
          { name: "Słonecznik, nasiona, łuskane", amount: 30, unit: "g" },
          { name: "Miód pszczeli", amount: 10, unit: "g" },
        ],
      },
      lunch: {
        name: "RYŻ PO CHIŃSKU Z KURCZAKIEM I WARZYWAMI",
        ingredients: [
          { name: "Warzywa na patelnię chińskie", amount: 200, unit: "g" },
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 180,
            unit: "g",
          },
          { name: "Ryż biały", amount: 75, unit: "g" },
          { name: "Sos sojowy ciemny", amount: 10, unit: "g" },
          { name: "Olej rzepakowy", amount: 10, unit: "g" },
          { name: "Czosnek", amount: 5, unit: "g" },
          { name: "Szczypiorek", amount: 5, unit: "g" },
        ],
      },
      dinner: {
        name: "KANAPKI Z SERKIEM ŚMIETANKOWYM I ŁOSOSIEM WĘDZONYM",
        ingredients: [
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Ogórek", amount: 120, unit: "g" },
          { name: "Łosoś, wędzony", amount: 75, unit: "g" },
          { name: "Serek śmietankowy", amount: 60, unit: "g" },
          { name: "Rukola", amount: 20, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "KANAPKI Z SERKIEM ŚMIETANKOWYM I DŻEMEM",
        ingredients: [
          { name: "Chleb żytni jasny", amount: 90, unit: "g" },
          { name: "Serek śmietankowy", amount: 90, unit: "g" },
          { name: "Dżem", amount: 60, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "JOGURT Z BANANEM",
        ingredients: [
          { name: "Jogurt naturalny", amount: 200, unit: "g" },
          { name: "Banan", amount: 120, unit: "g" },
          { name: "Słonecznik, nasiona, łuskane", amount: 20, unit: "g" },
          { name: "Miód pszczeli", amount: 10, unit: "g" },
        ],
      },
      lunch: {
        name: "RYŻ PO CHIŃSKU Z KURCZAKIEM I WARZYWAMI",
        ingredients: [
          { name: "Warzywa na patelnię chińskie", amount: 200, unit: "g" },
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 180,
            unit: "g",
          },
          { name: "Ryż biały", amount: 75, unit: "g" },
          { name: "Sos sojowy ciemny", amount: 10, unit: "g" },
          { name: "Olej rzepakowy", amount: 10, unit: "g" },
          { name: "Czosnek", amount: 5, unit: "g" },
          { name: "Szczypiorek", amount: 5, unit: "g" },
        ],
      },
      dinner: {
        name: "KANAPKI Z SERKIEM ŚMIETANKOWYM I ŁOSOSIEM WĘDZONYM",
        ingredients: [
          { name: "Ogórek", amount: 120, unit: "g" },
          { name: "Chleb żytni jasny", amount: 90, unit: "g" },
          { name: "Łosoś, wędzony", amount: 75, unit: "g" },
          { name: "Serek śmietankowy", amount: 45, unit: "g" },
          { name: "Rukola", amount: 20, unit: "g" },
        ],
      },
    },
  },
  wednesday: {
    filip: {
      // Add dishes for Filip on Wednesday
      breakfast: {
        name: "KANAPKI Z SZYNKĄ I POMIDOREM",
        ingredients: [
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 90, unit: "g" },
          { name: "Masło ekstra", amount: 20, unit: "g" },
          { name: "Sałata", amount: 20, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "SKYR JOGURT PITNY, BANAN, ORZECHY",
        ingredients: [
          { name: "Skyr jogurt pitny", amount: 330, unit: "g" },
          { name: "Banan", amount: 120, unit: "g" },
          { name: "Orzechy laskowe", amount: 10, unit: "g" },
        ],
      },
      lunch: {
        name: "GYROS",
        ingredients: [
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 180,
            unit: "g",
          },
          { name: "Pomidor", amount: 100, unit: "g" },
          { name: "Kapusta pekińska", amount: 50, unit: "g" },
          { name: "Kukurydza, konserwowa", amount: 40, unit: "g" },
          { name: "Keczup", amount: 15, unit: "g" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Frytki", amount: 100, unit: "g" },
        ],
      },
      dinner: {
        name: "PARÓWKI Z PIECZYWEM",
        ingredients: [
          { name: "Szynka z piersi kurczaka", amount: 60, unit: "g" },
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Parówki z kurczaka", amount: 100, unit: "g" },
          { name: "Keczup", amount: 15, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "KANAPKI Z SZYNKĄ I POMIDOREM",
        ingredients: [
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 60, unit: "g" },
          { name: "Sałata", amount: 20, unit: "g" },
          { name: "Masło ekstra", amount: 10, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "SKYR JOGURT PITNY",
        ingredients: [
          { name: "Skyr jogurt pitny", amount: 330, unit: "g" },
          { name: "Banan", amount: 120, unit: "g" },
        ],
      },
      lunch: {
        name: "GYROS",
        ingredients: [
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 180,
            unit: "g",
          },
          { name: "Pomidor", amount: 100, unit: "g" },
          { name: "Kapusta pekińska", amount: 50, unit: "g" },
          { name: "Kukurydza, konserwowa", amount: 40, unit: "g" },
          { name: "Jogurt naturalny", amount: 40, unit: "g" },
          { name: "Keczup", amount: 15, unit: "g" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Frytki", amount: 100, unit: "g" },
        ],
      },
      dinner: {
        name: "PARÓWKI Z PIECZYWEM",
        ingredients: [
          { name: "Szynka z piersi kurczaka", amount: 45, unit: "g" },
          { name: "Chleb żytni jasny", amount: 90, unit: "g" },
          { name: "Parówki z kurczaka", amount: 80, unit: "g" },
          { name: "Keczup", amount: 15, unit: "g" },
        ],
      },
    },
  },
  thursday: {
    filip: {
      breakfast: {
        name: "PASTA Z TUŃCZYKA",
        ingredients: [
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Tuńczyk w sosie własnym", amount: 60, unit: "g" },
          { name: "Jaja kurze całe", amount: 56, unit: "g" },
          { name: "Serek śmietankowy", amount: 75, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "SEREK WIEJSKI Z BORÓWKAMI I CYNAMONEM",
        ingredients: [
          { name: "Serek wiejski (naturalny)", amount: 200, unit: "g" },
          { name: "Borówki amerykańskie", amount: 100, unit: "g" },
          { name: "Orzechy nerkowca (bez soli)", amount: 30, unit: "g" },
          { name: "Miód pszczeli", amount: 10, unit: "g" },
          { name: "Cynamon", amount: 1, unit: "g" },
        ],
      },
      lunch: {
        name: "BITKI WIEPRZOWE W SOSIE WŁASNYM Z ZIEMNIAKAMI I BURAKAMI",
        ingredients: [
          { name: "Ziemniaki", amount: 250, unit: "g" },
          { name: "Wieprzowina, szynka surowa", amount: 180, unit: "g" },
          { name: "Burak", amount: 150, unit: "g" },
          { name: "Cebula", amount: 50, unit: "g" },
          { name: "Olej rzepakowy", amount: 10, unit: "g" },
          { name: "Mąka pszenna, typ 500", amount: 6, unit: "g" },
        ],
      },
      dinner: {
        name: "JAJECZNICA Z KANAPKAMI Z POMIDORAMI",
        ingredients: [
          { name: "Pomidor", amount: 240, unit: "g" },
          { name: "Jaja kurze całe", amount: 168, unit: "g" },
          { name: "Chleb żytni jasny", amount: 90, unit: "g" },
          { name: "Cebula", amount: 50, unit: "g" },
          { name: "Masło ekstra", amount: 5, unit: "g" },
          { name: "Czosnek", amount: 5, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "PASTA Z TUŃCZYKA",
        ingredients: [
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Tuńczyk w sosie własnym", amount: 60, unit: "g" },
          { name: "Jaja kurze całe", amount: 56, unit: "g" },
          { name: "Serek śmietankowy", amount: 75, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "SEREK WIEJSKI Z BORÓWKAMI I CYNAMONEM",
        ingredients: [
          { name: "Serek wiejski (naturalny)", amount: 200, unit: "g" },
          { name: "Borówki amerykańskie", amount: 100, unit: "g" },
          { name: "Orzechy nerkowca (bez soli)", amount: 15, unit: "g" },
          { name: "Miód pszczeli", amount: 10, unit: "g" },
          { name: "Cynamon", amount: 1, unit: "g" },
        ],
      },
      lunch: {
        name: "BITKI WIEPRZOWE W SOSIE WŁASNYM Z ZIEMNIAKAMI I BURAKAMI",
        ingredients: [
          { name: "Ziemniaki", amount: 250, unit: "g" },
          { name: "Wieprzowina, szynka surowa", amount: 180, unit: "g" },
          { name: "Burak", amount: 150, unit: "g" },
          { name: "Cebula", amount: 50, unit: "g" },
          { name: "Olej rzepakowy", amount: 10, unit: "g" },
          { name: "Mąka pszenna, typ 500", amount: 6, unit: "g" },
        ],
      },
      dinner: {
        name: "JAJECZNICA Z KANAPKAMI Z POMIDORAMI",
        ingredients: [
          { name: "Pomidor", amount: 240, unit: "g" },
          { name: "Jaja kurze całe", amount: 112, unit: "g" },
          { name: "Chleb żytni jasny", amount: 75, unit: "g" },
          { name: "Cebula", amount: 50, unit: "g" },
          { name: "Masło ekstra", amount: 5, unit: "g" },
          { name: "Czosnek", amount: 5, unit: "g" },
        ],
      },
    },
  },
  friday: {
    filip: {
      breakfast: {
        name: "OWSIANKA Z KINDER BUENO I TRUSKAWKAMI",
        ingredients: [
          { name: "Mleko spożywcze, 1,5 % tłuszczu", amount: 160, unit: "g" },
          { name: "Truskawki", amount: 150, unit: "g" },
          { name: "Płatki owsiane", amount: 60, unit: "g" },
          { name: "Baton Kinder Bueno", amount: 22, unit: "g" },
          { name: "Orzechy laskowe", amount: 10, unit: "g" },
          { name: "Czekolada gorzka", amount: 6, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "BUŁKA Z SZYNKĄ I PAPRYKĄ",
        ingredients: [
          { name: "Bułka pełnoziarnista", amount: 80, unit: "g" },
          { name: "Papryka czerwona", amount: 70, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 60, unit: "g" },
          { name: "Masło ekstra", amount: 5, unit: "g" },
          { name: "Banan", amount: 120, unit: "g" },
        ],
      },
      lunch: {
        name: "DOMOWY ZDROWSZY BIG MAC",
        ingredients: [
          { name: "Mięso mielone wołowe", amount: 200, unit: "g" },
          { name: "Majonez light", amount: 30, unit: "g" },
          { name: "Jogurt naturalny (proteinowy)", amount: 30, unit: "g" },
          { name: "Keczup", amount: 5, unit: "g" },
          { name: "Musztarda", amount: 5, unit: "g" },
          { name: "Ryż brązowy", amount: 60, unit: "g" },
          { name: "Sałata", amount: 50, unit: "g" },
          { name: "Pomidory koktajlowe", amount: 40, unit: "g" },
          { name: "Cebula", amount: 20, unit: "g" },
        ],
      },
      dinner: {
        name: "ZAPIEKANKI Z PIECZARKAMI",
        ingredients: [
          { name: "Chleb graham", amount: 120, unit: "g" },
          { name: "Ogórki, kiszone", amount: 120, unit: "g" },
          { name: "Pieczarka uprawna, świeża", amount: 80, unit: "g" },
          { name: "Ser, gouda tłusty", amount: 60, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 60, unit: "g" },
          { name: "Keczup", amount: 15, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "OWSIANKA Z KINDER BUENO I TRUSKAWKAMI",
        ingredients: [
          { name: "Mleko spożywcze, 1,5% tłuszczu", amount: 150, unit: "g" },
          { name: "Truskawki", amount: 150, unit: "g" },
          { name: "Płatki owsiane", amount: 50, unit: "g" },
          { name: "Baton Kinder Bueno", amount: 22, unit: "g" },
          { name: "Orzechy laskowe", amount: 5, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "BUŁKA Z SZYNKĄ I OGÓRKIEM",
        ingredients: [
          { name: "Bułka pełnoziarnista", amount: 80, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 60, unit: "g" },
          { name: "Ogórki, kiszone", amount: 60, unit: "g" },
          { name: "Masło ekstra", amount: 5, unit: "g" },
          { name: "Jabłko", amount: 150, unit: "g" },
        ],
      },
      lunch: {
        name: "DOMOWY ZDROWSZY BIG MAC",
        ingredients: [
          { name: "Mięso mielone wołowe", amount: 200, unit: "g" },
          { name: "Majonez light", amount: 30, unit: "g" },
          { name: "Jogurt naturalny (proteinowy)", amount: 30, unit: "g" },
          { name: "Keczup", amount: 5, unit: "g" },
          { name: "Musztarda", amount: 5, unit: "g" },
          { name: "Ryż brązowy", amount: 60, unit: "g" },
          { name: "Sałata", amount: 50, unit: "g" },
          { name: "Pomidory koktajlowe", amount: 40, unit: "g" },
          { name: "Cebula", amount: 20, unit: "g" },
        ],
      },
      dinner: {
        name: "ZAPIEKANKI Z PIECZARKAMI",
        ingredients: [
          { name: "Chleb graham", amount: 120, unit: "g" },
          { name: "Ogórki, kiszone", amount: 120, unit: "g" },
          { name: "Pieczarka uprawna, świeża", amount: 80, unit: "g" },
          { name: "Ser, gouda tłusty", amount: 30, unit: "g" },
          { name: "Szynka z piersi kurczaka", amount: 30, unit: "g" },
          { name: "Keczup", amount: 15, unit: "g" },
        ],
      },
    },
  },
  saturday: {
    filip: {
      breakfast: {
        name: "GRZANKI Z GUACAMOLE I JAJKIEM SADZONYM",
        ingredients: [
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Jaja kurze całe", amount: 112, unit: "g" },
          { name: "Awokado", amount: 50, unit: "g" },
          { name: "Cebula czerwona", amount: 20, unit: "g" },
          { name: "Masło ekstra", amount: 2, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "FIT TIRAMISU",
        ingredients: [
          { name: "Skyr naturalny", amount: 150, unit: "g" },
          { name: "Kawa, napar bez cukru", amount: 100, unit: "g" },
          { name: "Biszkopty", amount: 75, unit: "g" },
          { name: "Miód pszczeli", amount: 15, unit: "g" },
          { name: "Kakao 16%, proszek", amount: 2, unit: "g" },
        ],
      },
      lunch: {
        name: "KOTLET Z PIERSI KURCZAKA Z ZIEMNIAKAMI I MIZERIĄ",
        ingredients: [
          { name: "Ziemniaki", amount: 280, unit: "g" },
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 180,
            unit: "g",
          },
          { name: "Ogórek", amount: 120, unit: "g" },
          { name: "Jogurt naturalny", amount: 40, unit: "g" },
          { name: "Jaja kurze całe", amount: 20, unit: "g" },
          { name: "Olej rzepakowy", amount: 10, unit: "g" },
          { name: "Bułka tarta", amount: 8, unit: "g" },
          { name: "Mąka pszenna, typ 500", amount: 6, unit: "g" },
        ],
      },
      dinner: {
        name: "DOMOWY MCMUFFIN",
        ingredients: [
          { name: "Mięso mielone wołowe", amount: 120, unit: "g" },
          { name: "Jaja kurze całe", amount: 56, unit: "g" },
          { name: "Ser, gouda tłusty", amount: 15, unit: "g" },
          { name: "Pomidor", amount: 20, unit: "g" },
          { name: "Bułka pełnoziarnista", amount: 40, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "GRZANKI Z GUACAMOLE I JAJKIEM SADZONYM",
        ingredients: [
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Jaja kurze całe", amount: 112, unit: "g" },
          { name: "Chleb żytni jasny", amount: 75, unit: "g" },
          { name: "Awokado", amount: 40, unit: "g" },
          { name: "Cebula czerwona", amount: 20, unit: "g" },
          { name: "Masło ekstra", amount: 2, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "FIT TIRAMISU",
        ingredients: [
          { name: "Skyr naturalny", amount: 150, unit: "g" },
          { name: "Kawa, napar bez cukru", amount: 100, unit: "g" },
          { name: "Biszkopty", amount: 60, unit: "g" },
          { name: "Miód pszczeli", amount: 15, unit: "g" },
          { name: "Kakao 16%, proszek", amount: 2, unit: "g" },
        ],
      },
      lunch: {
        name: "KOTLET Z PIERSI KURCZAKA Z ZIEMNIAKAMI I MIZERIĄ",
        ingredients: [
          { name: "Ziemniaki", amount: 280, unit: "g" },
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 180,
            unit: "g",
          },
          { name: "Ogórek", amount: 120, unit: "g" },
          { name: "Jogurt naturalny", amount: 40, unit: "g" },
          { name: "Jaja kurze całe", amount: 20, unit: "g" },
          { name: "Olej rzepakowy", amount: 10, unit: "g" },
          { name: "Bułka tarta", amount: 8, unit: "g" },
          { name: "Mąka pszenna, typ 500", amount: 6, unit: "g" },
        ],
      },
      dinner: {
        name: "DOMOWY MCMUFFIN",
        ingredients: [
          { name: "Mięso mielone wołowe", amount: 120, unit: "g" },
          { name: "Jaja kurze całe", amount: 56, unit: "g" },
          { name: "Ser, gouda tłusty", amount: 15, unit: "g" },
          { name: "Pomidor", amount: 20, unit: "g" },
          { name: "Bułka pełnoziarnista", amount: 40, unit: "g" },
        ],
      },
    },
  },
  sunday: {
    filip: {
      breakfast: {
        name: "JAJECZNICA Z WARZYWNĄ SAŁATKĄ",
        ingredients: [
          { name: "Jaja kurze całe", amount: 168, unit: "g" },
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Pomidory koktajlowe", amount: 80, unit: "g" },
          { name: "Ogórek", amount: 40, unit: "g" },
          { name: "Sałata", amount: 20, unit: "g" },
          { name: "Masło ekstra", amount: 5, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "TRUSKAWKOWY SERNIK NA ZIMNO",
        ingredients: [
          { name: "Skyr naturalny", amount: 60, unit: "g" },
          { name: "Ser twarogowy chudy", amount: 40, unit: "g" },
          { name: "Truskawki", amount: 40, unit: "g" },
          { name: "Galaretka owocowa (w proszku)", amount: 22.4, unit: "g" },
          { name: "Płatki owsiane", amount: 20, unit: "g" },
          { name: "Miód pszczeli", amount: 10, unit: "g" },
          { name: "Czekolada gorzka", amount: 12.4, unit: "g" },
          { name: "Olej rzepakowy", amount: 4, unit: "g" },
        ],
      },
      lunch: {
        name: "FILET Z KURCZAKA ZAPIEKANY Z MOZZARELLĄ I FRYTKAMI",
        ingredients: [
          { name: "Ziemniaki", amount: 280, unit: "g" },
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 180,
            unit: "g",
          },
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Ser mozzarella, light", amount: 62.5, unit: "g" },
          { name: "Olej rzepakowy", amount: 10, unit: "g" },
          { name: "Bazylia (suszona)", amount: 2, unit: "g" },
          { name: "Pieprz czarny mielony", amount: 1, unit: "g" },
          { name: "Sól biała", amount: 1, unit: "g" },
        ],
      },
      dinner: {
        name: "DOMOWY KEBAB Z KURCZAKIEM",
        ingredients: [
          { name: "Pomidory koktajlowe", amount: 200, unit: "g" },
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 180,
            unit: "g",
          },
          { name: "Tortilla pełnoziarnista", amount: 91.5, unit: "g" },
          { name: "Jogurt naturalny", amount: 80, unit: "g" },
          { name: "Ogórek", amount: 80, unit: "g" },
          { name: "Sałata", amount: 20, unit: "g" },
          { name: "Czosnek", amount: 3, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "JAJECZNICA Z WARZYWNĄ SAŁATKĄ",
        ingredients: [
          { name: "Jaja kurze całe", amount: 168, unit: "g" },
          { name: "Pomidory koktajlowe", amount: 80, unit: "g" },
          { name: "Chleb żytni jasny", amount: 75, unit: "g" },
          { name: "Ogórek", amount: 40, unit: "g" },
          { name: "Sałata", amount: 20, unit: "g" },
          { name: "Masło ekstra", amount: 5, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "TRUSKAWKOWY SERNIK NA ZIMNO",
        ingredients: [
          { name: "Skyr naturalny", amount: 60, unit: "g" },
          { name: "Ser twarogowy chudy", amount: 40, unit: "g" },
          { name: "Truskawki", amount: 40, unit: "g" },
          { name: "Galaretka owocowa (w proszku)", amount: 22.4, unit: "g" },
          { name: "Płatki owsiane", amount: 20, unit: "g" },
          { name: "Miód pszczeli", amount: 10, unit: "g" },
          { name: "Czekolada gorzka", amount: 10, unit: "g" },
          { name: "Olej rzepakowy", amount: 4, unit: "g" },
        ],
      },
      lunch: {
        name: "FILET Z KURCZAKA ZAPIEKANY Z SEREM I FRYTKAMI",
        ingredients: [
          { name: "Ziemniaki", amount: 280, unit: "g" },
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 180,
            unit: "g",
          },
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Ser, gouda tłusty", amount: 30, unit: "g" },
          { name: "Olej rzepakowy", amount: 10, unit: "g" },
          { name: "Bazylia (suszona)", amount: 2, unit: "g" },
          { name: "Pieprz czarny mielony", amount: 1, unit: "g" },
          { name: "Sól biała", amount: 1, unit: "g" },
        ],
      },
      dinner: {
        name: "DOMOWY KEBAB Z KURCZAKIEM",
        ingredients: [
          { name: "Pomidory koktajlowe", amount: 200, unit: "g" },
          {
            name: "Mięso z piersi kurczaka, bez skóry",
            amount: 160,
            unit: "g",
          },
          { name: "Jogurt naturalny", amount: 80, unit: "g" },
          { name: "Ogórek", amount: 80, unit: "g" },
          { name: "Tortilla pełnoziarnista", amount: 61, unit: "g" },
          { name: "Sałata", amount: 20, unit: "g" },
          { name: "Czosnek", amount: 3, unit: "g" },
        ],
      },
    },
  },
};
