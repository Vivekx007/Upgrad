

let student = {
    Name:"Vivek Kumar",
    Roll:"19ETCCS082",
    Course:"FSD",
    print(){
        console.log("Name : "+this.Name,
                    "Roll No. : "+this.Roll,
                    "Course : "+ this.Course)
    }
}

let VerifiedUser = true;
var promise  = new Promise((res, rej)=>{
    setTimeout(()=>{
        if(VerifiedUser){
            res( student.print());
        }else{
            rej();
        }
    }, 2000)
   

})



promise.then(()=>{
    console.log("Verified");
}).catch(()=>{
    console.log("Not Verified User");
})