$(document).ready(function () {

	// JQuery mempunyai untuk manipulasi DOM ( GET dan SET)

	// text() => Untuk mendapatkan dan menetapkan isi text dari element yg dipilih
	// html() => Untuk mendapatkan dan menetapkan isi dari elemen yang dipilih termasuk semua elemen lain didalamnya (kode)

	// val()  => Untuk mendapatkan dan menetapkan isi atau nilai input Form yg dipilih
	// attr() => Untuk mendapatkan dan menetapkan nilai atribut dari elemen yg dipilih

	// get
	// alert("Mengambil Text : " + $("#ambil1").text());
	// alert("Mengambil HTML : " + $("#ambil1").html());

	// let string1 = $("#ambil1").text();
	// let string2 = $("#ambil1").html();
	// alert(string1 + " " + string2);

	$("#button1").click(function () {
		// Mengambil VALUE (Hasil inputan dari user)
		alert("Nama :" + $("#input1").val() + ", Alamat : " + $("#input2").val());
	});

	$("#button2").click(function () {
		// Mengambil ATRIBUT dari (name, type, style)
		alert("Name input1 :" + $("#input1").attr('name') + ", Tipe input2 : " + $("#input2").attr('type') + ", Warna Text input3 : " + $("#input3").attr('style'));
	});

	$("#set1").click(function () {
		$("#kal1").text("Halo apa kabar ? Saya baik-baik saja");
	});

	$("#set2").click(function () {
		$("#kal2").html("<b>Halo apa kabar ?</b> <em>Saya <span style='color:green;background:yellow;'>baik-baik saja<span></em> ");
	});

	$("#set3").click(function () {
		$("#inp1").val("Aris Putra Buana");
		$("#inp2").val("Kirim")
	});


	$("#set4").click(function () {
		$("li").text(function (no_urut, nama) {
			no_urut++;
			return "No urut : " + no_urut + ", Nama " + nama;
		});
	});

	$("#set5").click(function () {
		$(".key_youtube").attr({
			"href": "http://youtube.com",
			"title": "Youtube"
		});
	});

	$("#set6").click(function () {
		$("key_youtube").attr("href", function (i, link) {
			return link + "/result?search_query=juniordev";
		});
	});

});