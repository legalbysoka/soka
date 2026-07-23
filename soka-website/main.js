document.addEventListener("DOMContentLoaded", () => {
    const disclaimerOverlay = document.getElementById("bci-disclaimer");
    const agreeBtn = document.getElementById("agree-btn");

    // Check if the user has already acknowledged the disclaimer
    const hasAcknowledged = localStorage.getItem("soka_disclaimer_ack");

    if (hasAcknowledged === "true") {
        // If acknowledged, hide it immediately
        if (disclaimerOverlay) {
            disclaimerOverlay.style.display = "none";
        }
    } else {
        // Handle agreement click
        if (agreeBtn) {
            agreeBtn.addEventListener("click", () => {
                localStorage.setItem("soka_disclaimer_ack", "true");
                disclaimerOverlay.style.display = "none";
            });
        }
    }
});