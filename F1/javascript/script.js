document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("output");


    if (name === "" || message === "") {
        response.textContent = "Fill out all text boxes.";
        response.style.color = "red";
    } else {
        response.textContent = "Thank you for Contacting Us, " + name + "!";
        response.style.color = "green";
        this.reset();
    }
});