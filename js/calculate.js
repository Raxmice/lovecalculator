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
document.querySelector("h").innerHTML = "You love each other too much - " +n+ "%";}
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

}
