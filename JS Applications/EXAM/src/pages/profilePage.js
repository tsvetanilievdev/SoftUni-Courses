import { getAllMyItems } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const eventTemplate = (event) => html`
  <div class="eventBoard">
    <div class="event-info">
      <img src=${event.imageUrl} />
      <h2>${event.title}</h2>
      <h6>${event.date}</h6>
      <a href=${`/details/${event._id}`} class="details-button">Details</a>
    </div>
  </div>
`;
const profileTemplate = (email, events) => html` <section id="profilePage">
  <div class="userInfo">
    <div class="avatar">
      <img src="./images/profilePic.png" />
    </div>
    <h2>${email}</h2>
  </div>
  <div class="board">

    ${events.length > 0
      ? events.map(eventTemplate)
      : html`
          <div class="no-events">
            <p>This user has no events yet!</p>
          </div>`
    }

  </div>
</section>`;

export async function profilePage(context) {
  const { id, email } = getUserData();
  const myEvents = await getAllMyItems(id);
  context.render(profileTemplate(email, myEvents));
}
