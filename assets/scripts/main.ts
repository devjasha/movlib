// Get filter buttons
let comedyFilter = document.querySelector(".comedyFilter");
let actionFilter = document.querySelector(".actionFilter");
let dramaFilter = document.querySelector(".dramaFilter");
let thrillerFilter = document.querySelector(".thrillerFilter");
let highestVoteFilter = document.querySelector(".highestVoteFilter")
let adventureFilter = document.querySelector(".adventureFilter")
let animationFilter = document.querySelector(".animationFilter")
let fantasyFilter = document.querySelector(".fantasyFilter")
let horrorFilter = document.querySelector(".horrorFilter")
let crimeFilter = document.querySelector(".crimeFilter")
let scienceFictionFilter = document.querySelector(".scienceFictionFilter")
let familyFilter = document.querySelector(".familyFilter")


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

adventureFilter.addEventListener("click", showAdventure)

function showAdventure() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "adventure") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

animationFilter.addEventListener("click", showAnimation)

function showAnimation() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "animation") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

fantasyFilter.addEventListener("click", showFantasy)

function showFantasy() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "fantasy") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

horrorFilter.addEventListener("click", showHorror)

function showHorror() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "horror") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

crimeFilter.addEventListener("click", showCrime)

function showCrime() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "crime") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

scienceFictionFilter.addEventListener("click", showScienceFiction)

function showScienceFiction() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "science fiction") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}

familyFilter.addEventListener("click", showFamily)

function showFamily() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "family") {
      movies[i].classList.add("hide")
    } else {
      movies[i].classList.remove("hide")
    }
  }
}


// Vote filter event listener and function

highestVoteFilter.addEventListener("click", showHighestVote)

function showHighestVote() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getAttribute("data-type") !== "thriller" || "comedy" || "action" || "drama" || "adventure" || "animation" || "fantasy" || "horror" || "crime" || "science fiction" || "family") {
      movies[i].classList.remove("hide")
    }
  }
}
