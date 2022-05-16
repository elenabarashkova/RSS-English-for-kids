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

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
//
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log('Started server Hello'));