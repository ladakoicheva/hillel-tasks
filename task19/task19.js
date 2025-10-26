import './styles.scss';
import './img/starWars.jpg';

const entities = {
  people: {
    url: "https://swapi.dev/api/people/",
    nextUrl: null,
    list: document.querySelector(".people ul"),
    section: document.querySelector(".people"),
  },
  planets: {
    url: "https://swapi.dev/api/planets/",
    nextUrl: null,
    list: document.querySelector(".planets ul"),
    section: document.querySelector(".planets"),
  },
  vehicles: {
    url: "https://swapi.dev/api/vehicles/",
    nextUrl: null,
    list: document.querySelector(".vehicles ul"),
    section: document.querySelector(".vehicles"),
  },
};

function loadData(entity) {
  const urlToFetch = entity.nextUrl || entity.url;
  const oldButton = entity.section.querySelector(".loadBtn");
  if (oldButton) {
    oldButton.remove();
  }
  fetch(urlToFetch)
    .then((res) => res.json())
    .then((result) => {
     
      showContent(result.results, entity.list);

      entity.nextUrl = result.next;

      if (entity.nextUrl) {
        let button = document.createElement("button");
        button.classList.add("loadBtn");
        button.textContent = "Load More";
        
        entity.section.appendChild(button);

        button.addEventListener("click", () => {
          loadData(entity);
        });
      }
    });
}


function showContent(data, parentList) {
  data.forEach((item) => {
    const element = document.createElement("li");
    element.textContent = item.name;
    
    parentList.appendChild(element);
  });
}

function setActiveSection(activeSection) {
  
  if (activeSection === "people") {
    entities.people.section.style.display = "block";
    entities.planets.section.style.display = "none";
    entities.vehicles.section.style.display = "none";
  } else if (activeSection === "planets") {
    entities.people.section.style.display = "none";
    entities.planets.section.style.display = "block";
    entities.vehicles.section.style.display = "none";
  } else if (activeSection === "vehicles") {
    entities.people.section.style.display = "none";
    entities.planets.section.style.display = "none";
    entities.vehicles.section.style.display = "block";
  }
}


document.querySelector(".people-endpoint").addEventListener("click", () => {
  setActiveSection("people");
  entities.people.list.innerHTML = ""; 
  entities.people.nextUrl = null; 
  loadData(entities.people);
});

document.querySelector(".planets-endpoint").addEventListener("click", () => {
  setActiveSection("planets");
  entities.planets.list.innerHTML = "";
  entities.planets.nextUrl = null;
  loadData(entities.planets);
});

document.querySelector(".vehicles-endpoint").addEventListener("click", () => {
  setActiveSection("vehicles");
  entities.vehicles.list.innerHTML = "";
  entities.vehicles.nextUrl = null;
  loadData(entities.vehicles);
});
