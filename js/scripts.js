$(document).ready(function() {
  $(".toggle1").click(function(){
      $("div.panel-body p.p1").slideToggle();
  });

  $(".toggle2").click(function(){
      $("div.panel-body p.p2").slideToggle();
  });

  $(".toggle3").click(function(){
      $("div.panel-body p.p3").slideToggle();
  });

  $(".toggle4").click(function(){
      $("div.panel-body p.p4").slideToggle();
  });



  $("#formOne").submit(function(event) {
    var name = $("#name").val();
  var question1 = $("input:radio[name=question1]:checked").val();
  var question2 = $("input:radio[name=question2]:checked").val();
  //  var age = parseInt(ageString);
    //var job = $("#job").val();

//var beverage = $("#beverage").val();



    $(".info1").text(question1);
    $(".info2").text(question2);
  //  $(".info2").text("Job: " + job);


    //$("#story").show();

    event.preventDefault();
  });







});
