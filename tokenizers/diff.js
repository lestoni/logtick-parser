function tokenizeDiff(diffTokens) {
  let tokens = [];

  tokens = splitCommit(diffTokens);

  return tokens;
}

function splitCommit(tokens) {
  let diffs     = [];
  let isNewDiff = true;
  let index  = 0;
  let counter = 0;
  let currentIndex = index;
  let iterate = true;

  while(iterate) {
    let token = tokens[counter];
    if(!token) { break; }

    if(token.indexOf('diff --git') === 0) {
      currentIndex = index;
      counter += 5;
      diffs[currentIndex] = [];

      index += 1;

    }

    token = tokens[counter];

    diffs[currentIndex].push(token);

    counter += 1;

  }

  return diffs;
}

module.exports = tokenizeDiff;
