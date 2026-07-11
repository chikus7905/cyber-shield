const steps = document.querySelectorAll(".simulation-step");
const lines = document.querySelectorAll(".simulation-line");

const nextBtn = document.getElementById("nextStep");
const resetBtn = document.getElementById("resetSimulation");

const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress-text");
let currentStep = 0;

const simulationData = [
    {
        title: "User Receives Email",
        text: "The attack begins when a phishing email arrives in the user's inbox."
    },
    {
        title: "Fake Email",
        text: "The email pretends to be from a trusted company and encourages the user to click a link."
    },
    {
        title: "Malicious Link",
        text: "The victim clicks the fake link, which opens a fraudulent website."
    },
    {
        title: "Fake Login",
        text: "The user unknowingly enters their username and password into the fake login page."
    },
    {
        title: "Stay Safe",
        text: "Always verify links, enable Multi-Factor Authentication (MFA), and never share your credentials."
    }
];

const simulationTitle = document.getElementById("simulationTitle");
const simulationText = document.getElementById("simulationText");
const simulationInfo =
document.querySelector(".simulation-info");

const simulationComplete =
document.getElementById("simulationComplete");


nextBtn.addEventListener("click", () => {

    if (currentStep < steps.length - 1) {

        steps[currentStep].classList.remove("active");

        lines[currentStep].classList.add("active");

        currentStep++;

        steps[currentStep].classList.add("active");

        updateSimulation();
        movePacket();

        
if(currentStep === steps.length - 1){

    simulationComplete.style.display = "block";

}
    }

});

resetBtn.addEventListener("click", () => {

    currentStep = 0;

    steps.forEach(step => step.classList.remove("active"));
    lines.forEach(line => line.classList.remove("active"));

    steps[0].classList.add("active");

    updateSimulation();
movePacket();

simulationComplete.style.display = "none";


if(currentStep === steps.length - 1){

    simulationComplete.style.display = "block";

    nextBtn.disabled = true;

}

nextBtn.disabled = false;
});


const packet = document.querySelector(".data-packet");

function movePacket(){

    if(!packet) return;

    const activeIcon =
    steps[currentStep].querySelector(".step-icon");

    packet.style.left =
    activeIcon.offsetLeft + activeIcon.offsetWidth / 2 - 7 + "px";

    packet.style.top =
    activeIcon.offsetTop + activeIcon.offsetHeight / 2 - 7 + "px";
}

function updateSimulation(){

    simulationInfo.style.opacity = 0;
    simulationInfo.style.transform = "translateY(15px)";

    const percentage = ((currentStep + 1) / steps.length) * 100;

    progressFill.style.width = percentage + "%";

    progressText.textContent =
    `Step ${currentStep + 1} of ${steps.length}`;

    setTimeout(() => {

        simulationTitle.textContent =
        simulationData[currentStep].title;

        simulationText.textContent =
        simulationData[currentStep].text;

        simulationInfo.style.opacity = 1;
        simulationInfo.style.transform = "translateY(0)";

    }, 200);

}




updateSimulation();
movePacket();