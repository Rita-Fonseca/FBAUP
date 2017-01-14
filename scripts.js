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

$("#lista_eventos li a.linkcategoria").on('click', function(event){
	var categor = $(this).data("filtrar");



	$("#eventos").find(".evento .imagem a").fadeTo( "fast" , 0.06);
	$("#eventos").find("[data-filtro='" + categor + "']").fadeTo( "fast" , 1);

	event.preventDefault();

});

$("#lista_eventos li a.todos").on('click', function(event){



	$("#eventos").find(".evento .imagem a").fadeTo( "fast" , 1);


	event.preventDefault();

});
