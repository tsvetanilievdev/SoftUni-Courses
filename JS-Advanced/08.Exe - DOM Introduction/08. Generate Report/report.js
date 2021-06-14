function generateReport() {
    //select checkboxes 
    let thElements = Array.from(document.querySelectorAll('th'));
    let trElements = Array.from(document.querySelectorAll('tbody tr'));
    let checkedBoxArr = [];
    let resultArr = [];
    let outputTextArea = document.querySelector('#output');

    //check which boxes are CHECKED and place it in array or place false
    let isChecked = false;
    thElements.forEach((tHeader, i) => {
        if (tHeader.children[0].checked) {
            checkedBoxArr.push(tHeader.textContent.toLowerCase().trim());
            isChecked = true;
        } else {
            checkedBoxArr.push(false);
        }
    })

    if (isChecked) {
        //create object data for each row;
        trElements.forEach(row => {
            let children = Array.from(row.children);
            let obj = {}
            children.forEach((child, i) => {
                if (checkedBoxArr[i]) {
                    obj[checkedBoxArr[i]] = child.textContent
                }
            })
            resultArr.push(obj);
        })
    }
    let jsonResult = JSON.stringify(resultArr);
    outputTextArea.value = jsonResult;
}