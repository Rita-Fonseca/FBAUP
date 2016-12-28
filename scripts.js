$(document).ready(function(){


  $(".escola").on("mouseover", function() {

    var bg = $(this).data("src");
    console.log(bg)

    //mudar background image do body
    $('#icons').css({
      "background-image": "url("+bg+")"
    })

  })

$(document).bind('mousewheel', function(e) {
  hideOverlay();
});

  $('#overlay').click(function() {
    hideOverlay();
  });

function hideOverlay() {
  if (!$('#overlay:visible').length)
    return;
  $('#overlay').fadeOut();
}

function extra() {
  document.getElementByClass("extra").style.display = "flex";
};


})
