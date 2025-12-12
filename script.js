const themeButton = document.getElementById('themeBtn');
const bodyElement = document.body;
const themeStorageKey = 'theme';


function toggleTheme() {
    bodyElement.classList.toggle('dark-mode');


    if (bodyElement.classList.contains('dark-mode')) {
        themeButton.textContent = 'Toggle Light Mode';
        localStorage.setItem(themeStorageKey, 'dark');
    } else {
        themeButton.textContent = 'Toggle Dark Mode';
        localStorage.setItem(themeStorageKey, 'light');
    }
}


function loadTheme() {
    const savedTheme = localStorage.getItem(themeStorageKey);
    
    if (savedTheme === 'dark') {
        bodyElement.classList.add('dark-mode');
        if (themeButton) {
            themeButton.textContent = 'Toggle Light Mode';
        }
    } else if (themeButton) {
        themeButton.textContent = 'Toggle Dark Mode';
    }
}

const editJobButton = document.getElementById('editJobBtn');
const jobTitleElement = document.getElementById('jobTitle');


function editJobTitle() {
    const newTitle = prompt("Enter your new job title:", jobTitleElement.textContent);
    
    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitleElement.textContent = newTitle.trim();
    }
}

const toggleSkillsButton = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection'); 
const hiddenClass = 'hidden'; 

function toggleSkills() {
    skillsSection.classList.toggle(hiddenClass);

    if (skillsSection.classList.contains(hiddenClass)) {
        toggleSkillsButton.textContent = 'Show Skills';
    } else {
        toggleSkillsButton.textContent = 'Hide Skills';
    }
}

const messageBox = document.getElementById('msgBox');
const counterElement = document.getElementById('counter');
const maxLength = 200; 

function updateCharCounter() {
    if (messageBox && counterElement) {
        const remaining = maxLength - messageBox.value.length;
        
        counterElement.textContent = remaining;
    }
}

function validateForm() {
    const nameField = document.getElementById('nameField');
    const emailField = document.getElementById('emailField');

    if (nameField.value.trim() === "" || emailField.value.trim() === "") {
        alert("Please ensure both the Name and Email fields are filled out before submitting.");
        return false; 
    }
    return true;
}

const dateElement = document.getElementById('currentDate');

function displayCurrentDate() {
    if (dateElement) {
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString();
    }
}

const greetingElement = document.getElementById('greetingMessage');

function displayGreeting() {
    if (greetingElement) {
        const now = new Date();
        const hour = now.getHours();
        let greeting;

        if (hour < 12) {
            greeting = "Good morning";
        } else if (hour < 18) { 
            greeting = "Good afternoon";
        } else { 
            greeting = "Good evening";
        }

        greetingElement.textContent = greeting + "!";
        
        greetingElement.style.color = '#ff99c9'; 
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    } 

    if (editJobButton) {
        editJobButton.addEventListener('click', editJobTitle);
    }
    
    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', toggleSkills);
    }

    if (messageBox) {
        updateCharCounter(); 
        messageBox.addEventListener('keyup', updateCharCounter);
    }

    displayCurrentDate();

    displayGreeting();
});