let n1,n2,n3;
for(let i=1; i<=500; i++){
    n1 = i/100;
    n2 = i/10 - n1*10;
    n3 = i%10;
    
    if(n1*n1*n1 + n2*n2*n2 + n3*n3*n3 === i){
        console.log(i);
    }
}