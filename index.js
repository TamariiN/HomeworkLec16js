// #1 Write a program to remove all negative numbers from an array

console.log("first task below")

let arr=[0, 6 , 4 , -4, -56, 24, 45, -2, 4, 5, -24]
let arrNeg=[]
let num=0

for(i=0; i<arr.length; i++){
    if(num>arr[i]){
        arrNeg.push(arr[i]) 
    }
  
} console.log(arrNeg)

console.log("second task below")

//#2 remove duplicate elements from an array

let arr2=[0, 6 , -4 , -4, -56, 24, 45, -2, 4, 8, 8, 55, 87, 6, 5, 24]
let arr21=[]
for(i=0; i<arr2.length; i++){
    if(arr2.includes(i, i)){
        arr21.push(arr2[i])
    }
}
console.log(arr21)
//#3 split an array into two separate arrays, one with even numbers and  the other with odd numbers

console.log("third task below")

let arr3=[0, 6 , -4 , -4, -56, 24, 45, -2, 4, 8, 8, 55, 87, 6, 5, 24]
let odd=[]
let even=[]
for(i=0; i<arr3.length; i++){
    if(arr3[i]%2===0){
        even.push((arr3[i]))
    }else {
        odd.push(arr3[i])
    }
}
console.log( even,  odd)

