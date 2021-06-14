function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');

    //add event mouseover
    gradientBox.addEventListener('mousemove', mouseIn)
    gradientBox.addEventListener('mouseout', mouseOut)

    function mouseIn(event) {
        let power = event.offsetX / (event.target.clientWidth - 1); // offsetX is current mouse width of the box, clientWidth is total width of the box;
        power = Math.trunc(power * 100); // take the procent
        document.getElementById('result').textContent = power + '%';
    }

    function mouseOut() {
        document.getElementById('result').textContent = '';
    }
}