function deleteByEmail() {
    let inputValue = document.getElementsByTagName('label')[0].firstElementChild.value;
    // or            document.getElementsByName("email")[0].value; - BY name(look at html)

    let secondColumn = document.querySelectorAll('#customers tr td:nth-child(2)');

    for (const td of secondColumn) {
        if (inputValue == td.textContent) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }
    document.getElementById('result').textContent = 'Not found.';
}

/* function deleteByEmail() {
    let trList = Array.from(document.querySelectorAll('tbody tr'));
    let inputValue = document.getElementsByTagName('label')[0].firstElementChild.value;
    let resultDiv = document.getElementById('result');

    for (let i = 0; i < trList.length; i++) {
        let tr = trList[i];
        let children = tr.children;
        let tdEmail = children[children.length - 1];

        if (tdEmail.textContent == inputValue) {
            tr.parentNode.removeChild(tr);
            resultDiv.textContent = 'Deleted.';
            return;
        } else {
            resultDiv.textContent = 'Not Found.';
        }
    }
} */