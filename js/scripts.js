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

  $(".toggle5").click(function(){
      $("div.panel-body p.p5").slideToggle();
  });

  $("#formOne").submit(function(event) {
  var name = $("#name").val();
  var question1 = $("input:radio[name=question1]:checked").val(); debugger;
  var question2 = $("input:radio[name=question2]:checked").val();
  var question3 = $("input:radio[name=question3]:checked").val();
  var question4 = $("input:radio[name=question4]:checked").val();
  var question5 = $("input:radio[name=question5]:checked").val();
  //  var age = parseInt(ageString);
    //var job = $("#job").val();


    $(".info1").text(question1);
    $(".info2").text(question2);
    $(".info3").text(question3);
    $(".info4").text(question4);
    $(".info5").text(question5);

if (question1 === "no" && question2 === "software" && question3 === "yes" && question5 !== "front-end") {
   $(".results").text("Although you indicated you do not like MicroSoft C#");
} else if (question1 === "no" && question2 === "software" && question3 === "no" && question5 !== "front-end") {
   $(".results").text("C# for sure");
} else if (question1 === "yes" && question2 === "software" && question3 === "yes" && question5 !== "front-end") {
  $(".results").text("Although you indicated you do not like MicroSoft C#");
} else if (question1 === "yes" && question2 === "software" && question3 === "no" && question5 !== "front-end") {
   $(".results").text("C# for sure"); ////C# DONE

   //CSS/React
} else if (question1 === "yes" && question2 === "interative" && question5 !== "back-end") {
  $(".results").text("CSS/React1");
}  else if (question1 === "no" && question2 === "interative" && question5 !== "back-end" && question5 !== "full-stack") {
    $(".results").text("CSS/React");
   //CSS/REACT Done

} else if (question1 === "yes" && question2 === "content" || question5 === "back-end" || question5 === "full-stack") {
  $(".results").text("Ruby");
} else if (question1 === "no" && question2 === "content" || question5 === "back-end" || question5 === "full-stack") {
  $(".results").text("Ruby");
} else if (question1 === "no" && question2 === "interative" || question5 === "back-end" || question5 === "full-stack") {
  $(".results").text("Ruby");
} else if (question5 === "front-end") {
   $(".results").text("CSS/React");
} else {
   $(".results").text("C#");
}





    //$("#story").show();

    event.preventDefault();
  });







});
