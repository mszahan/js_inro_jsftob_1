// ways of creating array---------------------------------
// square = ['sarwar', 'sojib', 'gethawking']
// cls = new Array('item1', 'item2', 'item3')

// console.log(square)
// console.log(cls)


//accessing array-------------------------------------------------
// square = ['sarwar', 'sojib', 'gethawking']
//by index-------
// console.log(square[2])

//updating values----------
// square[2] = 'NotGetHawking'
// console.log(square)

//accessing by for loop---------
// for (var i = 0; i < square.length; i++){
//     console.log(square[i])
// }

//by forEach callback method-------
//forEach method only tracks unempty elements whereas for does both
// square.forEach(function(item, i){
//     console.log(i)
//     console.log(item)
// })


// Adding items to the array--------------------------------------
// square = ['sarwar', 'sojib', 'gethawking']
//by index----------
// square[3] = 'Alex'
// console.log(square)

//by push (adds value to the end of the array)------
// square.push('Rebecca')
// console.log(square)

// Deleting array elements-----------------------------------
// square = ['sarwar', 'sojib', 'gethawking']

//by delete method----------------
//it's similar to square[i] = undefined
// delete square[0]

// console.log('for loop result-------')
// for (var i=0; i<square.length; i++){
//     console.log(square[i])
// }

// console.log('forEach result-----------')
// square.forEach(function(item){
//     console.log(item)
// })

//by splice method-----------
//.splice(begin number, consecutive count number)
//completely delets no undefined
// square.splice(0, 2)

// console.log('for loop result-------')
// for (var i=0; i<square.length; i++){
//     console.log(square[i])
// }

// console.log('forEach result-----------')
// square.forEach(function(item){
//     console.log(item)
// })

// Filtering elements in an array------------------------------
square = ['sarwar', 'sojib', 'gethawking']

//by filter callback method---------
//If the callback function returns true, the element is kept; otherwise, it is excluded
//you can just filter them no manipulation is working
// square2 = square.filter(function(item, index){
//     if (index>=1){
//         // return item;
//         return true
//     }
// })
// console.log(square2)

//by map callback method-----------
square2 = square.map(function(item, index){
    return item.toUpperCase();
})
console.log(square2)
console.log(square)