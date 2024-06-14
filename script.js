document.addEventListener("DOMContentLoaded", function () {
	// Simulate loading delay
	setTimeout(function () {
	  // Hide the loader and show the main page
	  document.getElementById("loader").style.display = "none";
	  document.getElementById("main1").style.opacity = "1";
	}, 1000);
  });  

  const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
  
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
  
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
  }
  
  showMenu('nav-toggle','nav-menu');
  
  

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});


// brands
var container = document.getElementById('container1')
var slider = document.getElementById('slider1');
var slides = document.getElementsByClassName('slide1').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
	containerWidth = container.offsetWidth;
	setParams(containerWidth);
}

function setParams(w) {
	if (w < 551) {
		slidesPerPage = 1;
	} else {
		if (w < 901) {
			slidesPerPage = 2;
		} else {
			if (w < 1101) {
				slidesPerPage = 3;
			} else {
				slidesPerPage = 4;
			}
		}
	}
	slidesCount = slides - slidesPerPage;
	if (currentPosition > slidesCount) {
		currentPosition -= slidesPerPage;
	};
	currentMargin = - currentPosition * (100 / slidesPerPage);
	slider.style.marginLeft = currentMargin + '%';
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive');
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive');
	}
	if (currentPosition >= slidesCount) {
		buttons[1].classList.add('inactive');
	}
}

setParams();

function slideRight() {
	if (currentPosition != 0) {
		slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
		currentMargin += (100 / slidesPerPage);
		currentPosition--;
	};
	if (currentPosition === 0) {
		buttons[0].classList.add('inactive');
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive');
	}
};

function slideLeft() {
	if (currentPosition != slidesCount) {
		slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
		currentMargin -= (100 / slidesPerPage);
		currentPosition++;
	};
	if (currentPosition == slidesCount) {
		buttons[1].classList.add('inactive');
	}
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive');
	}
};

