$(document).ready(function(){

	//MOSTRAR ICODE - CONTRATO GENERAL DE FONDOS
   $("#check-icode").click(function(evento){
      if ($("#check-icode").attr("checked")){
         $("#acciones-mandato").css("display", "block");
      }else{
         $("#acciones-mandato").css("display", "none");
      }
   });

	//MOSTRAR INFO AL CHECK
   $("#check-mostrar").click(function(evento){
      if ($("#check-mostrar").attr("checked")){
         $("#mostrar-contenido").css("display", "block");
      }else{
         $("#mostrar-contenido").css("display", "none");
      }
   }); 

   //MOSTRAR INFO AL CHECK FFMM
   $("#check-mostrar").click(function(evento){
      if ($("#check-mostrar").attr("checked")){
         $("#mostrar-contenido").css("display", "block");
      }else{
         $("#mostrar-contenido").css("display", "none");
      }
   });   


   //_porlet_resumen_config.html seleccion de cuentas

   $("div.seleccion-datos ul li input[type=checkbox]").click(function(e) {
         var $seleccionDatos = $($(this).parents('div.seleccion-datos'));
         var $listCheck = $seleccionDatos.find("ul li input[type=checkbox]:checked");

         if ($listCheck.length > 5) {
            alert("No se pueden más de 5");
            return;
         }


         var html = "";
         for (var i = 0; i < $listCheck.length; i++) {
            html = html + '<li><input type="radio" name="cuenta-favorito" value="' + $($listCheck[i]).val() + '"><label>' + $($listCheck[i]).parent().find('label').text()  + '</label></li>';
            //console.log($listCheck[i]);
         }
         $seleccionDatos.parent().find("div.seleccion-favorita ul").html("");
         $seleccionDatos.parent().find("div.seleccion-favorita ul").html(html);

   })
});