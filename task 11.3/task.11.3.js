const images = [
  "/task 11.3/images/1.jpg",
  "/task 11.3/images/2.jpg",
  "/task 11.3/images/3.jpg",
  "/task 11.3/images/4.jpg",
  "/task 11.3/images/5.jpg",
  "/task 11.3/images/6.jpg",
  "/task 11.3/images/7.jpg",
  "/task 11.3/images/8.jpg",
  "/task 11.3/images/9.jpg",
  "/task 11.3/images/10.jpg",
];
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
const imgElement = document.getElementById("randomImage");
imgElement.src = getRandomImage();


document.getElementById("newImage").addEventListener("click", () => {
  imgElement.src = getRandomImage();
});