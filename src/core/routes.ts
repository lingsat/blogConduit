import { FC } from 'react';
import SignIn from "../modules/auth/pages/SignIn";
import SignUp from "../modules/auth/pages/SignUp";
import ArticlePage from "../modules/feed/pages/ArticlePage";
import EditorPage from "../modules/feed/pages/EditorPage";
import GlobalFeedPage from "../modules/feed/pages/GlobalFeedPage";
import ProfilePage from "../modules/profile/pages/ProfilePage";
import SettingsPage from "../modules/profile/pages/SettingsPage";

interface RouteItem {
  path: string;
  Element: FC;
  private?: boolean;
}

export const routes: Record<string, RouteItem> = {
  globalFeed: {
    path: "/",
    Element: GlobalFeedPage,
  },
  personalFeed: {
    path: "/personal-feed",
    Element: GlobalFeedPage,
    private: true,
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
    Element: SettingsPage,
    private: true,
  },
  createArticle: {
    path: "/editor",
    Element: EditorPage,
    private: true,
  },
  editArticle: {
    path: "/editor/:slug",
    Element: EditorPage,
    private: true,
  },
};
