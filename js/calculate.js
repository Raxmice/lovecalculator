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
document.querySelector("h").innerHTML = "Noo... your relationship could be in denger - " +n+ "%";}
else if (0 < n && n<=30)
{
document.querySelector("h").innerHTML = "Your love does not love you - " +n+ "%";}

}
else{alert("Enter names, then click on button.");}

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
