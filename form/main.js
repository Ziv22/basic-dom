
const container = document.getElementById("container");
const form = document.getElementById("form");
const name = document.getElementById("name");
const salary = document.getElementById("salary");
const birthday = document.getElementById("birthday");
const phone = document.getElementById("phone");
const submit = document.getElementById("button");
const messageArea = document.getElementById("messageArea");

let good = true;
let text = "";
let messageCounter = 0;
let welcomeMessage = "";

const validate = function(){
    messageArea.innerHTML = "";
    // clearMessageArea();
    if(!(name.value.length > 2)){
        good = false;
        text = "Name's length can't be 1 character"
        console.log(text);
        displayError(text)
        return
    }
    if(!(salary.value > 10000 && salary.value < 16000)){
        good = false;
        text = "Salary should be between 10K to 16K";
        console.log(text);
        displayError(text)
        return
    }
    if(!birthday.value){
        good = false;
        text = "Birthday can't be empty";
        console.log(text);
        displayError(text);
        return
    } 
    if(phone.value.length != 10){
        good = false;
        text = "Phone number should contain 10 digits";
        console.log(text);
        displayError(text);
        return
    } 
    console.log("success")
    form.removeAttribute("display");
    container.display = 'none';
    welcomeMessage = document.createElement("h1");
    welcomeMessage.innerHTML = `Welocme ${name.value}`;
    document.body.appendChild(welcomeMessage);
}

const displayError = function(text){
    // if(messageCounter < 4){
        let errorMessage = document.createElement("li");
        errorMessage.innerHTML = text;
        errorMessage.classList.add("error-message");
        messageArea.appendChild(errorMessage);
        // messageCounter++; 
    // }
}
const clearMessageArea = function(){
    messageArea.innerHTML = "";
}

submit.onclick = function(){
    validate()
}