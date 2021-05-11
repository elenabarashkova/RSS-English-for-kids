import { insertHtml, addMain } from "./shared";

const header = require('./header.html');
const main = require('./main.html');

insertHtml(header.default);
insertHtml(main.default);

addMain();
