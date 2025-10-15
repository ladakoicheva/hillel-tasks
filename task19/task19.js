
const entities = {
  people: {
    url: "https://swapi.dev/api/people/",
    list: document.querySelector(".people ul"),
    section: document.querySelector(".people"),
  },
  planets: {
    url: "https://swapi.dev/api/planets/",
    list: document.querySelector(".planets ul"),
    section: document.querySelector(".planets"),
  },
  vehicles: {
    url: "https://swapi.dev/api/vehicles/",
    list: document.querySelector(".vehicles ul"),
    section: document.querySelector(".vehicles"),
  },
};

function loadData(link, parent) {
  parent.innerHTML = " ";
   const oldButton = parent.parentElement.querySelector(".loadBtn");
   if (oldButton) {
     oldButton.remove();
   }
  fetch(link)
    .then((res) => res.json())
    .then((result) => {
      showContent(result.results, parent);

      console.log(link);

      link = result.next;
      
      if (result.next) {
        
        let button = document.createElement('button');
        button.classList.add('loadBtn');
        button.textContent='Load More';
        parent.parentElement.appendChild(button);

        button.addEventListener('click', ()=> {
          loadData(link, parent);
        })
       
      } 
    });
}

function showContent(data, parent) {
  data.forEach((item) => {
    const element = document.createElement("li");
    element.textContent = item.name;
    parent.appendChild(element);
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
  loadData(entities.people.url, entities.people.list);
});
document.querySelector(".planets-endpoint").addEventListener("click", () => {
  setActiveSection("planets");
  loadData(entities.planets.url, entities.planets.list);
});
document.querySelector(".vehicles-endpoint").addEventListener("click", () => {
  setActiveSection("vehicles");
  loadData(entities.vehicles.url, entities.vehicles.list);
});
