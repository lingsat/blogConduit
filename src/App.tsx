import { useEffect } from "react";
import { Route, Routes, useMatch, useNavigate } from "react-router-dom";
import Header from "./common/components/Header/Header";
import { routes } from "./core/routes";
import PrivateRoute from "./modules/auth/components/PrivateRoute";
import { useAuth } from "./modules/auth/hooks/useAuth";

function App() {
  const isGlobalFeedPage = useMatch(routes.globalFeed.path);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isGlobalFeedPage && isLoggedIn) {
      navigate(routes.personalFeed.path);
    }
  }, []);

  return (
    <div className="pb-8">
      <Header />
      <Routes>
        {Object.values(routes).map((route) => {
          if (route.private) {
            return (
              <Route
                key={`route-${route.path}`}
                path={route.path}
                element={
                  <PrivateRoute>
                    <route.Element />
                  </PrivateRoute>
                }
              />
            );
          } else {
            return (
              <Route
                key={`route-${route.path}`}
                path={route.path}
                element={<route.Element />}
              />
            );
          }
        })}
      </Routes>
    </div>
  );
}

export default App;
