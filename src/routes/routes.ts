import Routes from 'next-routes'

import routesPaths from './paths'

// Instance the router.
const routes = new Routes()

// Add all registered routes.
routesPaths.forEach((route) => {
  routes.add(route.name, route.pattern, route.page)
})

export default routes
