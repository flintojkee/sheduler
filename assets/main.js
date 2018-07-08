var day = true;
function switchShift() {
    var dayShift = document.getElementsByClassName("day-shift");
    var nightShift = document.getElementsByClassName("night-shift");
    var weekDays = document.getElementsByClassName("weekday");
    var nightShiftDays = document.getElementsByClassName("weekday-night");
   if (!day) {
       document.body.style.backgroundImage = "url('assets/day.svg')";
        for( i = 0; i < dayShift.length; i++){
            dayShift[i].classList.remove("hide");
        }
        for( i = 0; i < nightShift.length; i++){
            nightShift[i].classList.add("hide");
        }
       for( i = 0; i < nightShiftDays.length; i++){
           nightShiftDays[i].classList.add("hide");
       }
       for( i = 0; i < weekDays.length; i++){
           weekDays[i].style.color = "#31272D";
       }
        day = true;
    } else {
       document.body.style.backgroundImage = "url('assets/night.png')";
        for( i = 0; i < nightShift.length; i++){
            nightShift[i].classList.remove("hide");
        }
       for( i = 0; i < nightShiftDays.length; i++){
           nightShiftDays[i].classList.remove("hide");
       }
       for( i = 0; i < weekDays.length; i++){
           weekDays[i].style.color = "#f3fffa";
       }
        for( i = 0; i < dayShift.length; i++){
            dayShift[i].classList.add("hide");
        }

        day = false;
    }
}

var hours = document.getElementsByClassName("button");
for (var i = 0; i < hours.length; i++) {
    hours[i].onclick = function(){
        console.log(this.classList.contains("assigned"));
        if(this.classList.contains("assigned")){
            this.parentNode.style.backgroundColor = "#C1C1C1";
            this.style.backgroundColor = "#4CAF50";
            this.innerHTML = "Assign";
            this.classList.remove("assigned");
        }else{
            this.parentNode.style.backgroundColor = "#4CAF50";
            this.style.backgroundColor = "#cd0012";
            this.innerHTML = "Deny";
            this.classList.add("assigned");
        }
    }
}