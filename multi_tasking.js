//Using the setTimeout() function setTimeout(callback, timeout)---------------------------------------
// console.log('Before timeout block')
// setTimeout(function(){
//     console.log('In the timeout block')
// }, 5000)
// // this will be executed before the block in timeout 
// console.log('After timeout block')


// display the time when the codes are executed
// console.log(time(), 'Before timeout block')
// setTimeout(function(){
//     console.log(time(), 'In the timeout block')
// }, 5000)
// // this will be executed before the block in timeout 
// console.log(time(), 'After timeout block')

// function time() {
//     // return time as HH:MM:SS 
//     var date = new Date(); 
//     var hour = date.getHours(); 
//     var min = date.getMinutes(); 
//     var sec = date.getSeconds(); 
//     if (hour < 10) hour = "0" + hour; 
//     if (min < 10) min = "0" + min; 
//     if (sec < 10) sec = "0" + sec;
//     return "" + hour + ":" + min + ":" + sec + " "; 
// }


// Using the setInterval() function setInterval(callback, timeout)------------------------------------------
// console.log(time(), 'Start of timer')
// count = 0
// setInterval(function(){
//     console.log(time(), `count = ${count}`);
//     count++;
// }, 1000)
// // this will be executed before the block in timeout 
// console.log(time(), 'End of timer')

// function time() {
//     // return time as HH:MM:SS 
//     var date = new Date(); 
//     var hour = date.getHours(); 
//     var min = date.getMinutes(); 
//     var sec = date.getSeconds(); 
//     if (hour < 10) hour = "0" + hour; 
//     if (min < 10) min = "0" + min; 
//     if (sec < 10) sec = "0" + sec;
//     return "" + hour + ":" + min + ":" + sec + " "; 
// }


// Using the clearInterval() function------------------------------------------
// it's another callback so you need another function
// you need to provide that whole function that you want to end
// console.log(time(), 'Start of timer')
// count = 0

// var timer = setInterval(function(){
//     console.log(time(), `count = ${count}`);
//     if(count==10){
//         clearInterval(timer);
//         console.log(time(), "End of timer");
//     }
//     else count++;
// }, 1000)
// // this will be executed before the block in timeout 
// console.log(time(), 'End of timer')

// function time() {
//     // return time as HH:MM:SS 
//     var date = new Date(); 
//     var hour = date.getHours(); 
//     var min = date.getMinutes(); 
//     var sec = date.getSeconds(); 
//     if (hour < 10) hour = "0" + hour; 
//     if (min < 10) min = "0" + min; 
//     if (sec < 10) sec = "0" + sec;
//     return "" + hour + ":" + min + ":" + sec + " "; 
// }


// Creating the Promise object, then using the then() method-----------------------------------

function time() {
    // return time as HH:MM:SS 
    var date = new Date(); 
    var hour = date.getHours(); 
    var min = date.getMinutes(); 
    var sec = date.getSeconds(); 
    if (hour < 10) hour = "0" + hour; 
    if (min < 10) min = "0" + min; 
    if (sec < 10) sec = "0" + sec;
    return "" + hour + ":" + min + ":" + sec + " "; 
}

function wait(sec){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(sec);
        }, 1000);
    })
}

console.log("start of the time")
wait(2).then(function(sec){
    console.log(time(), `End of timer of ${sec} seconds`);
})