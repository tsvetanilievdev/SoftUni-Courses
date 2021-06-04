function extract(content) {
  let p = document.getElementById(content);
  let theText = p.textContent;
  let pattern = /\([A-Za-z ]+\)/g;
  let arr = [...theText.matchAll(pattern)];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newWord = arr[i][0];
    newWord = newWord.substring(1, newWord.length - 1);
    newArr.push(newWord);
  }
  return newArr.join('; ')
}

//other solution: if you test it change function name to extract
function extract2(elementId) {
    let para = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];
  
    let match = pattern.exec(para);
    while(match) {
      result.push(match[1]);
      match = pattern.exec(para);
    }
  
    return result.join('; ');
  }
  