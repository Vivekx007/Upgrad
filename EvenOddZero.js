let arr = [2,3,8,0,1,0,9];
let size = arr.length;

let zero = 0, even=0, odd = 0;
for(let i=0; i<size; i++){
    if(arr[i] == 0){
        zero++;
    }
    else if(arr[i]%2 == 0){
        even++;

    }
    else{
        odd++;
    }
}
console.log("Zero :" + zero);
console.log("Even :" + even);
console.log("Odd :" + even);

