import { getOneById, updateMeme } from '../api/data.js';
import { notify } from '../common/notify.js';
import { html } from '../lib.js';

const editTemplate = (meme, onSubmit) => html`
<section id="edit-meme">
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}></textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`

export async function editPage(context,next){
    const meme = await getOneById(context.params.id);
    context.render(editTemplate(meme, onSubmit));

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');

        if(title.trim() == '' || description.trim() == '' || imageUrl.trim() == ''){
            return notify('Please fill all fields!')
        }
        
        await updateMeme(meme._id, {title, description, imageUrl});
        context.page.redirect('/details/' + context.params.id);
    }
}