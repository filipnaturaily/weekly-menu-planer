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

// Actual menu data
export const weeklyMenu: Record<string, PersonMeals> = {
  monday: {
    filip: {
      breakfast: {
        name: 'Oatmeal with fruits',
        ingredients: [
          { name: 'Oats', amount: 60, unit: 'g' },
          { name: 'Milk', amount: 200, unit: 'ml' },
          { name: 'Banana', amount: 1, unit: 'pc' },
          { name: 'Blueberries', amount: 50, unit: 'g' },
          { name: 'Honey', amount: 10, unit: 'g' },
        ],
      },
      secondBreakfast: {
        name: 'Greek yogurt with nuts',
        ingredients: [
          { name: 'Greek yogurt', amount: 150, unit: 'g' },
          { name: 'Almonds', amount: 30, unit: 'g' },
          { name: 'Honey', amount: 10, unit: 'g' },
        ],
      },
      lunch: {
        name: 'Chicken with vegetables',
        ingredients: [
          { name: 'Chicken breast', amount: 200, unit: 'g' },
          { name: 'Broccoli', amount: 100, unit: 'g' },
          { name: 'Carrot', amount: 1, unit: 'pc' },
          { name: 'Olive oil', amount: 15, unit: 'ml' },
          { name: 'Rice', amount: 80, unit: 'g' },
        ],
      },
      dinner: {
        name: 'Salmon with sweet potato',
        ingredients: [
          { name: 'Salmon fillet', amount: 150, unit: 'g' },
          { name: 'Sweet potato', amount: 200, unit: 'g' },
          { name: 'Spinach', amount: 50, unit: 'g' },
          { name: 'Olive oil', amount: 10, unit: 'ml' },
        ],
      },
    },
    agata: {
      breakfast: {
        name: 'Avocado toast',
        ingredients: [
          { name: 'Whole grain bread', amount: 2, unit: 'slice' },
          { name: 'Avocado', amount: 0.5, unit: 'pc' },
          { name: 'Eggs', amount: 2, unit: 'pc' },
          { name: 'Cherry tomatoes', amount: 4, unit: 'pc' },
        ],
      },
      secondBreakfast: {
        name: 'Fruit salad',
        ingredients: [
          { name: 'Apple', amount: 1, unit: 'pc' },
          { name: 'Orange', amount: 1, unit: 'pc' },
          { name: 'Grapes', amount: 50, unit: 'g' },
          { name: 'Yogurt', amount: 100, unit: 'g' },
        ],
      },
      lunch: {
        name: 'Quinoa bowl',
        ingredients: [
          { name: 'Quinoa', amount: 80, unit: 'g' },
          { name: 'Tofu', amount: 100, unit: 'g' },
          { name: 'Bell pepper', amount: 1, unit: 'pc' },
          { name: 'Cucumber', amount: 0.5, unit: 'pc' },
          { name: 'Olive oil', amount: 10, unit: 'ml' },
        ],
      },
      dinner: {
        name: 'Vegetable soup',
        ingredients: [
          { name: 'Potato', amount: 1, unit: 'pc' },
          { name: 'Carrot', amount: 1, unit: 'pc' },
          { name: 'Celery', amount: 1, unit: 'stalk' },
          { name: 'Onion', amount: 0.5, unit: 'pc' },
          { name: 'Vegetable stock', amount: 300, unit: 'ml' },
        ],
      },
    },
  },
  tuesday: {
    filip: {
      breakfast: {
        name: 'Scrambled eggs',
        ingredients: [
          { name: 'Eggs', amount: 3, unit: 'pc' },
          { name: 'Whole grain bread', amount: 2, unit: 'slice' },
          { name: 'Butter', amount: 10, unit: 'g' },
          { name: 'Spinach', amount: 30, unit: 'g' },
        ],
      },
      secondBreakfast: {
        name: 'Protein shake',
        ingredients: [
          { name: 'Protein powder', amount: 30, unit: 'g' },
          { name: 'Milk', amount: 250, unit: 'ml' },
          { name: 'Banana', amount: 1, unit: 'pc' },
          { name: 'Peanut butter', amount: 15, unit: 'g' },
        ],
      },
      lunch: {
        name: 'Beef stir fry',
        ingredients: [
          { name: 'Beef strips', amount: 180, unit: 'g' },
          { name: 'Bell pepper', amount: 1, unit: 'pc' },
          { name: 'Broccoli', amount: 100, unit: 'g' },
          { name: 'Soy sauce', amount: 15, unit: 'ml' },
          { name: 'Rice noodles', amount: 80, unit: 'g' },
        ],
      },
      dinner: {
        name: 'Turkey wraps',
        ingredients: [
          { name: 'Turkey slices', amount: 120, unit: 'g' },
          { name: 'Whole grain tortilla', amount: 2, unit: 'pc' },
          { name: 'Lettuce', amount: 30, unit: 'g' },
          { name: 'Tomato', amount: 1, unit: 'pc' },
          { name: 'Avocado', amount: 0.5, unit: 'pc' },
        ],
      },
    },
    agata: {
      // Add dishes for Agata on Tuesday
      // ...similar structure
      breakfast: {
        name: 'Chia pudding',
        ingredients: [
          { name: 'Chia seeds', amount: 30, unit: 'g' },
          { name: 'Almond milk', amount: 200, unit: 'ml' },
          { name: 'Blueberries', amount: 50, unit: 'g' },
          { name: 'Honey', amount: 10, unit: 'g' },
        ],
      },
      secondBreakfast: {
        name: 'Vegetable sticks with hummus',
        ingredients: [
          { name: 'Carrot', amount: 1, unit: 'pc' },
          { name: 'Cucumber', amount: 0.5, unit: 'pc' },
          { name: 'Hummus', amount: 50, unit: 'g' },
        ],
      },
      lunch: {
        name: 'Lentil salad',
        ingredients: [
          { name: 'Lentils', amount: 100, unit: 'g' },
          { name: 'Cherry tomatoes', amount: 100, unit: 'g' },
          { name: 'Feta cheese', amount: 50, unit: 'g' },
          { name: 'Cucumber', amount: 0.5, unit: 'pc' },
          { name: 'Olive oil', amount: 10, unit: 'ml' },
        ],
      },
      dinner: {
        name: 'Stuffed bell peppers',
        ingredients: [
          { name: 'Bell pepper', amount: 2, unit: 'pc' },
          { name: 'Quinoa', amount: 60, unit: 'g' },
          { name: 'Zucchini', amount: 0.5, unit: 'pc' },
          { name: 'Tomato sauce', amount: 100, unit: 'ml' },
          { name: 'Mozzarella', amount: 30, unit: 'g' },
        ],
      },
    },
  },
  // Continue with the rest of the week
  wednesday: {
    filip: {
      // Add dishes for Filip on Wednesday
      breakfast: {
        name: 'Protein pancakes',
        ingredients: [
          { name: 'Protein powder', amount: 30, unit: 'g' },
          { name: 'Oat flour', amount: 50, unit: 'g' },
          { name: 'Eggs', amount: 2, unit: 'pc' },
          { name: 'Banana', amount: 1, unit: 'pc' },
          { name: 'Maple syrup', amount: 15, unit: 'ml' },
        ],
      },
      secondBreakfast: {
        name: 'Cottage cheese with fruits',
        ingredients: [
          { name: 'Cottage cheese', amount: 150, unit: 'g' },
          { name: 'Pineapple', amount: 100, unit: 'g' },
          { name: 'Walnuts', amount: 15, unit: 'g' },
        ],
      },
      lunch: {
        name: 'Grilled chicken salad',
        ingredients: [
          { name: 'Chicken breast', amount: 180, unit: 'g' },
          { name: 'Mixed greens', amount: 80, unit: 'g' },
          { name: 'Cherry tomatoes', amount: 80, unit: 'g' },
          { name: 'Cucumber', amount: 0.5, unit: 'pc' },
          { name: 'Olive oil', amount: 10, unit: 'ml' },
          { name: 'Balsamic vinegar', amount: 5, unit: 'ml' },
        ],
      },
      dinner: {
        name: 'Fish tacos',
        ingredients: [
          { name: 'White fish fillet', amount: 150, unit: 'g' },
          { name: 'Corn tortilla', amount: 3, unit: 'pc' },
          { name: 'Cabbage', amount: 50, unit: 'g' },
          { name: 'Lime', amount: 0.5, unit: 'pc' },
          { name: 'Avocado', amount: 0.5, unit: 'pc' },
        ],
      },
    },
    agata: {
      // Add dishes for Agata on Wednesday
      breakfast: {
        name: 'Smoothie bowl',
        ingredients: [
          { name: 'Frozen mixed berries', amount: 150, unit: 'g' },
          { name: 'Banana', amount: 1, unit: 'pc' },
          { name: 'Almond milk', amount: 100, unit: 'ml' },
          { name: 'Granola', amount: 30, unit: 'g' },
        ],
      },
      secondBreakfast: {
        name: 'Rice cakes with nut butter',
        ingredients: [
          { name: 'Rice cakes', amount: 2, unit: 'pc' },
          { name: 'Almond butter', amount: 20, unit: 'g' },
          { name: 'Banana', amount: 0.5, unit: 'pc' },
        ],
      },
      lunch: {
        name: 'Buddha bowl',
        ingredients: [
          { name: 'Sweet potato', amount: 150, unit: 'g' },
          { name: 'Chickpeas', amount: 100, unit: 'g' },
          { name: 'Avocado', amount: 0.5, unit: 'pc' },
          { name: 'Kale', amount: 50, unit: 'g' },
          { name: 'Tahini', amount: 15, unit: 'g' },
        ],
      },
      dinner: {
        name: 'Mushroom risotto',
        ingredients: [
          { name: 'Arborio rice', amount: 80, unit: 'g' },
          { name: 'Mushrooms', amount: 150, unit: 'g' },
          { name: 'Onion', amount: 0.5, unit: 'pc' },
          { name: 'Vegetable stock', amount: 250, unit: 'ml' },
          { name: 'Parmesan cheese', amount: 20, unit: 'g' },
        ],
      },
    },
  },
  // Add remaining days with similar structure
};
