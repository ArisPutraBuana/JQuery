// #
// Jenis - jenis Selector
// $("p") => ELEMENT
// $("#footer") => ID
// $(".posting") => CLASS
// $("div.posting") => CLASS didalam TAG DIV

// # Selector lainnya
// $("*")
// $(this)
// $("p.penting")
// $("p:first")
// $("tr:first")
// $("tr:first-child")
// $("tr:even")
// $("tr:odd")
// $("[href]")
// $("a[target='_blank']")
// $("a[target!='_blank']")
// $(":button")

$(document).ready(function () {
  //Menyembunyikan semua halaman web
  $("#sembunyi_semua").click(function () {
    $("*").hide();
  });
  //Menyembunyikan Tombol yg di klik (this)
  $("#sembunyi_ini").click(function () {
    $(this).hide();
  });
  //Menyembunyikan Paragraf yg memiliki class penting
  $("button.penting").click(function () {
    $("p.penting").hide();
  });

  $("button#pertama").click(function () {
    $("p:first").hide();
  });

  $("span.baris1").click(function () {
    $("tr:first").hide();
  });

  $("a#baris1semua").click(function () {
    $("tr:first-child").hide();
  });

  //Mengganti CSS dengan JQuery
  $("strong").click(function () {
    $("tr:even").css("background", "red"); // even = ganjil (mulai datri 1)
    $("tr:odd").css("background", "blue"); // odd = genap (mulai datri 0)
  });

  $("[alt='link1']").click(function () {
    $("[href]").css("color", "red")
  });
  $("[alt='link2']").click(function () {
    $("a[target='_blank']").css("color", "yellow")
  });
  $("[alt='auto']").click(function () {
    $("a[target!='_blank']").css("border", "4px solid #000");
  });
  $("[alt='sembunyi_tombol']").click(function () {
    $(":button").slideUp(4000);
  });

});