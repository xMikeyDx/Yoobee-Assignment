function addToList() {
    let country = document.getElementById("country").value;
    let li = document.createElement("li");
    li.textContent = country;
    document.getElementById("countryList").appendChild(li);
  }