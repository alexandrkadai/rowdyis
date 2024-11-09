import { v4 as uuidv4 } from 'uuid';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export function setUserUUID(req: NextApiRequest, res: NextApiResponse) {
  const cookies = req.cookies;
  let userUUID = cookies.userUUID;

  if (!userUUID) {
    userUUID = uuidv4();
    res.setHeader('Set-Cookie', serialize('userUUID', userUUID, { path: '/shop/:id', httpOnly: true }));
  }

  return userUUID;
}
