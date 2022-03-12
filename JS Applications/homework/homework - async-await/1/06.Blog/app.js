function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    let selector = document.getElementById('posts');
    let viewBtn = document.getElementById('btnViewPost');

    loadBtn.addEventListener('click', loadContent);
    viewBtn.addEventListener('click', viewContent);

    function loadContent() {
        let postsUrl = 'http://localhost:3030/jsonstore/blog/posts';

        fetch(postsUrl)
            .then(r => r.json())
            .then(json => {
                for (const key in json) {
                    let option = document.createElement('option');
                    option.value = key;
                    option.textContent = json[key].title;
                    currentArticleBody = json[key].body;
                    selector.appendChild(option);
                }
            })
    }

    function viewContent() {
        let id = selector.value;

        let postBody = document.getElementById('post-body');
        let commentsUl = document.getElementById('post-comments');

        let postUrl = 'http://localhost:3030/jsonstore/blog/posts/' + id;
        let commUrl = 'http://localhost:3030/jsonstore/blog/comments/';

        fetch(postUrl)
            .then(r => r.json())
            .then(json => {
                postBody.textContent = json.body;
            });

        fetch(commUrl)
            .then(r => r.json())
            .then(json => {

                deleteChildren(commentsUl);

                Object.values(json)
                    .filter(x => x.postId == id)
                    .forEach(el => {
                        let li = document.createElement('li');
                        li.textContent = el.text;
                        commentsUl.appendChild(li);
                    })
            })
    }

    function deleteChildren(element) {
        Array.from(element.childNodes)
            .forEach(x => x.remove());
    }
}

attachEvents();