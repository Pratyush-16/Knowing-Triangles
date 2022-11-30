const angleInput = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-button");
const checkOutput = document.querySelector("#output");


isTriangleBtn.addEventListener("click", isTriangle);

function calculateSum(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    
    const sumOfAngles = calculateSum(Number(angleInput[0].value) , Number(angleInput[1].value) ,  Number(angleInput[2].value))
    if((angleInput[0].value) > 0 && (angleInput[1].value) > 0  && (angleInput[2].value) > 0 ){
       if(sumOfAngles === 180) {
           checkOutput.innerText = "Yes, Triangle can be formed."
       } else{
           checkOutput.innerText = "Trinagle cannot be formed,check angles again."
       }
    } else{
   checkOutput.innerText= "Input correct value."
    }
    
   }




