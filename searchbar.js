const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clearIcon = document.querySelector(".clear");
const search_result_div=document.querySelector(".search-results")
icon.addEventListener("click", () => {
  search.classList.toggle("activated");
});

clearIcon.addEventListener("click", () => {
  search.classList.toggle("activated");
  search_result_div.style.display="none"
  search_box.value=""
});

const search_box = document.querySelector("#mysearch");

search_box.addEventListener("input",render_results)

function render_results(){
  search_suggestion_html=""
  search_result_div.innerHTML=search_suggestion_html
  search_result_div.style.display="none"


  window.scrollTo(0, 1383.33);

  const filter = search_box.value.toUpperCase();

  let container = document.getElementById("cont");
  let cont = container.getElementsByClassName("card");

  for (let i = 0; i < cont.length; i++) {
    const h = cont[i].getElementsByTagName("h2")[0];

    const textValue = h.textContent.toUpperCase();

    // If length of entered text is greater than 1 then showing it in Search Result
    if(filter.length>=1 && textValue.includes(filter))
    {
      search_suggestion_html+='<div class="each-result" onclick="updatesearchbar(this)"><p>'+textValue+'</p></div>'
      search_result_div.innerHTML=search_suggestion_html
      search_result_div.style.display="flex"
    }
    if (textValue.includes(filter)) {
      cont[i].style.display = "block";
    } else {
      cont[i].style.display = "none";
    }
  }
}