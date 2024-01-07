function showMenu(){
    var menu = document.querySelector(".menu");
    menu.classList.toggle('show');
        // This function will be called on every click on the document
        function handleClickOutside(event) {
            // Check if the click is outside the menu
            if (!menu.contains(event.target) && menu.classList.contains('show')) {
                // If it's outside and the menu is open, close it
                menu.classList.remove('show');
                // Remove the event listener since the menu is closed
                document.removeEventListener('click', handleClickOutside);
            }
        }
    
        // Add the event listener only if the menu is being shown
        if (menu.classList.contains('show')) {
            // Use setTimeout to add the event listener after the current click event has finished
            // This prevents the menu from closing immediately when the toggle button is clicked
            setTimeout(() => {
                document.addEventListener('click', handleClickOutside);
            }, 0);
        }
    
}

var typed = new Typed(".auto-type", {
    strings: ["a Developer", "an Engineer", "a Student"],
    typeSpeed: 150,
    backSpeed: 150,
    looped: true
})

var homeIcon = document.querySelector(".home-icon");
var projectsIcon = document.querySelector(".projects-icon");
var skillsIcon = document.querySelector(".skills-icon");
var contactIcon = document.querySelector(".contact-icon");
var Resume = document.querySelector(".open-work");

function toHome(){
    location.href = "./index.html"
}

function toProjects(){
    location.href = "./projects.html"
}

function toSkills(){
    location.href = "./skills.html"
}

function toContact(){
    location.href = "./contact.html"
}

function toResume(){
    window.open("https://drive.google.com/file/d/1-3CrIVzdp_W8ZxxyUOnBNP0Y6JDdTv9L/view?usp=sharing", '_blank');
}
