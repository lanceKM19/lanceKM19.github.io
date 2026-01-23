const themeSwitcher = document.getElementById('theme-switcher');
if (themeSwitcher) {
themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
    });
}

const contactForm = document.getElementById("contactForm"); 
if (contactForm) {
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("response");

    if (name === "" || message === "") {
        response.textContent = "Fill out all text boxes.";
        response.style.color = "red";
    } else {
        response.innerHTML = "Thank you for contacting us, " + name + "!<br>Your message: " + message;
        response.style.color = "green";
        this.reset();
    }
    });
}