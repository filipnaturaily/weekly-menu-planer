import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";

const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Menu
            </Link>
            <div className="flex space-x-6">
              <Link
                to="/agata"
                className={cn(
                  "text-gray-600 hover:text-gray-900 transition-colors",
                  {
                    "text-yellow-500 font-bold": pathname === "/agata",
                  },
                )}
              >
                Agata
              </Link>
              <Link
                to="/filip"
                className={cn(
                  "text-gray-600 hover:text-gray-900 transition-colors",
                  {
                    "text-blue-900 font-bold": pathname === "/filip",
                  },
                )}
              >
                Filip
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
