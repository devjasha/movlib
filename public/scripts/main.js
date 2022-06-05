(() => {
  // <stdin>
  var comedyFilter = document.querySelector(".comedyFilter");
  var actionFilter = document.querySelector(".actionFilter");
  var dramaFilter = document.querySelector(".dramaFilter");
  var thrillerFilter = document.querySelector(".thrillerFilter");
  var highestVoteFilter = document.querySelector(".highestVoteFilter");
  var adventureFilter = document.querySelector(".adventureFilter");
  var animationFilter = document.querySelector(".animationFilter");
  var fantasyFilter = document.querySelector(".fantasyFilter");
  var horrorFilter = document.querySelector(".horrorFilter");
  var crimeFilter = document.querySelector(".crimeFilter");
  var scienceFictionFilter = document.querySelector(".scienceFictionFilter");
  var familyFilter = document.querySelector(".familyFilter");
  var movies = document.querySelectorAll(".movie-card");
  comedyFilter.addEventListener("click", showComedy);
  function showComedy() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "comedy") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  actionFilter.addEventListener("click", showAction);
  function showAction() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "action") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  dramaFilter.addEventListener("click", showDrama);
  function showDrama() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "drama") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  thrillerFilter.addEventListener("click", showThriller);
  function showThriller() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "thriller") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  adventureFilter.addEventListener("click", showAdventure);
  function showAdventure() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "adventure") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  animationFilter.addEventListener("click", showAnimation);
  function showAnimation() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "animation") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  fantasyFilter.addEventListener("click", showFantasy);
  function showFantasy() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "fantasy") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  horrorFilter.addEventListener("click", showHorror);
  function showHorror() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "horror") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  crimeFilter.addEventListener("click", showCrime);
  function showCrime() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "crime") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  scienceFictionFilter.addEventListener("click", showScienceFiction);
  function showScienceFiction() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "science fiction") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  familyFilter.addEventListener("click", showFamily);
  function showFamily() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "family") {
        movies[i].classList.add("hide");
      } else {
        movies[i].classList.remove("hide");
      }
    }
  }
  highestVoteFilter.addEventListener("click", showHighestVote);
  function showHighestVote() {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].getAttribute("data-type") !== "thriller" || "comedy") {
        movies[i].classList.remove("hide");
      }
    }
  }
})();
