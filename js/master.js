// $(document).ready(function () {
// 	$(".owl-carousel").owlCarousel();
// });
$("#team").owlCarousel({
	loop: true,
	nav: true,
	dots: true,
	margin: 10,
	responsiveClass: true,
	navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 4,
		},
	},
});

// animation plugin call
AOS.init();

// jquery form validation Plugin
// $("#contactForm").validate();

//custom form validation
// validate signup form on keyup and submit
$("#contactForm").validate({
	rules: {
		fname: "required",
		lname: "required",
		password: "required",
		c_password: "required",
		email: "required",
		dob: "required",
		subject: "required",
		message: "required",
		message: {
			minlength: 100,
		},
		password: {
			minlength: 5,
		},
		c_password: {
			minlength: 5,
			equalTo: "#password",
		},
		email: {
			email: true,
		},
	},
	messages: {
		fname: "Please enter your First Name",
		lname: "Please enter your Last Name",
		dob: "Please enter your Date Of Birth According to your CNIC",
		password: {
			required: "Please provide a password",
			minlength: "Your password must be at least 5 characters long",
		},
		c_password: {
			required: "Please provide a password",
			minlength: "Your password must be at least 5 characters long",
			equalTo: "Please enter the same password as above",
		},
		email: "Please enter a valid email address",
		subject: "Please enter your subject",
		message: "Please enter 100 characters logn sentence according to your query",
	},
});
