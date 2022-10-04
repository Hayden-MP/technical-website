
// Content to disappear/reappear
const introContent = document.getElementById("intro-content");
const projectsContent = document.getElementById("projects-content");
const artContent = document.getElementById("art-content");
const resumeContent = document.getElementById("resume-content");


// Buttons to control visibility of content
document.getElementById("intro-btn").onclick = () => {
    introContent.style.display = "block";
    projectsContent.style.display = "none";
    artContent.style.display = "none";
    resumeContent.style.display = "none";
}

document.getElementById("projects-btn").onclick = () => {
    introContent.style.display = "none";
    projectsContent.style.display = "block";
    artContent.style.display = "none";
    resumeContent.style.display = "none";
}

document.getElementById("art-btn").onclick = () => {
    introContent.style.display = "none";
    projectsContent.style.display = "none";
    artContent.style.display = "block";
    resumeContent.style.display = "none";
}

document.getElementById("resume-btn").onclick = () => {
    introContent.style.display = "none";
    projectsContent.style.display = "none";
    artContent.style.display = "none";
    resumeContent.style.display = "block";
}

