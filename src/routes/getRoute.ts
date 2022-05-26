import { pathToRegexp } from 'path-to-regexp'

import routePaths, { Route as PathRoute } from './paths'

interface Route extends PathRoute {
  regex: RegExp
}

const routes: Route[] = routePaths.map((route) => ({
  ...route,
  regex: pathToRegexp(route.pattern),
}))

export default function getRoute(pathname: string): Route | null {
  for (const route of routes) {
    if (pathname.match(route.regex)) {
      return route
    }
  }

  return null
}
