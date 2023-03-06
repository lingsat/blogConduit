import { Route, Routes } from "react-router-dom";
import Header from "./common/components/Header/Header";
import { routes } from './core/routes';

function App() {
  return (
    <div className="pb-8">
      <Header />
      <Routes>
        {Object.values(routes).map((route, index) => (
          <Route key={`route-${index}`} path={route.path} element={<route.Element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
