// Get filter buttons
let comedyFilter = document.querySelector(".comedyFilter");
let actionFilter = document.querySelector(".actionFilter");
let dramaFilter = document.querySelector(".dramaFilter");
let thrillerFilter = document.querySelector(".thrillerFilter");
let highestVoteFilter = document.querySelector(".highestVoteFilter")

// Get Movies
let movies = document.querySelectorAll(".movie-card")

// Comedy filter event listener and function
comedyFilter.addEventListener("click", showComedy)
function showComedy() {
  for(let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "comedy") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

// Action filter event listener and function

actionFilter.addEventListener("click", showAction);

function showAction() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "action") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

// Drama filter event listener and function 

dramaFilter.addEventListener("click", showDrama);

function showDrama() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "drama") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

// Thriller filter event listener and function

thrillerFilter.addEventListener("click", showThriller);

function showThriller() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "thriller") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

highestVoteFilter.addEventListener("click", showHighestVote)

function showHighestVote() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "thriller" || "comedy" || "action" || "drama") {
      movies[i].classList.remove("hide")
    }
  }
}

