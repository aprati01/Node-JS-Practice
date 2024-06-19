const EventEmitter=require("node:events");
const emitter=new EventEmitter();

emitter.on("order-pizza",(size,price)=>
     {
          console.log(`Order received with ${size} size and price is ${price}`);
     })
emitter.on("order-pizza",(size)=>{
     if(size=='large')
          {
               console.log(`Pizza received with ${size} size`)
          }
})

console.log("Bye me a pizza");
emitter.emit("order-pizza","large",500);
