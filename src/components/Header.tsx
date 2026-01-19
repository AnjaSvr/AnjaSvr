import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <h1 className="text-3xl font-bold text-foreground mb-1 hover:text-primary transition-colors cursor-pointer">
                Anja Švraka
              </h1>
            </Link>
            <p className="text-base text-muted-foreground">
              PhD Student | Department of Mathematics
            </p>
            <p className="text-base text-muted-foreground">
              Technical University Munich
            </p>
          </div>
          
          <nav className="flex gap-6">
            <Link 
              to="/" 
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/cv" 
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive('/cv') ? 'text-primary' : 'text-foreground'
              }`}
            >
              CV
            </Link>
            <Link 
              to="/research" 
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive('/research') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Research
            </Link>
            <Link 
              to="/teaching" 
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive('/teaching') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Teaching
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
