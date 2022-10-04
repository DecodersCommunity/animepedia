const loader = document.querySelector('.loader_page');
const main = document.querySelector('.main_page');

function init(){
    setTimeout(()=>{
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(()=>(main.style.opacity=1),50);
    },14000);
}

init();