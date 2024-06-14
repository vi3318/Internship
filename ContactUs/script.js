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
  
  $(document).ready(function() {
	// Retrieve the stored active link information from local storage
	const activeLink = localStorage.getItem('activeLink');
  
	// Add the "active" class to the corresponding navbar link if activeLink is not null
	if (activeLink) {
	  const activeNavLink = $(`.nav__link[href="${activeLink}"]`);
	  if (activeNavLink.length) {
		activeNavLink.addClass('active');
	  }
	}
  
	// Add click event listener to navbar links, including dropdown links
	$('.nav__link, .dropdown__link').on('click', function(event) {
	  // Remove active class from all links
	  $('.nav__link, .dropdown__link').removeClass('active');
	  // Add active class to the clicked link
	  $(this).addClass('active');
	  // Store the active link information in local storage
	  const link = $(this).attr('href');
	  localStorage.setItem('activeLink', link);
	});
  });
  
  
  
  