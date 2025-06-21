let API_KEY = "738265bb";

let search_btn = document.querySelector("#search_btn");
let main = document.querySelector(".main");
let home_btn = document.querySelector("#home_btn");
let searchMovie = document.querySelector("#searchMovie");
let searchMoviebtn = document.querySelector("#searchMoviebtn");
let card = document.querySelector(".card");
let homepage = document.querySelector(".homepage");

search_btn.addEventListener("click", () => {
    homepage.classList.add("remove");
    main.classList.remove("display");
})

home_btn.addEventListener("click", () => {
    homepage.classList.remove("remove");
    main.classList.add("display");
    card.classList.add("remove");
})

searchMoviebtn.addEventListener("click", function () {
    let movieName = searchMovie.value;
    if (movieName != "") {
        getData(movieName);
    } else {
        let h1 = document.createElement("h1");
        h1.innerText = "Error: Enter the movie name first!";
        h1.style.color = "antiquewhite";
        h1.style.textAlign = "center";
        h1.style.marginTop = "2rem";
        card.appendChild(h1);
        setTimeout(() => {
            h1.innerHTML = "";
        }, 1000);
    }
})

const getData = async (movie) => {
    let fetchData = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`);
    let jsonData = await fetchData.json();
    console.log(jsonData);
    document.querySelector(".card").innerHTML = "";
    searchMovie.value = "";
    let div = document.createElement("div");
    div.classList.add("moviecard");
    div.innerHTML = `<img src="${jsonData.Poster}" alt="" class="poster">
            <div class="others"><h1>${jsonData.Title}</h1><br>
            <p>Rating : <span>${jsonData.Ratings[0].Value}</span></p><br>
            <a href="">${jsonData.Genre}</a><br>
            <p>Release : <span>${jsonData.Released}</span></p><br>
            <p>Country : <span>${jsonData.Country}</span></p><br>
            <p>Language : <span>${jsonData.Language}</span></p><br>
            <p>Actors : <span>${jsonData.Actors}</span></p><br>
            <p>Runtime : <span>${jsonData.Runtime}</span></p><br>
            <p>Plot summary : <span>${jsonData.Plot}</span></p><br>
            </div >`


        div.style.color = "antiquewhite";
    document.querySelector(".card").appendChild(div);
}
