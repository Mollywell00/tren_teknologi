import MainLayout from '../components/layout/mainLayout'
import HomePage from "../pages/HomePages";
const AppRoutes = [
  {
    name: "main",
    path: "/",
    Component: MainLayout,
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: HomePage,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        Component: () => <p>this content about page</p>,
      },
      {
        key: "skills",
        name: "skills",
        path: "/skills",
        Component: () => <p>this content skills page</p>,
      },
    ],
  },
  {
    name: "404",
    path: "*",
    Component: () => <p>this content 404 page</p>,
    key: "404",
  },
];
export default AppRoutes;
