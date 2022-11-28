const quizForm = document.querySelector(".quiz-form");
const submitAnsBtn = document.querySelector("#submit-answer-button");
const outputElement = document.querySelector("#output");

const correctAnswers = [
    "Equilateral",
     "90°",
      "right angle",
        "60°",
     "None",
        "2 cm, 2 cm, 4 cm",
        "3",
        "80",
        "obtuse-angled",
        "isosceles"
];

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
