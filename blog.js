window.onscroll = function () {
  myFunction();
};
const navbar = document.querySelector(".navbar");
const logoSpan = document.querySelector(".lioSpan");
var navLinks = document.getElementsByClassName("navLinks");

function myFunction() {
  if (window.pageYOffset > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset < 367) {
    home.classList.add("active");
  }
  if (
    (window.pageYOffset > 367 &&
      window.pageYOffset < 965 &&
      window.innerWidth > 768) ||
    (window.innerWidth <= 768 &&
      window.pageYOffset > 367 &&
      window.pageYOffset < 1600)
  ) {
    removeActive();
    projects.classList.add("active");
  } else {
    projects.classList.remove("active");
  }
  // if((window.pageYOffset > 965 && window.innerWidth > 768) || ( window.innerWidth <=768 &&  window.pageYOffset >1650)) {
  //     removeActive();
  //     exp.classList.add("active");
  // }
  if (window.pageYOffset + screen.height > document.body.scrollHeight - 2) {
    removeActive();
    exp.classList.add("active");
  }
}

let blog = document.querySelector(".blog-page");
let home = document.querySelector(".home");
let projects = document.querySelector(".projects");
let exp = document.querySelector(".exp");
let jokes = document.querySelector(".jokes");

blog.addEventListener("click", function () {
    removeActive();
    blog.classList.add("active");
});

home.addEventListener("click", function () {
  removeActive();
  home.classList.add("active");
});

jokes.addEventListener("click", function () {
  removeActive();
  jokes.classList.add("active");
});

projects.addEventListener("click", function () {
  removeActive();
  projects.classList.add("active");
});

exp.addEventListener("click", function () {
  removeActive();
  exp.classList.add("active");
});

function removeActive() {
  blog.classList.remove("active");
  jokes.classList.remove("active");
  home.classList.remove("active");
  projects.classList.remove("active");
  exp.classList.remove("active");
}


//more
let more = document.querySelector(".more");
let less = document.querySelector(".less");
let lastText = document.querySelector(".last-text")
more.addEventListener('click', function() {
    more.classList.add('display-none');
    less.classList.remove('display-none');
    lastText.textContent = "Sometimes, you feel like you have a lot of work to do. And just because of this thinking we often loose our productivity. To tackle this I asked few questions to myself. Asking those questions to myself helped me decide my priorities in life. I figured out the not so urgent work that I often start my day with. The questions I asked to myself were: 1) Out of all those things I that I am doing. 2) What work I would be most proud of after 6 months? If I were to choose one task that I will get completed after 6 months, then what would it be? If you ask questions to yourself, you will get answers. That will help you gain clarity in your mind and make your day more productive.";
})
less.addEventListener('click', function() {
    less.classList.add('display-none');
    more.classList.remove('display-none');
    lastText.textContent = "Sometimes, you feel like you have a lot of work to do. And just because of this thinking we often loose our productivity. To tackle this I… ";
})