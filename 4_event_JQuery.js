// Even JQuery secara umum

// Mouse Events(click, dblclick, mouseenter, mouseleave)
// Keyboard Events(keypress, keydown, keyup)
// Form Event(submit, change, focus, blur)
// Document / Window Events(load, resize, scroll, unload)

$(document).ready(function () {

	$("#judul").click(function () {
		$("p.posting").slideUp();
	});
	$("#judul2").dblclick(function () {
		$("p.posting2").slideUp();
	});

	// Ketika mouse di arahkan kekotak hijau akan slideUp
	$(".div4").mouseenter(function () {
		$("p.pesan4").slideUp();
	});
	$(".div4").mouseleave(function () {
		$("p.pesan4").slideDown();
	});

	// on = biasa mengkondisikan untuk 1 event
	$("#judul3").on({
		mouseenter: function () {
			$(this).css("background-color", "lightgrey");
		},
		mouseleave: function () {
			$(this).css("background-color", "lightblue");
		},
		click: function () {
			$(this).css("background-color", "red");
		}
	});


});