//Selectors

const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

// Event Listener
btn.addEventListener("click", getJokes);

// Fetch API:
async function getJokes() {
  const url = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json"
    }
  });
  const urlJSON = await url.json();
  console.log("url'nin kendisi", url);
  console.log("json: ", urlJSON);
  console.log("json joke: ", urlJSON.joke);
  text.innerText = urlJSON.joke
}



// ??????
// Eğer api formatında değilse ile başlıyorsa fetch() fonksiyonuna ikinci bir parametre girmemiz gerekiyor (headers objesi gibi ).
// Eğer api formatındaysa direkt olarak fetch() kullanmamız yetiyor.
// ?????

// async function getAnotherJokes() {
//   const url = await fetch("https://api.exchangeratesapi.io/latest");
//   const urlJSON = await url.json();
//   console.log(url);
//   console.log(urlJSON);
// }
