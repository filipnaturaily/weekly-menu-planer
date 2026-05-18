import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tygodniowy planer menu" },
    {
      name: "description",
      content:
        "Automatyczne generowanie listy zakupów na podstawie tygodniowego menu",
    },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col gap-y-4">
          <Button
            asChild
            className="bg-yellow-300 hover:bg-yellow-400! text-black"
          >
            <Link to="/agata">Agata</Link>
          </Button>
          <Button asChild className="bg-blue-900 hover:bg-blue-950!">
            <Link to="/filip">Filip</Link>
          </Button>
          <Button asChild className="bg-green-900 hover:bg-green-950!">
            <Link to="/both">Dla dwóch osób</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
