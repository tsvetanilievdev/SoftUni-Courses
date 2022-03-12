let listSection = document.querySelector('section.list');

function showPage() {
  listSection.classList.remove('hidden');
}
function hidePage() {
  listSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
}