const tokenize    = require('./tokenizers');

const GLOBAL_SPLITTER = /\s+\n/g;
const COMMON_SPLITTER = /\n+/;

function parser(log) {
  let tokens = {};

  let globalTokens = log.split(GLOBAL_SPLITTER);

  let infoTokens    = globalTokens[0].split(COMMON_SPLITTER);
  let commitTokens  = globalTokens[1].split(COMMON_SPLITTER);
  let diffTokens    = globalTokens[2].split(COMMON_SPLITTER);

  // Build info tokens
  tokens.info = tokenize.info(infoTokens);

  // Build commit tokens
  tokens.commit = tokenize.commit(commitTokens);

  // Build commit tokens
  tokens.diff = tokenize.diff(diffTokens);

  return tokens;
}

module.exports = parser;
