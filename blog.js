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





let more2 = document.querySelector(".more-2");
let less2 = document.querySelector(".less-2");
let lastText2 = document.querySelector(".last-text-2")
let ul2 = document.querySelector(".ques-2");
let harvard2 = document.querySelector(".harvard-2");
let dhoni = document.querySelector(".dhoni");
more2.addEventListener('click', function() {
    ul2.textContent = "";
    more2.classList.add('display-none');
    less2.classList.remove('display-none');
    let firstPart = document.createElement("p");
    let lastPart = document.createElement("P");
    firstPart.textContent = "I will start by saying a quote \'Life is short\' and we should not spend it being unhappy, being sad. A harvard study showed that over 47% of our time our mind is occupied by random thoughts. We are more focused in achieving things, not learning. If you focus on learning then it doesn't mean that you will not achieve anything form it. It means that achieving is not your first priority. Your first priority is to learn. Once a reporter asked a \'How to do stay so calm?\' to Dhoni. He answered \"It's simple don't think about the result. It's the result thats puts pressure on us\".";
    let li1 = document.createElement("LI");
    let li2 = document.createElement("LI");
    li1.textContent = "What if we don't win the game?";
    li2.textContent = "What if we don't get selected?";
    ul2.append(li1);
    ul2.append(li2);
    lastPart.textContent = "But again worry about the controlables. What ever the controlables are, you will take care of it. You will get the desired result. If we don't get the desired result we will improve.";
    lastText2.textContent = "";
    lastText2.append(firstPart);
    lastText2.append(ul2);
    lastText2.append(lastPart);
    harvard2.classList.remove('display-none');
    dhoni.classList.remove('display-none');
})
less2.addEventListener('click', function() {
    harvard2.classList.add('display-none');
    dhoni.classList.add('display-none');
    less2.classList.add('display-none');
    more2.classList.remove('display-none');
    lastText2.textContent = "Sometimes, you feel like you have a lot of work to do. And just because of this thinking we often loose our productivity. To tackle this I… ";
})


//more
let more1 = document.querySelector(".more-1");
let less1 = document.querySelector(".less-1");
let lastText1 = document.querySelector(".last-text-1")
let ul1 = document.querySelector(".ques-1");
more1.addEventListener('click', function() {
    ul1.textContent = "";
    more1.classList.add('display-none');
    less1.classList.remove('display-none');
    let firstPart = document.createElement("P");
    let lastPart = document.createElement("P");
    firstPart.textContent = "Sometimes, you feel like you have a lot of work to do. And just because of this thinking we often loose our productivity. To tackle this I asked few questions to myself. Asking those questions to myself helped me decide my priorities in life. I figured out the not so urgent work that I often start my day with. The questions I asked to myself were: ";
    let li1 = document.createElement("LI");
    let li2 = document.createElement("LI");
    ul1.append(li1);
    ul1.append(li2);
    li1.textContent = "Out of all those things I that I am doing. What work I would be most proud of after 6 months?";
    li2.textContent = "If I were to choose one task that I will get completed after 6 months, then what would it be? ";
    lastPart.textContent = "If you ask questions to yourself, you will get answers. That will help you gain clarity in your mind and make your day more productive.";
    lastText1.textContent = "";
    lastText1.append(firstPart);
    lastText1.append(ul1);
    lastText1.append(lastPart);
})
less1.addEventListener('click', function() {
    less1.classList.add('display-none');
    more1.classList.remove('display-none');
    lastText1.textContent = "Sometimes, you feel like you have a lot of work to do. And just because of this thinking we often loose our productivity. To tackle this I… ";
})





//inspirational
let technical = document.querySelector(".technical")
let inspirational = document.querySelector(".inspirational")
let blogs = document.querySelector(".blogs")
inspirational.addEventListener('click', function(e) {
  e.defaultPrevented;
  blogs.classList.remove("display-none");
})
technical.addEventListener('click', function(e) {
  e.defaultPrevented;
  blogs.classList.add("display-none");
})