
                   //   storing data in array in abject formate

const questions = [
    {
        question: "which is largest country  in world by population?",
        answer: [
            { text: "lahore", correct: false },
            { text: "dhli", correct: false },
            { text: "China", correct: true },
            { text: "london ", correct: false }

        ]
    },
    {
        question: "which is largest animal in world?",
        answer: [
            { text: "shark", correct: false },
            { text: "Lion", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant ", correct: false }

        ]
    },
    {
        question: "which is largest Lake in world?",
        answer: [
            { text: " Caspian Sea", correct: true },
            { text: "Indus river", correct: false },
            { text: "yellow sea", correct: false },
            { text: "slave lake ", correct: false }

        ]
    },
    {
        question: "which is largest Mountain  in world?",
        answer: [
            { text: " K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Makalu", correct: false },
            { text: "Cho Oyu", correct: false }

        ]
    },
    {
        question: "which is largest Country in world?",
        answer: [
            { text: " USA", correct: false },
            { text: "Chaina", correct: false },
            { text: "Pakistan", correct: false },
            { text: "Russia", correct: true }

        ]
    },
];
   
                            //   Getting elements from html 

const questionElement = document.getElementById("question-text");
const answerBtn = document.querySelector(".questions");
const nextBtn = document.getElementById("next");


let questionIndex = 0;
let score =0 ;

function startQuiz(){
    questionIndex =0;
    score=0;
    nextBtn.innerHTML = "next"
    showQuestion();
}

 function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.question
    currentQuestion.answer.forEach(answer =>{
        const  button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerBtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click", selectAnswer)
     });
 }

 function resetState(){
    nextBtn.style.display="none"
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
 if(isCorrect){
    selectedBtn.classList.add("correct")
    score++
 }else{
    selectedBtn.classList.add("incorrect")
    
 }
 Array.from(answerBtn.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
 })
 nextBtn.style.display="block"

 }

 function showScore(){
    resetState();
    questionElement.innerHTML =`your score ${score} out of ${questions.length}!`
    nextBtn.innerHTML ="play again"
    nextBtn.style.display="block"
 }

function  handelNextBtn(){
 questionIndex++;
 if(questionIndex < questions.length){
    showQuestion();
 }else{
    showScore();
 }
 
}

 nextBtn.addEventListener("click" ,()=>{
    if(questionIndex < questions.length){
        handelNextBtn()
    }else{
        startQuiz()
    }
 })
 
 startQuiz();
