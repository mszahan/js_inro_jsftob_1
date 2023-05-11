// Creating an object using the braces notation
// var p = {firstName: 'Sarwar', lastName: 'Zahan'}

// -------------------------------------------------------------------------------
// Adding properties to a class
// class Person {
//     firstName;
//     lastName;
//     age;
// }

// var p = new Person;
// console.log(p)

// --------------------------------------------------------------------------------
// Properties with default values
// now methods
// class Person {
//     //class properties
//     firstName = '';
//     lastName = '';
//     age = 0;

//     //class method

//     display(){
//         console.log(
//             'the persons first name is ' +this.firstName + 'and the last name is ' + this.lastName
//         );
//     }

// }

// var p = new Person;
// console.log(p)
// // calling the method of the object
// p.display();

// // changing object property value
// p.firstName = 'Rebecca'
// p.lastName = 'Rainbow'
// console.log('after defining the properties----------')
// console.log(p)
// p.display();

// -----------------------------------------------------------------------------------------------
// Using a constructor for the Person class
class Person {
    //class properties
    firstName = '';
    lastName = '';
    age = 0;

    //constructor
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //class method
    display(){
        console.log(
            'the persons first name is ' +this.firstName + 'and the last name is ' + this.lastName
        );
    }

}

var p = new Person('Rebecca', 'Rainbow');
console.log(p)

var pp = new Person('Alex', 'Daddario', 25)
console.log(pp)


// Merging one object with another
// this will chane the porperties of p if the p2 is changed
// var p2 = p
// p2.city = 'Dhaka';
// console.log(p2)

// Using the spread operator ...
// to avoid changing the base

var p2 = {...p}
p2.city = 'Dhaka';
console.log(p2)

// to avoid writing p2.city = "Washington" 
// var p2 = { ...p, city : "Dhaka" };