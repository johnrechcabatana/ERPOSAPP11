$( document ).ready(function() {
 	$('.erpnext-icon').attr('src','assets/11_app/images/eph-logo-png.png'); 
 	$('.centered.splash img').attr('src','assets/11_app/images/eph-logo-png.png');  

 	var enterPressed = 0;
	window.onkeypress = function (e) {
	 var keyCode = (e.keyCode || e.which);
	 if (keyCode === 13) {
		 
		  if (enterPressed === 0) {
		   enterPressed++;
		   console.log("Enter pressed once. enterPressed is " + enterPressed);
		  } else if (enterPressed === 2) {
		   e.preventDefault(); 
		     console.log("Enter pressed twice. enterPressed is " + enterPressed); 
		  }
	 return;
	 }
	};
});