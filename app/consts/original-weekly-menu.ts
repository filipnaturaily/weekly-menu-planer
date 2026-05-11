import type { WeeklyMenu } from "~/types/weekly-menu-types";

export const originalWeeklyMenu: WeeklyMenu = {
  monday: {
    filip: {
      breakfast: {
        name: "KANAPKI Z PASTĄ Z AWOKADO I JAJKA",
        ingredients: [
          { name: "Jajko - L", amount: 2, unit: "szt" },
          { name: "Chleb żytni", amount: 120, unit: "g" },
          { name: "Kiełki", amount: 10, unit: "g" },
          { name: "Awokado", amount: 100, unit: "g" },
          { name: "Sok z cytryny", amount: 10, unit: "g" },
          { name: "Czosnek", amount: 5, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "KOKTAJL Z OWOCAMI",
        ingredients: [
          { name: "Skyr naturalny pitny", amount: 330, unit: "g" },
          { name: "Orzechy", amount: 20, unit: "g" },
          { name: "Borówki lub maliny", amount: 50, unit: "g" },
          { name: "Banan", amount: 150, unit: "g" },
        ],
      },
      lunch: {
        name: "PENNE Z PESTO I KURCZAKIEM",
        ingredients: [
          { name: "Filet z kurczaka", amount: 100, unit: "g" },
          { name: "Makaron penne pełnoziarnisty", amount: 80, unit: "g" },
          { name: "Pesto zielone", amount: 40, unit: "g" },
        ],
      },
      dinner: {
        name: "SAŁATKA I KANAPKI Z PASTĄ JAJECZNĄ",
        ingredients: [
          { name: "Pomidorki koktajlowe", amount: 60, unit: "g" },
          { name: "Rukola", amount: 10, unit: "g" },
          { name: "Cebula", amount: 10, unit: "g" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Pestki dyni", amount: 5, unit: "g" },
          { name: "Jajko - L", amount: 1, unit: "szt" },
          { name: "Majonez wege", amount: 10, unit: "g" },
          { name: "Szczypiorek", amount: 5, unit: "g" },
          { name: "Kiełki", amount: 5, unit: "g" },
          { name: "Chleb żytni", amount: 80, unit: "g" },
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
          { name: "Borówki lub maliny", amount: 50, unit: "g" },
          { name: "Cynamon", amount: 8, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "SAŁATKA Z MOZZARELLĄ",
        ingredients: [
          {
            name: "Warzywa zielonolistne (mix sałat, sałata lub rukola, liście szpinaku, roszponka)",
            amount: 0,
            unit: "g",
          },
          { name: "Pomidorki koktajlowe", amount: 7, unit: "szt" },
          { name: "Oliwki", amount: 10, unit: "szt" },
          { name: "Ogórek zielony", amount: 10, unit: "plasterki" },
          { name: "Cebula", amount: 1, unit: "plasterki" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Ser mozzarella", amount: 50, unit: "g" },
          { name: "Pestki dyni", amount: 10, unit: "g" },
        ],
      },
      lunch: {
        name: "PENNE Z PESTO I KURCZAKIEM",
        ingredients: [
          { name: "Filet z kurczaka", amount: 150, unit: "g" },
          { name: "Makaron razowy penne", amount: 60, unit: "g" },
          { name: "Pesto zielone", amount: 2, unit: "łyżki" },
          {
            name: "Natka pietruszki",
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
          { name: "Cebula", amount: 1, unit: "plasterek" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Pestki dyni", amount: 5, unit: "g" },
          { name: "Jajko - L", amount: 1, unit: "szt" },
          { name: "Majonez wege", amount: 10, unit: "g" },
          { name: "Szczypiorek", amount: 5, unit: "g" },
          { name: "Kiełki", amount: 5, unit: "g" },
          {
            name: "Chleb żytni",
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
        name: "KANAPKI Z HUMUSEM I AWOKADO",
        ingredients: [
          { name: "Chleb żytni", amount: 120, unit: "g" },
          { name: "Humus", amount: 45, unit: "g" },
          { name: "Kiełki", amount: 10, unit: "g" },
          { name: "Awokado", amount: 80, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "ZIELONY KOKTAJL",
        ingredients: [
          { name: "Szpinak", amount: 10, unit: "g" },
          { name: "Banan", amount: 150, unit: "g" },
          { name: "Jogurt naturalny", amount: 350, unit: "g" },
          { name: "Orzechy", amount: 40, unit: "g" },
        ],
      },
      lunch: {
        name: "ŁOSOŚ PIECZONY Z DIPEM MUSZTARDOWYM",
        ingredients: [
          { name: "Łosoś", amount: 150, unit: "g" },
          {
            name: "Jogurt naturalny",
            amount: 60,
            unit: "g",
          },
          { name: "Ryż dziki", amount: 80, unit: "g" },
          { name: "Pomidorki koktajlowe", amount: 75, unit: "g" },
          { name: "Sałata", amount: 75, unit: "g" },
          { name: "Ogórek zielony", amount: 75, unit: "g" },
        ],
      },
      dinner: {
        name: "POMIDORY Z MOZZARELLĄ I PIECZYWEM",
        ingredients: [
          { name: "Mozzarella", amount: 100, unit: "g" },
          { name: "Pomidor", amount: 150, unit: "g" },
          { name: "Oliwa z oliwek", amount: 10, unit: "g" },
          { name: "Sałata", amount: 20, unit: "g" },
          { name: "Chleb żytni", amount: 40, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "SKYR Z OWOCAMI",
        ingredients: [
          { name: "Skyr naturalny", amount: 200, unit: "g" },
          { name: "Borówki lub maliny", amount: 50, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          {
            name: "Wiórki gorzkiej czekolady min. 90% kakao",
            amount: 5,
            unit: "g",
          },
          { name: "Orzechy brazylijskie", amount: 2, unit: "szt" },
        ],
      },
      secondBreakfast: {
        name: "SAŁATKA Z KASZĄ BULGUR",
        ingredients: [
          { name: "Kasza kuskus", amount: 50, unit: "g" },
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
          { name: "Chleb żytni", amount: 80, unit: "g" },
          { name: "Humus", amount: 20, unit: "g" },
          { name: "Szczypiorek", amount: 10, unit: "g" },
          { name: "Kiełki", amount: 10, unit: "g" },
          { name: "Pomidor", amount: 10, unit: "g" },
          { name: "Ogórek zielony", amount: 10, unit: "g" },
          { name: "Awokado", amount: 80, unit: "g" },
        ],
      },
    },
  },
  wednesday: {
    filip: {
      breakfast: {
        name: "SAŁATKA Z JAJKIEM I PIECZYWEM",
        ingredients: [
          { name: "Jajko - L", amount: 2, unit: "szt" },
          { name: "Rukola", amount: 10, unit: "g" },
          { name: "Ser feta", amount: 50, unit: "g" },
          { name: "Oliwki", amount: 30, unit: "g" },
          { name: "Ogórek zielony", amount: 50, unit: "g" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Pestki dyni", amount: 5, unit: "g" },
          { name: "Chleb żytni", amount: 80, unit: "g" },
          { name: "Humus", amount: 5, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "JOGURT Z OWOCAMI",
        ingredients: [
          { name: "Jogurt naturalny", amount: 350, unit: "g" },
          { name: "Borówki lub maliny", amount: 50, unit: "g" },
          { name: "Płatki migdałowe", amount: 20, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          {
            name: "Wiórki gorzkiej czekolady min. 90% kakao",
            amount: 5,
            unit: "g",
          },
        ],
      },
      lunch: {
        name: "CUKINIA Z WARZYWAMI I RYŻEM",
        ingredients: [
          {
            name: "Cukinia",
            amount: 200,
            unit: "g",
          },
          { name: "Cebula", amount: 10, unit: "g" },
          { name: "Czosnek", amount: 5, unit: "g" },
          { name: "Pomidor", amount: 150, unit: "g" },
          { name: "Oliwki", amount: 30, unit: "g" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Zioła włoskie", amount: 5, unit: "g" },
          { name: "Ryż dziki", amount: 70, unit: "g" },
        ],
      },
      dinner: {
        name: "KANAPKI Z PASTĄ WARZYWNĄ I SERKIEM WIEJSKIM",
        ingredients: [
          { name: "Chleb żytni", amount: 80, unit: "g" },
          { name: "Humus", amount: 40, unit: "g" },
          { name: "Kiełki", amount: 10, unit: "g" },
          { name: "Serek wiejski", amount: 200, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "JOGURT Z OWOCAMI I ORZECHAMI",
        ingredients: [
          { name: "Skyr naturalny", amount: 250, unit: "g" },
          { name: "Borówki lub maliny", amount: 50, unit: "g" },
          { name: "Płatki migdałowe", amount: 10, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          {
            name: "Wiórki gorzkiej czekolady min. 90% kakao",
            amount: 5,
            unit: "g",
          },
          { name: "Orzechy", amount: 20, unit: "g" },
          { name: "Orzechy brazylijskie", amount: 2, unit: "szt" },
        ],
      },
      secondBreakfast: {
        name: "SAŁATKA Z JAJKIEM I PIECZYWEM",
        ingredients: [
          { name: "Jajko - L", amount: 1, unit: "szt" },
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
            name: "Chleb żytni",
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
          {
            name: "Warzywa zielonolistne (mix sałat, sałata lub rukola, liście szpinaku, roszponka)",
            amount: 1,
            unit: "garść",
          },
          { name: "Cebula", amount: 1, unit: "plaster" },
          { name: "Pomidorki koktajlowe", amount: 5, unit: "szt" },
          { name: "Chleb żytni", amount: 35, unit: "g" },
        ],
      },
    },
  },
  thursday: {
    filip: {
      breakfast: {
        name: "KANAPKA Z JAJKIEM, PIECZYWO Z SERKIEM I AWOKADO",
        ingredients: [
          { name: "Jajko - L", amount: 1, unit: "szt" },
          { name: "Chleb żytni", amount: 120, unit: "g" },
          { name: "Serek śmietankowy", amount: 30, unit: "g" },
          { name: "Awokado", amount: 100, unit: "g" },
          { name: "Pomidor", amount: 150, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "KOKTAJL Z BANANEM, AWOKADO I SZPINAKIEM",
        ingredients: [
          { name: "Jogurt naturalny", amount: 350, unit: "g" },
          { name: "Banan", amount: 150, unit: "g" },
          { name: "Awokado", amount: 30, unit: "g" },
          { name: "Szpinak", amount: 10, unit: "g" },
          { name: "Orzechy", amount: 30, unit: "g" },
        ],
      },
      lunch: {
        name: "KURCZAK Z MARCHEWKĄ",
        ingredients: [
          { name: "Filet z kurczaka", amount: 200, unit: "g" },
          { name: "Ziemniaki", amount: 200, unit: "g" },
          { name: "Oliwa z oliwek", amount: 15, unit: "g" },
          { name: "Marchewka", amount: 90, unit: "g" },
          { name: "Masło", amount: 5, unit: "g" },
          { name: "Oregano", amount: 5, unit: "g" },
          { name: "Bazylia", amount: 5, unit: "g" },
        ],
      },
      dinner: {
        name: "SEREK WIEJSKI Z WARZYWAMI",
        ingredients: [
          { name: "Serek wiejski", amount: 200, unit: "g" },
          { name: "Szczypiorek", amount: 10, unit: "g" },
          { name: "Chleb żytni", amount: 40, unit: "g" },
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
            name: "Orzechy",
            amount: 20,
            unit: "g",
          },
          { name: "Orzechy brazylijskie", amount: 2, unit: "szt" },
          { name: "Borówki lub maliny", amount: 50, unit: "g" },
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
            name: "Warzywa zielonolistne (mix sałat, sałata lub rukola, liście szpinaku, roszponka)",
            amount: 10,
            unit: "g",
          },
          { name: "Chleb żytni", amount: 35, unit: "g" },
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
            name: "Chleb żytni",
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
        name: "KANPAKI Z PASTĄ WARZYWNĄ I OGÓRKIEM",
        ingredients: [
          { name: "Chleb żytni", amount: 80, unit: "g" },
          { name: "Humus", amount: 40, unit: "g" },
          { name: "Pomidor", amount: 150, unit: "g" },
          { name: "Ogórek zielony", amount: 40, unit: "g" },
          { name: "Jogurt naturalny", amount: 100, unit: "g" },
          { name: "Kiełki", amount: 10, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "KOKTAJL KAKAOWY",
        ingredients: [
          { name: "Skyr naturalny pitny", amount: 330, unit: "g" },
          { name: "Kakao", amount: 10, unit: "g" },
          { name: "Banan", amount: 200, unit: "g" },
          { name: "Płatki migdałowe", amount: 10, unit: "g" },
          { name: "Orzechy", amount: 30, unit: "g" },
        ],
      },
      lunch: {
        name: "MAKARON Z POMIDORAMI, KURCZAKIEM I CUKINIĄ",
        ingredients: [
          { name: "Makaron spaghetti pełnoziarnisty", amount: 90, unit: "g" },
          { name: "Oliwa z oliwek", amount: 10, unit: "g" },
          { name: "Pomidory z puszki", amount: 200, unit: "g" },
          { name: "Filet z kurczaka", amount: 100, unit: "g" },
          { name: "Cukinia", amount: 200, unit: "g" },
          { name: "Czosnek", amount: 5, unit: "g" },
          { name: "Sałata", amount: 50, unit: "g" },
        ],
      },
      dinner: {
        name: "Omlet z oliwkami",
        ingredients: [
          { name: "Jajko - L", amount: 2, unit: "szt" },
          { name: "Płatki owsiane", amount: 20, unit: "g" },
          { name: "Oliwki", amount: 25, unit: "g" },
          { name: "Ser feta", amount: 30, unit: "g" },
          { name: "Szpinak", amount: 10, unit: "g" },
          { name: "Pomidorki koktajlowe", amount: 60, unit: "g" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
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
          { name: "Chleb żytni", amount: 70, unit: "g" },
          {
            name: "Warzywa zielonolistne (mix sałat, sałata lub rukola, liście szpinaku, roszponka)",
            amount: 5,
            unit: "g",
          },
        ],
      },
      secondBreakfast: {
        name: "KOKTAJL KAKAOWY I ORZECHY",
        ingredients: [
          { name: "Skyr naturalny pitny", amount: 330, unit: "g" },
          { name: "Kakao gorzkie", amount: 5, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          { name: "Czekolada gorzka", amount: 10, unit: "g" },
          { name: "Płatki migdałowe", amount: 10, unit: "g" },
          { name: "Orzechy", amount: 20, unit: "g" },
          { name: "Orzechy brazylijskie", amount: 2, unit: "szt" },
        ],
      },
      lunch: {
        name: "MAKARON Z POMIDORAMI SUSZONYMI Z KURCZAKIEM I CUKINIĄ",
        ingredients: [
          { name: "Makaron razowy penne", amount: 60, unit: "g" },
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
          { name: "Chleb żytni", amount: 70, unit: "g" },
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
        name: "KANAPKI Z HUMUSEM I CZARNUSZKĄ",
        ingredients: [
          { name: "Chleb żytni", amount: 120, unit: "g" },
          { name: "Humus", amount: 45, unit: "g" },
          { name: "Czarnuszka", amount: 10, unit: "g" },
          { name: "Pomidor", amount: 150, unit: "g" },
          { name: "Awokado", amount: 100, unit: "g" },
          { name: "Jajko - L", amount: 1, unit: "szt" },
        ],
      },
      secondBreakfast: {
        name: "FIT TIRAMISU",
        ingredients: [
          { name: "Płatki owsiane", amount: 40, unit: "g" },
          { name: "Masło orzechowe", amount: 20, unit: "g" },
          { name: "Płatki migdałowe", amount: 10, unit: "g" },
          { name: "Borówki lub maliny", amount: 50, unit: "g" },
          { name: "Banan", amount: 150, unit: "g" },
          { name: "Cynamon", amount: 5, unit: "g" },
        ],
      },
      lunch: {
        name: "KURCZAK Z POMIDORKAMI",
        ingredients: [
          { name: "Filet z kurczaka", amount: 150, unit: "g" },
          {
            name: "Ziemniaki",
            amount: 300,
            unit: "g",
          },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Pomidor", amount: 150, unit: "g" },
          { name: "Oregano", amount: 5, unit: "g" },
          { name: "Bazylia", amount: 5, unit: "g" },
        ],
      },
      dinner: {
        name: "SAŁATKA Z MOZZARELLĄ I PIECZYWEM",
        ingredients: [
          { name: "Sałata", amount: 50, unit: "g" },
          { name: "Pomidorki koktajlowe", amount: 100, unit: "g" },
          { name: "Ogórek zielony", amount: 40, unit: "g" },
          { name: "Oliwa z oliwek", amount: 5, unit: "g" },
          { name: "Ser mozzarella", amount: 100, unit: "g" },
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
          { name: "Chleb żytni", amount: 35, unit: "g" },
          { name: "Humus", amount: 10, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "SAŁATKA Z KASZĄ BULGUR",
        ingredients: [
          { name: "Kasza bulgur", amount: 50, unit: "g" },
          { name: "Ogórek kiszony", amount: 2, unit: "szt" },
          { name: "Kukurydza", amount: 50, unit: "g" },
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
          { name: "Pomidorki koktajlowe", amount: 7, unit: "szt" },
          { name: "Zioła (oregano, bazylia)", amount: 20, unit: "g" },
          { name: "Pomarańcza", amount: 1, unit: "szt" },
        ],
      },
      dinner: {
        name: "KANAPKA Z JAJKIEM W KOSZULCE, AWOKADO",
        ingredients: [
          { name: "Jajko - L", amount: 1, unit: "szt" },
          { name: "Chleb żytni", amount: 70, unit: "g" },
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
        name: "SAŁATKA Z MOZZARELLĄ I PIECZYWEM",
        ingredients: [
          { name: "Sałata", amount: 50, unit: "g" },
          { name: "Pomidorki koktajlowe", amount: 100, unit: "g" },
          { name: "Szczypiorek", amount: 10, unit: "g" },
          { name: "Ogórek zielony", amount: 40, unit: "g" },
          { name: "Oliwki", amount: 5, unit: "szt" },
          { name: "Majonez wege", amount: 5, unit: "g" },
          { name: "Pestki dyni", amount: 5, unit: "g" },
          { name: "Ser mozzarella", amount: 40, unit: "g" },
          { name: "Chleb żytni", amount: 80, unit: "g" },
          { name: "Humus", amount: 5, unit: "g" },
        ],
      },
      secondBreakfast: {
        name: "KOKTAJL Z BANANEM, OWOCAMI LEŚNYMI I ORZECHAMI",
        ingredients: [
          { name: "Jogurt naturalny", amount: 300, unit: "g" },
          { name: "Banan", amount: 200, unit: "g" },
          { name: "Borówki lub maliny", amount: 50, unit: "g" },
          { name: "Orzechy", amount: 40, unit: "g" },
        ],
      },
      lunch: {
        name: "MAKARON Z KREWETKAMI I SZPINAKIEM",
        ingredients: [
          { name: "Olej rzepakowy", amount: 20, unit: "g" },
          {
            name: "Czosnek",
            amount: 5,
            unit: "g",
          },
          { name: "Makaron penne pełnoziarnisty", amount: 80, unit: "g" },
          { name: "Krewetki", amount: 100, unit: "g" },
          { name: "Szpinak", amount: 20, unit: "g" },
        ],
      },
      dinner: {
        name: "KANAPKI Z PASTĄ WARZYWNĄ",
        ingredients: [
          { name: "Chleb żytni", amount: 80, unit: "g" },
          {
            name: "Humus",
            amount: 40,
            unit: "g",
          },
          { name: "Pomidor", amount: 150, unit: "g" },
          { name: "Cebula", amount: 10, unit: "g" },
          { name: "Awokado", amount: 100, unit: "g" },
        ],
      },
    },
    agata: {
      breakfast: {
        name: "KANAPKI Z SERKEM I SEREK WIEJSKI",
        ingredients: [
          { name: "Chleb żytni", amount: 70, unit: "g" },
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
          { name: "Skyr naturalny pitny", amount: 330, unit: "g" },
          { name: "Banan", amount: 100, unit: "g" },
          { name: "Borówki lub maliny", amount: 50, unit: "g" },
          { name: "Orzechy", amount: 20, unit: "g" },
          { name: "Orzechy brazylijskie", amount: 2, unit: "szt" },
        ],
      },
      lunch: {
        name: "KURCZAK Z MARCHEWKĄ",
        ingredients: [
          { name: "Filet z kurczaka", amount: 180, unit: "g" },
          { name: "Ziemniaki", amount: 200, unit: "g" },
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
