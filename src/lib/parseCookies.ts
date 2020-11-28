import Cookie from 'cookie'
import { IncomingMessage } from 'http'
import { NextApiRequest } from 'next'

const parseCookies = (req: IncomingMessage) => {
  return Cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}
export default parseCookies
