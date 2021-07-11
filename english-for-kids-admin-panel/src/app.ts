import * as path from 'path';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import categories from "./category/router";
import category from "./category/router";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const publicPath = path.resolve(__dirname, '../wwwroot'); // dist = wwwroot
// const indexPath = path.resolve(__dirname, '../wwwroot/index.html');

// Это если dist лежит в одной папке с бэком (на  уровне с src)
// if query not starts with '/api/' string - send file from wwwroot ->это для pushstate- обработка ошибок с запросами
app.use(/^(?!\/api\/)/, express.static(publicPath));

// if file doesn't exists - send index.html
// app.use(/^(?!\/api\/)/, (req, res) => {
//   res.sendFile(indexPath);
// });

app.use('/api/categories', categories);

// app.use('/api/items', items);

app.listen('3000', () => console.log('Started server Hello'));