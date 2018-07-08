var day = true;
function switchShift() {
    var dayShift = document.getElementsByClassName("day-shift");
    var nightShift = document.getElementsByClassName("night-shift");
   if (!day) {
       document.body.style.backgroundImage = "url('assets/day.svg')";
        for( i = 0; i < dayShift.length; i++){
            dayShift[i].classList.remove("hide");
        }
        for( i = 0; i < nightShift.length; i++){
            nightShift[i].classList.add("hide");
        }
        day = true;
    } else {
       document.body.style.backgroundImage = "url('assets/night.png')";
        for( i = 0; i < nightShift.length; i++){
            nightShift[i].classList.remove("hide");
        }

        for( i = 0; i < dayShift.length; i++){
            dayShift[i].classList.add("hide");
        }

        day = false;
    }
}