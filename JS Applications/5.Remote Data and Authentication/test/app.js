document.getElementById('custom-form').addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget);

    console.log(formData.get('title'))
    console.log(formData.get('content'))

    e.currentTarget.reset()

})