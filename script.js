document.addEventListener("DOMContentLoaded", () => {
    // Countdown Timer
    function startCountdown(endTime) {
        function updateTimer() {
            let now = new Date().getTime();
            let timeLeft = endTime - now;

            if (timeLeft <= 0) {
                document.getElementById("timer").innerHTML = "0d 0h 0m 0s";
                clearInterval(timerInterval);
                return;
            }

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        let timerInterval = setInterval(updateTimer, 1000);
        updateTimer();
    }

    let countdownDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000); // 5 days from now
    startCountdown(countdownDate);

    // Mobile Navbar Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }

            // Close mobile menu after clicking a link
            navbar.classList.remove("active");
        });
    });

    // Button Click Animation
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);
        });
    });

    // Floating Contact Button Click Action
    const floatingBtn = document.querySelector(".floating-btn");
    if (floatingBtn) {
        floatingBtn.addEventListener("click", () => {
            window.location.href = "#contact"; // Scrolls to contact section
        });
    }
});
