const fs  = require('fs');

const log = fs.readFileSync('./log.txt', 'utf8');

const parser = require('./');

console.log(parser(log));
