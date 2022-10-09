const data = [
    {
        question: "Who made this Quiz App?",
        a: "Yasir Mukhtar",
        b: "Yasir",
        c: "A & B",
        d: "None",
        ans: "op3"
    },
    {
        question: "What is the Background color of Button?",
        a: "Red",
        b: "Blue",
        c: "Green",
        d: "Yellow",
        ans: "op2"
    }
    ,
    {
        question: "2 + 3(-1) = ?",
        a: "-1",
        b: "-5",
        c: "6",
        d: "0",
        ans: "op1"
    }
    ,
    {
        question: "Select Correct Spell word ?",
        a: "One",
        b: "Two",
        c: "Three",
        d: "All",
        ans: "op4"
    }
    ,
    {
        question: "2 * 3 = ?",
        a: "2",
        b: "3",
        c: "6",
        d: "8",
        ans: "op3"
    }
    ,
    {
        question: "4 * 4 = ?",
        a: "16",
        b: "Sixteen",
        c: "20",
        d: "A & B",
        ans: "op4"
    }
    ,
    {
        question: "7 / 7 = ?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "op1"
    },
    {
        question: "9 * 9 = ?",
        a: "64",
        b: "81",
        c: "49",
        d: "100",
        ans: "op2"
    }
    ,
    {
        question: "5 + 5 = ?",
        a: "15",
        b: "5",
        c: "10",
        d: "9",
        ans: "op3"
    }
    ,
    {
        question: "Any Suggestions ?",
        a: "Add Score Card ?",
        b: "Good Question",
        c: "Chose good color",
        d: "No free suggestions",
        ans: "op4"
    }
];

let arrayvalues = 0;
let score = 0;


// Getting Acces to elements from DOM 


let question = document.getElementById('qust');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let submit = document.getElementById('submit-btn');
let scoreis = document.getElementById('score');
let starting = document.getElementById('start');
let restart = document.getElementById('restart');
let highScore = document.querySelector(".high-score");
let start = document.querySelector("#start-next");
let container = document.querySelector(".container");
let result = document.querySelector(".result");
let btn = document.querySelector(".btn");
let scorecomplete = document.querySelector(".score");
let answer = document.querySelectorAll(".button");




// Getting ID of checked radio button

const getAnswer = () => {
    let count = 0;
    let ansis = null;
    answer.forEach((curEle) => {

        if (curEle.checked) {
            ansis = curEle.id;
        }
    });

    return ansis;



};



// By clicking on submit checking answer by comparing (checked id of radio button with array Ans value)
// also loading next questions
submit.addEventListener('click', () => {


    const checkAnswer = getAnswer();
    if (checkAnswer === null) {

    } else {

        if (checkAnswer === data[arrayvalues].ans) {
            score++;
            scoreis.innerText = score;
            result.classList.replace("hidding", "correct");
            result.innerHTML = `<h3>Correct Answer.</h3> `;

        } else {
            result.classList.replace("hidding", "wrong");
            result.innerHTML = `<h3>Wrong Answer.</h3> `;


        }
        setTimeout(() => {
            arrayvalues++;
        if (arrayvalues < data.length) {
            answer.forEach((curEle) => {

                if (curEle.checked) {
                    curEle.checked = false;
                }
            });
            loadquestion();

            result.classList.replace("correct", "hidding");
            result.classList.replace("wrong", "hidding");        } else {
        result.classList.add("hidden");
            container.classList.add('hidden');
            scorecomplete.classList.remove("hidden");
            restart.classList.remove("hidden");
        }
            
        }, 2000);
        
        


       
    }


});



// Loading Questions 
function loadquestion() {

    let questionValue = data[arrayvalues];
    question.innerText = questionValue.question;
    option1.innerText = questionValue.a;
    option2.innerText = questionValue.b;
    option3.innerText = questionValue.c;
    option4.innerText = questionValue.d;
}



// By Clicking on Restart website Refresh & some content display hidden
restart.addEventListener("click", () => {
    scorecomplete.classList.add("hidden");
    restart.classList.add("hidden");

})

// This is for navbar which comes from upper side (for hidding navbar)
result.addEventListener("click", () => {
    result.classList.replace("correct", "hidding");
    result.classList.replace("wrong", "hidding");
})



// First Program start from here when user click on Start Button
starting.addEventListener("click", () => {
    starting.classList.add('hidden');

    loadquestion();
    container.classList.remove('hidden');


});
