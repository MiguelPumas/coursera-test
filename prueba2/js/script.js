// var x="Hello world";

// var message= "in global";
//  console.log("global:message = "+ message);

// var a = function  (){
// 	var message = "inside a";
// 	console.log("a: message = "+ message);
// 	b();
// }

// function b(){
// 	console.log("b. message = "+ message);
// }
// a();

// var x;
// x=5;

// console.log(x);

// if( x== undefined){
// 	console.log("X no esta definida");
// }else{
// 	console.log("x esta definida: "+x);
// }

// var string="Hello";
// string+=" World";
// console.log(string+"!");

// console.log((5+4)/3);
// console.log(undefined /5);
//  var x='4', y=4;
//   if(x==y){
//   	console.log('X: '+x+" es igual a Y: "+y);
//   }

//   if(x===y){
//   	console.log('X: '+x+" es igual a Y: "+y);
//   }else{
//   	console.log('X: '+x+" no es estrictamente igual a Y: "+y);
//   }

// if( false || null || undefined || "" || 0 || NaN){
// 	console.log("esta line jamas se ejecutara");
// }else{
// 	console.log("todo falso");
// }

// var x= "hola",y="hola";
// if(x==y){
// 	console.log(x);
// } 

// var sum=0;
// for (var i=0; i<10; i++){
// 	console.log(i);
// 	sum+=i;
// }
//  console.log("la suma de 0 a 9 es: "+sum);

// function orderChickenWith(sideDish) {
// 	sideDish= sideDish || "Lo que sea";
// 	console.log("Chikcen with " +sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();

// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }

// var company= new Object();
// company.name="coursera";

// console.log(company);

// var stockPropName= "acciones de la compañia";
// company[stockPropName]=110;
// console.log("accioens de la compañia: "+company["acciones de la compañia"])

// function multyply(x,y){
// 	return x*y;
// }

// console.log(multyply(3,5));

// function makeMultplier(multiplier){
// 	var myFunc = function (x){
// 		console.log("X: "+x);
// 		console.log("multiplier: "+multiplier)
// 		return multiplier * x;

// 	};
// 	return myFunc;
// }
// var multyplyBy3= makeMultplier(3);
//  console.log(multyplyBy3(10));
//  var a= {x:7};
//  var b=a;
//  b.x=5;
//  console.log(a);
//  console.log(b);
// a.x=10;
//  console.log(a);
//  console.log(b);

// function test(){
// 	console.log(this);
// 	this.myNmae="Miguel"
// 	console.log("hello coursera!");
// }
// test();
// console.log(window.myNmae);

// function Circle (radio){
// 	this.radio=radio;
// }

// Circle.prototype.obtenerArea= function(){
// 	return Math.PI * Math.pow(this.radio,2);
// }

// var miCirculo = new Circle(10);
// console.log(miCirculo.obtenerArea());
// console.log(miCirculo);

// var myObj={
// 	name:"miguel",
// 	course:"HTML/CSS/JS",
// 	platform:"Coursera"
// };
// for (var prop in myObj){
// 	console.log(prop + ": "+myObj[prop]);
// }

function makeMultiplier( multiplier){
	return(
		function(x){
				return multiplier *x;
			}
		);
}

var doubleAll= makeMultiplier(2);
console.log(doubleAll(10));
console.log(doubleAll(10));