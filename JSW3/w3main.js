// innerHTML
document.getElementById('demo_001').innerHTML = Date();
document.getElementById("inner_HTML").innerHTML = 5 + 6;


document.getElementById("demo_1").innerHTML = "My First Practece JS";
function myFunction_2() {
	document.getElementById("demo_2").innerHTML = "Paragraph Change Practece JS";

}
// p-3
var x, y, z;
 x = 5;
 y = 7;
 z = x + y;

document.getElementById("demo_3").innerHTML = "This value of z is "+z+"." ;

var a, b, c;
a = 8;
b = 7;
c = a * b;
document.getElementById("demo_3_1").innerHTML = c;

var a, b, c;
a = 20; b = 12; c = a - b;
document.getElementById("demo_3_2").innerHTML = c;

function myFunction_3() {
	document.getElementById("demo_3_3").innerHTML = "Hey guys";
	document.getElementById("demo_3_4").innerHTML = "How are You";
	
}
// P = 4
// JS Syntax
document.getElementById("demo_4").innerHTML = 10.50;

document.getElementById('demo_4_1').innerHTML = "This is double <b>quote</b> in js";
document.getElementById('demo_4_2').innerHTML = 'This is single <b>quote</b> in js';

document.getElementById('demo_4_3').innerHTML = 'This is a Strings, js use single quote';
document.getElementById('demo_4_4').innerHTML = "This is a Strings, js use double quote";

var x;
x=7;
document.getElementById('demo_4_5').innerHTML = x;

document.getElementById('demo_4_6').innerHTML = (5+7)*5;
//start
var x = 3;
var y = 7;
var z = x+y;

var a = 4;
var b = z*a;

var d = b/a;

var e = 48;
var f = e%d;

document.getElementById('demo_4_7').innerHTML = z;
document.getElementById('demo_4_8').innerHTML = b;
document.getElementById('demo_4_9').innerHTML = d;
document.getElementById('demo_4_10').innerHTML = f;
// end

var x, y;
x = 8;
y = 7;
document.getElementById('demo_4_11').innerHTML = x + y;

// JavaScript and Camel Case
var hyPhens = "first-name, last-name, master-card, inter-city.";
document.getElementById('demo_4_12').innerHTML =hyPhens;

var underScore = "first_name, last_name, master_card, inter_city.";
document.getElementById('demo_4_13').innerHTML =underScore;

var upperCamelCase = "Ex: FirstName, LastName, MasterCard, InterCity.";
document.getElementById('demo_4_14').innerHTML = upperCamelCase;

var lowerCamelCase = "firstName, lastName, masterCard, interCity.";
document.getElementById('demo_4_15').innerHTML = lowerCamelCase;

// start-p-5
//Variables
var x = 9;
var y = 7;

var z = x+y;
document.getElementById("demo_5").innerHTML =
"The value of z is: " + z ;

// Much Like Algebra
var price1 = 8;
var price2 = 6;
var total = price1 + price2;
document.getElementById('demo_5_1').innerHTML = "The total is: " + total;

// Data Types
var pi = 3.14;
var person = "Atiqur Rahman";
var answer= 'Yes I am!';
document.getElementById('demo_5_2').innerHTML = 
pi + "<br/>" + person + "<br/>" + answer;

// One Statement, Many Variables
var naMe = "Atiqur Rahman", carName = "volvo", price = 200;
document.getElementById('demo_5_3').innerHTML =
naMe + "<br>" + carName + "<br>"+ price;

// span multiple lines:
var Name = "Masum Billah",
Carname = "volvo",
fixPrice = 250;

document.getElementById('demo_5_4').innerHTML =
Name + "<br>"+ Carname + "<br>"+ fixPrice;

// Arithmetic
var x = 5 + 5 + 4;
document.getElementById('demo_5_5').innerHTML = x;

var y = "Atiq" + " " + "Masum";
document.getElementById('demo_5_6').innerHTML = y;

var x = "5" + 2 + 3;
document.getElementById('demo_5_7').innerHTML = x;

var z = 2 + 3 + "5";
document.getElementById('demo_5_8').innerHTML = z;

// JavaScript Operators
//The += Operator
var x = 20;
x += 5;  // x = x + 5
document.getElementById('demo_6').innerHTML = x;

var txt1 = "I want to learn ";
txt1 += "a web development";
document.getElementById('demo_6_1').innerHTML = txt1;
//number and a string
var x = 8+6;
var y = "8" + 5;
var z = "Hello " + 5;

document.getElementById('demo_6_2').innerHTML = 
x + "<br>" + y + "<br>" + z;

// JavaScript Arithmetic
// Adding
var x = 4;
var y = 3;
var z = x+y;
document.getElementById('demo_7').innerHTML = z;

// Subtracting
var x = 10;
var y = 4;
var z = x - y;
document.getElementById('demo_7_1').innerHTML =z;

// Multiplying
var p = "The multiplication operator (*) multiplies numbers.";
var x = 10;
var y = 3;
var z = x * y;
document.getElementById('demo_7_2').innerHTML =
p + "<br/>" + z;

// Dividing
var p = "The division operator (/) 20/5 divides numbers.";
var x = 20;
var y = 5;
var z = x / y;
document.getElementById('demo_7_3').innerHTML =
p + "<br/>" + z;

// Remainder
var a = 30;
var b = 4;
var c = a % b;
document.getElementById('demo_7_4').innerHTML = c;

// Incremeting
var p = "The increment operator (++) increments numbers.";
var a = 9;
a ++;
var b = a;
document.getElementById('deom_7_5').innerHTML =
p + "<br/>" + "9 increments is " + b;

//Decrementing
var p = "The decrement operator (--) decrements numbers.";
var a = 10;
a --;
var b = a;
document.getElementById('demo_7_6').innerHTML = 
p + "<br/>" + "10 Decrementing is " + b;

// Exponentiation
var x = 5;
x **= 2;
document.getElementById('demo_7_7').innerHTML =
"5 Exponentiation (5x5) is " + x;

// Math.pow()
var x = 6;
y = Math.pow(x,2);
document.getElementById('demo_7_8').innerHTML =
"6 Math.pow is " + y;

// Operanto precedence
var p = "Multiplication- 100+50*3 = 100+(50*3) adding ";
var x = 100 + 50 * 3;
document.getElementById('demo_7_9').innerHTML =
p + "<br/>"+ x;

var p = "Multiplication- 100+50*3 = (100+50)*3 adding ";
var x = (100+50) * 3;
document.getElementById('demo_7_10').innerHTML =
p + "<br>" + x;
// End p-7

// start p -8
// +=
var x = 12;
x += 8;
document.getElementById('demo_8').innerHTML = 
"var x = 12; <br/> x += 8; " + "<br/>"+ "Assignment is " + x;

// -=
var x = 12;
x -= 8;
document.getElementById('demo_8_1').innerHTML =
"var x = 12; <br/> x -= 8; " + "<br/>"+ "Assignment is " + x;

// *=
var x = 12;
x *= 8;
document.getElementById('demo_8_2').innerHTML =
"var x = 12; <br/> x *= 8; " + "<br/>"+ "Assignment is " + x;

// /=
var x = 12;
x /= 6;
document.getElementById('demo_8_3').innerHTML =
"var x = 12; <br/> x /= 6; " + "<br/>"+ "Assignment is " + x;

// %=
var x = 12;
x %= 5;
document.getElementById('demo_8_4').innerHTML =
"var x = 12; <br/> x %= 5; " + "<br/>"+ "Assignment is " + x;
// end -p-8
// JavaScript Data Types
document.getElementById('demo_9').innerHTML =
"var length = 16; " + "------> " + "It's a "+ "  Number" + "<br/>"+
"var lastName = 'Johnson' " + "------> " + "It's a "+ "  String" + "<br/>"+
"var x = {firstName:'John', lastName:'Doe'} " + "------> " + "It's a "+ "  Object";

//The Concept of Data Types
var x = 20 + 5 + " Years old Aitq";
document.getElementById('demo_9_1').innerHTML = 
"var x = 20 + 5 + 'Years old Aitq';" +"<br>" + x;
// But
var x = "Years old Aitq " + 20 + 5;
document.getElementById('demo_9_2').innerHTML = 
"var x = 'Years old Aitq' + 20 + 5;" +"<br>" + x;

//Other number system
var x = 123e5;
var y = 123e-5;
document.getElementById('demo_9_3').innerHTML =
"var x = 123e5;"+"<br>"+x+ "<br>"+"var y = 123e-5;"+"<br>"+y;

// Booleans
var x = 10;
var y = 8;
var z = 10;
document.getElementById('demo_9_4'). innerHTML =
(x == z) + "<br>"+ (x == y);

//JavaScript Arrays
var heIs = ["Atiq","Shehab","Sanaul"];
document.getElementById('demo_9_5').innerHTML = heIs[0];
document.getElementById('demo_9_6').innerHTML = heIs[1];
document.getElementById('demo_9_7').innerHTML = heIs[2];

// Object

var person = {
	firstName : "Masum",
	lastName : "Billah",
	age : 25,
};
document.getElementById('demo_9_8').innerHTML =
person.firstName + " " + person.lastName + " is "+ person.age + " years old";

//JavaScript typeof
document.getElementById('demo_9_9').innerHTML =
' " " = '+ "typeof = " + typeof " " + "<br>"+
'"Atiq" = '+ "typeof = " + typeof "Atiq" + "<br>"+
' "Masum Billah" = '+ "typeof = " + typeof "Masum Billah" + "<br>"+
' "10" = '+ "typeof = " + typeof 10 + "<br>"+
' "(10+4)" = '+ "typeof = " + typeof 10 + "<br>"+
"Cars = "+ "typeof = " + typeof cars;

var cars = " ";
document.getElementById('demo_9_10').innerHTML =
"The typeof is " + typeof cars;

// Null
var x = undefined;
var y = null;
document.getElementById('demo_9_11').innerHTML =
typeof x + "<br>"+ typeof y+ "<br>"+
(null === x)+ "<br>"+ (null == x); 

// Or
document.getElementById('demo_9_12').innerHTML =
typeof undefined + "<br>"+
typeof null + "<br>"+
(null ===undefined)+"<br>"+
(null == undefined);
//End Data Types

//JavaScript Functions
function amarFunction(a, b) {
	return a * b;
}
document.getElementById('demo_10').innerHTML =
 amarFunction(5,2);

// Return value
var x = rvFunction (5 , 4);
function rvFunction(a, b) {
return a * b;
}
document.getElementById('demo_10_1').innerHTML = x;

//Fahrenheit to Celsius
function toCelsius(f) {
	return (5/9) * (f-32);
}
document.getElementById('demo_10_2').innerHTML = toCelsius(77);
// or
function toCelsius(fahrenheit) {
	return (5/9) * (fahrenheit-32);
}
document.getElementById('demo_10_3').innerHTML = 
"The temperature is " + toCelsius(77) +" Celsius";

//JavaScript Objects
var car = {type: "Fiat", model: "500", color: "white"};
document.getElementById('demo_11').innerHTML = "The car type is " + car.type;
document.getElementById('demo_11_1').innerHTML = "The car model is " + car.model;
document.getElementById('demo_1_2').innerHTML = "The car color is " + car.color;

// Object Item and Property
var perSon = {
	firstName : "Masum",
	lastName : "Billah",
	age : 25,
	eyeColar : "Black & white"
};
document.getElementById('demo_11_4').innerHTML =
perSon.firstName +" "+ perSon.lastName + "is "+ perSon.age + " years Old And His eye color is " + perSon.eyeColar;
// Or
document.getElementById('demo_11_5').innerHTML =
perSon["firstName"] +" "+ perSon["lastName"] + "is "+ perSon["age"] + " years Old And His eye color is " + perSon["eyeColar"];

//Accessing Object Methods

 var perSon = {
	firstName : "Masum",
	lastName : "Billah",
	age : 25,
	fullName : function() {
		return this.firstName+ " "+ this.lastName + " is "+ this.age + " years old";
	}
};
document.getElementById('demo_11_6').innerHTML = perSon.fullName();

//JavaScript Events
function displayDate() {
	document.getElementById('demo_12_1').innerHTML = Date();
}
//End JS Events
//Start JS String
//String Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo_13").innerHTML = txt.length;

var x = "I wan to be a \"Freelancer\" Do you know? I am trying It.";
document.getElementById('demo_13_1').innerHTML = x;
//Or
var x = "The character \\ is called backslash.";
document.getElementById("demo_13_2").innerHTML = x; 
//IndexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("demo_14").innerHTML = pos;

//lastIndexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.getElementById("demo_14_1").innerHTML = pos;
//And
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("John");
document.getElementById("demo_14_2").innerHTML = pos;
//Slice = copy and cut
var str = "Apple, Banana, kiwi";
var result = str.slice(4, 18);
document.getElementById('demo_14_3').innerHTML = result;

var week = [
		"1 sat ", // 0
		"2 sun ", // 1
		"3 mon ", // 2
		"4 tues",// 3
		"5 wed ", // 4
		"6 thus ",// 5
		"7 fri"  // 6
];
var res = week.slice(3);
document.getElementById('demo_slice_14_4').innerHTML = res;

var week = [
		"1 sat ", // 0
		"2 sun ", // 1
		"3 mon ", // 2
		"4 tues ",// 3
		"5 wed ", // 4
		"6 thus ",// 5
		"7 fri"  // 6
];
var res = week.slice(2,5);
document.getElementById('demo_slice_14_5').innerHTML = res;

var week = [
		"-1 sat ", // 0 = -7
		"-2 sun ", // 1 = -6
		"-3 mon ", // 2 = -5
		"-4 tues ",// 3 = -4
		"-5 wed ", // 4 = -3
		"-6 thus ",// 5 = -2
		"-7 fri"  // 6 = -1
];
var res = week.slice(-3);
document.getElementById('demo_slice_14_6').innerHTML = res;

var week = [
		"-1 sat ", // 0 = -7
		"-2 sun ", // 1 = -6
		"-3 mon ", // 2 = -5
		"-4 tues ",// 3 = -4
		"-5 wed ", // 4 = -3
		"-6 thus ",// 5 = -2
		"-7 fri"  // 6 = -1
];
var res = week.slice(-6,5);
document.getElementById('demo_slice_14_7').innerHTML = res;

var week = [
		"-1 sat ", // 0 = -7
		"-2 sun ", // 1 = -6
		"-3 mon ", // 2 = -5
		"-4 tues ",// 3 = -4
		"-5 wed ", // 4 = -3
		"-6 thus ",// 5 = -2
		"-7 fri"  // 6 = -1
];
var res = week.slice(-5,-3);
document.getElementById('demo_slice_14_8').innerHTML = res;
//Substr
var week = "Atiq, masum, billah";
var rest = week.substr(2);
document.getElementById('demo_substr_14_9').innerHTML = rest;

var week = "Atiq, masum, billah";
var rest = week.substr(3,8); // Letter Spacing -From first= Out of -3 and +8
document.getElementById('demo_substr_14_9').innerHTML = rest;

var week = "Atiq, masum, billah";
var rest = week.substr(-6); // Letter Spacing -From last= Out of -6
document.getElementById('demo_substr_14_10').innerHTML = rest;

//Replacing String Content
function amakeReplaceKoro() {
	var amarVitore = document.getElementById('demo_replace_14_11').innerHTML;
	var amarDara = amarVitore.replace("Atiqur Rahman","Masum Billah");
	document.getElementById('demo_replace_14_11').innerHTML = amarDara;
}

// only the first match
function amakeReplaceKoro_2() {
	var amarVitore = document.getElementById('demo_replace_14_12').innerHTML;
	var amarDara = amarVitore.replace("PK", "Atiq");
	document.getElementById('demo_replace_14_12').innerHTML = amarDara;
}

//Case Insensitive
function amakeReplaceKoro_3() {
	var amarVitore = document.getElementById('demo_replace_14_13').innerHTML;
	var amarDara = amarVitore.replace(/ATIQUR RAHMAN/i, "Masum Billah");
	document.getElementById('demo_replace_14_13').innerHTML = amarDara;
}

//Regular Expression
function amakeReplaceKoro_4() {
	var amarVitore = document.getElementById('demo_replace_14_14').innerHTML;
	var amarDara = amarVitore.replace(/Atiqur Rahman/g, "Masum Billah");
	document.getElementById('demo_replace_14_14').innerHTML = amarDara;

}

//Converting to Upper and Lower Case
function amakeReplaceKoro_5() {
	var amarVitore = document.getElementById('demo_replace_14_15').innerHTML;
	document.getElementById('demo_replace_14_15').innerHTML = amarVitore.toUpperCase();
}

function amakeReplaceKoro_6() {
	var amarVitore = document.getElementById('demo_replace_14_16').innerHTML;
	document.getElementById('demo_replace_14_16').innerHTML = amarVitore.toLowerCase();
}

//The concat() Method
var tx = "Hello";
var tx2 = "Atiq";
var reTx = tx.concat(" ",tx2);

document.getElementById('demo_concat_14_17').innerHTML = reTx; 

//The charAt() Method
var x = "ATIQUR RAHMAN";
document.getElementById('demo_charAt_14_18').innerHTML = x.charAt(3);

//Converting a String to an Array
function cstoArry() {
	var x = "Atiq, Masum, Alamin, Siam";
	var rslt = x.split(",");
	document.getElementById('demo_split_14_19').innerHTML = rslt[1];
}
/*var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe 
=============================================
*/
var atiq = "AtiqurRahmanPK";
var x = atiq.split("");
var y = "";
var i;
for (i = 0; i < x.length; i++){
	y += x[i] + "<br>"
}
document.getElementById('demo_split_14_20').innerHTML = y;
/* ===================================================*/
//JavaScript Numbers
var br = "<br>";
document.getElementById('numBer_15').innerHTML = 
Number(true) + br +
Number(false) +br+
Number("10")+br+
Number("   10")+br+
Number("10  ")+br+
Number(" 10 ")+br+
Number("10.22")+br+
Number("10,20")+br+
Number("10 20")+br+
Number("Atiq");

//The parseInt() Method

var br = "<br>";
document.getElementById('numBer_15_1').innerHTML =
parseInt("10")+br+
parseInt("15.33")+br+
parseInt("20 8")+br+
parseInt("25 years")+br+
parseInt("years 30");

//The parseFloat() Method==========================
var br = "<br>";
document.getElementById('numBer_15_2').innerHTML =
parseFloat("10")+br+
parseFloat("15.33")+br+
parseFloat("20 8")+br+
parseFloat("25 years")+br+
parseFloat("years 30");

//== Start==JavaScript Arrays===========
var x = ["Atiq", " Masum", " Al-Amin"];
document.getElementById('array_16').innerHTML = x;

var a = [
	"Faruk",
	" Momin",
	" Raihan",
	" Masud"
];
document.getElementById('array_16_1').innerHTML = "And"+"<br>"+a;
//Using the JavaScript Keyword new Array()
var abc = new Array("Polash", " Moly", " Poly");
document.getElementById('array_16_2').innerHTML = abc;

var x = ["Ami", "Tumi", "She"];
document.getElementById('array_16_3').innerHTML = x[0];
//Changing an Array Element ======================================
var x = ["Atiq", " Billah", " Pk"];
x[0] = " Masum";
document.getElementById('array_16_4').innerHTML = x;
//Arrays are Objects=======================================
var detais = {
	name: "My name is Atiqur Rahman PK",
	age: " I'm 25 years old",
	service:" I'm a employee of GILI L.T.D"
};
var personalInfo = [detais.name, detais.age, detais.service];
document.getElementById('array_16_5').innerHTML = personalInfo;

//The length Property ==============================
var x = ["Bangladesh", "India", "Pakisthan"];
document.getElementById('array_16_6').innerHTML = x.length;
//Or
var x = ["Bangladesh", "India", "Pakisthan"];
var result = x[1];
document.getElementById('array_16_7').innerHTML = result;
//Accessing the Last Array Element===================
var x = ["Rafik", "Barkat", "Salam", "Abdur Rahmin"];
var y = x[x.length-1];
document.getElementById('array_16_8').innerHTML = y;
//===Looping Array Elements===================================
var fName, text, fLen, i;
fName = ["Raihan", "Rabbani", "A Owadud", "Sanaul", "Shehab"];
fLen = fName.length;

text = "<ul>";
for (i = 0; i < fLen; i++){
	text += "<li>" + fName[i] + "</li>";
}
text += "</ul>";
document.getElementById('array_loop_16_9').innerHTML = text;

var ltr, tLen, tx, i;
	ltr = "ABCDEFGHIJK";
	tLen = ltr.length;

	tx = "<ul>";
for (i = 0; i < tLen; i++){
	tx += "<li>" + ltr[i] + "</li>";
}
	tx += "</ul>";
document.getElementById('array_loop_16_10').innerHTML = tx;

var amakeDekhaw, checkKoro, amarVitore, amarDara;
	amakeDekhaw = "123456789";
	checkKoro = amakeDekhaw.length;

	amarVitore = "<ul>";
for(amarDara = 0; amarDara <checkKoro; amarDara++){
	amarVitore += "<li>"+ amakeDekhaw[amarDara]+ "</li>";
}
	amarVitore += "</ul>";
document.getElementById('array_loop_16_11').innerHTML = amarVitore;

//=====Array.forEach()==============================
var x, y, z;
x = ["A", "B", "C", "D"];

y = "<ul>";
x.forEach(atiqurRahman);
y += "</ul>";

function atiqurRahman(value) {
	y += "<li>" +value+"</li>";
}
document.getElementById('array_forEach_16_12').innerHTML = y;

//========Adding Array Elements==============
var y = "<h2 style=color:red;background-color:green;width:150px;height:150px;text-align:center;margin-top:10px;padding-top:50px;>Atiq</h2>";
var x = ["Masum", " Billah", " Shafik"];
document.getElementById('array_adding_16_13').innerHTML = x;

function addFunction() {
	x.push(y);
	document.getElementById('array_adding_16_13').innerHTML = x;
}

//Array length property:===================================
var x = ["Banana", " Apple", " Mango"];
document.getElementById('array_adding_16_14').innerHTML = x;

function lenPrty(){
	x[x.length]=" Potato";
	document.getElementById('array_adding_16_14').innerHTML = x;
}

//Or
var content, cLen, text, i;
	content = ["Banana", " Apple", " Mango"];
	content[6] = "Lemon";

	cLen = content.length;
	text = "";
for(i = 0; i < cLen; i++){
	text += content[i] +"<br>";
}
document.getElementById('array_adding_16_15').innerHTML = text;

//Associative Arrays=====================================

var x = [];
x [0] = "Atiq";
x [1] = "Masum";
x [2] = "Billah";
x [3] = 25;
document.getElementById('associative_16_16').innerHTML =
 x[1]+" <br>"+ x.length;

//Converting Arrays to Strings=========================
var x = ["Raihan", " Mango", " Apple", " Billah"];
document.getElementById('converting_17').innerHTML = x.join(" + ");
document.getElementById('converting_17_1').innerHTML = x.join(" <br> ");
document.getElementById('converting_17_2').innerHTML = x.join(" <b style= color:red;>PK</b> ");
document.getElementById('converting_17_3').innerHTML = x.join(" <b style=font-size:40px;>PK</b> ");

//Popping===================================
var x = ["Raihan", " Mango", " Apple", " Billah"];
document.getElementById('pop_17_4').innerHTML = x;

var x = ["Raihan", " Mango", " Apple", " Billah"];
x.pop();
document.getElementById('pop_17_5').innerHTML = x;

var x = ["Raihan", " Mango", " Apple", " Billah"];
document.getElementById('pop_17_6').innerHTML = x.pop();

//Pushing=========================

var x = ["Raihan", " Mango", " Apple", " Billah"];
x.push(" PK")
document.getElementById('push_17_7').innerHTML = x;
//========================
var x = ["Raihan", " Mango", " Apple", " Billah"];
document.getElementById('push_17_8').innerHTML = x;

function pushMethods() {
	x.push(" PK")
	document.getElementById('push_17_8').innerHTML = x;
};
//==============================
var y = ["Raihan", " Mango", " Apple", " Billah"];
document.getElementById('push_17_9').innerHTML = y;

function pushMethods_2() {
	document.getElementById('push_17_9').innerHTML = y.push();
}
//Shifting Elements================
var a = ["Raihan", " Mango", " Apple", " Billah"];
document.getElementById('shift_17_10').innerHTML = a;
function shifTing() {
	document.getElementById('shift_17_10').innerHTML = a.shift();
}
//============================================
var a = ["Raihan", " Mango", " Apple", " Billah"];
document.getElementById('shift_17_11').innerHTML = a;
function shifTing_1() {
	a.shift()
	document.getElementById('shift_17_11').innerHTML = a;
}
//Unshift ==========================
var cName = [" Raihan", " Mango", " Apple", " Billah"];
document.getElementById('unshift_17_12').innerHTML = cName;
function UNshifTing_1() {
	cName.unshift("Banana");
	document.getElementById('unshift_17_12').innerHTML = cName;
}
//Delete================================
var deleteMethods = ["Raihan", " Mango", " Apple", " Billah"];
document.getElementById('delete_17_13').innerHTML =
"The first element is: " + deleteMethods[0];
function deletedMethods() {
	delete deleteMethods[0];
	document.getElementById('delete_17_13').innerHTML =
	"The first element delete is: " + deleteMethods[0];
}
//Splicing an Array===================================
var x = ["Atiq", " Rabbani"," Somon"," Burhan"];
document.getElementById('spLice_17_14').innerHTML = 
"Original array"+"<br>"+x;
function splice_array() {
	x.splice(1, 0, " Masum", " Polash");
	document.getElementById('spLice_17_15').innerHTML =
	"New Array"+"<br>"+x;
}
//Using splice() to Remove Elements=========================
var x = ["Atiq", " Rabbani"," Somon"," Burhan"];
document.getElementById('splice_17_16').innerHTML = x;
function spliceRemove() {
	x.splice(0,1);
	document.getElementById('splice_17_16').innerHTML = x;
}
//Merging (Concatenating) Arrays========================
var x = ["Masum ", " Siam"];
var y = ["Atiq ", " Zihad", " Al-Amin"];
var z = x.concat(y);
document.getElementById('concat_Arrays_17_17').innerHTML = z;
//=====================
var a = ["Masum ", " Siam"];
var b = ["Atiq ", " Zihad", " Al-Amin"];
var c = [" Aple", " Banana"];
var d = a.concat(b,c);
document.getElementById('concat_Arrays_17_18').innerHTML = d;

//=============Slicing an Array=========================

var a = ["Masum ", " Siam"," Atiq ", " Zihad", " Al-Amin"];
var d = a.slice(1,3);
document.getElementById('slice_array_17_19').innerHTML = 
a + "<br>"+d;
//===================
var a = ["Masum ", " Siam"," Atiq ", " Zihad", " Al-Amin"];
var d = a.slice(1);
document.getElementById('slice_array_17_20').innerHTML = 
a + "<br>"+d;

//=====P-18===========JavaScript Sorting Arrays================================
var a = ["Masum ", " Siam"," Atiq ", " Zihad", " Al-Amin"];
document.getElementById('sort_18').innerHTML = a;

function srot_arrays() {
	a.sort();
	document.getElementById('sort_18').innerHTML =a;
}
//=======Or=======

var a = ["Masum ", " Siam"," Atiq ", " Zihad", " Al-Amin"];
document.getElementById('sort_19').innerHTML = a;

function srot_arrays_1() {
	document.getElementById('sort_19').innerHTML =a.sort();
}
//==============Reversing an Array=====================
var xRvrs = ["Amar", " Sunar", " Bangla", " Tumai"];
document.getElementById('rvarray_19_1').innerHTML = xRvrs;

function rvAr() {
  xRvrs.reverse();
  document.getElementById("rvarray_19_1").innerHTML = xRvrs;
}

//===========Numeric Sort===================
var x = [50, 10, 30, 60, 100, 20, 80, 40, 70, 90];
document.getElementById('numeric_19_2').innerHTML ="The point is:"+"<br>"+ x;

function nuMariC() {
	x.sort(function(a, b) {
		return a-b
	});
	document.getElementById('numeric_19_2').innerHTML ="The Numaric is"+"<br>"+ x;
}
//==========Or

var x = [50, 10, 30, 60, 100, 20, 80, 40, 70, 90];
document.getElementById('numeric_19_3').innerHTML ="The point is:"+"<br>"+ x;

function nuMariC_2() {
	x.sort(function(a, b) {
		return b-a // changed b-a
	});
	document.getElementById('numeric_19_3').innerHTML ="The Numaric is"+"<br>"+ x;
}

//=========alphabetically or numerically=========

var p = [40, 70, 90, 50, 10, 30, 60, 100, 20, 80];
document.getElementById('sapNrc_19_4').innerHTML ="The point is:"+"<br>"+ p;

function apcNurc1() {
	p.sort();
	document.getElementById('sapNrc_19_4').innerHTML ="The Numaric is"+"<br>"+ p;
}

function apcNurc2() {
	p.sort(function(a, b) {
	return b-a // changed b-a
	});
	document.getElementById('sapNrc_19_4').innerHTML ="The Alphabetically is"+"<br>"+ p;
}
//==========Sorting an Array in Random Order============
var p = [90, 40, 70, 50, 10, 30, 60, 100, 20, 80];
document.getElementById('sapNrc_19_5').innerHTML ="The point is:"+"<br>"+ p;

function arRanoom() {
	p.sort(function(a, b) {
	return 0.5 - Math.random() 
	});
	document.getElementById('sapNrc_19_5').innerHTML ="The Random is"+"<br>"+ p;
}
//=========Highest (or Lowest)=======

var hLnumBr = [30, 90, 40, 70, 50, 10, 60, 100, 20, 80];
document.getElementById('hL_19_6').innerHTML = hLnumBr;

function hL0() {
	document.getElementById('hL_19_6').innerHTML = hLnumBr;
}
function hL1() {
	hLnumBr.sort(function(a, b) {
		return a-b
	});
	document.getElementById('hL_19_6').innerHTML = hLnumBr[0];
}
function hL2() {
	hLnumBr.sort(function(a, b) {
		return b-a
	});
	document.getElementById('hL_19_6').innerHTML = hLnumBr[0];
}

//========Using Math.max() on an Array====
var a = [50, 30, 90, 40, 70, 10, 60, 100, 20, 80];

document.getElementById('math_max_19_7').innerHTML ="The Number is : "+ a;

function myArrayMax(masum) {
	return Math.max.apply(null, masum);
}

function Array_math_Max(){
	document.getElementById('math_max_19_7').innerHTML ="The Highest Number is : " + myArrayMax(a);
}

//=============Using Math.min() on an Array==============
var x = [80, 50, 30, 90, 40, 70, 10, 60, 100, 20];

document.getElementById('math_min_19_8').innerHTML ="The Number is : "+ x;

function myArrayMin(atiq) {
	return Math.min.apply(null, atiq);
}

function Array_math_Min(){
	document.getElementById('math_min_19_8').innerHTML ="The Lowest Number is : " + myArrayMin(x);
}

// =====P-20============
//================JS Array Iteration=============
//=======Array forEach
var x = " ";
var n = [80, 50, 30, 90, 40];
n.forEach(Masum_Billah);
document.getElementById('for_Each_20').innerHTML = x;

function Masum_Billah(value, index, array){
	x = x + value + "<br>";
}
//========Array.map=======
var x = [20, 3, 15, 6, 30, 8];
document.getElementById('map_20_1').innerHTML = x;


var y = x.map(amar_map);

function amar_map(value, index, array){
	return value * 2;
}
function map_Arrays() {
	document.getElementById('map_20_1').innerHTML = y;

}
//=================only value==================
var x = [20, 3, 15, 6, 30, 8];
document.getElementById('map_20_2').innerHTML = x;


var y = x.map(amar_map);

function amar_map(value ){ //only value
	return value * 2;
}
function map_Arrays_2() {
	document.getElementById('map_20_2').innerHTML = y;

}
//=======Array.filter()==========
var a = [90, 40, 70, 50, 10, 30, 60, 100, 20, 80];
document.getElementById('filter_20_1').innerHTML ="Use = value, index, array: " + a;

var b = a.filter(amar_filter);

function amar_filter(value, index, array) {
	return value > 30;
}
function filter_Arrays() {
	document.getElementById('filter_20_1').innerHTML ="Value > 30 = Result is: " + b;
}
// =============== Only value========
var x = [90, 40, 70, 50, 10, 30, 60, 100, 20, 80];
document.getElementById('filter_20_2').innerHTML ="Use only value: "+ x;

var y = x.filter(amar_filter_2);

function amar_filter_2(value) {
	return value > 30;
}
function filter_Arrays_2(){
	document.getElementById('filter_20_2').innerHTML ="Value > 30 = Result is: " +y;
}

//============Array.reduce()============
var n = [90, 40, 70, 50,];
document.getElementById('reduce_array_20_3').innerHTML ="All number is: " + n;

var r = n.reduce(Amar_reduce);

function Amar_reduce(total, value, index, array) {
	return total + value;
}
function reduce_Array() {
	document.getElementById('reduce_array_20_3').innerHTML ="Use The total, value, index, array<br> Total is: " + r;

}
//============Or============
var n = [90, 40, 70, 50,];
document.getElementById('reduce_array_20_4').innerHTML ="All number is: " + n;

var r = n.reduce(Amar_reduce_2);

function Amar_reduce_2(total, value) {
	return total + value;
}
function reduce_Array_2() {
	document.getElementById('reduce_array_20_4').innerHTML ="Use The total, value <br> Total is: " + r;

}
//============SUM 100+ ============
var alln = [90, 40, 70, 50,];
document.getElementById('reduce_array_20_5').innerHTML ="All number is: " + alln;

var nResult = alln.reduce(Amar_reduce_3, 100);

function Amar_reduce_3(total, value) {
	return total + value;
}
function reduce_Array_3() {
	document.getElementById('reduce_array_20_5').innerHTML ="Use The total, value <br> Total is 100+ = : " + nResult;

}

//=========Date()====================
var d = new Date(2018, 11, 24, 10,20, 10);
document.getElementById('date_21').innerHTML = d;
//=================
var d = new Date("October 13, 2015 12:15:00");
document.getElementById('date_21_2').innerHTML = d;
//=================
var d = new Date(-100000000000);
document.getElementById('date_21_3').innerHTML = d;
//=================
var d = new Date(100000000000);
document.getElementById('date_21_4').innerHTML = d;
//=================
var d = new Date();
document.getElementById('date_21_5').innerHTML = d.toDateString();
//===================getDay==================
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("date_21_6").innerHTML = days[d.getDay()];
// ================setDate==============
var d = new Date();
d.setDate(15);
document.getElementById("date_21_7").innerHTML = d;

//==========Compare Dates=========
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
	text = "Today is before January 14, 2100.";
}else{
	text = "Today is after January 14, 2100.";
}
document.getElementById('date_21_8').innerHTML = text;

//==========P-22================
//=====Math Object==========================
// === Math.PI
document.getElementById('maath_object_22').innerHTML = Math.PI;
//=========Math.round()
document.getElementById('maath_object_22_2').innerHTML = Math.round(4.4);
//========Math.pow()
document.getElementById('maath_object_22_3').innerHTML = Math.pow(8, 2);
//=========Math.sprt()
document.getElementById('maath_object_22_4').innerHTML = Math.sqrt(64);
//============== Math.abs()
document.getElementById('maath_object_22_5').innerHTML = Math.abs(-4.4);
//===========Math.min()
document.getElementById('maath_object_22_6').innerHTML = Math.min(0, 150, 30, 20, -8, -200);
//============Math.max()
document.getElementById('maath_object_22_7').innerHTML = Math.max(0, 150, 30, 20, -8, -200);

//===========End JS Math=========================================

//=======Start JS Random=======






















//===========SlideShow====
var oeTags = '<img src="/Atiq/JSW3/SDSDSD.gif" width="854" height="380" alt=""/>';
document.getElementById('slideShow').innerHTML = oeTags ;












