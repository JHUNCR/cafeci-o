const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('GRACIAS POR ACEPTAR ESPERO LA PASEMOS CHIDO UWU (confirmame con un mensaje porfi)');

    window.open(
        "https://wa.me/51981240616?text=Hola%20he%20aceptado%20espero%20la%20pasemos%20bien",
        "_blank"
        );
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})