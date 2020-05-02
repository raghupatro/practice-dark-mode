document
  .getElementById("theme-checkbox")
  .addEventListener("click", function () {
    if (document.getElementById("theme-checkbox").checked) {
      document.getElementById("style").href = "./css/styles-light.css";
    } else {
      document.getElementById("style").href = "./css/styles-dark.css";
    }
  });
