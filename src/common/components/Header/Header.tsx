import { NavLink, Link } from "react-router-dom";
import { clsx } from "clsx";
import Container from "../Container/Container";
import { useAuth } from "../../../modules/auth/hooks/useAuth";

const Header = () => {
  const { isLoggedIn, logOut, user } = useAuth();

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
              {isLoggedIn ? (
                <>
                  <li className="ml-4">
                    <NavLink to="/editor" className={navLinkClasses}>
                      <i className='ion-compose mr-1'></i>
                      New Article
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink to="/settings" className={navLinkClasses}>
                      <i className='ion-gear-a mr-1'></i>
                      Settings
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink to={`/@${user!.username}`} className={navLinkClasses}>
                      <img src={user!.image} alt={`${user!.username} avatar`} className='w-6 h-6 rounded-full inline-block mr-1' />
                      {user!.username}
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink
                      to="/"
                      className="py-2 text-black/30 hover:text-black/60 hover:no-underline"
                      onClick={logOut}
                    >
                      Log Out
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
