// 1. Select all trash/ghost buttons
const deleteButtons = document.querySelectorAll(".btn-ghost");

// 2. Loop through the delete buttons (Fixed variable name)
deleteButtons.forEach(function (button) {
  
  button.addEventListener("click", function () {
    
    // 3. Find the card that contains this specific delete button
    const jobCard = button.closest(".card");
    const currentParent = jobCard.parentElement.id;
    if(){
      
    }
    else if(currentParent==='rejected-list'){

        const rejectedElement = document.getElementById("rejectednum");
        const rejectedNum = rejectedElement.innerText;
        const newRejectedNum = Number(rejectedNum) -1;
        rejectedElement.innerText = newRejectedNum;

      }
      else if(currentParent==='interview-list'){

        const interviewElement = document.getElementById("appliednum");
        const interviewNum = interviewElement.innerText;
        const newInterviewNum = Number(interviewNum) - 1;
        interviewElement.innerText = newInterviewNum;

      }

    
    
        jobCard.remove(); 
        
        console.log("Card deleted successfully!");
  
  });
});