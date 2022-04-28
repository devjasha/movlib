let comedyFilter = document.querySelector(".comedyFilter");
let movies = document.querySelectorAll(".movie-card")

comedyFilter.addEventListener("click", hideComedy)

function hideComedy() {
  for(let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "comedy") {
      movies[i].classList.add("hide")
    }
  }
}




