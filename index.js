function staircase(n) {
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat((n-1) - i);
        const hashes = '#'.repeat(i + 1);
        console.log(spaces + hashes);
    }
}

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
 minMaxSum(arr);