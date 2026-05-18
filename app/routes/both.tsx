import type { Route } from "./+types/home";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { useWeeklyMenu } from "~/hooks/use-weekly-menu";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Minus, Plus } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip";
import { originalWeeklyMenu } from "~/consts/original-weekly-menu";
import type { Ingredient } from "~/types/weekly-menu-types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Menu dla Filipa i Agaty" },
    {
      name: "description",
      content: "Tygodniowe menu i lista zakupów dla Filipa i Agaty",
    },
  ];
}

export default function Both() {
  const {
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
  } = useWeeklyMenu(originalWeeklyMenu, "both");

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Day selection and multiplier */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Menu dla Filipa i Agaty</CardTitle>
          <CardDescription>
            Wybierz dni, w które chcesz uwzględnić listę zakupów
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              {days.map((day) => (
                <div key={day} className="flex items-center space-x-2">
                  <Checkbox
                    id={day}
                    checked={selectedDays.includes(day)}
                    onCheckedChange={() => toggleDay(day)}
                  />
                  <label htmlFor={day} className="capitalize cursor-pointer">
                    {translateDays(day)}
                  </label>
                </div>
              ))}
            </div>

            {/* Multiplier input */}
            <div className="flex items-center gap-4 max-w-xs">
              <Label htmlFor="multiplier" className="whitespace-nowrap">
                Mnożnik porcji:
              </Label>
              <Button
                className="cursor-pointer"
                variant={"outline"}
                aria-label="Zmniejsz mnożnik porcji"
                onClick={handleDecreaseMultiplier}
              >
                <Minus />
              </Button>
              <Input
                id="multiplier"
                type="number"
                min="1"
                value={multiplier}
                onChange={handleMultiplierChange}
                className="w-24"
              />
              <Button
                className="cursor-pointer"
                variant={"outline"}
                aria-label="Zwiększ mnożnik porcji"
                onClick={handleIncreaseMultiplier}
              >
                <Plus />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly menu display */}
      {selectedDays.length > 0 && (
        <div className="space-y-6">
          {selectedDays.map((day) => (
            <Card key={day} className="mb-6">
              <CardHeader>
                <CardTitle className="capitalize">
                  {translateDays(day)}
                </CardTitle>
                {multiplier > 1 && (
                  <CardDescription>
                    Wyświetlanie składników dla {multiplier} porcji
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Filip's meals */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4 pb-2 border-b">
                      Filip
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(originalWeeklyMenu[day].filip).map(
                        ([mealType, meal]) => (
                          <Card key={`filip-${mealType}`}>
                            <CardHeader>
                              <CardTitle className="capitalize text-sm">
                                {translateMealType(mealType)}
                              </CardTitle>
                              <CardDescription className="text-xs">
                                {meal.name}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1 text-sm">
                                {meal.ingredients.map(
                                  (ingredient: Ingredient, idx: number) => (
                                    <li key={idx}>
                                      {ingredient.name}:{" "}
                                      {multiplier <= 0 || isNaN(multiplier) ? (
                                        "0 g"
                                      ) : (
                                        <span>
                                          {ingredient.amount * multiplier}{" "}
                                          {ingredient.unit}
                                        </span>
                                      )}
                                    </li>
                                  ),
                                )}
                              </ul>
                            </CardContent>
                          </Card>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Agata's meals */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4 pb-2 border-b">
                      Agata
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(originalWeeklyMenu[day].agata).map(
                        ([mealType, meal]) => (
                          <Card key={`agata-${mealType}`}>
                            <CardHeader>
                              <CardTitle className="capitalize text-sm">
                                {translateMealType(mealType)}
                              </CardTitle>
                              <CardDescription className="text-xs">
                                {meal.name}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1 text-sm">
                                {meal.ingredients.map(
                                  (ingredient: Ingredient, idx: number) => (
                                    <li key={idx}>
                                      {ingredient.name}:{" "}
                                      {multiplier <= 0 || isNaN(multiplier) ? (
                                        "0 g"
                                      ) : (
                                        <span>
                                          {ingredient.amount * multiplier}{" "}
                                          {ingredient.unit}
                                        </span>
                                      )}
                                    </li>
                                  ),
                                )}
                              </ul>
                            </CardContent>
                          </Card>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Total ingredients table */}
          <Card>
            <CardHeader>
              <CardTitle>Lista zakupów</CardTitle>
              <CardDescription>
                Połączone składniki na wybrane dni dla obu osób
                {multiplier > 1 && ` (*${multiplier})`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-100">
                <Table>
                  <TableCaption>
                    Całkowita ilość składników potrzebnych dla Filipa i Agaty
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Mam</TableHead>
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
                            checkedIngredients[name] && "opacity-50",
                          )}
                        >
                          <TableCell className="flex">
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
                              checkedIngredients[name] && "line-through",
                            )}
                          >
                            {name.length > 20 ? (
                              <Tooltip>
                                <TooltipTrigger className="cursor-help">
                                  {name.substring(0, 20)}...
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{name}</p>
                                </TooltipContent>
                              </Tooltip>
                            ) : (
                              name
                            )}
                          </TableCell>
                          <TableCell>{data.amount}</TableCell>
                          <TableCell>{data.unit}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedDays.length === 0 && (
        <Card>
          <CardContent className="py-8">
            <p className="text-center text-muted-foreground">
              Wybierz co najmniej jeden dzień, aby wyświetlić menu i wygenerować
              listę zakupów
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
