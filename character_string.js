//different ways of defining a string--------------------------------------
// using the backtick---------------
// var firstName = 'Sarwar'
// var lastName = "Zahan"
// var fullName = `The first name is ${firstName} and last name is ${lastName}`
// console.log(fullName)

//using the object------
// fullName = new String('Sarwar Zahan')
// console.log(fullName)

//checking the length-----
//no changes in lenght no matter how you define a string
// var name = 'Sarwar Zahan'
// var fullName = 'Sarwar Zahan'
// console.log(`lenght of name: ${name.length}`)
// console.log(`lenght of fullName: ${fullName.length}`)

// Accessing characters in a string------------------------------------------
// Using the charAt(index) method---------
// like [] in python and working fine
// var fullName = 'Rebecca Rainbow'
// console.log(`access the first character in pythonic way > ${fullName[0]}`)
// //try js methods
// console.log(`Js method way ${fullName.charAt(0)}`)

//using the slice method-------------
// not working for the colon
// console.log(`using the pythonic way ${fullName[0:4]}`)

// js method way
// console.log(`using the js method way ${fullName.slice(0, 4)}`)


// Modifying a character string Using regular expressions ------------------------------------
var s = 'Hello'

// Using match(regexp)----------------
// if it finds it will return the text otherwise it returns null
// console.log("s =", s);

// search for "Hel"
// console.log(`s.match(/Hel/) = ${s.match(/H0l/)}`);

// search for "hel"
// console.log(`s.match(/hel/) = ${s.match(/hel/)}`);

// search for "hel" ignoring upper/lower case 
// console.log(`s.match(/hel/i) = ${s.match(/hel/i)}`);

// search for H followed by a or b or e followed by l 
// console.log(`s.match(/H[abe]l/) = ${s.match(/H[abe]l/)}`);

// search for He followed by 0 or 1 a followed by l 
// console.log(`s.match(/Hea?l/) = ${s.match(/Hea?l/)}`);

// search for He followed by 0 (min) to 1 (max) followed by l 
// console.log(`s.match(/Hea{0,1}l/) = ${s.match(/Hea{0,1}l/)}`);

// search for He followed 1 (min) to 2 (max) followed by l 
// console.log(`s.match(/Hea{1,2}l/) = ${s.match(/Hea{1,2}l/)}`);

// Replacing a part of a string with a given format Using the replace() method-------
// search for "Hel" and replace with "abc"
console.log(`s.replace(/Hel/, "abc") => ${s.replace(/Hel/, "abc")}`);