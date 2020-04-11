$(document).ready(function () {
	// Callback adalah fungsi yg dijalankan ketika fungsi JQuery selesai (contoh: alert)
	$(".b1").click(function () {
		$(".d1").hide("slow", function () {
			alert("Element ini sudah tersembunyi");
		});
	});

	// Tanpa menggunakan Callback
	// $(".b1").click(function () {
	// 	$(".d1").hide("slow");
	// 	alert("Element ini sudah tersembunyi");
	// });

	function tampil() {
		document.getElementById("d2").innerHTML = "Hello Word, Selamat datang di website saya";
		alert("Selesai");
	}

	function hitung(panjang, lebar) {
		let p = panjang;
		let l = lebar;
		let luas = p * l;
		document.getElementById("d2").innerHTML +=
			'Panjang = ' + p + '<br>' +
			'Lebar = ' + l + '<br>' +
			'Luas = ' + luas;
	}

	$(".b2").click(function () {
		$("#d2").animate({
			widht: '400px',
			fontSize: '30px',
			height: '400px'
		}, "slow", function () {
			tampil();
			hitung(20, 30);
		});
	});



});