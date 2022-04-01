let givenNum = 41,flag=true;

if(givenNum==0 || givenNum == 1){
    flag = false
}

for(let i = 2; i<givenNum; i++){
    
    if(givenNum%2==0){
       flag = false;
        break;
    }
}

if(flag){
    console.log(givenNum+" is a Prime Number");
}else{
    console.log(givenNum+" is not a Prime Number");
}