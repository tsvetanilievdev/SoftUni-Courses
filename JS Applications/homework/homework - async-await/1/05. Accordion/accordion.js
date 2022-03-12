function solution() {
    let listUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let mainSection = document.getElementById('main');

    fetch(listUrl)
        .then(r => r.json())
        .then(json => {
            json.forEach(x => {
                let div = createAccordionDiv(x._id, x.title);
                mainSection.appendChild(div);
            })

            let buttons = mainSection.querySelectorAll('button');
            buttons.forEach(b => b.addEventListener('click', getInfo));
        })

}

function getInfo(event) {
    let articleBox = event.target.parentNode.parentNode;
    if (event.target.textContent === 'More') {
        event.target.textContent = 'Less';

        let articleUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';
        fetch(articleUrl + event.target.id)
            .then(r => r.json())
            .then(json => {
                let div1 = document.createElement('div');
                div1.classList.add('extra');

                let p = document.createElement('p');
                p.textContent = json.content;

                div1.appendChild(p);
                articleBox.appendChild(div1);

                div1.style.display = 'inline-block';
            });
    }
    else {
        event.target.textContent = 'More';
        articleBox.lastChild.style.display = 'none';
    }
}

function createAccordionDiv(id, title) {
    let div1 = document.createElement('div');
    div1.classList.add('accordion');

    let div2 = document.createElement('div');
    div2.classList.add('head');

    let span = document.createElement('span');
    span.textContent = title;

    let button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'More';
    button.id = id;

    div1.appendChild(div2);
    div2.appendChild(span);
    div2.appendChild(button);

    return div1;
}

solution();