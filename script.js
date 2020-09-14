var wrapperEle =document.body.querySelector(".wrapper");
var headOneEle =document.body.querySelector(".headOne");
var headTwoEle =document.body.querySelector(".headTwo");
var headThreeEle =document.body.querySelector(".headThree");
var headFourEle =document.body.querySelector(".headFour");
var buttonEle =document.body.querySelector(".CalculatingMiles");




function rewritefunction(){
  var inputdistance = Number(prompt("How many miles do you drive per year?"));
  var inputgas = Number(prompt("What is the current cost of a Gallon of gas"));
  var inputgallons = Number(prompt("What is the MPG for your car?"));
  
  writerFunction(inputdistance,inputgas,inputgallons,);
} 

function lineWriter(){
  var totalcost = (inputdistance/inputgallons)*inputgas;
  
  
  writerFunction(totalcost,);
}


function writerFunction(distance,gas,gallons,totalcost){
    headOneEle.innerHTML= "To drive a car with an MPG rating of " +gallons;
    headTwoEle.innerHTML= "for"  +distance; "miles";
    headThreeEle.innerHTML= "at " +gas; 
    headFourEle.innerHTML= "per gallon would cost " +totalcost;
}


buttonEle.addEventListener("click",function(){
  rewritefunction();
})