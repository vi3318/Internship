document.addEventListener("DOMContentLoaded", function () {
	// Simulate loading delay
	setTimeout(function () {
	  // Hide the loader and show the main page
	  document.getElementById("loader").style.display = "none";
	  document.getElementById("main1").style.opacity = "1";
	}, 1000);
  });

  function expandImage(img) {
	img.classList.toggle('expanded');
}