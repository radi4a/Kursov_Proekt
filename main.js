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
    tooltip.style.left = e.pageX - tooltip.offsetWidth + 0 + "px";
    tooltip.style.top = e.pageY - 140 + "px";
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
 
    modalFlag.src = `flags/${countryCode}.png`;
    modalFlag.alt = `Flag of ${countryCapitals[countryCode].country}`;
  });
});

//Modal logic
const modal = document.getElementById("myModal");
const country = document.getElementById("country");
const capital = document.getElementById("capital");
const description = document.getElementById("description");

const modalFlag = document.getElementById("modal-flag");
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
  al: {
    country: "Албания",
    capital: " 📌 Тирана",
    description: "",
    
  },
  
  ad: {
    country: "Андора",
    capital: " 📌 Андора ла Веля",
    description: "",
   
  },

  am: {
    country: "Армения",
    capital: " 📌 Ереван",
    description: "",
   
  },

  at: {
    country: "Австрия",
    capital: " 📌 Виена",
    description: "",
   
  },

  be: {
    country: "Белгия",
    capital: " 📌 Брюксел",
    description: "",
   
  },
    
  bg: {
    country: "България",
    capital: " 📌 София",
    description: "",
   
  },

  ba: {
    country: "Босна и Херцеговина",
    capital: " 📌 Сараево",
    description: "",
  
  },
  
  by: {
    country: "Беларус",
    capital: " 📌 Минск",
    description: "",
  
  },
   
  ch: {
    country: "Швейцария",
    capital: " 📌 Берн",
    description: "",
  
  },

  cz: {
    country: "Чехия",
    capital: " 📌 Прага",
    description: "",
  },

  de: {
    country: "Германия",
    capital: " 📌 Берлин",
    description: "",
  },

  dk: {
    country: "Дания",
    capital: " 📌 Копенхаген",
    description: "",
  },

  to: {
    country: "Естония",
    capital: " 📌 Талин",
    description: "",
  },

  fi: {
    country: "Финландия",
    capital: " 📌 Хелзинки",
    description: "",
  },

  gb: {
    country: "Англия",
    capital: " 📌 Лондон",
    description: "",
  },

  ge: {
    country: "Грузия",
    capital: " 📌 Тбилиси",
    description: "",
  },

  gr: {
    country: "Гърция",
    capital: " 📌 Атина",
    description: "",
  },

  hr: {
    country: "Хърватия",
    capital: " 📌 Загреб",
    description: "",
  },

  hu: {
    country: "Унгария",
    capital: " 📌 Будапеща",
    description: "",
  },

  ie: {
    country: "Ирландия",
    capital: " 📌 Дъблин",
    description: "",
  },

  is: {
    country: "Исландия",
    capital: " 📌 Рейкявик",
    description: "",
  },

  it: {
    country: "Италия",
    capital: " 📌 Рим",
    description: "",
  },

  li: {
    country: "Лихтенщайн",
    capital: " 📌 Вадуц",
    description: "",
  },

  lt: {
    country: "Литва",
    capital: " 📌 Вилнюс",
    description: "",
  },

  lu: {
    country: "Люксембург",
    capital: " 📌 Люксембург",
    description: "",
  },

  lv: {
    country: "Лaтвия",
    capital: " 📌 Рига",
    description: "",
  },

  md: {
    country: "Молдова",
    capital: " 📌 Кишенев",
    description: "",
  },

  mk: {
    country: "Македония",
    capital: " 📌 Скопие",
    description: "",
  },

  me: {
    country: "Черна гора",
    capital: " 📌 Подгорица",
    description: "",
  },

  no: {
    country: "Норвегия",
    capital: " 📌 Осло",
    description: "",
  },

  pl: {
    country: "Полша",
    capital: " 📌 Варшава",
    description: "",
  },

  pt: {
    country: "Португалия",
    capital: " 📌 Лисабон",
    description: "",
  },

  ro: {
    country: "Румъния",
    capital: " 📌 Букурещ",
    description: "",
  },

  rs: {
    country: "Сърбия",
    capital: " 📌 Белград",
    description: "",
  },

  sk: {
    country: "Словакия",
    capital: " 📌 Братислава",
    description: "",
  },

  si: {
    country: "Словения",
    capital: " 📌 Любляна",
    description: "",
  },

  se: {
    country: "Швеция",
    capital: " 📌 Стокхолм",
    description: "",
  },

  tr: {
    country: "Турция",
    capital: " 📌 Анкара",
    description: "",
  },

  ua: {
    country: "Украйна",
    capital: " 📌 Киев",
    description: "",
  },
  
  xk: {
    country: "Косово",
    capital: " 📌 Прищина",
    description: "",
  },

  nl: {
    country: "Нидерландия",
    capital: " 📌 Амстердам",
    description: "",
  },

  es: {
    country: "Испания",
    capital: " 📌 Мадрид",
    description: "",
  },

  fr: {
    country: "Франция",
    capital: " 📌 Париж",
    description: "",
  },
  
  cy: {
    country: "Кипър",
    capital: " 📌 Никозия",
    description: "",
  },
};

const map = document.querySelector("#EU svg");
const container = document.getElementById("map-container");

let scale = 1;
let x = 0;
let y = 0;
let isDragging = false;
let startX, startY;

function updateTransform() {
  map.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
}

// Zoom със скрол
container.addEventListener("wheel", (e) => {
  e.preventDefault();

  const zoomIntensity = 0.6;
  const minScale = 1;
  const maxScale = 10; 
  const prevScale = scale;

  if (e.deltaY < 0) {
    scale *= 1 + zoomIntensity; // zoom in
  } else {
    scale /= 1 + zoomIntensity; // zoom out
  }

  if (scale < minScale) {
    scale = minScale;
  } else if (scale > maxScale) {
    scale = maxScale;
  }


  // Координати на мишката спрямо SVG контейнера
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const dx = mouseX - x;
  const dy = mouseY - y;

  x -= dx * (scale / prevScale - 1);
  y -= dy * (scale / prevScale - 1);

  updateTransform();
}, { passive: false });


// Drag с мишка (по избор)
container.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - x;
  startY = e.clientY - y;
});

container.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  x = e.clientX - startX;
  y = e.clientY - startY;
  updateTransform();
});

container.addEventListener("mousedown", (e) => {
  if (e.button === 1) { // 1 = среден бутон (scroll click)
    e.preventDefault(); // спира евентуално скролване

    // Reset zoom и позиция
    scale = 1;
    x = 0;
    y = 0;
    updateTransform();
  }
});

document.getElementById("reset-btn").addEventListener("click", () => {
  scale = 1;
  x = 0;
  y = 0;
  updateTransform();
});

container.addEventListener("mouseup", () => isDragging = false);
container.addEventListener("mouseleave", () => isDragging = false);

function closeIntro() {
  document.getElementById("introModal").style.display = "none";
}