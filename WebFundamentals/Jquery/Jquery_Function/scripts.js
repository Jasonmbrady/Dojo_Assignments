$(document).ready(function () {
  $("h1").click(function () {
    $(this).hide();
  });

  $("img").click(function () {
    console.log($(this).attr("src"));
  });
});
