import { getAllTopics } from '../api/data.js';
import { html, until } from '../lib.js';

const topicsTemplate = (topicsPromise) => html` 
<section>
  <h1>Topics</h1>
  <div>
    ${until(topicsPromise, html`<p class="spinner"> Loading...</p>`)}
  </div>
</section>`;

const topicCard = (topic) => html`
<article class="preview">
      <header><a href=${`topics/${topic._id}`}>${topic.title}</a></header>
      <div>Comments: 14</div>
    </article>
`

export function topicsPage(context) {
  context.render(topicsTemplate(loadTopics()));
}

async function loadTopics(){
  const topics = await getAllTopics();
  return topics.map(topicCard);
}