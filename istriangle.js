const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-button");
const checkOutput = document.querySelector("#output");

function calculateSum(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    //console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    //console.log( inputs[0].value,inputs[1].value,inputs[2].value);
    //console.log(sumOfAngles);
    if(sumOfAngles ===180){
        checkOutput.innerText = "yes, triangles can be formed";
    } else{
        checkOutput.innerText ="No. triangles can not be formed";
    }
}



isTriangleBtn.addEventListener("click", isTriangle);
