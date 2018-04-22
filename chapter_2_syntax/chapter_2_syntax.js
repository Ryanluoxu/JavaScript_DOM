/**
 * 
 */


// # Syntax

// ## Array

var beatles = ["john","paul","george","ringo"];
//alert(beatles[1]);

var ryan = [30, "singing"];
var melvin = [33, "watching video"];
var myTeam = [ryan, melvin];
// alert(myTeam[0][1]);

// ## Object
var lennon = Object();
lennon.name = "john";
lennon.year = 1940;
// alert(lennon.year);
var lennon = {name:"john", year:1940};

var beatles = {vocalist:lennon, guitar:someother};
beatles.vocalist.name;  // john

// # variable scope
function square(num){
    result = num*num;   // 没有 var, result 就是全局变量
    return result;
}


// # Object

// ## build-in object
var beatles = new Array();

// ## host object: Form, Image, Element (from browser)
