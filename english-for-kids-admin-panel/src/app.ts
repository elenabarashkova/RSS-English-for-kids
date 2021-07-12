import * as path from 'path';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import categories from "./category/router";
import { pool } from "./init-db";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000

// const publicPath = path.resolve(__dirname, '../wwwroot'); // dist = wwwroot
// const indexPath = path.resolve(__dirname, '../wwwroot/index.html');

// Это если dist лежит в одной папке с бэком (на  уровне с src)
// if query not starts with '/api/' string - send file from wwwroot ->это для pushstate- обработка ошибок с запросами
// app.use(/^(?!\/api\/)/, express.static(publicPath));

// if file doesn't exists - send index.html
// app.use(/^(?!\/api\/)/, (req, res) => {
//   res.sendFile(indexPath);
// });

app.use('/api/categories', categories);
//
// app.get('/', async (req, res) => {
//   try {
//     const client = await pool.connect();
//
//     const result = await client.query(`
//     SELECT * FROM words
//       WHERE category_id = '${req.params.category}';
//     `);
//
//     const results = {
//       'results': (result) ? result.rows : null
//     };
//
//     res.json(results);
//
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// })
// app.use('/api/items', items);

app.listen(PORT, () => console.log('Started server Hello'));