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
import { weeklyMenu, type Ingredient } from '~/consts/weeklyMenu';
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

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Weekly Menu Planner' },
    {
      name: 'description',
      content: 'Automated grocery list generation from weekly menu',
    },
  ];
}

export default function Home() {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [multiplier, setMultiplier] = useState<number>(1);

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
  const toggleDay = (day: string) => {
    setSelectedDays((current) =>
      current.includes(day)
        ? current.filter((d) => d !== day)
        : [...current, day]
    );
  };

  return (
    <div className='container mx-auto py-6'>
      <h1 className='text-3xl font-bold mb-6'>Weekly Menu Planner</h1>

      {/* Day selection and multiplier */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Select Days</CardTitle>
          <CardDescription>
            Choose the days to include in your grocery list
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
                    {day}
                  </label>
                </div>
              ))}
            </div>

            {/* Multiplier input */}
            <div className='flex items-center gap-4 max-w-xs'>
              <Label htmlFor='multiplier' className='whitespace-nowrap'>
                Portion Multiplier:
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
                <CardTitle className='capitalize'>{day}</CardTitle>
                {multiplier > 1 && (
                  <CardDescription>
                    Showing ingredients for {multiplier}× portions
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
              <CardTitle>Grocery List</CardTitle>
              <CardDescription>
                Combined ingredients for selected days
                {multiplier > 1 && ` (×${multiplier})`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className='h-[400px]'>
                <Table>
                  <TableCaption>
                    Total ingredients needed for Filip and Agata
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ingredient</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Unit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(totalIngredients)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .map(([name, data]) => (
                        <TableRow key={name}>
                          <TableCell>{name}</TableCell>
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
