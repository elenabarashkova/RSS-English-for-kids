import { Router } from 'express';

const router = Router();

interface User {
  username: string,
  password: string,
}

let usersCounter = 1;
let loggedUsers: Array<number> = [];

export const isLoggedIn = (token: number): boolean => {
  return loggedUsers.indexOf(token) !== -1;
}

router.post('/login', (req, res) => {
  const user: User = req.body;

  if (user.username !== 'admin' || user.password !== 'admin') {
    return res.sendStatus(400);
  }

  const token = usersCounter;
  usersCounter++;
  loggedUsers.push(token);

  return res.json({token});
});

router.get('/logout', (req, res) => {
  loggedUsers = loggedUsers.filter(item => item !== Number(req.headers.token));
  return res.sendStatus(200);
});

export default router;