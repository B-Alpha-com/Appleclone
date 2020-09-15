// 
// var Fruit = [ "Mango", "orange","apple","grape"]
// 	console.log("Fruit");

// for (var i=0; 
// 	i<todos.length; 
// 	i++)

// function string (name="", age= 45, color="dark"){
 	// let story = ` My brother  name is ${name} and his is ${age} and ${color} in complexion`;
	// return (story);
// }

const funct= (name="", age=30, color="")=>{let story = ` My brother  name is ${name} and his is ${age} and ${color} in complexion`;
return (story);}
 
 const flow =(f,g)=>(b)=> g(f(b));
 const newmath = (num)=> num + 2;
 math(newmath,newmath)(9);