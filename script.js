var miles = prompt("What is the estimated number of miles per year that you drive your vehicle?");

var curcost = prompt("What is the current cost of a gallon of gasoline in your area?");

var ratingone = "12";
var ratingtwo = "17";
var ratingthree = "26";
var ratingfour = "29";

var totalcost = (miles * curcost / ratingone);
var totalcost2 = (miles * curcost / ratingtwo);
var totalcost3= (miles * curcost / ratingthree);
var totalcost4 = (miles * curcost / ratingfour);

function writeHTML1(){
  document.write("To drive a car with a MPG rating of "+ratingone+" for " +miles+ " miles at " +curcost+ " per gallon would cost " +totalcost+ ".");
   document.write("<br/>");
}
 
function writeHTML2(){
  document.write("To drive a car with a MPG rating of "+ratingtwo+" for " +miles+ " miles at " +curcost+ " per gallon would cost " +totalcost2+ ".");
  document.write("<br/>");
}

function writeHTML3(){
  document.write("To drive a car with a MPG rating of "+ratingthree+" for " +miles+ " miles at " +curcost+ " per gallon would cost " +totalcost3+ ".");
  document.write("<br/>");
}

function writeHTML4(){
  document.write("To drive a car with a MPG rating of "+ratingfour+" for " +miles+ " miles at " +curcost+ " per gallon would cost " +totalcost4+ "."); 
  document.write("<br/>");
}

writeHTML1();
writeHTML2();
writeHTML3();
writeHTML4();