// public/js/main.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recommendation-form");
  const result = document.getElementById("recommendation-result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const mathsGrade = document.getElementById("maths").value.toUpperCase();
    const businessGrade = document
      .getElementById("business")
      .value.toUpperCase();
    const englishGrade = document.getElementById("english").value.toUpperCase();

    let recommendation = "";
    let programImage = "";
    let programDetails = "";

    if (mathsGrade === "A" || mathsGrade === "A+" || mathsGrade === "A-") {
      recommendation = "Information Technology";
      programImage = "Pictures/IT.png";
      programDetails =
        "Program Details : Our Information Technology (IT) program equips students with the latest tech skills. Highlights: up-to-date curriculum, hands-on learning, expert faculty, diverse career prospects, and global outlook. Prepare for a tech-driven future with us!"; // Replace with program details
      // Display recommended program information
      result.innerHTML = `
          <h2>Recommended Program: ${recommendation}</h2>
          <img src="${programImage}" alt="${recommendation}" width="200">
          <p>${programDetails}</p>
      `;
    } else if (
      (businessGrade === "B" ||
        businessGrade === "B+" ||
        businessGrade === "B-" ||
        businessGrade === "A" ||
        businessGrade === "A+" ||
        businessGrade === "A-") &&
      (englishGrade === "B" ||
        englishGrade === "B+" ||
        englishGrade === "B-" ||
        englishGrade === "A" ||
        englishGrade === "A+" ||
        englishGrade === "A-")
    ) {
      recommendation = "Business Management";
      programImage = "Pictures/BM.png";
      programDetails =
        "Program Details : Our Business Management program unlocks your potential in the world of business. Explore strategy, leadership, and diverse career opportunities with us.";
      // Display recommended program information
      result.innerHTML = `
          <h2>Recommended Program: ${recommendation}</h2>
          <img src="${programImage}" alt="${recommendation}" width="200">
          <p>${programDetails}</p>
      `;
    } else if (
      englishGrade === "B" ||
      englishGrade === "B+" ||
      englishGrade === "B-" ||
      englishGrade === "A" ||
      englishGrade === "A+" ||
      englishGrade === "A-"
    ) {
      recommendation = "Communication Studies";
      programImage = "Pictures/CS.png";
      programDetails =
        "Program Details : Dive into Communication Studies and develop strong communication skills. Gain insights into media and culture while exploring diverse career paths in communication and media industries.";
      // Display recommended program information
      result.innerHTML = `
          <h2>Recommended Program: ${recommendation}</h2>
          <img src="${programImage}" alt="${recommendation}" width="200">
          <p>${programDetails}</p>
          `;
    } else {
      recommendation = "No program recommendation available.";
      // Display invalid message
      result.innerHTML = `
          <h2>Recommended Program: ${recommendation}</h2>
      `;
    }
  });
});
