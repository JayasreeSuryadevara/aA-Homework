document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  // adding SF places as list items

  const favPlacesLi = (e) => {

    event.preventDefault();
    
    const favPlaceEl = document.querySelector(".favorite-input");
    const favPlace = favPlaceEl.value;
    favPlaceEl.value = "";
    
    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = favPlace;
    ul.appendChild(li);
    
  }

  const submitEl = document.querySelector(".favorite-submit");
  submitEl.addEventListener("click", favPlacesLi);

  // adding new photos

  // --- your code here!



});
