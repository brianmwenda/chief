/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){

        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')

            const navitem = document.querySelectorAll('.nav__item');
            navitem.forEach((link,index) => {
            link.classList.toggle('animate');
            });

          //   navitem.forEach((link,index) => {
          // link.style.animation = `navLinkFade 1s ease  forwards ${index/6}s`;
          // });
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  // diable animation to nav items li
  const navitem = document.querySelectorAll('.nav__item');
  navitem.forEach((link,index) => {
  link.classList.toggle('animate');
  });

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 400});
sr.reveal('.about__text',{delay: 400});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{});
sr.reveal('.skills__data',{interval: 200});
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200});

// menu indicator
//==============menu bounce==================using intersection observer.
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.indicator');

const options = {
  threshold: 0.5
};
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry => {

    const className = entry.target.className;

    // console.log(className);
    const activeAnchor = document.querySelector(`[data-page="${className}"]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    if(gradientIndex != 5){
       const coords = activeAnchor.getBoundingClientRect();
       const directions = {
           width:coords.width,
           left:coords.left
         };
         if(entry.isIntersecting){
           bubble.style.setProperty('left',`${directions.left}px`);
           bubble.style.setProperty('width',`${directions.width}px`);
         }
    }

  });
}

//observe screen
sections.forEach(section => {
  observer.observe(section);

});


//thankyou speach
function speak(obj){
  
  $(obj).articulate('speak');

};


//talk animation
// const talkbtn = document.querySelector('#talk');

const greetings = 'Thank you for contacting me, i will get back to you as soon as i can.';



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
  console.log('Ai activated');

};
recognition.onresult = function(event){
  console.log(event);
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;

  readOutLoud(transcript);
};
//add listerner to bn

// talkbtn.addEventListener('click',()=>{
// //  recognition.start();
// });

function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();

// if(message.includes('')){
//
//   speech.text = greetings;
// };
  speech.text = greetings;

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}


function speak() {
  var speaking = $().articulate('isSpeaking');
  var paused = $().articulate('isPaused');

  // This is how you can use one button for a speak/pause toggle
  // Is browser speaking? (This returns 'true' even when paused)
  // If it is, is speaking paused? If paused, then resume; otherwise pause
  // If it isn't, then initiate speaking

  if (speaking) {
    if (paused) {
      $().articulate('resume');
    } else {
      $().articulate('pause');
    }
  } else {
    $(obj).articulate('speak');
  };
};

function stop() {
  $().articulate('stop');
};
