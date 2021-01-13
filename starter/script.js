'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  //this line was written to prevent the default behavior of href
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////

//SELECTING ELEMENTS
console.log(document);
//this is actually the top of all the html document
console.log(document.documentElement);
// here we will see all the html document

console.log(document.head);
//this was to select the htmll head of the html document
//we can also choose just the body

console.log(document.body);

const header = document.querySelector('.header');
//this is teh first element named header
const allSections = document.querySelectorAll('.section');
// this is to select all the elements
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
//* If we delete one item from the code in developer mode
//* then the items will not be shown in the dom elements

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
//* this actually creates html element
//*  this creates 'div' element
console.log(message);
message.classList.add('cookie-message');
// message.textContent= 'We use cookied for improved functionality and analytics.';

message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//this is the first child
// header.prepend(message);
//header.append(message)
//this will be for the last child
console.log(message);
// header.append(message);
// to make multiple copies of the element

// header.append(message.cloneNode(true));
header.before(message);
//

// Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //new method
    message.remove();
    //old method
    // message.parentElement.removeChild(message);
  });

// STYLES

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);
// this is just defined by javascript

//but if we want to see all the elements

console.log(getComputedStyle(message));
//this will show all the elments related to this
//* from that if we want the proper style
//* then

console.log(getComputedStyle(message).color);
//or
console.log(getComputedStyle(message).height);

//* now we want to add more pixels with this

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// IN CSS WE HAVE A PROPERTY '--color-primary'
// TO CHANGE THE DEFAULT VALUE

document.documentElement.style.setProperty('--color-primary', 'orangered');

// *  this is actually used to change all the properties

// ATTRIBUTES

const logo = document.querySelector('.nav__logo');

console.log(logo.alt);
console.log(logo.src);
logo.alt = 'Beautiful Minimalist logo';
//! anything thats not avaliable in html will not be selected
//! alt is availale...alt will be selected
//! if i write a random element and give it a random name. it will not be selected
//! we added 'designer' later. and thats not a html element
//like below this is non standard
console.log(logo.designer);
// to select this
console.log(logo.getAttribute('designer'));

// TO ADD NEW ATTRIBUTE

logo.setAttribute('company', 'Bankist');

console.log(logo.src);
// this will show the full path
logo.getAttribute('src');
// this will show  just relative path

// The same thing works for the link too
//* One shows relative path... and one shows absolute path
// const link = document.querySelector('.twitter-link');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// DATA ATRIBUTES

console.log(logo.dataset.versionNumber);
// data attributes are special kinds of attributes that starts with word data
// data-'whatever we want'
//mens that class must be started with data

//CLASSES

logo.classList.add('c', 'j'); //these are the fake classnames
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');
//! these helps to add or remove classes

//* Don't use
logo.className = 'Tawkir';
//this overwrites all the classes. and removes them

//SCROLLING
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // this shows height and width and other scrolling position
  //* to understand it correctly

  console.log(e.target.getBoundingClientRect());
  console.log('current scroll position (X/Y)', window.pageXOffset, pageYOffset);

  //current window height and width
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Actuall Scrolling that is needed
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //global function to scroll through the pages

  // To make it better
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // We have a modern way of doing it
  section1.scrollIntoView({ behavior: 'smooth' });
});

// mouseenter , just like the :hover

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! you are reading the heading :D');
// });

// another method

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! you are reading the heading :D');
// };

// but it will happen whenever we hover over them
// to stop doing things over and over again
// the best way is

const alertH1 = function (e) {
  alert('addEventLister: Great you are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);
// this time we removed the event listener
// so this will not happen again and  again

// we can also set time to remove event listener

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  //console.log(currentTarget===this)
  // means currentTarget and this are the same

  // e.stopPropagation();

  // means the event handler will not change the parent background color
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  //console.log(currentTarget===this)
  // means currentTarget and this are the same
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
  //console.log(currentTarget===this)
  // means currentTarget and this are the same
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });
//* this is called event delegation

// 1. Add event listener to the common parent element
// 2. Determine what element originated

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

//* Traversing is used to select the element that when we cant find where is the parent element or not sure
//* where is the child element is
// const h1 = document.querySelector('h1')

//Going Downward //? child elements

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
// to see all the elements after the h1  tag

console.log(h1.children);
// to see all the html component with live

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//? Going upward..means selecting parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';
//this is selecting itself . because closest h1 is itself

//? Going Sideways means siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//TO DO:
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
// this include h1 itself . because it is the children of h1's parent element
//! we can also loop over it
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
//* means now all the elements are 50% smaller

// TABBED COMPONENT

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));
//*  this will make the page slow down the page.. so it's better like below
//* because if there are 200 tabs right here and if we loop all over them everytime we select the page
//* the page will be slow

tabsContainer.addEventListener('click', function (e) {
  // when we click on the button its ok. but when we click on the number it's not ok
  // because the buttons have the span element inside
  // we will not select the button , we will select the span content instead
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard Clause
  if (!clicked) return;

  // whenever we click the other button's --active class should be removed

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove(`operations__content--active`));

  //Active Tab

  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//? Menu Fade Animation

const nav = document.querySelector('.nav');

// const handleover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     //  const clicked = e.target
//     // just the same
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };
const handleover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    console.log(this);
    //  const clicked = e.target
    // just the same
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', handleover);
// nav.addEventListener('mouseover', handleover);
//! this doesn't work

// nav.addEventListener('mouseover', function (e) {
//   handleover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleover(e, 1);
// });
//* this works but the betteer way iis

nav.addEventListener('mouseover', handleover.bind(0.5));
nav.addEventListener('mouseout', handleover.bind(1));

//Sticky navigation

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// //we will take the current 'top' value from the function

// //* to make the menubar at the top . means sticky
// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);
//   //when it's active , you will see thi co ordinates when scrolling
//   if (widow.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// // but this will conntiniously show the position. that's why everything will slow. specially in mobile devices
// // //* but we can do this with API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   // root is the element where the target is intersecting
//   threshold: ,
//   // the percentange of intersection at which the observer callback will be called
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// whenever i start scrolling the intersection starts
//? first take a lookk that we have chosen section 1 here. in html

//* You have to look at the isIntersecting, when it shows as 'true'
//* then take a look at intersectionRatio
//* note that number
//? in this case the number was 0.1
//! this numbr means how much of the section is visible in the viewport / window.
//! 1 means 100 percentage of the section . which is impossible. because that section is too big
//! that it's impossible to be fully visible on the screen
//! so the fact is .. whenever that precentage of the section will be visible in the window
//! the intersectionn starts

//* set it for the theshold
//* intersectionRation: 0.1
//? that's what we set it for the 'threshold'
//? means the exact threshold  we fixed for the viewport

//* inIntersecting : true
//? means the intersecting has been started

//! if we scroll up or down and it goes beyond the section
//! the intersection will be 'false' and the  intersection will stop

//? for this section

// const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

//! from here we eill get the 90px. for the root margin

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '-90px',
  rootMargin: `-${navHeight}px`,
  // it's used to appear the startbar ,90px before the header
  // it's just deciding where the start menu will appear
});
headerObserver.observe(header);

//REVEAL SECTIONS

// const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
  //? this line stop observing everytime
  //? and this will
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
  //this line was added to add the class to the section.
  //normally that makes the section invisible
  // if  we add that directly ass css in html
  // people may turn off the javascript on their browser
  // that will create a problem for them
});

// Lazy Loading Images
// first the images are just 16kb . but when we go to that viewport the images becomes bigger
// So the functionality will be good

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src

  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img')
  //Diretly this will not work

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
  // the image will be loaded before 200px viewport
  // the user will not experience that the pictures loaded later
});

imgTargets.forEach(img => imgObserver.observe(img));

//Slider

const slides = document.querySelectorAll('.slide');

//Selecting the buttons
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.5)';
slider.style.overflow = 'visible';

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `transelateX(${100 * (i - slide)}%)`)
  );
};
// slides.forEach((s, i) => (s.style.transform = `transelateX(${100 * i}%)`));
// // multiplied by slides number
// // 0% 100% 200%.....
goToSlide(0);

//Next Slide

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
//CurSlide = 1: -100%, 0%, 100%, 200%
