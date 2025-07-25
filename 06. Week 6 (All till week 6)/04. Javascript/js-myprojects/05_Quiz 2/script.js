document.addEventListener('DOMContentLoaded', () => {
    let quesContainer = document.getElementById('question-container')
    let quesText = document.getElementById('question-text')
    let choicesList = document.getElementById('choices-list')
    let nextBtn = document.getElementById('next-btn')
    let resultContainer = document.getElementById('result-container')
    let scoreDisplay = document.getElementById('score')
    let restartBtn = document.getElementById('restart-btn')
    let startBtn = document.getElementById('start-btn')

    const questions = [
        {
          question: "What is the capital of France?",
          choices: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          choices: ["Mars", "Venus", "Jupiter", "Saturn"],
          answer: "Mars",
        },
        {
          question: "Who wrote 'Hamlet'?",
          choices: [
            "Charles Dickens",
            "Jane Austen",
            "William Shakespeare",
            "Mark Twain",
          ],
          answer: "William Shakespeare",
        },
      ];


    let currentQuesIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz);

    function startQuiz(){
        startBtn.classList.add('hidden')
        nextBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        quesContainer.classList.remove('hidden')
        displayQues();

    }

    function displayQues(){
        quesText.textContent = questions[currentQuesIndex].question

        let options = questions[currentQuesIndex].choices //this means i am storing all choices of a particular question in 'options' variable //here first i wrote questions.choices[currentQuesIndex] which is wrong as it will only give one option not all options

        choicesList.innerHTML = ""
        options.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice  //here I as confused that we might use ${choice} but i was wrong
            choicesList.appendChild(li)
            li.addEventListener('click', () => selectedOption(choice)) //I forgot this line

            
        });
    }

    function selectedOption(choice){
        let trueAnswer = questions[currentQuesIndex].answer
        if(choice === trueAnswer){
            score += 1;
            nextBtn.classList.remove('hidden')
        }else{
            nextBtn.classList.remove('hidden')
            
        }
    }

    nextBtn.addEventListener('click', () => {
        currentQuesIndex += 1;
        if(currentQuesIndex < questions.length){
        displayQues()

        }else{
            showResult()
        }
    })

    function showResult(){
        resultContainer.classList.remove('hidden')
        quesContainer.classList.add('hidden')
        nextBtn.classList.add('hidden')
        restartBtn.classList.remove('hidden')

        scoreDisplay.textContent = `WOW! YOU GET ${score} OUT OF ${questions.length}` //score is a variable that's why ${score} could be used, but choice was array infact an element of array

    }

    restartBtn.addEventListener('click', () => {

        score = 0;
        currentQuesIndex = 0;
        startQuiz()
    })








})