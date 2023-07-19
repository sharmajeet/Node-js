// $("h1").css("color","red");
$("h1").css("background-color","black");
$("h1").css("margin","12px")
$("h1").css("padding","12px")
// advance 
$("h1").addClass("big-title");

$("button").css("background-color","black");
$("button").css("color","white");
$("button").css("margin","2px");
$("button").css("font-weight","700");
$("button").css("padding","2px");
// advance concepts
$("button").click(function(){
    $("h1").css("background-color","lightblue");
})

$("input").keypress(function (e) { 
   $("h1").text(e.key);
});

$("h1").on("mouseover",function(){
    $("body").css("background-color","lightgray");
})

$("h1").before("<button>New</button>");


// animatation propertys
$("button").on("click",function(){
    $("h1").animate({opacity:0.8});
    $("h1").animate({margin:"30px"});
})