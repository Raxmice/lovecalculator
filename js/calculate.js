function calculate(){

var input1 = document.getElementById("fname").value;
var input2 = document.getElementById("sname").value;

if(input1 !== "" && input2 !== "")
{
var n = Math.random();
n = n*100;
n = Math.floor(n) + 1;

if (n > 70)
{
document.querySelector("h").innerHTML = "your relationship will definitely work - " +n+ "%";}
else if (50 < n && n <= 70 )
{
document.querySelector("h").innerHTML = "Ohh your relationship would work - " +n+ "%";}
else if (30 < n && n <= 50)
{
document.querySelector("h").innerHTML = "Noo... your relationship could be in danger - " +n+ "%";}
else if (0 < n && n<=30)
{
document.querySelector("h").innerHTML = "Your love does not love you - " +n+ "%";}

}
else{alert("Enter names, then click on button.");}

  //for others
if(input1 === "saket" && input2 === "barkha")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
  if(input1 === "barkha" && input2 === "saket")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
  if(input1 === "Barkha" && input2 === "Saket")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
  if(input1 === "Saket" && input2 === "Barkha")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
  

  if(input1 === "Nidhi parganiha" && input2 === "Vinay verma")
{document.querySelector("h").innerHTML = "you both love each other soooo much - 100%";}
  if(input1 === "Vinay verma" && input2 === "Nidhi parganiha")
{document.querySelector("h").innerHTML = "you both love each other soooo much - 100%";}
  if(input1 === "Vinay" && input2 === "Nidhi")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
  if(input1 === "Nidhi" && input2 === "Vinay")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
  if(input1 === "vinay" && input2 === "nidhi")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
  if(input1 === "nidhi" && input2 === "vinay")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
  
//another
if(input1 === "sangam" && input2 === "anjali")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
if(input1 === "anjali" && input2 === "sangam")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
if(input1 === "Anjali" && input2 === "Sangam")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
if(input1 === "Sangam" && input2 === "Anjali")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
if(input1 === "Anjali yadaw" && input2 === "Sangam nayak")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
if(input1 === "Sangam nayak" && input2 === "Anjali yadaw")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
if(input1 === "anjali yadaw" && input2 === "sangam nayak")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
if(input1 === "sangam nayak" && input2 === "anjali yadaw")
{document.querySelector("h").innerHTML = "your relationship will definitely work - 100%";}
}
