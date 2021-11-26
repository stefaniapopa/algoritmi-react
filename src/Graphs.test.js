import { getShortestPath } from "./Graphs";

const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};

const testData = [
    {
        start: "A",
        finish: "C",
        shortestPath: ["A", "C"]
    },
    {
        start: "start",
        finish: "finish",
        shortestPath: ["Start", "bla bla", "finish"]
    }
]

// test("should find shortest path given list of predefined data", () => {
//     testData.forEach((testDataObject) => {
//         const {start, finish, shortestPath} = testDataObject || {};
//         expect(getShortestPath(graph, start, finish)).toEqual(shortestPath);
//     });
// });

// test("should pass", () => {
//     expect(true).toEqual(true); //da
//     expect(!false).toEqual(true);//nu stim
//     expect(!!true).toEqual(true);//nu stim
//     expect(!'').toEqual(true);//nu stim
//     expect(!!{}).toEqual(true);//nu stim
// })

const testDataAdd = [
    {
        input: [1,2,3],
        result: 6
    },
    {
        input: [1,2,5,null, 'ab', NaN],
        result: 8
    },
    {
        input: [1],
        result: 1
    },
    {
        input: ['ab', null, '123'],
        result: 'ab123'
    }
]


/*function add(input) {
    let sum = 0
    for(let i = 0;i < input.length; i++){
        if (!(isNaN( input[i]) || input[i] === null )) {
           sum += input[i]
        } 
    }
    console.log(input);
    return sum;
}*/

function sumArray(input) {
    const sum = input.reduce((acumulator, item) => {
        return  (!(isNaN(item) || item === null )) ? acumulator+=item : acumulator
    })
    console.log(input);
    return sum;
}

test("should test input data", () => {
    testDataAdd.forEach(({input, result}) => {
        expect(sumArray(input)).toEqual(result);
    })
})

/*test("should add up", () => {
    expect(add([1,2,3])).toEqual(6); 
 })

 test("should only add up the numbers", () => {
    expect(add([1,2,5,null, 'ab', NaN])).toEqual(8); 
 })

 test("should fail and show 'ab123'", () => {
    expect(add(['ab', null, '123'])).toEqual('ab123'); 
 })

 test("should show null", () => {
    expect(add([null])).toEqual(null); 
 })

 test("should fail and show ' '", () => {
    expect(add([" "])).toEqual(' '); 
 })

 test("should pass and show '0'", () => {
    expect(add([0])).toEqual(0); 
 })

 test("should pass and show '0' :)", () => {
    expect(add([-1, 1])).toEqual(0); 
 })

 test("should show NaN :D", () => {
    expect(add([NaN])).toEqual(NaN); 
 })*/
 