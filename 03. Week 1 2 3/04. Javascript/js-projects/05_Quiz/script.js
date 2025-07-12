document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

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

  let currentQuestionIndex = 0;  //To see on which ques we are currently
  let score = 0;

  startBtn.addEventListener("click", startQuiz);  //Here we are just passing the reference ie on click, execute startQuiz

  nextBtn.addEventListener("click", () => {  //Assignment: Make this also a separate function & call its reference here.
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;  //with this we will, only change value of currentQuestionIndex at top(globalScope) & can easily change question
    choicesList.innerHTML = ""; //clear previous choices. It will clear choices for next question
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice)); //here we can't pass the reference like this {'click', selectAnswer(choice)} directly because it will execute immediately, so we are passing the reference like this 'click', () => selectAnswer(choice) so that it can be executed properly when it is clicked by passing the reference. we did this in above too but there we didn't had any parameter hence didn't faced any problem. It is a JS & react problem hence remember so that u don't face any problem in react. Hence we used a callback method so that reference can be passed properly with parameter. This callback method is only used to pass "reference with parameter in an event listener".
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});

//Note: list is array & array is list
//One thing to keep in mind is always know what datatype are u working with. eg: in forms u know once form is submitted, every input will be a string, that's why while comparing id's we first convert it to number using parseInt().

//further improvements: use background color to show correct & incorrect answers. We can add timer func or set timer to automstically move to next question without clicking next button.
//assignment: add marks to each question in array. then use a method to calculate total marks when it is correct u can use negative marking too.
//Explore map function of JS