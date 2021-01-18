const Items = require('../items/items-model');

module.exports = {
    randomThree
  }

function randomThree(arr) {
    let food = []
    let activ = []
    for(const item in arr) {
        if (arr[item].useAgain) {
            if (arr[item].food) {
                food.push(arr[item].id)
            } else {
                activ.push(arr[item].id)
            }
        }
    }

    if (food.length < 3 || activ.length < 3) {
        return "not enough items to generate 3 of each"
    }

    let foodNums = []
    let activNums = []

    while (foodNums.length < 3) {
        let num = randomNumber(food.length)
        if (!foodNums.includes(num)) {
            foodNums.push(num)
        }
    }
    while (activNums.length < 3) {
        let num = randomNumber(activ.length)
        if (!activNums.includes(num)) {
            activNums.push(num)
        }
    }
    return [food[foodNums[0]], food[foodNums[1]], food[foodNums[2]], activ[activNums[0]], activ[activNums[1]], activ[activNums[2]]]

}


function randomNumber(max){
    return Math.floor(Math.random() * max)
}




// let testArr = [
//     {name: "test1", useAgain: true, food: false},
//     {name: "test2", useAgain: true, food: false},
//     {name: "test3", useAgain: true, food: false},
//     {name: "test4", useAgain: true, food: false},
//     {name: "test5", useAgain: false, food: false},
//     {name: "test6", useAgain: true, food: false},
//     {name: "test7", useAgain: true, food: false},
//     {name: "test8", useAgain: true, food: true},
//     {name: "test9", useAgain: false, food: true},
//     {name: "test10", useAgain: true, food: true},
//     {name: "test11", useAgain: true, food: true},
//     {name: "test12", useAgain: true, food: true},
//     {name: "test13", useAgain: true, food: true},
//     {name: "test14", useAgain: true, food: true},
//     {name: "test15", useAgain: true, food: true},
//     {name: "test16", useAgain: true, food: true},
//     {name: "test17", useAgain: true, food: true},

// ]

// randomThree(testArr)
