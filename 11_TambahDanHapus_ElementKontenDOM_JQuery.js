$(document).ready(function () {

	// append(), prepend(), after(), before()
	// remove()
	// empty()

	$("#tambahinput1").click(function () {
		$("#kotak1").append(
			"<br><input type='text' name='nama' placeholder='Nama Lengkap'><br>"
		);
	});

	$("#tambahinput2").click(function () {
		$("#kotak1").prepend(
			"<br><input type='text' name='nama' placeholder='Nama Lengkap'><br>"
		);
	});

	$("#tambahinput3").click(function () {
		$("#kotak1").after(
			"<br><input type='text' name='nama' placeholder='Nama Lengkap'><br>"
		);
	});

	$("#tambahinput4").click(function () {
		$("#kotak1").before(
			"<br><input type='text' name='nama' placeholder='Nama Lengkap'><br>"
		);
	});

	$("#tambah1").click(function () {
		let string1 = "<br><strong>Kalimat 1</strong>";
		let string2 = "<em>Kalimat 2</em>";
		let string3 = "<span style='color:blue';>Kalimat 3</span>";

		$("#kotak2 img").before(string1, string2, string3);
	});

	$("#hapus1").click(function () {
		$("#kotak3").remove();
	});
	// Lihat di console
	$("#hapus2").click(function () {
		$("#kotak3").empty();
	});
	// Lihat di console
	$("#hapus3").click(function () {
		$("#kotak3 li").remove(".a, .b");
	});




});