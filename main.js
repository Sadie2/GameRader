function darkmode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}   


function Largetext(){
    var element = document.body;
    element.classList.add("Large-text");
    element.classList.remove("Medium-text");
    element.classList.remove("Small-text");
}

function Mediumtext(){
    var element = document.body;
    element.classList.add("Medium-text");
    element.classList.remove("Large-text");
    element.classList.remove("Small-text");
}

function Smalltext(){
    var element = document.body;
    element.classList.add("Small-text");
    element.classList.remove("Large-text");
    element.classList.remove("Medium-text");
}

function changeText(){
    var name = document.getElementById("welcomeForm").fname.value;
    var welcome = "<h2> Thank you for submitting </h2> " + name + "! <br> <a href= 'Contact.html'> <button>Submit another form</button> </a>";
    document.getElementById("welcomeText").innerHTML = welcome;
}



