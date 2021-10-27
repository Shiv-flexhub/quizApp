const quizData = [
    {
        question: "My dream destination I wanna visit for atleast once:- ",
        a: "Greece",
        b: "Japan",
        c: "Norway",
        d: "Korea",
        correct:'a'
    },
    {
        question: "Flavour I loved the most:- ",
        a: "Vanilla",
        b: "Chocalate",
        c: "Butterscotch",
        d: "Kesar-Pista",
        correct:'c'
    },
    {
        question: "My favourite sport:- ",
        a: "Cricket",
        b: "Football",
        c: "Basketball",
        d: "Hockey",
        correct:'b'
    },
    {
        question: "What is the best gift that I have recieved:-",
        a: "Cycle",
        b: "Watch",
        c: "Football",
        d: "Video game",
        correct:'b'
    },
    {
        question: "Which is my favourite flower:- ",
        a: "Lotus",
        b: "Jasmin",
        c: "Rose",
        d: "Sunflower",
        correct: 'a'

    },
    {
        question: "When is my birthday:- ",
        a: "1st Sept",
        b: "27th Nov",
        c: "7th Jan",
        d: "15th Jan",
        correct:'c'
    },
    {
        question: "Whats my favourite activity:- ",
        a: "Spending time with friends",
        b: "Playing football",
        c: "Making new surprise gifts for the special one",
        d: "Going around the city",
        correct:'a'
    },
    {
        question: "When is the Anti-Rose day:- ",
        a: "5th Sept",
        b: "28th March",
        c: "6th April",
        d: "28th Nov",
        correct:'a'
    }
    
];

const answerEls = document.querySelectorAll(".answer");
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const questionE1 = document.getElementById('ques');
const next = document.getElementById('button');


let currentQues = 0;
let score = 0;


loadQuiz()


function loadQuiz()
{
    deselectAnswer()
    const currentQuiz = quizData[currentQues]
    questionE1.innerHTML=currentQuiz.question
    aText.innerHTML=currentQuiz.a
    bText.innerHTML=currentQuiz.b
    cText.innerHTML=currentQuiz.c
    dText.innerHTML=currentQuiz.d

}

function getSelected()
{
    
    // let answerEl;
    let answer= undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked)
        {
            answer=answerEl.id
        }
    });
    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked=false
        
    })
}



next.addEventListener("click",()=>
{
    let answer = getSelected()

    if(answer!=undefined)
    {
            if(answer==quizData[currentQues].correct)
            {
                score++
            }
                currentQues++

            if(currentQues<quizData.length)
            {
                 loadQuiz()
        
            }

            if(currentQues==quizData.length-1)
            {
                next.innerHTML = "Submit"
            }
            
            if(currentQues==quizData.length)
            {
                alert(`Your total score is ${score}/${quizData.length}`)
            }
    }



});


