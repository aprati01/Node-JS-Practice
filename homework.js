const marks=[80,82,84,96,96]
var total=0
for(var i=0;i<5;i++)
     {
          total+=marks[i];
     }
console.log(`Total marks obtained by student is ${total}`)
var division=total/5;
if(division >=60)
     {
          console.log("1st division")
     }
else if(division >45 && division<60)
     {
          console.log("2nd division")
     }
else if(division<45 && division>30)
     {
          console.log("3rd division")
     }
else{
     console.log("Fail")
}