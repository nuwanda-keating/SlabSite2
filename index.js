$('.data').on('contextmenu', function(e) {
    var top = e.pageY - 10;
    var left = e.pageX - 90;
    $(this).addClass("highlight");
    $("#context-menu").css({
      display: "block",
      top: top,
      left: left
    }).addClass("show");
    
    return false; //blocks default Webbrowser right click menu
  }).on("click", function() {
    $("#context-menu").removeClass("show").hide();
    $(".data").removeClass("highlight");
  });
  
  $("#context-menu a").on("click", function() {
    $(this).parent().removeClass("show").hide();
  });
 
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })