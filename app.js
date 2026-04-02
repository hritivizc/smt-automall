(function () {
  const doneInstagram = document.getElementById("doneInstagram");
  const doneReview = document.getElementById("doneReview");
  const continueBtn = document.getElementById("continueBtn");
  const progressNote = document.getElementById("progressNote");

  if (!doneInstagram || !doneReview || !continueBtn) {
    return;
  }

  function refreshState() {
    const completed = Number(doneInstagram.checked) + Number(doneReview.checked);
    const allDone = completed === 2;

    continueBtn.disabled = !allDone;
    continueBtn.textContent = allDone
      ? "Open Discount Page"
      : "Complete " + (2 - completed) + " step" + (completed === 1 ? "" : "s") + " to continue";

    if (progressNote) {
      progressNote.textContent = allDone
        ? "All set. Discount unlocked."
        : "Progress: " + completed + "/2 completed.";
    }
  }

  doneInstagram.addEventListener("change", refreshState);
  doneReview.addEventListener("change", refreshState);

  continueBtn.addEventListener("click", function () {
    window.location.href = "discount.html";
  });

  refreshState();
})();
