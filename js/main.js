function handleScrollSideBar() {
  var sidebar = document.getElementById('side-bar');  
  var slide1 = document.getElementById('slide-1');
  var slide2 = document.getElementById('slide-2');

  var scrollPosition = window.scrollY;
  
  if (scrollPosition >= slide1.offsetTop && scrollPosition < slide2.offsetTop) {
      sidebar.style.right = '-300px';
  } else {
      sidebar.style.right = '20px'; 
}
}
window.addEventListener('load', handleScrollSideBar);
window.addEventListener('scroll', handleScrollSideBar);

  
  function audioFunction() {
    var btn = document.getElementById('side-bar-video-button-text');
    var audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
      btn.innerHTML = "Stop Music";
    } else {
      audio.pause();
      audio.currentTime=0;
      btn.innerHTML = "Play Music";
    }
  }



let navbar = document.getElementById("main-nav");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('header-new');
  } else {
    navbar.classList.remove('header-new');
  }
})


function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
  document.getElementById("slides-data-progress-line").style.width = scrollPercentage + "%";
}

document.addEventListener("DOMContentLoaded", updateProgressBar);
window.addEventListener("scroll", updateProgressBar);


function addClassOnScroll() {
  const target1 = document.getElementById("target1");
  const target2 = document.getElementById("target2");
  const target3 = document.getElementById("target3");
  const target4 = document.getElementById("target4");
  const page1 = document.getElementById("slide-1");
  const page2 = document.getElementById("slide-2");
  const page3 = document.getElementById("slide-3");
  const page4 = document.getElementById("slide-4");
  const scrollPosition = window.scrollY;

  target1.classList.remove("side-bar-list-link-active");
  target2.classList.remove("side-bar-list-link-active");
  target3.classList.remove("side-bar-list-link-active");
  target4.classList.remove("side-bar-list-link-active");
 
    if (scrollPosition <= page1.offsetTop + page1.offsetHeight) {
      target1.classList.add("side-bar-list-link-active");
    } else if (scrollPosition <= page2.offsetTop + page2.offsetHeight) {
      target2.classList.add("side-bar-list-link-active");
    } else if (scrollPosition <= page3.offsetTop + page3.offsetHeight) {
      target3.classList.add("side-bar-list-link-active");
    } else if (scrollPosition <= page4.offsetTop + page4.offsetHeight) {
      target4.classList.add("side-bar-list-link-active");
    }

}

document.addEventListener("DOMContentLoaded", addClassOnScroll);
window.addEventListener("scroll", addClassOnScroll);