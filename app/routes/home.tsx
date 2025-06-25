import type { Route } from './+types/home';
import { useState, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Checkbox } from '~/components/ui/checkbox';
import { weeklyMenu, type Day, type Ingredient } from '~/consts/weeklyMenu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { ScrollArea } from '~/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Tygodniowy planer menu' },
    {
      name: 'description',
      content:
        'Automatyczne generowanie listy zakupów na podstawie tygodniowego menu',
    },
  ];
}

export default function Home() {
  const days: Day[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  const [selectedDays, setSelectedDays] = useState<Day[]>([]);
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
    setMultiplier(isNaN(value) || value <= 0 ? 1 : value);
  };

  // Calculate total ingredients based on selected days and multiplier
  const totalIngredients = useMemo(() => {
    const ingredients: Record<string, { amount: number; unit: string }> = {};

    selectedDays.forEach((day) => {
      const dayMenu = weeklyMenu[day];

      // Process Filip's meals
      Object.values(dayMenu.filip).forEach((meal) => {
        meal.ingredients.forEach((ingredient: Ingredient) => {
          if (!ingredients[ingredient.name]) {
            ingredients[ingredient.name] = { amount: 0, unit: ingredient.unit };
          }
          ingredients[ingredient.name].amount += ingredient.amount * multiplier;
        });
      });

      // Process Agata's meals
      Object.values(dayMenu.agata).forEach((meal) => {
        meal.ingredients.forEach((ingredient: Ingredient) => {
          if (!ingredients[ingredient.name]) {
            ingredients[ingredient.name] = { amount: 0, unit: ingredient.unit };
          }
          ingredients[ingredient.name].amount += ingredient.amount * multiplier;
        });
      });
    });

    return ingredients;
  }, [selectedDays, multiplier]);

  // Toggle day selection
  const toggleDay = (day: Day) => {
    setSelectedDays((current) =>
      current.includes(day)
        ? current.filter((d) => d !== day)
        : [...current, day]
    );
  };

  const translateDays = (day: Day) => {
    switch (day) {
      case 'monday':
        return 'Poniedziałek';
      case 'tuesday':
        return 'Wtorek';
      case 'wednesday':
        return 'Środa';
      case 'thursday':
        return 'Czwartek';
      case 'friday':
        return 'Piątek';
      case 'saturday':
        return 'Sobota';
      case 'sunday':
        return 'Niedziela';
      default:
        return day;
    }
  };

  const translateMealType = (mealType: string) => {
    switch (mealType) {
      case 'breakfast':
        return 'Śniadanie';
      case 'secondBreakfast':
        return 'Drugie śniadanie';
      case 'lunch':
        return 'Obiad';
      case 'dinner':
        return 'Kolacja';
      default:
        return mealType;
    }
  };

  return (
    <div className='container mx-auto py-6 px-4'>
      <h1 className='text-3xl font-bold mb-6'>Tygodniowy planer menu</h1>

      {/* Day selection and multiplier */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Wybierz dni</CardTitle>
          <CardDescription>
            Wybierz dni, w które chcesz uwzględnić listę zakupów
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-6'>
            <div className='flex flex-wrap gap-4'>
              {days.map((day) => (
                <div key={day} className='flex items-center space-x-2'>
                  <Checkbox
                    id={day}
                    checked={selectedDays.includes(day)}
                    onCheckedChange={() => toggleDay(day)}
                  />
                  <label htmlFor={day} className='capitalize cursor-pointer'>
                    {translateDays(day)}
                  </label>
                </div>
              ))}
            </div>

            {/* Multiplier input */}
            <div className='flex items-center gap-4 max-w-xs'>
              <Label htmlFor='multiplier' className='whitespace-nowrap'>
                Mnożnik porcji:
              </Label>
              <Input
                id='multiplier'
                type='number'
                min='1'
                value={multiplier}
                onChange={handleMultiplierChange}
                className='w-24'
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly menu display */}
      {selectedDays.length > 0 && (
        <div className='space-y-6'>
          {selectedDays.map((day) => (
            <Card key={day} className='mb-6'>
              <CardHeader>
                <CardTitle className='capitalize'>
                  {translateDays(day)}
                </CardTitle>
                {multiplier > 1 && (
                  <CardDescription>
                    Wyświetlanie składników dla {multiplier} porcji
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <Tabs defaultValue='filip'>
                  <TabsList className='mb-4'>
                    <TabsTrigger value='filip'>Filip</TabsTrigger>
                    <TabsTrigger value='agata'>Agata</TabsTrigger>
                  </TabsList>

                  <TabsContent value='filip'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {Object.entries(weeklyMenu[day].filip).map(
                        ([mealType, meal]) => (
                          <Card key={mealType}>
                            <CardHeader>
                              <CardTitle className='capitalize text-lg'>
                                {translateMealType(mealType)}
                              </CardTitle>
                              <CardDescription>{meal.name}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <ul className='list-disc pl-5 space-y-1'>
                                {meal.ingredients.map(
                                  (ingredient: Ingredient, idx: number) => (
                                    <li key={idx}>
                                      {ingredient.name}:{' '}
                                      {ingredient.amount * multiplier}{' '}
                                      {ingredient.unit}
                                    </li>
                                  )
                                )}
                              </ul>
                            </CardContent>
                          </Card>
                        )
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value='agata'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {Object.entries(weeklyMenu[day].agata).map(
                        ([mealType, meal]) => (
                          <Card key={mealType}>
                            <CardHeader>
                              <CardTitle className='capitalize text-lg'>
                                {mealType}
                              </CardTitle>
                              <CardDescription>{meal.name}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <ul className='list-disc pl-5 space-y-1'>
                                {meal.ingredients.map(
                                  (ingredient: Ingredient, idx: number) => (
                                    <li key={idx}>
                                      {ingredient.name}:{' '}
                                      {ingredient.amount * multiplier}{' '}
                                      {ingredient.unit}
                                    </li>
                                  )
                                )}
                              </ul>
                            </CardContent>
                          </Card>
                        )
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}

          {/* Total ingredients table */}
          <Card>
            <CardHeader>
              <CardTitle>Lista zakupów</CardTitle>
              <CardDescription>
                Połączone składniki na wybrane dni
                {multiplier > 1 && ` (*${multiplier})`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className='h-[400px]'>
                <Table>
                  <TableCaption>
                    Całkowita ilość składników potrzebnych dla Filipa i Agaty
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='w-12'>Mam</TableHead>
                      <TableHead>Składnik</TableHead>
                      <TableHead>Ilość</TableHead>
                      <TableHead>Jednostka</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(totalIngredients)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .map(([name, data]) => (
                        <TableRow
                          key={name}
                          className={cn(
                            checkedIngredients[name] && 'opacity-50'
                          )}
                        >
                          <TableCell className='flex'>
                            <Checkbox
                              checked={!!checkedIngredients[name]}
                              onCheckedChange={() =>
                                toggleIngredientCheck(name)
                              }
                              aria-label={`Mark ${name} as available`}
                            />
                          </TableCell>
                          <TableCell
                            className={cn(
                              checkedIngredients[name] && 'line-through'
                            )}
                          >
                            {name}
                          </TableCell>
                          <TableCell>{data.amount}</TableCell>
                          <TableCell>{data.unit}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedDays.length === 0 && (
        <Card>
          <CardContent className='py-8'>
            <p className='text-center text-muted-foreground'>
              Select at least one day to display the menu and generate a grocery
              list
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
