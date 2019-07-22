function stringToSortIdx(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const b28Idx   = '23456789abcdefghijklmnopqr'.split('');
  const b28Str = str
    .toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .split('')
    .map(c => alphabet.indexOf(c))
    .map(i => i >= 0 ? b28Idx[i] : '1')
    .join('');
  const intVal = Number.parseInt(b28Str, 28);
  const val = intVal / Math.pow(28, b28Str.length);

  return val;
}

module.exports = stringToSortIdx;