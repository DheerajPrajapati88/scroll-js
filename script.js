const date = document.querySelector(".date");
const getDate = new Date().getFullYear();
// console.log(getDate);
date.innerHTML = getDate;
const navLinks = document.querySelector(".nav-links");
const showLinks = document.querySelector(".show-links");
const toggleBtn = document.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click", function () {
    showLinks.classList.toggle("display-links");
  });


window.addEventListener("scroll", function () {
    const upBtn = document.querySelector(".up-button");
  const container =document.querySelector(".container");
  const scrollHeright = window.pageYOffset;
//   console.log(scrollHeright);
  if (scrollHeright > 100) {
      upBtn.classList.add("up-button-toggle");
      container.classList.add("fixed-position");
      } else {
          upBtn.classList.remove("up-button-toggle");
          container.classList.remove("fixed-position");
          }
          
          });
const allLinks=document.querySelectorAll('.all-links');
const nav=document.querySelector(".container");
// console.log(allLinks)
allLinks.forEach(function(e){
    
    e.addEventListener("click",function(link){
        
        link.preventDefault();
        const navHeight=nav.getBoundingClientRect().height;
        const id=link.currentTarget.getAttribute('href').slice(1);
        const element=document.getElementById(id);
        
        // console.log(element)
        let pos=element.offsetTop-navHeight;
        window.scrollTo({
            left:0,
            top:pos,
            })
            showLinks.classList.remove("display-links");
            })
        
            })
