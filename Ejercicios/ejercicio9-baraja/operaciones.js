
var carta1 = null;
var carta2 = null;


document.querySelectorAll(".carta").forEach(element => { element.addEventListener("click", girarCarta, false) });

function girarCarta() {


    var clase = event.target.classList[1];

    if (carta1 == null) {
        carta1 = event.target;
        carta1.classList.add("girada");
        carta1.classList.add("anversoAdelante");

    } else if (carta2 == null) {
        carta2 = event.target;
        if (carta1.parentNode.id == carta2.parentNode.id) {
            carta2.classList.add("girada");
            carta2.classList.add("anversoAdelante");
            carta1 = null;
            carta2 = null;
        } else {
            carta2.classList.add("girada");
            carta2.classList.add("anversoAdelante");
            setTimeout(() => {
                //console.log("Delayed for 1 second.");
            }, 3000);
            carta1.classList.remove('girada');
            carta1.classList.remove('anversoAdelante');
            carta2.classList.remove('girada');
            carta2.classList.remove('anversoAdelante');

            carta1 = null;
            carta2 = null;

        }
    } else {

        carta1 = null;
        carta2 = null;
        carta1 = event.target;
    }

}
