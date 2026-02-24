// 1. Select rejected buttons
const rejectedButtons = document.querySelectorAll('.btn-error');
const rejectedList = document.getElementById('rejected-list');

// 2. As have mutliple cards we use loop to run addEventListener
rejectedButtons.forEach(function(button) {

    
    button.addEventListener('click', function() {
        
        // 3. When we click the button we take the full card using closest
        const jobCard = button.closest('.card');

        // 4. We update the status badge by selecting that badge and put rejected
        const badge = jobCard.querySelector('.badge');
        if (badge) {
            badge.innerText = 'Rejected';
            badge.classList.remove('badge-primary', 'badge-success', 'badge-error');
            badge.classList.add('badge-error');
        }
       const currentParent = jobCard.parentElement.id;
        // 5.1 Check if card is coming from outside the reject List
        if (currentParent !== "rejected-list") {
        // 5.2 select reject text
        const rejectedElement = document.getElementById("rejectednum");
        const rejectedNum = rejectedElement.innerText;
        if(currentParent==='interview-list'){
            const interviewElement = document.getElementById("appliednum");
            const interviewNum = interviewElement.innerText;

            // convert text into number and decrement 1 as the item is moved from interview
            const newInterviewNum = Number(interviewNum) - 1;
            interviewElement.innerText = newInterviewNum;
        }
        // 5.3 convert text into number and add 1 to increase rejected number
        const newRejectedNum = Number(rejectedNum) + 1;

        // 5.4 update the cards number
        rejectedElement.innerText = newRejectedNum;
        }

        // 6. Update empty rejected tab message as we have data now
        const emptyMsg = document.getElementById('rejected-empty-msg');
        if (emptyMsg) {
            emptyMsg.remove();
        }

        // 7. Move the card
        rejectedList.appendChild(jobCard);
        
        console.log("This specific button moved its card!");
    });
});