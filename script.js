const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Java Developer",
    "Python Enthusiast",
    "SQL Developer"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function type() {

    currentRole = roles[roleIndex];

    if (!isDeleting) {

        document.getElementById("typing").textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }

    } else {

        document.getElementById("typing").textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;
        }

    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
