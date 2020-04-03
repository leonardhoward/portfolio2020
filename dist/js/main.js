let textWrapper1 = document.querySelector('.showLetters1');

let textWrapper2 = document.querySelector('.showLetters2');

let textContains = textWrapper1.textContent;


const letters = document.getElementsByClassName('letters');

textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<div class='letters'>$&</div>");

textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<div class='letters'>$&</div>");

// navigation menu
const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
const navSlide = () => {
  

  burger.addEventListener('click', () => {
    
      //toggle nav
      nav.classList.toggle('nav-active');
      //animate links

      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
          }
      });
      //burger animation
      burger.classList.toggle('toggle');
    
  });
}

navSlide();


//mobile smooth scroll when link is clicked

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
       //toggle nav
       nav.classList.toggle('nav-active');
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
    });
    //burger animation
    burger.classList.toggle('toggle');
  });
});



anime.timeline({loop: false})

  .add({
    targets: '.showLetters1 .letters',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    zIndex: [2,10],
  delay: (el, i) => 120*i
  })
  .add({
    targets: '.showLetters2 .letters',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    zIndex: [2,10],
  delay: (el, i) => 120*i
  })
  .add({
      targets: '.showBackground',
      opacity: [0,1],
      easing: "easeInExpo",
      duration:1000
  })
  .add({
    targets: '.balloon',
    translateX: [0,250],
    translateY: [0,-50],
    // easing: "easeInExpo",
    duration:1200000
})
.add({
  targets: '.balloon',
  translateX: [250,500],
  translateY: [-50,0],
  // easing: "easeInExpo",
  duration:1200000
})
.add({
  targets: '.balloon',
  translateX: [500,750],
  translateY: [0, -50],
  // easing: "easeInExpo",
  duration:1200000
})


  for (let i = 0; i <= letters.length; i++) {
    letters[i].addEventListener('animationend', function(e) {    
        letters[i].classList.remove('animated');
    });


   letters[i].addEventListener('mouseover', function(e) {
     letters[i].classList.add('animated')
   })
  }

  
  

 function waveHand(){
    const person = document.getElementsByClassName('person');
    const hand = document.getElementsByClassName('armdiv');
  for (let j = 0; j <= person.length; j++) {
     
   person[j].addEventListener('mouseover', function(f) {
     hand[j].classList.add('wave')
   })


   person[j].addEventListener('animationend', function(f) {    
    hand[j].classList.remove('wave');
});
  };

}


