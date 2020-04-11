$(document).ready(function () {

	$(".animasi1").click(function () {
		$(".isi1").animate({
			left: '500px'
		});
	});

	$(".animasi2").click(function () {
		$(".isi2").animate({
			left: '200px',
			top: '100px',
			fontSize: '2cm', // fontSize = gunakan camelCase jika di JQuery
			padding: '40px'
		}, 5000, "linear");
	});

	$(".animasi3").click(function () {
		$(".isi3").animate({
			left: '+=20px',
			top: '+=3S0px'
		}, "slow");
	});

	$(".animasi4").click(function () {
		$(".isi4").animate({
			left: 'toggle',
			top: 'toggle'
		}, "fast", "swing");
	});

	$(".animasi5").click(function () {
		$(".isi5").animate({
			left: '100px',
			top: '60px',
			borderWidth: '10px', // borderWidth = gunakan camelCase jika di JQuery
			fontSize: '2cm' // fontSize = gunakan camelCase jika di JQuery
		});
		$(".isi5").animate({
			left: '400px',
			top: '50px',
			borderWidth: '1px', // borderWidth = gunakan camelCase jika di JQuery
			fontSize: '7cm' // fontSize = gunakan camelCase jika di JQuery
		});
		$(".isi5").animate({
			left: '10px',
			top: '500px',
			borderWidth: '10px', // borderWidth = gunakan camelCase jika di JQuery
			fontSize: '3cm'
		});
		$(".isi5, .isi1").animate({ // .isi5, .isi1 = memanggil 2 CLASS
			left: '500px',
			top: '60px',
			borderWidth: '1px', // borderWidth = gunakan camelCase jika di JQuery
			fontSize: '7cm' // fontSize = gunakan camelCase jika di JQuery
		});

	});

});