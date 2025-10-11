let peopleUrl = "https://swapi.dev/api/people/";
let planetsUrl = "https://swapi.dev/api/planets/";
let vehiclesUrl = "https://swapi.dev/api/vehicles/";
let peopleList = document.querySelector(".people ul");
let planetsList = document.querySelector(".planets ul");
let vehiclesList = document.querySelector(".vehicles ul");
const peopleSection = document.querySelector(".people");
const planetsSection = document.querySelector(".planets");
const vehiclesSection = document.querySelector(".vehicles");

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
    peopleSection.style.display = "block";
    planetsSection.style.display = "none";
    vehiclesSection.style.display = "none";
  } else if (activeSection === "planets") {
    peopleSection.style.display = "none";
    planetsSection.style.display = "block";
    vehiclesSection.style.display = "none";
  } else if (activeSection === "vehicles") {
    peopleSection.style.display = "none";
    planetsSection.style.display = "none";
    vehiclesSection.style.display = "block";
  }
}

document.querySelector(".people-endpoint").addEventListener("click", () => {
  setActiveSection("people");
  loadData(peopleUrl, peopleList);
});
document.querySelector(".planets-endpoint").addEventListener("click", () => {
  setActiveSection("planets");
  loadData(planetsUrl, planetsList);
});
document.querySelector(".vehicles-endpoint").addEventListener("click", () => {
  setActiveSection("vehicles");
  loadData(vehiclesUrl, vehiclesList);
});
