/*function staircase(n) {
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat((n-1) - i);
        const hashes = '#'.repeat(i + 1);
        console.log(spaces + hashes);
    }
} */

// words accepted start with A and end with E
/*function aeOnly(arr) {
    if (arr[0] === ("A" || "a")) {
        for (let word = 0; word < arr.length; word ++ ) {
            console.log(arr[word]);
        }
    }if (arr[arr.length] === ("E" || "e")) {
        for (let word1 = 0; word1 < arr.length; word1 ++ ) {
            console.log(arr[word1]);
    }
        else{
            console.log( " case is invalid and conditions are not meet")
        }
} */
    
   /* function word(string){
        return string.startsWith("A")&& string.endsWith("E")
    }
    console.log(word("AXE")); */

// Create  a function that sums the first three largest numbers  in the array.
// [1,2,5,7,4]=5+7+4=16



/*let arr =[];
if ( arr[]==null ) {
    console.log(" Array is empty  no values to show ");
    
}else {
    for (let i = 0 ; i < arr.length; i++) {
        for (let j = arr.length; j < 0; j--) {
             if ( arr[i] > arr[j]){
                 arr[j].pop;
                 console.log(arr[]);
             }
             if (arr[j] > arr[i] {
                 arr[i].pop;
                 console.log(arr[]);
             }
        }
    }
} 
*/

/*const  myArray = [1,2,5,7,4];
myArray.sort((a,b) => a-b);
console.log(myArray[myArray.length-1] + myArray[myArray.length-2] + myArray[myArray.length-3]) */


//Create a function that prints any string backwards

/* let strHolder;
function strBackwards (string) {
    for( let i = string.length ; i > 0 ; i --) {
        strHolder += string[i]
    }
    
    return strHolder;
    
}

console.log(strBackwards("Frank")); */

//Create a function that counts the alphabets backwards but prints odd indexed letters
/*
let counter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


function alphaBackwards(string) {
    // string reverese
    string.reverse();
    // new string holder
    let newString = string.reverse();
    
    //string sort 
    for( let i = 0; i <= string.length-1; i++) {
        if (i%2 == 0) {
            continue;}
        else  {
            
            console.log(newString[i])
        }
    }

}

alphaBackwards(counter)
;

 */
/*
let arr= [3,4,2,8,10]
 function minMaxSum(r){
    let w =0;
    let t =0;
    // sort array for max 
     for ( let q =1; q < r.length; q ++){
         w+= r[q]
     }
     //sort for min 
     for ( let q =0; q < r.length-1; q ++){
         t+= r[q]
     }
     
     console.log( w + " Max Sum");
     console.log( t + " Min Sum");
     
 }
 minMaxSum(arr); */

// Create a function that finds and returns the greatest number amongst any three number entered?

/*function greatOf(m, d, s) {
    let r = 4;
    do while ( r < ) {
        
    }
    
} */

// for loop and while loops
// loop is any code that repeats itself when in true condition and stops or terminates when the condition is false
// for loop, while loop, do while loop, for in loop, for of loop, forEach loop, find,every,some, filter, map, reduce

/*let kervens=12 // intializer- ONLY RUNS ONCE
while(kervens>=2){// condition
    console.log(hello i am kervens and i am ${kervens} years old)// EXECUTION
    kervens--// tracker(INCREMENT OR DECREMENT CAN BE A LOGIC)
}

let kervens2=2
do{
    console.log(hello i am kervens and i am ${kervens2} years old)
    kervens2++
}while(kervens2<=12)

//
function findTheHighest(a,b,c){ return Math.max(a,b,c)}
console.log(findTheHighest(1,2,3)); */

//Create a function that loops an array of numbers(from 1 -10) backwards.

 //const myArray=[1,2,3,4,5,6,7,8,9,10] // array  to reverse
//myArray.length;  // full size of the array 
//myArray.forEach((element,index,array)=> {
  //  console.log(array[array.length-index-1])
//}) 

/*  
Create a function that accepts a value such that when greater or equal 
to 10 it loops from 0 to 10 and when less than 10 it loops backwards from 10 to 0
*/
/*
function  loopDirection(v) {
    const theArray = [0,1,2,3,4,5,6,7,8,9,10];
    if (v < 10) {
        
       // return theArray.forEach(theArray.length-1)
        theArray.forEach((element,index,array)=> {
            console.log(array[array.length-index-1])
        })
        
    }
    else if (v >= 10 ){
        return theArray.forEach(element => console.log(element));
    }
    
}
loopDirection(10);

/*  
Create a function that accepts only boolean and no other
 datatype (study : typeof) HW
 */
function typeB (bool) {
    return typeof bool;
}
console.log(typeB(true));

/*
create a function that capitalizes the
 first letter in the array const names = ["alice", "bob", "charlie"];
 */
/*
const array =["alice", "bob", "charlie"]
function firstCap(array) {
   const result = array.map((element )=> {
       return element[0].toUpperCase();

   })
   
    
    console.log(result);
}
firstCap(array);


 */
 
/*
function firstCap(array) {
    const result = array.map((element) => {
        return element[0].toUpperCase() 
    })
    console.log(result)
}

firstCap(array)

 */

/*
Create a function that finds the total number people that love suya , and sushi from the data below const ArrayNew = [
{
name: "linda",
country: "Australia",
stateOfResidence: "victoria",
favoriteFoods: ["sushi", "pavlova", "suya"]
},
{
name: "kai",
country: "Japan",
stateOfResidence: "tokyo",
favoriteFoods: ["ramen", "sushi", "mochi"]
},
{
name: "amina",
country: "Nigeria",
stateOfResidence: "lagos",
favoriteFoods: ["jollof rice", "suya", "moi moi"]
},
{
name: "leo",
country: "Brazil",
stateOfResidence: "sao paulo",
favoriteFoods: ["feijoada", "sushi", "brigadeiro"]
}
];


Hint: filter, forEach


 */

 let ArrayNew = [
    {
        name: "linda",
        country: "Australia",
        stateOfResidence: "victoria",
        favoriteFoods: ["sushi", "pavlova", "suya"]
    },
    {
        name: "kai",
        country: "Japan",
        stateOfResidence: "tokyo",
        favoriteFoods: ["ramen", "sushi", "mochi"]
    },
    {
        name: "amina",
        country: "Nigeria",
        stateOfResidence: "lagos",
        favoriteFoods: ["jollof rice", "suya", "moi moi"]
    },
    {
        name: "leo",
        country: "Brazil",
        stateOfResidence: "sao paulo",
        favoriteFoods: ["feijoada", "sushi", "brigadeiro"]
    }
];
function findSoya() {
    let count = 0;
     ArrayNew.forEach((element)=> {
         if (element.favoriteFoods.includes("suya") || element.favoriteFoods.includes("sushi") ) count++
     })
    return count;
}

console.log(findSoya());