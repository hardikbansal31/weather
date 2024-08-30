const submit = document.querySelector("#submit");
let cityName = document.querySelector("#city-name");
let temperature = document.querySelector("#temp");
let humidity = document.querySelector("#humid");
const apiKey = "7b4f30875ff3a9e50dfc51137eec6894";
const apiKeyUnsplash = "ftWeQeGGesyTy-3D-QJD94rxFNb1aBRz4n1bV68sbdw";
let placeholder = document.querySelector(".images");
let IMGs = document.querySelectorAll(".IMG");
// IMGs.parentNode.removeChild(IMGs);

submit.addEventListener("click", () => {
  let city = document.querySelector("#city").value;

  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const apiCallUnsplash = `https://api.unsplash.com/photos/random?query=${city}&count=10&client_id=${apiKeyUnsplash}`;

  fetch(apiCall)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cityName.innerHTML = city;
      temperature.innerHTML = Math.round(data.main.temp - 273) + " celcius";
      humidity.innerHTML = data.main.humidity + " humidity";
    });

  fetch(apiCallUnsplash)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        let image = document.createElement("img");
        image.className = "IMG";
        image.src = data[index].urls.regular;
        placeholder.append(image);
      }
    });
});
