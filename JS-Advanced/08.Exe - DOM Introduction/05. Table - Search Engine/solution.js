function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let tableDataList = document.querySelectorAll('tbody tr td');
    let resultDivElement = document.querySelector('#result');

    function onClick() {
        let searchedWord = document.querySelector('#searchField').value;
        for (const td of tableDataList) {
            td.parentElement.className = '';
        }

        for (const td of tableDataList) {
            let currTD = td.textContent;
            if (currTD.includes(searchedWord)) {
                td.parentElement.className = 'select'
            }
        }
    }
}