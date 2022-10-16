document.getElementById("scrolltopBtn").onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.getElementById("animation").classList.remove('animate');
  document.getElementById("animation").classList.remove('one');

  setTimeout(function(){
    document.getElementById("animation").classList.add('animate');
    document.getElementById("animation").classList.add('one');
  },300);
};