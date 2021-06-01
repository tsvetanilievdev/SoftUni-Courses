function findall(array, element) {
    let result = [],
    len = array.length,
    position = 0;
  while (position < len) {
    position = array.indexOf(element, position);
    if (position === -1) {
      break;
    }
    result.push(position);
    position++;
  }
  // return array with indeces where the element is found
  return result;
}

result = findall([3, 4, 1, 1, 4, 3, 2, 5, 6, 1, 3], 2);
console.log(result);