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
// scroll reason

sr.reveal('.reason',{delay: 600});


/*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{});
// sr.reveal('.skills__text',{});
sr.reveal('.skills__data',{delay: 400});
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200});
// services scrolls
sr.reveal('.services-sub',{});
sr.reveal('.consulting',{delay: 200});
sr.reveal('.consulting__img',{delay: 300});
sr.reveal('.consulting__parag',{delay: 400});


sr.reveal('.Design',{delay: 200});
sr.reveal('.Design__parag',{delay: 300});
sr.reveal('.Design__img',{delay: 400});

sr.reveal('.Ideation',{delay: 200});
sr.reveal('.Ideation__img',{delay: 300});
sr.reveal('.Ideation__parag',{delay: 400});
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

// exit loader
function exit(){
const windowloader =  document.querySelector('.lo');
setInterval(function () {
  windowloader.style.display = 'none';
}, 2000);

}

// TweenMax
      TweenMax.to(".loading-screen", 4, {
            delay: 6.6,
            top: "-110%",
            ease: Expo.easeInOut
      });

      TweenMax.from(".logo", 3, {
            delay: 8.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".contact", 3, {
            delay: 8.5,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".options", 3, {
            delay: 8.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".bottom-text", 3, {
            delay: 8.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".copyright", 3, {
            delay: 8.9,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.staggerFrom(".media ul li", 2, {
            delay: 8.7,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
      }, 0.1);

      TweenMax.from(".menu", 3, {
            delay: 8.8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p1", 3, {
            delay: 9,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p2", 3, {
            delay: 9.2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#one", 3, {
            delay: 9.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#two", 3, {
            delay: 9.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });


      var t1 = new TimelineMax();

      t1.from(".ringOne", 4, {
            delay: 0.4,
            opacity: 0,
            y:40,
            ease: Expo.easeInOut
      }).from(".ringTwo", 4, {
            delay: 0.9,
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut
      }, "-=5").to(".ringOne", 4, {
            delay: 0.4,
            x: 40,
            ease: Expo.easeInOut
      }).to(".ringTwo", 4, {
            delay: 0.9,
            x: 40,
            ease: Expo.easeInOut
      },"-=5");

// var textWrapper = document.querySelector('.ml7 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
//
// anime.timeline({loop: false})
//   .add({
//     targets: '.ml7 .letter',
//     translateY: ["1.1em", 0],
//     translateX: ["0.55em", 0],
//     translateZ: 0,
//     rotateZ: [180, 0],
//     duration: 750,
//     easing: "easeOutExpo",
//     delay: function(el, i) {
//       return 9000 + 50 * i;
//     }
//   });



// function rotatebtn(){
//   console.log("rot");
//   const btns = document.querySelectorAll('.button');
//   btns.forEach(cur =>{
//     cur.addEventListener('mouseenter',()=>{
//       console.log('btn clicked');
//       speak('article');
//     });
//   });
// }
// rotatebtn();


// //talk animation
// // const talkbtn = document.querySelector('#talk');
//
// const greetings = 'Thank you for contacting me, i will get back to you as soon as i can.';
//
//
//
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//
// const recognition = new SpeechRecognition();
//
// recognition.onstart = function(){
//   console.log('Ai activated');
//
// };
// recognition.onresult = function(event){
//   console.log(event);
//   const current = event.resultIndex;
//   const transcript = event.results[current][0].transcript;
//
//   readOutLoud(transcript);
// };
// //add listerner to bn
//
// // talkbtn.addEventListener('click',()=>{
// // //  recognition.start();
// // });
//
// function readOutLoud(message){
//   const speech = new SpeechSynthesisUtterance();
//
// // if(message.includes('')){
// //
// //   speech.text = greetings;
// // };
//   speech.text = greetings;
//
//   speech.volume = 1;
//   speech.rate = 1;
//   speech.pitch = 1;
//   window.speechSynthesis.speak(speech);
// }
//
//
// function speaks() {
//   var speaking = $().articulate('isSpeaking');
//   var paused = $().articulate('isPaused');
//
//   // This is how you can use one button for a speak/pause toggle
//   // Is browser speaking? (This returns 'true' even when paused)
//   // If it is, is speaking paused? If paused, then resume; otherwise pause
//   // If it isn't, then initiate speaking
//
//   if (speaking) {
//     if (paused) {
//       $().articulate('resume');
//     } else {
//       $().articulate('pause');
//     }
//   } else {
//     $(obj).articulate('speak');
//   };
// };
//
// function stop() {
//   $().articulate('stop');
// };
