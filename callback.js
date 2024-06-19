function greet(name)
{
     console.log(`Good Morning ${name}`)
} 
function higherOrderFunction(callBack)  //function which is used as an argument is called callback function
//types of callback--> Asynchronus and Synchronus
{
     const val='Arnab';
     callBack(val);
}
higherOrderFunction(greet); 