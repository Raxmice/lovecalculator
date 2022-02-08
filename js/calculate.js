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
document.querySelector("h").innerHTML = "Ohh your relationship could work - " +n+ "%";}
else if (30 < n && n <= 50)
{
document.querySelector("h").innerHTML = "Yoo... your relationship could be in denger - " +n+ "%";}
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
if(input1 === "Jyot sahu" && input2 === "Sangam nayak")
{document.querySelector("h").innerHTML = "You both love each other too much - 100%";}
if(input1 === "Sangam nayak" && input2 === "Jyot sahu")
{document.querySelector("h").innerHTML = "You both love each other too much - 100%";}
if(input1 === "jyot sahu" && input2 === "sangam nayak")
{document.querySelector("h").innerHTML = "You both love each other too much - 100%";}
if(input1 === "sangam nayak" && input2 === "jyot sahu")
{document.querySelector("h").innerHTML = "You both love each other too much - 100%";}
}
