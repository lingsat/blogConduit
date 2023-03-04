import { NavLink, Link } from "react-router-dom";
import { clsx } from "clsx";
import Container from "../Container/Container";

const Header = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx("py-2 hover:text-black/60 hover:no-underline", {
      "text-black/80": isActive,
      "text-black/30": !isActive,
    });

  return (
    <header>
      <nav className="px-2 py-4">
        <Container>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-titillium text-2xl mr-8 text-maingreen"
            >
              conduit
            </Link>
            <ul className="flex">
              <li className="ml-4">
                <NavLink to="/" className={navLinkClasses} end>
                  Home
                </NavLink>
              </li>
              <li className="ml-4">
                <NavLink to="/sign-in" className={navLinkClasses}>
                  Sign in
                </NavLink>
              </li>
              <li className="ml-4">
                <NavLink to="/sign-up" className={navLinkClasses}>
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
