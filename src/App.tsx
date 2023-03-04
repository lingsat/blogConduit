import { Route, Routes } from "react-router-dom";
import Header from "./common/components/Header/Header";
import SignUp from './modules/auth/pages/SignUp';
import ArticlePage from './modules/feed/pages/ArticlePage';
import GlobalFeedPage from "./modules/feed/pages/GlobalFeedPage";
import ProfilePage from "./modules/profile/pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="pb-8">
      <Header />
      <Routes>
        <Route path="/" element={<GlobalFeedPage />} />
        <Route path="/:profile" element={<ProfilePage />} />
        <Route path="/:profile/favorites" element={<ProfilePage />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
