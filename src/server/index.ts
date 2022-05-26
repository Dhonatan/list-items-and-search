import next from 'next'

import express, { Request, Response } from 'express'

import routes from '../routes/routes'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  // Instance the express.
  const server = express()

  // Handle everything.
  server.get('*', (req: Request, res: Response) => handler(req, res))

  server.listen(port)

  // Log server start.
  console.log(
    `🚀 Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV
    }`,
  )
})