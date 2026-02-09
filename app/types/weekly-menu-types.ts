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

export type WeeklyMenu = Record<Day, PersonMeals>;
