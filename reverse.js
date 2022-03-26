let num = 654321;
 function reverse(){
     var rev = 0;
     while (num != 0) {
        rev *= 10;
        rev += num % 10;
        num -= num % 10;
        num /= 10;
       }
       return rev;
 }
 
let r = reverse();
 console.log(r);