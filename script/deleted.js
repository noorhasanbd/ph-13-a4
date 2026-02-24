// 1. Select all trash/ghost buttons
const deleteButtons = document.querySelectorAll(".btn-ghost");

// 2. Loop through the delete buttons (Fixed variable name)
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // 3. Find the card that contains this specific delete button
    const jobCard = button.closest(".card");
    const currentParent = jobCard.parentElement.id;
    const allJobsCardElement = document.getElementById("alljobsnum");
    const allJobsElement = document.getElementById("all-jobs-number");
    const allJobsNumber = allJobsCardElement.innerText;
    if (currentParent == "all-jobs-list") {
      const newAllJobsNumber = Number(allJobsNumber) - 1;
      allJobsCardElement.innerText = newAllJobsNumber;
      allJobsElement.innerText = newAllJobsNumber;
    } else if (currentParent === "rejected-list") {
      //reducing interview number
      const rejectedElement = document.getElementById("rejectednum");
      const rejectedNum = rejectedElement.innerText;
      const newRejectedNum = Number(rejectedNum) - 1;
      rejectedElement.innerText = newRejectedNum;
      /// reducing all job number
      const newAllJobsNumber = Number(allJobsNumber) - 1;
      allJobsCardElement.innerText = newAllJobsNumber;
      allJobsElement.innerText = newAllJobsNumber;
    } else if (currentParent === "interview-list") {
      //reducing rejected number
      const interviewElement = document.getElementById("appliednum");
      const interviewNum = interviewElement.innerText;
      const newInterviewNum = Number(interviewNum) - 1;
      interviewElement.innerText = newInterviewNum;

      ///reducing all job numbers
      const newAllJobsNumber = Number(allJobsNumber) - 1;
      allJobsCardElement.innerText = newAllJobsNumber;
      allJobsElement.innerText = newAllJobsNumber;
    }

    jobCard.remove();

    console.log("Card deleted successfully!");
  });
});
