
// Content to disappear/reappear
const introContent = document.getElementById("intro-content");
const projectsContent = document.getElementById("projects-content");
const artContent = document.getElementById("art-content");
const resumeContent = document.getElementById("resume-content");

// buttons to control visibility of content
const introButton = document.getElementById("intro-btn");
const projectsButton = document.getElementById("projects-btn")
const artButton = document.getElementById("art-btn");
const resumeButton = document.getElementById("resume-btn");

// Buttons to control visibility of content
introButton.onclick = () => {
    introContent.style.display = "block";
    introButton.style.background = "darkmagenta";
    introButton.style.color = "white";

    projectsContent.style.display = "none";
    projectsButton.style.background = "none";
    projectsButton.style.color = "black";

    artContent.style.display = "none";
    artButton.style.background = "none";
    artButton.style.color = "black";

    resumeContent.style.display = "none";
    resumeButton.style.background = "none";
    resumeButton.style.color = "black";
}

projectsButton.onclick = () => {
    introContent.style.display = "none";
    introButton.style.background = "none";
    introButton.style.color = "black";

    projectsContent.style.display = "block";
    projectsButton.style.background = "darkmagenta";
    projectsButton.style.color = "white";

    artContent.style.display = "none";
    artButton.style.background = "none";
    artButton.style.color = "black";

    resumeContent.style.display = "none";
    resumeButton.style.background = "none";
    resumeButton.style.color = "black";
}

artButton.onclick = () => {
    introContent.style.display = "none";
    introButton.style.background = "none";
    introButton.style.color = "black";

    projectsContent.style.display = "none";
    projectsButton.style.background = "none";
    projectsButton.style.color = "black";

    artContent.style.display = "block";
    artButton.style.background = "darkmagenta";
    artButton.style.color = "white";

    resumeContent.style.display = "none";
    resumeButton.style.background = "none";
    resumeButton.style.color = "black";
}

resumeButton.onclick = () => {
    introContent.style.display = "none";
    introButton.style.background = "none";
    introButton.style.color = "black";

    projectsContent.style.display = "none";
    projectsButton.style.background = "none";
    projectsButton.style.color = "black";

    artContent.style.display = "none";
    artButton.style.background = "none";
    artButton.style.color = "black";

    resumeContent.style.display = "block";
    resumeButton.style.background = "darkmagenta";
    resumeButton.style.color = "white";
}


