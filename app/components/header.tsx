import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Tygodniowy planer menu
            </Link>
            <div className="flex space-x-6">
              <Link
                to="/filip"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Filip
              </Link>
              <Link
                to="/agata"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Agata
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
