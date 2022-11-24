const quizForm = document.querySelector(".quiz-form");
const submitAnsBtn = document.querySelector("#submit-answer-button");
const outputElement = document.querySelector("#output");

const correctAnswers = ["Equilateral", "90°", "right angle"];

function calculateScore(){
    let score =0;
    let index =0;
    const formResults= new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score += 1;
        }
        index+=1;
    }
    //console.log(score);
    outputElement.innerText= "Your Score is:" + score;
}


submitAnsBtn.addEventListener('click', calculateScore);
