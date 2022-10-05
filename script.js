
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

// Lists to keep content organized
const content = [introContent, projectsContent, artContent, resumeContent];
const buttons = [introButton, projectsButton, artButton, resumeButton];

// A function to cycle through the content and button styles
function changeVisibility(activeContent, activeButton, contentArr, buttonsArr) {
    // Since contentArr.length == buttonsArr.length, we can use one for-loop
    for(i = 0; i < contentArr.length; i++) {

        if(activeContent === contentArr[i]) {
            contentArr[i].style.display = "block";
        } else {
            contentArr[i].style.display = "none";
        }

        if(activeButton === buttonsArr[i]) {
            buttonsArr[i].style.background = "darkmagenta";
            buttonsArr[i].style.color = "white";
        } else {
            buttonsArr[i].style.background = "white";
            buttonsArr[i].style.color = "black";
        }
    }
}

// Buttons to control visibility of content
introButton.onclick = () => {
    changeVisibility(introContent, introButton, content, buttons);
}

projectsButton.onclick = () => {
    changeVisibility(projectsContent, projectsButton, content, buttons);
}

artButton.onclick = () => {
    changeVisibility(artContent, artButton, content, buttons);
}

resumeButton.onclick = () => {
    changeVisibility(resumeContent, resumeButton, content, buttons);
}


