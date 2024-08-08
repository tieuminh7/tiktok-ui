//Layouts
import { HeaderOnly } from "~/components/Layout";

//Pages import
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
//publicRoutes
const publicRoutes = [
  { path: "/home", component: Home },
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

//privateRoutes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
