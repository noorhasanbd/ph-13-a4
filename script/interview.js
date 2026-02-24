// 1. SElect interveiw buttons
const interviewButtons = document.querySelectorAll('.btn-success');
const interviewList = document.getElementById('interview-list');

// 2. As have mutliple cards we use loop to run addEventListener
interviewButtons.forEach(function(button) {

    
    button.addEventListener('click', function() {
        
        // 3. When we click the button we take the full card using closest
        const jobCard = button.closest('.card');

        // 4. We update the status badge by selecting that badge and put interview
        const badge = jobCard.querySelector('.badge');
        if (badge) {
            badge.innerText = 'Interview';
            badge.classList.replace('badge-primary', 'badge-success');
        }
        //5. Update the tracker cards -> Take Elements of Applied job
        const appliedElement= document.getElementById('appliednum');
        /// 5.2 select text
        const appliedNum= appliedElement.innerText;
        //5.3 convert text into number and add 1 
        const newInterviewNum= Number(appliedNum)+1;
        /// 5.4 update the cards number
        appliedElement.innerText=newInterviewNum;

        // 6. Update empty interview tab message as we have data now
        const emptyMsg = document.getElementById('interview-empty-msg');
        if (emptyMsg) {
            emptyMsg.remove();
        }

        // 7. Move the card
        interviewList.appendChild(jobCard);
        
        console.log("This specific button moved its card!");
    });
});