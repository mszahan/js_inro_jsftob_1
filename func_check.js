function list_out_first_ten_numbers() {
    for (var i=0; i<10; i++) console.log(i);
}

list_out_first_ten_numbers()



function sum_of_ten_numbers(){
    let total = 0
    for (var i=0; i<10; i++) {
        total += i;
        
    }
    return total;
}

console.log('showing the total of the first ten numbers')
var total = sum_of_ten_numbers();
console.log('total = '+total)



function sum_of_N_numbers(n) {
    let total = 0;
    for (var i=0; i<n; i++) {
        total += i;
        
    }
    return total;
}

var total = sum_of_N_numbers(25);
console.log('Sum of first n mumbers is ' +total)