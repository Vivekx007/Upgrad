function maxi(){
   
    for(let i=0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function mini(){
   
    for(let i=0; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        
    }
    return min;
}

const arr = [-3, 0, 5, -4, 3, 8, 4];
let max = arr[0], min = arr[0];
let maximum = maxi();
let minimum = mini();




console.log("Maximun " + maximum);

console.log("Minimun " + minimum);