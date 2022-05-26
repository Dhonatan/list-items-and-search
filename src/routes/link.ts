import { LinkProps as NextLinkProps } from 'next/link'

import routes from './routes'

export interface LinkProps extends Partial<NextLinkProps> {
  params?: { [k: string]: string | number }
  passHref?: boolean
  prefetch?: boolean
  route?: string
}

export const Link = routes.Link as React.ComponentType<LinkProps>

export default Link
