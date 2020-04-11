$(document).ready(function () {
	// hide() => berfungsi untuk menghilangkan element tanpa efek apapun
	$("#sembunyi").click(function () {
		$(".d1").hide();
		$(".d2").hide("slow");
		$(".d3").hide("fast");
		$(".d4").hide(5000);
	});
	//  show() => berfungsi untuk menampilkan element tanpa efek apapun
	$("#tampil").click(function () {
		$(".d1").show();
		$(".d2").show("slow");
		$(".d3").show("fast");
		$(".d4").show(5000);
	});
	// toggle() => berfungsi untuk menghilangkan dan menampilkan ( menjalankan => hide() dan show() )
	$("#toggle").click(function () {
		$(".d1").toggle();
		$(".d2").toggle("slow");
		$(".d3").toggle("fast");
		$(".d4").toggle(5000);
	});
	// =============================================================
	// fade => membuat efek pudar pada element
	// fadeOut() => berfungsi untuk Membut efek pudar, pelan2 hilang elementnya
	$("#fade1").click(function () {
		$(".f1").fadeOut();
		$(".f2").fadeOut("slow");
		$(".f3").fadeOut("fast");
		$(".f4").fadeOut(5000);
	});
	// fadeIn() => berfungsi untuk berfungsi untuk Menampilakan element yang mula2 pudar jadi tampil secara utuh
	$("#fade2").click(function () {
		$(".f1").fadeIn();
		$(".f2").fadeIn("slow");
		$(".f3").fadeIn("fast");
		$(".f4").fadeIn(5000);
	});
	// fadeToggle() => berfungsi untuk menjalankan ( menjalankan => fadeOut() dan fadeIn() )
	$("#fade3").click(function () {
		$(".f1").fadeToggle();
		$(".f2").fadeToggle("slow");
		$(".f3").fadeToggle("fast");
		$(".f4").fadeToggle(5000);
	});
	// fadeTo() => sama seperti fade lainnya tapi dapat diberikan nilai opicity/transparan ( 0.0 - 1.0 )
	$("#fade4").click(function () {
		$(".f1").fadeTo(2000, 0.2);
		$(".f2").fadeTo("slow", 0.3);
		$(".f3").fadeTo("fast", 0.1);
		$(".f4").fadeTo(5000, 0.4);
	});
	// slideUp() => berfungsi untuk menghilangkan element yang memiliki efek
	$("#slide1").click(function () {
		$(".s1").slideUp();
		$(".s2").slideUp("slow");
		$(".s3").slideUp("fast");
		$(".s4").slideUp(5000);
	});
	// slideDown() => berfungsi untuk menampilkan element yang memiliki efek
	$("#slide2").click(function () {
		$(".s1").slideDown();
		$(".s2").slideDown("slow");
		$(".s3").slideDown("fast");
		$(".s4").slideDown(5000);
	});
	// slideToggle() => berfungsi untuk menghilangkan dan menampikan ( menjalankan =>slideUp() dan slideDown() )
	$("#slide3").click(function () {
		$(".s1").slideToggle();
		$(".s2").slideToggle("slow");
		$(".s3").slideToggle("fast");
		$(".s4").slideToggle(5000);
	});

});