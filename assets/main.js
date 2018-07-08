var day = true;
function switchShift() {
    var dayShift = document.getElementsByClassName("day-shift");
    var nightShift = document.getElementsByClassName("night-shift");

   if (!day) {
        for( i = 0; i < dayShift.length; i++){
            dayShift[i].classList.remove("hide");
        }
        for( i = 0; i < nightShift.length; i++){
            nightShift[i].classList.add("hide");
        }
        day = true;
    } else {

        for( i = 0; i < nightShift.length; i++){
            nightShift[i].classList.remove("hide");
        }

        for( i = 0; i < dayShift.length; i++){
            dayShift[i].classList.add("hide");
        }

        day = false;
    }
}