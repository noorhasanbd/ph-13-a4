// 1. SElect interveiw buttons
const interviewButtons = document.querySelectorAll(".btn-success");
const interviewList = document.getElementById("interview-list");

// 2. As have mutliple cards we use loop to run addEventListener
interviewButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // 3. When we click the button we take the full card using closest
    const jobCard = button.closest(".card");

    // 4. We update the status badge by selecting that badge and put interview
    const badge = jobCard.querySelector(".badge");
    if (badge) {
      badge.innerText = "Interveiw";
      //remove the previous class to remove color
      badge.classList.remove("badge-primary", "badge-success", "badge-error");
      /// add green color
      badge.classList.add("badge-success");
    }
    const currentParent = jobCard.parentElement.id;
    // 5.1 Check if card is coming from outside the Interview List
    if (currentParent !== "interview-list") {
      // 5.2 select text
      const interviewElement = document.getElementById("appliednum");
      const interviewNum = interviewElement.innerText;

      if(currentParent==='rejected-list'){
        const rejectedElement = document.getElementById("rejectednum");
        const rejectedNum = rejectedElement.innerText;

       
        const newRejectedNum = Number(rejectedNum) -1;
        rejectedElement.innerText = newRejectedNum;
        }
      // 5.3 convert text into number and add 1
      const newInterviewNum = Number(interviewNum) + 1;

      // 5.4 update the cards number
      interviewElement.innerText = newInterviewNum;

    }

    // 6. Update empty interview tab message as we have data now
    const emptyMsg = document.getElementById("interview-empty-msg");
    if (emptyMsg) {
      emptyMsg.remove();
    }

    // 7. Move the card
    interviewList.appendChild(jobCard);

    console.log("This specific button moved its card!");
  });
});
