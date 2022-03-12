function createCollection(collectionName){
    let url = `http://localhost:3030/jsonstore/${collectionName}`
    
    return fetch(url)
}

async function publishNews(data){

    let url = `http://localhost:3030/jsonstore/news`
    
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
    })
    getData()
}

async function getData(){
    let url = `http://localhost:3030/jsonstore/news`
    let response =  await fetch(url);
    let dataNews = await response.json();

    document.getElementById('main').innerHTML = '';
    Object.values(dataNews).forEach(p => {

        let articleElement = document.createElement('article');
        let h2Element = document.createElement('h2');
        h2Element.textContent = p.title;
        let pElement = document.createElement('p');
        pElement.textContent = p.content;
        let footerElement = document.createElement('footer');
        let pFooterElement = document.createElement('p');
        pFooterElement.textContent = p.author;

        footerElement.appendChild(pFooterElement);
        
        articleElement.append(h2Element,pElement,footerElement);

        document.getElementById('main').appendChild(articleElement);
        /* 
        <article class="post">
                <h2>Title</h2>
                <p>Content...</p>
                <footer id="foot">
                    <p>Author</p>
                </footer>
            </article>
        */
    })
    return dataNews;
}
getData()
let arr = [];

function getFormData(){
    let form = document.getElementById('my-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();


        // GET DATE by selecting HANDMADE:
        // let name = document.querySelector('[name="name"]').value;
        // let age = document.querySelector('[name="age"]').value;
        // console.log(`${name} : ${age}`);

        //newFormData
        let formData = new FormData(e.target);
        let name2 = formData.get('name');
        let age2 = formData.get('age');
        let entries = formData.entries();
        entries = [...entries].reduce((a,b) => {
            a[b[0]] = b[1];
            return a; 
        }, {})
        arr.push(entries);
        console.log(entries);
        console.log('-----------');
        console.log(name2, age2);

        console.log('array:');
        console.log(arr);
    })
}
getFormData()