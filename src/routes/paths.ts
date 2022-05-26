export interface Route {
  name: RouteName;
  pattern: RouterPath;
  page: string;
}

export enum RouteName {
  HOME = "home",
  SEARCH = "search",
}

export enum RouterPath {
  HOME = "/",
  SEARCH = "/search/:search",
}

const routes: Route[] = [
  {
    page: "/Home",
    name: RouteName.HOME,
    pattern: RouterPath.HOME,
  },
  {
    page: "/Home",
    name: RouteName.SEARCH,
    pattern: RouterPath.SEARCH,
  },
];

export default routes;
