import type { WeeklyMenu } from "~/types/weekly-menu-types";

export const originalWeeklyMenu: WeeklyMenu = {
  monday: {
    filip: {
      breakfast: {
        name: "KANAPKI Z SEREM ŻÓŁTYM I POMIDOREM",
        ingredients: [
          { name: "Pomidor", amount: 120, unit: "g" },
          { name: "Chleb żytni jasny", amount: 120, unit: "g" },
          { name: "Ser, gouda tłusty", amount: 60, unit: "g" },
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
        name: "SKYR Z OWOCAMI",
        ingredients: [
          { name: "Skyr naturalny", amount: 200, unit: "g" },
          { name: "Płatki migdałowe", amount: 20, unit: "g" },
          { name: "Orzechy brazylijskie", amount: 2, unit: "szt" },
          { name: "Owoce (borówki, jagody)", amount: 50, unit: "g" },
          { name: "Cynamon", amount: 8, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "SAŁATKA Z MOZARELLĄ",
        ingredients: [
          {
            name: "Warzywa zielonolistne (mix sałat, sałata lub rukola, liście szpinaku, roszponka)",
            amount: 0,
            unit: "g",
          },
          { name: "Pomidorki koktajlowe", amount: 7, unit: "szt" },
          { name: "Oliwki", amount: 10, unit: "szt" },
          { name: "Ogórek zielony", amount: 10, unit: "plasterki" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Ser mozzarella", amount: 50, unit: "g" },
          { name: "Pestki dyni", amount: 10, unit: "g" },
        ],
      },
      lunch: {
        name: "PENNE Z PESTO I KURCZAKIEM",
        ingredients: [
          { name: "Pierś z kurczaka", amount: 150, unit: "g" },
          { name: "Makaron razowy penne", amount: 60, unit: "g" },
          { name: "Pesto zielone", amount: 2, unit: "łyżki" },
          {
            name: "Liście bazylii albo natka pietruszki",
            amount: 0,
            unit: "g",
          },
        ],
      },
      dinner: {
        name: "SAŁATKA + KANAPKI Z PASTĄ JAJECZNĄ",
        ingredients: [
          { name: "Pomidorki koktajlowe", amount: 7, unit: "szt" },
          { name: "Rukola", amount: 1, unit: "garść" },
          { name: "Cebula czerwona", amount: 1, unit: "plasterek" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Pestki dyni", amount: 5, unit: "g" },
          { name: "Jajko - L", amount: 1, unit: "szt" },
          { name: "Majonez wege", amount: 10, unit: "g" },
          { name: "Szczypiorek", amount: 5, unit: "g" },
          { name: "Kiełki", amount: 5, unit: "g" },
          {
            name: "Chleb żytni na zakwasie, gryczany, orkiszowy",
            amount: 70,
            unit: "g",
          },
          { name: "Sól", amount: 0, unit: "g" },
          { name: "Pieprz", amount: 0, unit: "g" },
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
        name: "SKYR Z OWOCAMI",
        ingredients: [
          { name: "Skyr naturalny", amount: 200, unit: "g" },
          { name: "Borówki", amount: 50, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          {
            name: "Wiórki gorzkiej czekolady min. 90% kakao",
            amount: 5,
            unit: "g",
          },
          { name: "Orzechy brazylijskie pokruszone", amount: 2, unit: "szt" },
        ],
      },
      secondBreakfast: {
        name: "SAŁATKA Z KASZĄ BULGUR",
        ingredients: [
          { name: "Kasza bulgur lub kuskus", amount: 50, unit: "g" },
          { name: "Pomidory suszone", amount: 30, unit: "g" },
          { name: "Natka pietruszki", amount: 2, unit: "łyżki" },
          { name: "Majonez wege", amount: 10, unit: "g" },
          { name: "Pestki dyni", amount: 5, unit: "g" },
          { name: "Czarnuszka", amount: 1, unit: "szczypta" },
        ],
      },
      lunch: {
        name: "ŁOSOŚ PIECZONY, WARZYWA, RYŻ",
        ingredients: [
          { name: "Łosoś", amount: 150, unit: "g" },
          {
            name: "Warzywa (dowolne np. rukola, rzodkiewka)",
            amount: 0,
            unit: "g",
          },
          { name: "Ryż dziki", amount: 50, unit: "g" },
          { name: "Rukola", amount: 50, unit: "g" },
          { name: "Rzodkiewka", amount: 50, unit: "g" },
          { name: "Kukurydza", amount: 50, unit: "g" },
          { name: "Majonez wege", amount: 5, unit: "g" },
        ],
      },
      dinner: {
        name: "KANAPKI Z SERKIEM I AWOKADO",
        ingredients: [
          { name: "Chleb graham lub żytni na zakwasie", amount: 80, unit: "g" },
          { name: "Humus", amount: 20, unit: "g" },
          { name: "Szczypiorek", amount: 10, unit: "g" },
          { name: "Kiełki", amount: 10, unit: "g" },
          { name: "Pomidor", amount: 10, unit: "g" },
          { name: "Ogórek", amount: 10, unit: "g" },
          { name: "Awokado", amount: 80, unit: "g" },
        ],
      },
    },
  },
  wednesday: {
    filip: {
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
        name: "JOGURT Z OWOCAMI I ORZECHAMI",
        ingredients: [
          { name: "Skry naturalny", amount: 250, unit: "g" },
          { name: "Owoce (borówki, maliny)", amount: 50, unit: "g" },
          { name: "Płatki migdałowe", amount: 10, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          {
            name: "Wiórki gorzkiej czekolady min. 90% kakao",
            amount: 5,
            unit: "g",
          },
        ],
      },
      secondBreakfast: {
        name: "SAŁATKA Z JAJKIEM I PIECZYWEM",
        ingredients: [
          { name: "Jajko - L ", amount: 1, unit: "szt" },
          {
            name: "Rukola lub inne warzywa zielonolistne",
            amount: 1,
            unit: "garść",
          },
          { name: "Oliwki", amount: 10, unit: "szt" },
          { name: "Ser feta", amount: 40, unit: "g" },
          { name: "Ogórek zielony", amount: 10, unit: "plasterki" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Pestki dyni", amount: 5, unit: "g" },
          {
            name: "Chleb orkiszowy lub żytni na zakwasie",
            amount: 40,
            unit: "g",
          },
        ],
      },
      lunch: {
        name: "KASZA GRYCZANA Z PIECZARKAMI I KURCZAKIEM",
        ingredients: [
          {
            name: "Kasza gryczana",
            amount: 70,
            unit: "g",
          },
          { name: "Filet z kurczaka", amount: 100, unit: "g" },
          { name: "Pieczarki", amount: 10, unit: "szt" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Natka pietruszki", amount: 10, unit: "g" },
        ],
      },
      dinner: {
        name: "ŁOSOŚ WĘDZONY Z PIECZYWEM",
        ingredients: [
          { name: "Łosoś wędzony", amount: 100, unit: "g" },
          { name: "Warzywa zielonolistne", amount: 1, unit: "garść" },
          { name: "Cebula", amount: 1, unit: "plaster" },
          { name: "Pomidorki koktajlowe", amount: 5, unit: "szt" },
          { name: "Chleb graham lub orkiszowy", amount: 35, unit: "g" },
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
        name: "PŁATKI OWSIANE Z OWOCAMI",
        ingredients: [
          { name: "Płatki owsiane", amount: 40, unit: "g" },
          { name: "Masło orzechowe", amount: 10, unit: "g" },
          {
            name: "Orzechy lub migdały (+ 2 orzechy brazylijskie)",
            amount: 20,
            unit: "g",
          },
          { name: "Owoce (maliny, jagody, borówki)", amount: 50, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          {
            name: "Wiórki gorzkiej czekolady min. 90% kakao",
            amount: 15,
            unit: "g",
          },
          { name: "Cynamon", amount: 1, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "POMIDORY Z MOZZARELLĄ",
        ingredients: [
          { name: "Ser mozzarella", amount: 100, unit: "g" },
          { name: "Pomidory", amount: 2, unit: "szt" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          {
            name: "Liście bazylii, warzywa zielonolistne",
            amount: 10,
            unit: "g",
          },
          { name: "Chleb orkiszowy", amount: 35, unit: "g" },
        ],
      },
      lunch: {
        name: "MINTAJ Z ZIEMNIAKAMI I WARZYWAMI",
        ingredients: [
          { name: "Mintaj", amount: 200, unit: "g" },
          { name: "Warzywa na patelnię", amount: 200, unit: "g" },
          { name: "Sok z cytryny", amount: 10, unit: "g" },
          { name: "Olej rzepakowy", amount: 1, unit: "łyżki" },
          { name: "Czosnek", amount: 0.5, unit: "szt" },
          { name: "Ziemniaki", amount: 200, unit: "g" },
        ],
      },
      dinner: {
        name: "SEREK WIEJSKI Z WARZYWAMI I PIECZYWEM",
        ingredients: [
          { name: "Serek wiejski", amount: 200, unit: "g" },
          {
            name: "Szczypiorek, rzodkiewka, kiełki roślin",
            amount: 20,
            unit: "g",
          },
          { name: "Sól", amount: 5, unit: "g" },
          { name: "Pieprz", amount: 5, unit: "g" },
          {
            name: "Chleb zytni na zakwasie, gryczany, orkiszowy",
            amount: 40,
            unit: "g",
          },
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
          { name: "Mięso mielone wołowe", amount: 150, unit: "g" },
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
        name: "JAJECZNICA Z POMIDRAMI NA OLIWIE I PIECZYWO",
        ingredients: [
          { name: "Jajko - S", amount: 2, unit: "szt" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Pomidor", amount: 0.5, unit: "szt" },
          { name: "Chleb graham lub orkiszowy", amount: 70, unit: "g" },
          { name: "Warzywa zielonolistne", amount: 5, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "KOKTAJL KAKAOWY I ORZECHY",
        ingredients: [
          { name: "Jogurt naturalny pitny", amount: 350, unit: "g" },
          { name: "Kakao gorzkie", amount: 5, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          { name: "Czekolada gorzka", amount: 10, unit: "g" },
          { name: "Płatki migdałowe", amount: 10, unit: "g" },
          {
            name: "Orzechy włoskie lub migdały + 2 orzechy brazylijskie",
            amount: 20,
            unit: "g",
          },
        ],
      },
      lunch: {
        name: "MAKARON Z POMIDORAMI SUSZONYMI Z KURCZAKIEM I CUKINIĄ",
        ingredients: [
          { name: "Makaron pełnoziarnisty", amount: 60, unit: "g" },
          { name: "Pomidory suszone", amount: 30, unit: "g" },
          { name: "Oliwa z oliwek", amount: 1, unit: "łyżki" },
          { name: "Pomidory z puszki", amount: 200, unit: "g" },
          { name: "Filet z kurczaka", amount: 150, unit: "g" },
          { name: "Cukinia", amount: 150, unit: "g" },
          { name: "Czosnek", amount: 10, unit: "g" },
          { name: "Zioła włoskie", amount: 10, unit: "g" },
          { name: "Sól", amount: 5, unit: "g" },
        ],
      },
      dinner: {
        name: "OGÓREK I KANAPKI Z PASTĄ WARZYWNĄ",
        ingredients: [
          { name: "Chleb graham lub żytni na zakwasie", amount: 70, unit: "g" },
          { name: "Humus", amount: 30, unit: "g" },
          { name: "Kiełki", amount: 20, unit: "g" },
          { name: "Ogórek zielony", amount: 8, unit: "plasterki" },
          { name: "Jogurt naturalny", amount: 8, unit: "łyżki" },
          { name: "Sól", amount: 5, unit: "g" },
          { name: "Pieprz", amount: 5, unit: "g" },
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
        name: "SEREK Z RZODKIEWKĄ, JAJKIEM I PIECZYWEM",
        ingredients: [
          { name: "Rzodkiewka", amount: 10, unit: "g" },
          { name: "Jajko - L", amount: 1, unit: "szt" },
          { name: "Serek wiejski", amount: 200, unit: "g" },
          {
            name: "Szczypiorek, kiełki lucerny lub czerwonej koniczyny",
            amount: 10,
            unit: "g",
          },
          { name: "Chleb żytni na zakwasie", amount: 35, unit: "g" },
          { name: "Humus", amount: 10, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "SAŁATKA Z KASZĄ BULGUR",
        ingredients: [
          { name: "Kasza bulgur", amount: 50, unit: "g" },
          { name: "Ogórek kiszony", amount: 2, unit: "szt" },
          { name: "Kukurydza konserwowa", amount: 50, unit: "g" },
          { name: "Natka pietruszki", amount: 2, unit: "łyżki" },
          { name: "Majonez wege", amount: 1, unit: "łyżki" },
        ],
      },
      lunch: {
        name: "KURCZAK Z POMIDORKAMI I OWOCAMI",
        ingredients: [
          { name: "Filet z kurczaka", amount: 180, unit: "g" },
          {
            name: "Ziemniaki",
            amount: 200,
            unit: "g",
          },
          { name: "Oliwa z oliwek", amount: 10, unit: "g" },
          { name: "Pomidorki", amount: 7, unit: "szt" },
          { name: "Zioła (oregano, bazylia)", amount: 20, unit: "g" },
          { name: "Pomarańcza", amount: 1, unit: "szt" },
        ],
      },
      dinner: {
        name: "KANAPKA Z JAJKIEM W KOSZULCE, AWOKADO",
        ingredients: [
          { name: "Jajko - L", amount: 1, unit: "szt" },
          { name: "Chleb graham lub orkiszowy", amount: 70, unit: "g" },
          { name: "Humus", amount: 20, unit: "g" },
          { name: "Awokado", amount: 80, unit: "g" },
          {
            name: "Dowolne warzywa (np. papryka, roszponka, ogórek, cebula)",
            amount: 40,
            unit: "g",
          },
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
        name: "OWSIANKA Z DUSZONYM JABŁKIEM I CYNAMONEM",
        ingredients: [
          { name: "Płatki owsiane", amount: 60, unit: "g" },
          { name: "Jabłko", amount: 263, unit: "g" },
          { name: "Cynamon", amount: 5, unit: "g" },
          { name: "Mleko spożywcze, 1,5% tłuszczu", amount: 400, unit: "g" },
          { name: "Orzechy włoskie", amount: 30, unit: "g" },
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
        name: "KANAPKI Z SERKEM I SEREK WIEJSKI",
        ingredients: [
          { name: "Chleb graham", amount: 70, unit: "g" },
          { name: "Humus", amount: 20, unit: "g" },
          {
            name: "Rzodkiewka, ogórek kiszony, szczypiorek lub kiełki roślin",
            amount: 1,
            unit: "szt",
          },
          { name: "Serek wiejski", amount: 200, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "KOKTAJL Z BANANEM I OWOCAMI LEŚNYMI I ORZECHAMI",
        ingredients: [
          { name: "Skyr pitny", amount: 330, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          { name: "Maliny lub borówki", amount: 50, unit: "g" },
          {
            name: "Orzechy włoskie lub migdały + 2 orzechy brazylijskie",
            amount: 20,
            unit: "g",
          },
        ],
      },
      lunch: {
        name: "KURCZAK Z MARCHEWKĄ",
        ingredients: [
          { name: "Filet z kurczaka", amount: 180, unit: "g" },
          {
            name: "Ziemniaki",
            amount: 200,
            unit: "g",
          },
          { name: "Olej rzepakowy", amount: 10, unit: "g" },
          { name: "Zioła (oregano, bazylia)", amount: 10, unit: "g" },
          { name: "Marchewka", amount: 2, unit: "szt" },
          { name: "Masło", amount: 5, unit: "g" },
        ],
      },
      dinner: {
        name: "SAŁATKA Z TUŃCZYKIEM I WARZYWAMI",
        ingredients: [
          { name: "Papryka czerwona", amount: 1, unit: "szt" },
          {
            name: "Tuńczyk w sosie własnym",
            amount: 50,
            unit: "g",
          },
          { name: "Natka pietruszki", amount: 2, unit: "łyżki" },
          { name: "Kukurydza", amount: 50, unit: "g" },
          { name: "Majonez wege", amount: 10, unit: "g" },
        ],
      },
    },
  },
};
