function toggleMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("show");

}


function submitForm(event) {

    event.preventDefault();

    alert(
        "Thank you! Your enquiry has been submitted."
    );

}


const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}