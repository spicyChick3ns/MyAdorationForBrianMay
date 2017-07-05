 $(document).ready(function() {
   
  $("#detail1").hide();
  $("#detail2").hide();
  $("#detail3").hide();
  $("#btn1").click(function(){
     $("#detail1").show();
     $("#detail2").hide();
     $("#detail3").hide();
    });
  $("#btn2").click(function(){
     $("#detail1").hide();
     $("#detail2").show();
     $("#detail3").hide();
    });
  $("#btn3").click(function(){
     $("#detail1").hide();
     $("#detail2").hide();
     $("#detail3").show();
    });

 });