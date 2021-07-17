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


//more
let more = document.querySelector(".more");
let less = document.querySelector(".less");
let lastText = document.querySelector(".last-text")
let ul = document.querySelector(".ques1");
more.addEventListener('click', function() {
    ul.textContent = "";
    more.classList.add('display-none');
    less.classList.remove('display-none');
    let firstPart = document.createElement("P");
    let lastPart = document.createElement("P");
    firstPart.textContent = "Sometimes, you feel like you have a lot of work to do. And just because of this thinking we often loose our productivity. To tackle this I asked few questions to myself. Asking those questions to myself helped me decide my priorities in life. I figured out the not so urgent work that I often start my day with. The questions I asked to myself were: ";
    let li1 = document.createElement("LI");
    let li2 = document.createElement("LI");
    ul.append(li1);
    ul.append(li2);
    li1.textContent = "Out of all those things I that I am doing. What work I would be most proud of after 6 months?";
    li2.textContent = "If I were to choose one task that I will get completed after 6 months, then what would it be? ";
    lastPart.textContent = "If you ask questions to yourself, you will get answers. That will help you gain clarity in your mind and make your day more productive.";
    lastText.textContent = "";
    lastText.append(firstPart);
    lastText.append(ul);
    lastText.append(lastPart);
})
less.addEventListener('click', function() {
    less.classList.add('display-none');
    more.classList.remove('display-none');
    lastText.textContent = "Sometimes, you feel like you have a lot of work to do. And just because of this thinking we often loose our productivity. To tackle this I… ";
})