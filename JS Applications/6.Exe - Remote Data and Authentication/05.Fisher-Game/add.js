async function addCatch(e) {
  e.preventDefault();
  let formData = new FormData(e.currentTarget);

  let inputAngler = formData.get('angler');
  let inputWeight = formData.get('weight');
  let inputSpecies = formData.get('species');
  let inputLocation = formData.get('location');
  let inputBait = formData.get('bait');
  let inputCaptureTime = formData.get('captureTime');

  let newUser = {
    angler: inputAngler,
    weight: inputWeight,
    species: inputSpecies,
    location: inputLocation,
    bait: inputBait,
    captureTime: inputCaptureTime,
  };
  try {
    let addResponse = await fetch('http://localhost:3030/data/catches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': localStorage.token,
      },
      body: JSON.stringify(newUser),
    });
    let addResult = await addResponse.json();
    console.log(addResult);
  } catch (error) {
      console.error(error)
  }
}

export default addCatch;
