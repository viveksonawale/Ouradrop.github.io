
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active'); // Add the active class
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active'); // Remove the active class
}



// faq


document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            // Close all other open FAQs
            faqs.forEach((item) => {
                if (item !== faq && item.classList.contains("active")) {
                    item.classList.remove("active");
                }
            });

            // Toggle the clicked FAQ
            faq.classList.toggle("active");
        });
    });
});

// Open Popup
function openPopup() {
    document.getElementById("popupOverlay").style.display = "block";
}

// Close Popup
function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        let phoneInput = document.getElementById("phone");
        let phoneError = document.getElementById("phoneError");

        // Strict validation: Only allow exactly 10 digits
        if (!/^\d{10}$/.test(phoneInput.value)) {
            phoneError.style.display = "block"; // Show error message
            event.preventDefault(); // Stop form submission
        } else {
            phoneError.style.display = "none"; // Hide error if input is valid
        }
    });
});


