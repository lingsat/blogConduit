import { Route, Routes } from "react-router-dom";
import Header from "./common/components/Header/Header";
import GlobalFeedPage from "./modules/feed/pages/GlobalFeedPage";
import ProfilePage from "./modules/profile/ProfilePage";

function App() {
  return (
    <div className="pb-8">
      <Header />
      <Routes>
        <Route path="/" element={<GlobalFeedPage />} />
        <Route path="/:profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
