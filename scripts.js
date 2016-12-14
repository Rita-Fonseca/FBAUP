$(document).ready(function(){


  $(".escola").on("mouseover", function() {

    var bg = $(this).data("src");
    console.log(bg)

    //mudar background image do body
    $("body").css({
      "background-image": "url("+bg+")"
    })

  })


})
