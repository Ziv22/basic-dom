const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }

const button = document.getElementById("checkReservation");

const checkReservation = function(){
    let name = document.getElementById("name").value;
    const message = document.getElementById("message");

    name = name.toLowerCase();

    if(reservations[name] != undefined) {
        if(reservations[name].claimed){
            message.innerHTML = "You're reservation has been claimed already";
        } else {
            message.innerHTML = `Welcome ${name}! `;
        }
    } else {
        reservations[name] = {cliamed:true}
        message.innerHTML = "There's no existing resrvation";
    }
}



button.onclick = function(){
    checkReservation();
}