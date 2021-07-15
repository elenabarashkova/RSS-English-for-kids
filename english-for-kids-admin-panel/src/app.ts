import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import categories from "./category/router";
import words from "./word/router";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api/categories', categories);
app.use('/api/words', words);

interface User {
  username: string,
  password: string,
}

let usersCounter = 1;
let loggedUsers: Array<number> = [];

app.post('/api/login', (req, res) => {
  const user: User = req.body;

  if (user.username !== 'admin' || user.password !== 'admin') {
    return res.sendStatus(400);
  }

  const token = usersCounter;
  usersCounter++;
  loggedUsers.push(token);

  return res.json({token});
});

app.get('/api/logout', (req, res) => {
  loggedUsers = loggedUsers.filter(item => item !== Number(req.headers.token));
  return res.sendStatus(200);
});

app.listen(PORT, () => console.log('Started server Hello'));