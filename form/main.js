
const container = document.getElementById("container");
const form = document.getElementById("form");
const name = document.getElementById("name");
const salary = document.getElementById("salary");
const birthday = document.getElementById("birthday");
const phone = document.getElementById("phone");
const submit = document.getElementById("button");
const messageArea = document.getElementById("messageArea");

let text = "";
let welcomeMessage = "";

const validate = function(){
    messageArea.innerHTML = "";

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
    container.classList.remove('visible-container');
    container.classList.add('invisible-container');
    welcomeMessage = document.createElement("h1");
    welcomeMessage.classList.add("welcome-message");
    welcomeMessage.innerHTML = `Welocme ${name.value}`;
    document.body.appendChild(welcomeMessage);
}

const displayError = function(text){
        let errorMessage = document.createElement("li");
        errorMessage.innerHTML = text;
        errorMessage.classList.add("error-message");
        messageArea.appendChild(errorMessage);
}

const clearMessageArea = function(){
    messageArea.innerHTML = "";
}

submit.onclick = function(){
    validate()
}

const inputDesign = function(element){
    element.backgroundColor =  "rgb(251, 129, 159)";
}