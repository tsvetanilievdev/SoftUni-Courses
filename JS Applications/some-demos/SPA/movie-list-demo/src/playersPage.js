let playersSection = document.querySelector('section.players');

function showPage() {
  playersSection.classList.remove('hidden');
}
function hidePage() {
  playersSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
}