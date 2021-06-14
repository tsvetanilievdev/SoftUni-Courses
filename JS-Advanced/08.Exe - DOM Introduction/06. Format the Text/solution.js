function solve() {
    //select elements
    let textInput = document.getElementById('input').value;
    //filter using RegExp - \S+ Matches anything other than a space, tab or newline./\S+/ - any non-whitespace
    let sentenceArr = textInput.split('.').filter(x => /\S+/.test(x)).map(x => x += '.')
    let outputDiv = document.getElementById('output');
    console.log(sentenceArr)
        //group sentence in paragraph
    let paragraphCount = Math.ceil(sentenceArr.length / 3);
    //display output in DOM, using splice to manupulate the array; 
    for (let i = 0; i < paragraphCount; i++) {
        outputDiv.innerHTML += `<p>${sentenceArr.splice(0, 3).join('')}</p>`
    }
}