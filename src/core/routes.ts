import SignIn from "../modules/auth/pages/SignIn";
import SignUp from "../modules/auth/pages/SignUp";
import ArticlePage from "../modules/feed/pages/ArticlePage";
import EditorPage from '../modules/feed/pages/EditorPage';
import GlobalFeedPage from "../modules/feed/pages/GlobalFeedPage";
import ProfilePage from "../modules/profile/pages/ProfilePage/ProfilePage";

export const routes = {
  globalFeed: {
    path: "/",
    Element: GlobalFeedPage,
  },
  personalFeed: {
    path: "/personal-feed",
    Element: GlobalFeedPage,
  },
  profile: {
    path: "/:profile",
    Element: ProfilePage,
  },
  profileFavorites: {
    path: "/:profile/favorites",
    Element: ProfilePage,
  },
  singleArticle: {
    path: "/article/:slug",
    Element: ArticlePage,
  },
  singIn: {
    path: "/sign-in",
    Element: SignIn,
  },
  singUp: {
    path: "/sign-up",
    Element: SignUp,
  },
  settings: {
    path: "/settings",
    Element: GlobalFeedPage,
  },
  editor: {
    path: "/editor",
    Element: EditorPage,
  },
  createArticle: {
    path: "/editor",
    Element: EditorPage,
  },
  editArticle: {
    path: "/editor/:slug",
    Element: EditorPage,
  },
};
