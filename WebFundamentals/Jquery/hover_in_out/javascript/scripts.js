$(document).ready(function () {
  $("img").hover(
    function () {
      var altImg = $(this).attr("alt-src");
      var defImg = $(this).attr("src");
      $(this).attr("src", altImg);
      $(this).attr("alt-src", defImg);
    },
    function () {
      var defImg = $(this).attr("src");
      var altImg = $(this).attr("alt-src");
      $(this).attr("src", altImg);
      $(this).attr("alt-src", defImg);
    }
  );
});
