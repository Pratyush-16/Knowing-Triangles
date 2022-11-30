const input = document.querySelectorAll(".side-input");
const checkBtn = document.querySelector("#Hypotenuse-btn");
const outputElement = document.querySelector("#output")

function calculateSumofSquares(a,b){
const sumOfSquares  = a*a + b*b;
return sumOfSquares;
}

function checkHypotenuse(){
    //console.log("I am clicked");
    if(input[0].value >0 && input[1].value >0){

    
    const sumOfSquares = calculateSumofSquares(Number(input[0].value),Number(input[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    //console.log(lengthOfHypotenuse);
     outputElement.innerText = "The length of hypotenuse is: " + lengthOfHypotenuse.toFixed(3) +"cm";
    }
    else{
        outputElement.innerText = "Please enter correct input "
    }
}

checkBtn.addEventListener('click', checkHypotenuse);