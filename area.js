const input = document.querySelectorAll(".input-side");
const findArea = document.querySelector("#calculate-area");
const outputElement = document.querySelector("#output");

function calculateAreaofTriangle(base, height){
    const result =1/2 *[base* height];
    //const area = [result/2];
    return result;
}

function calculateArea(){
    //console.log("I am clicked");
    const areaOfTriangle = calculateAreaofTriangle(Number(input[0].value),Number(input[1].value));
    //console.log(areaOfTriangle);
    outputElement.innerText = "Area of Triangle is: " + areaOfTriangle +"cm²";
}

findArea.addEventListener('click', calculateArea);
