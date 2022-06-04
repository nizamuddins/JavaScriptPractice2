
const sortAlphabetically = x => x.toLowerCase().split('').sort().join('')
const getIndexOfAnagramIn = (s, w) => {
  const wSorted = w;
  const result = []
  for (let i = 0; i < s.length + 1 - w.length; i++) {
    if (sortAlphabetically(s.slice(i, i + w.length)) === wSorted) {
      result.push(i);
    }
  }
  return result;
}

console.log(getIndexOfAnagramIn('abab', 'ab'));
