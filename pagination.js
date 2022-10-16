function getPageList(totalPages, page, maxLength){
    function range(start, end){
        return Array.from(Array(end-start+1), (_, i)=> i+start);
    }
    var sideWidth = maxLength < 9 ? 1: 2;
    var leftWidth = (maxLength - sideWidth*2 -3)>>1;
    var rightWidth = (maxLength - sideWidth*2 -3)>>1;

    if (totalPages <= maxLength){
        return range(1, totalPages);
    }
    if (page<= maxLength-sideWidth-1-rightWidth){
        return range(1, maxLength-sideWidth-1).concat(0, range(totalPages-sideWidth+1, totalPages));
    }
    if (page >= totalPages - sideWidth-1-rightWidth){
       return range(1, sideWidth).concat(0, range(totalPages-sideWidth-1-rightWidth-leftWidth, totalPages)); 
    }
    
    return range(1, sideWidth).concat(0, range(page-leftWidth, page+rightWidth), 0, range(totalPages-sideWidth+1, totalPages));

}

var itemsArr = [];
var items = document.querySelectorAll(".container .card");
items.forEach(item => itemsArr.push(item));
var numberOfItems = items.length;
var limitPerPage = 10;
var totalPages = Math.ceil(numberOfItems/limitPerPage);
var paginationSize = 7;
var currentPage;

function showPage(whichPage){
    console.log("hey")
    console.log(whichPage)
    if (whichPage<1 || whichPage>totalPages)return false;
    
    currentPage= whichPage;
    console.log(currentPage);

    items.forEach(item => {
        item.classList.add("hidden");
    })
    
    // console.log(items);
    itemsArr.slice((currentPage-1)*limitPerPage, currentPage*limitPerPage).forEach(item => {
        item.classList.remove("hidden");
    });

    document.querySelectorAll(".pagination li").forEach(item => {
        if (!item.classList.contains("previous-page") && !item.classList.contains("next-page"))item.remove();
    })
    getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        var newListItem = document.createElement("li");
        var newAnchor = document.createElement("a");
        newListItem.classList.add("page-item");
        newListItem.classList.add(item ? "current-page":"dots");
        if (item===currentPage)newListItem.classList.toggle("active")
        newAnchor.classList.add("page-link")
        newAnchor.setAttribute("href", "#");
        newAnchor.innerHTML = (item || "...");
        newListItem.append(newAnchor);
        document.querySelector(".pagination").insertBefore(newListItem, document.querySelector(".pagination .next-page"));
    })
    $(".previous-page").toggleClass("disable", currentPage===1);
    $(".next-page").toggleClass("disable", currentPage===totalPages);
    return true;
}

showPage(1);

$(document).on("click", ".pagination li.current-page:not(.active)", function(){
    return showPage(+$(this).text());
})
$(".next-page").on("click", function(){
    return showPage(currentPage+1);
})
$(".previous-page").on("click", function(){
    return showPage(currentPage-1);
})


