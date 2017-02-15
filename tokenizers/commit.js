function tokenizeCommit(commitTokens) {
  let tokens = [];

  commitTokens.forEach(function (token, index) {
    token = token.trim();

    switch(index) {
      case 0:
        tokens[0] = token;
        break;
      case 1:
        break;
      default:
        if(index === (commitTokens.length - 1)) {
          tokens.push(token);
        } else {
          let changes = token.split(/\s+\|\s+/);
          tokens[index] = [changes[0], changes[1]];
        }
        break;
    }
  });

  return tokens;
}

module.exports = tokenizeCommit;
