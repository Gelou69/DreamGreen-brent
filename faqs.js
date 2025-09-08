document.addEventListener('DOMContentLoaded', () => {
    // Select all the 'CLICK TO VIEW' buttons on the page.
    const buttons = document.querySelectorAll('.faq-button');

    // Loop through each button to add a click event listener.
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the parent .faq-item of the clicked button.
            const faqItem = button.closest('.faq-item');

            // Find the .faq-answer within that specific faq-item.
            const answer = faqItem.querySelector('.faq-answer');

            // Toggle the 'active' class on the answer.
            // If the class is present, it's removed (hiding the answer).
            // If the class is not present, it's added (showing the answer).
            answer.classList.toggle('active');

            // Optional: Change the button text based on the answer's state.
            if (answer.classList.contains('active')) {
                button.textContent = 'CLICK TO HIDE';
            } else {
                button.textContent = 'CLICK TO VIEW';
            }
        });
    });
});