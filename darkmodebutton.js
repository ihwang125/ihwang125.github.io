function myFunction(checked) {
    var element = document.body;
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('a');
    if (checked) {
        console.log("Adding dark-mode class to body");
        element.classList.add("dark-mode");
        sections.forEach(section => {
            section.classList.add("dark-mode-section");
        });
        links.forEach(link => {
            link.classList.add("dark-mode-link");
        });
    } else {
        console.log("Removing dark-mode class from body");
        element.classList.remove("dark-mode");
        sections.forEach(section => {
            section.classList.remove("dark-mode-section");
        });
        links.forEach(link => {
            link.classList.remove("dark-mode-link");
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("darkModeCheckBox").addEventListener("change", function() {
        console.log("Toggle input state: ", this.checked);
        myFunction(this.checked);
    });
});