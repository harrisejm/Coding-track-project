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

  $(".toggle").click(function(){
    $("div.box1 p.moveT").slideToggle();
  });

  $("#formOne").submit(function(event) {
    var name = $("#name").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();

    $(".info1").text(question1);
    $(".info2").text(question2);
    $(".info3").text(question3);
    $(".info4").text(question4);
    $(".info5").text(question5);
    $(".info6").text(name);

    if (question1 === "no" && question2 === "software" && question3 === "no" && question4 === "larger" && question5 == "full-stack") {
            $(".results").text("C# is definitely, definitely, definitely for you!!!");
    } else if (question1 === "no" && question2 === "software" && question3 === "yes" && question5 !== "front-end") {
      $(".results").text("although you indicated you do not like Microsoft C# is likey the best fit.");
    } else if (question1 === "no" && question2 === "software" && question3 === "no" && question5 !== "front-end") {
      $(".results").text("C# for sure");
    } else if (question1 === "yes" && question2 === "software" && question3 === "yes" && question5 !== "front-end") {
      $(".results").text("although you indicated you do not like Microsoft C# is likey the best fit.");
    } else if (question1 === "yes" && question2 === "software" && question3 === "no" && question5 !== "front-end") {
      $(".results").text("C# is definitely for you.");
     ////C# DONE
      //CSS/React
    } else if (question1 === "yes" && question2 === "interative" && question5 !== "back-end") {
      $(".results").text("CSS/React is for you.");
    }  else if (question1 === "no" && question2 === "interative" && question5 !== "back-end" && question5 !== "full-stack") {
      $(".results").text("CSS/React for you.");
      //CSS/REACT Done

    } else if (question1 === "yes" && question2 === "content" || question5 === "back-end" || question5 === "full-stack") {
      $(".results").text("Ruby is for you.");
    } else if (question1 === "no" && question2 === "content" || question5 === "back-end" || question5 === "full-stack") {
      $(".results").text("Ruby is for you.");
    } else if (question1 === "no" && question2 === "interative" || question5 === "back-end" || question5 === "full-stack") {
      $(".results").text("Ruby is for you.");
    } else if (question5 === "front-end.") {
      $(".results").text("CSS/React is for you");
    } else {
      $(".results").text("C# is the best fit");
    }
    $(".col-md-8").show();
    event.preventDefault();
  });
});
