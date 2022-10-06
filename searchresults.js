function updatesearchbar(element){
    searchname=element.querySelector("p").innerText
    search_box.value=searchname
    render_results()
    search_suggestion_html=""
    search_result_div.innerHTML=search_suggestion_html
    search_result_div.style.display="none"
}