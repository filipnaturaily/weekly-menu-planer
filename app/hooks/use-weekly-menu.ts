import { useState, useMemo } from "react";
import type { Day, Ingredient } from "~/types/weekly-menu-types";

interface Dish {
  name: string;
  ingredients: Ingredient[];
}

interface Meal {
  breakfast: Dish;
  secondBreakfast: Dish;
  lunch: Dish;
  dinner: Dish;
}

interface PersonMeals {
  filip: Meal;
  agata: Meal;
}

type WeeklyMenu = Record<Day, PersonMeals>;

export function useWeeklyMenu(
  weeklyMenu: WeeklyMenu,
  person: "filip" | "agata" | "both" = "both",
) {
  const days: Day[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const [selectedDays, setSelectedDays] = useState<Day[]>(["monday"]);
  const [multiplier, setMultiplier] = useState<number>(1);

  // Add state to track checked ingredients
  const [checkedIngredients, setCheckedIngredients] = useState<
    Record<string, boolean>
  >({});

  // Handle toggling ingredient checkbox
  const toggleIngredientCheck = (ingredientName: string) => {
    setCheckedIngredients((current) => ({
      ...current,
      [ingredientName]: !current[ingredientName],
    }));
  };

  // Handle multiplier input change
  const handleMultiplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMultiplier(value);
  };

  // Calculate total ingredients based on selected days and multiplier
  const totalIngredients = useMemo(() => {
    const ingredients: Record<string, { amount: number; unit: string }> = {};

    selectedDays.forEach((day) => {
      const dayMenu = weeklyMenu[day];

      // Process Filip's meals
      if (person === "filip" || person === "both") {
        Object.values(dayMenu.filip).forEach((meal) => {
          meal.ingredients.forEach((ingredient: Ingredient) => {
            if (!ingredients[ingredient.name]) {
              ingredients[ingredient.name] = {
                amount: 0,
                unit: ingredient.unit,
              };
            }
            ingredients[ingredient.name].amount +=
              ingredient.amount * multiplier;
          });
        });
      }

      // Process Agata's meals
      if (person === "agata" || person === "both") {
        Object.values(dayMenu.agata).forEach((meal) => {
          meal.ingredients.forEach((ingredient: Ingredient) => {
            if (!ingredients[ingredient.name]) {
              ingredients[ingredient.name] = {
                amount: 0,
                unit: ingredient.unit,
              };
            }
            ingredients[ingredient.name].amount +=
              ingredient.amount * multiplier;
          });
        });
      }
    });

    return ingredients;
  }, [selectedDays, multiplier, weeklyMenu, person]);

  // Toggle day selection
  const toggleDay = (day: Day) => {
    setSelectedDays((current) =>
      current.includes(day)
        ? current.filter((d) => d !== day)
        : [...current, day],
    );
  };

  const translateDays = (day: Day) => {
    switch (day) {
      case "monday":
        return "Poniedziałek";
      case "tuesday":
        return "Wtorek";
      case "wednesday":
        return "Środa";
      case "thursday":
        return "Czwartek";
      case "friday":
        return "Piątek";
      case "saturday":
        return "Sobota";
      case "sunday":
        return "Niedziela";
      default:
        return day;
    }
  };

  const translateMealType = (mealType: string) => {
    switch (mealType) {
      case "breakfast":
        return "Śniadanie";
      case "secondBreakfast":
        return "Drugie śniadanie";
      case "lunch":
        return "Obiad";
      case "dinner":
        return "Kolacja";
      default:
        return mealType;
    }
  };

  const handleDecreaseMultiplier = () => {
    if (isNaN(multiplier)) {
      return setMultiplier(1);
    }

    if (multiplier > 1) {
      setMultiplier((prev) => prev - 1);
    }
  };

  const handleIncreaseMultiplier = () => {
    if (isNaN(multiplier)) {
      return setMultiplier(1);
    }

    setMultiplier((prev) => prev + 1);
  };

  return {
    days,
    selectedDays,
    multiplier,
    checkedIngredients,
    totalIngredients,
    toggleDay,
    toggleIngredientCheck,
    handleMultiplierChange,
    translateDays,
    translateMealType,
    handleDecreaseMultiplier,
    handleIncreaseMultiplier,
  };
}
