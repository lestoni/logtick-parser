function tokenizeInfo(infoTokens) {
  let tokens = [];

  infoTokens.forEach(function (token, index) {
    switch(index) {
      case 0:
        tokens[0] = token.split(/commit\s+/)[1];
        break;
      case 1:
        tokens[1] = token.split(/Author:\s+/)[1];
        break;
      case 2:
        tokens[2] = token.split(/AuthorDate:\s+/)[1];
        break;
      case 3:
        tokens[3] = token.split(/Commit:\s+/)[1];
        break;
      case 4:
        tokens[4] = token.split(/CommitDate:\s+/)[1];
        break;
    }
  });

  return tokens;
}


module.exports = tokenizeInfo;
