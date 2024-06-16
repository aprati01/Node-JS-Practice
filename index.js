/*var n="Hello World"
var a=20;
var b=30;
var sum=a+b;
var substract=a-b;
var mul=a*b;
var div=a/b;

console.log(`sum of ${a}  and ${b} is ${sum}`);
console.log(`substraction of ${a}  and ${b} is ${substract}`);
console.log(`multiplication  of ${a}  and ${b} is ${mul}`);
console.log(`division of ${a}  and ${b} is ${ div}`);

var base=100;
var height=200;
var area=0.5*base*height;
console.log(`Area of triangle is ${area}`);

var radius=6;
var temp=Math.pow(radius,2);
console.log(`Area of circle is ${3.14*temp}`);

var cub=7;
var temp=Math.pow(cub,2);
console.log(`Area of circle is ${6*temp}`);

var rect_length=6;
console.log(`Area of rectangle is ${Math.pow(rect_length,2)}`)

var rad=8;
var x=2*3.14*rad;
console.log(`perimeter of circle is ${x} `);

var val=4;
if(val%2==0)
     {
          console.log(`${val} is even`);
     }
else{
     console.log(`${val} is odd`);
}

var check_posOrNeg=-100;
if(check_posOrNeg<0)
     {
          console.log(`${check_posOrNeg} is Negative`);
     }
else{
     console.log(`${check_posOrNeg} isPositive`);
}

var eligibilityAge=18;
if(eligibilityAge<=18)
     {
          console.log(`Not Eligible for vote beacause ${eligibilityAge} is lesser or equal than 18`)
     }
else{
     console.log(`Eligible for vote beacause ${eligibilityAge} is greater than 18`)
}*/
const superHero=require("./superhero")
/*
console.log(superHero.getName())
superHero.setName("Spiderman")
console.log(superHero.getName())*/
const batman=new superHero("Batman")
console.log(batman.getName())
batman.setName("Bruce Wayne")
console.log(batman.getName())

const spiderman=new superHero("spiderman")
console.log(spiderman.getName())
spiderman.setName("Peter Parker")
console.log(spiderman.getName())
