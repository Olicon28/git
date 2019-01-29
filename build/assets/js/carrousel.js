 		$(function(){
			$('#slides').slides({
				preload: true,
				generateNextPrev: true
			});
		});


 
$(document).ready(function() {

	/* pag 1 */
	$("#paginador-carrusel .pagUno .botones .next").click(function(e) {
		e.preventDefault()
		$("#paginador-carrusel .cont-carrousel").animate({left: "-670px"}, "fast");
		$("#paginador-carrusel .pasos-paginas .on").animate({width: "70px"}, "slow");
		
	});
	/* fin pag 1 */

	/* pag 2 */
	$("#paginador-carrusel .pagDos .botones .next").click(function(e) {
		e.preventDefault()
		$("#paginador-carrusel .cont-carrousel").animate({left: "-1340px"}, "fast");
		$("#paginador-carrusel .pasos-paginas .on").animate({width: "140px"}, "slow");
	});
	$("#paginador-carrusel .pagDos .botones .prev").click(function(e) {
		e.preventDefault() 
		$("#paginador-carrusel .cont-carrousel").animate({left: "0"}, "fast");
		$("#paginador-carrusel .pasos-paginas .on").animate({width: "0"}, "slow");
	});
	/* fin pag 2 */

	/* pag 3 */
	$("#paginador-carrusel .pagTres .botones .next").click(function(e) {
		e.preventDefault()
		$("#paginador-carrusel .cont-carrousel").animate({left: "-2010px"}, "fast");
		$("#paginador-carrusel .pasos-paginas .on").animate({width: "210px"}, "slow");
	});
	$("#paginador-carrusel .pagTres .botones .prev").click(function(e) {
		e.preventDefault()
		$("#paginador-carrusel .cont-carrousel").animate({left: "-670px"}, "fast");
		$("#paginador-carrusel .pasos-paginas .on").animate({width: "70px"}, "slow");
	});
	/* fin pag 3 */

	/* pag 4 */
	$("#paginador-carrusel .pagCuatro .botones .next").click(function(e) {
		e.preventDefault()
		$("#paginador-carrusel .cont-carrousel").animate({left: "-2680px"}, "fast");
		$("#paginador-carrusel .pasos-paginas .on").animate({width: "300px"}, "slow");
	});
	$("#paginador-carrusel .pagCuatro .botones .prev").click(function(e) {
		e.preventDefault()
		$("#paginador-carrusel .cont-carrousel").animate({left: "-1340px"}, "fast");
		$("#paginador-carrusel .pasos-paginas .on").animate({width: "140px"}, "slow");
	});
	/* fin pag 4 */

	/* pag 5 */
	$("#paginador-carrusel .pagCinco .botones .prev").click(function(e) {
		e.preventDefault()
		$("#paginador-carrusel .cont-carrousel").animate({left: "-2010px"}, "fast");
		$("#paginador-carrusel .pasos-paginas .on").animate({width: "210px"}, "slow");
	});
});
