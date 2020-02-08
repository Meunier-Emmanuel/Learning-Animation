// $(function(){

//     $( document ).click(function() {
//         $("#HT").animate({
//             left:"540px",
//             top:"160px",
//     },1000)
//       });

//       $( document ).click(function() {
//         $("#PY").animate({
//             left:"520px",
//             top:"270px",
//     },1000)
//       });

//       $( document ).click(function() {
//         $("#JJS").animate({
//             left:"630px",
//             top:"350px",
//     },1000)
//       });

//       $( document ).click(function() {
//         $("#Bal").animate({
//             left:"620px",
//             top:"80px",
//     },1000)
//       });

//       $( document ).click(function() {
//         $("#CSS").animate({
//             left:"750px",
//             top:"270px",
//     },1000)
//       });

//       $( document ).click(function() {
//         $("#PHP").animate({
//             left:"700px",
//             top:"160px",
//     },1000)
//       });
// })

$(function(){

    $( document ).click(function() {
        $("#HT").animate({ left:"540px",top:"160px"},1000,function(){
        $("#PHP").animate({left:"700px",top:"160px",},1000,function(){
        $("#PY").animate({left:"520px",top:"270px"},1000,function(){
            $("#CSS").animate({left:"750px",top:"270px",},1000,function(){
        $("#JJS").animate({left:"630px",top:"350px"},1000,function(){
            $("#Bal").animate({left:"620px",top:"80px",},1000,function(){
                $("#logo").animate({opacity:1},2000)
                $("#learning").animate({opacity:0},2000)
                $(".loading span").animate({opacity:0},2000)
                $("#fullStack").animate({opacity:1},2000)
            })
            })
        })
        })
        })
    }) 
    })
    })
