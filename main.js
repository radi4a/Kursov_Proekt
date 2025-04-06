const tooltip = document.getElementById("flag-tooltip");
const flagImg = document.getElementById("flag-img");

//Tooltip logic
document.querySelectorAll("#EU path").forEach((path) => {
  const countryCode = path.id.toLowerCase(); // "AL", "AD", etc.

  path.addEventListener("mouseenter", (e) => {
    flagImg.src = `flags/${countryCode}.png`; // update to .png if needed
    flagImg.alt = path.getAttribute("name") + " Flag";
    tooltip.style.display = "block";
  });

  path.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  });

  path.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  path.addEventListener("click", () => {
    modal.style.display = "block";
    console.log(countryCode);
    country.innerText = countryCapitals[countryCode].country;
    capital.innerText = countryCapitals[countryCode].capital;
    description.innerText = countryCapitals[countryCode].description;
  });
});

//Modal logic
const modal = document.getElementById("myModal");
const country = document.getElementById("country");
const capital = document.getElementById("capital");
const description = document.getElementById("description");
const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const countryCapitals = {
  bg: {
    country: "Bulgaria",
    capital: "Sofia",
    description: "Bulgaria is a country in Southeast Europe.",
  },
  fr: {
    country: "France",
    capital: "Paris",
    description: "France is a country in Western Europe.",
  },
  de: {
    country: "Germany",
    capital: "Berlin",
    description: "Germany is a country in Central Europe.",
  },
  it: {
    country: "Italy",
    capital: "Rome",
    description: "Italy is a country in Southern Europe.",
  },
};
