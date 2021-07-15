import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import categories from "./category/router";
import words from "./word/router";
import login from "./login";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api/categories', categories);
app.use('/api/words', words);
app.use('/api', login);

app.listen(PORT, () => console.log('Started server Hello'));