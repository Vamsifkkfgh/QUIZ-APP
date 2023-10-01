const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsForm = document.getElementById("options-form");
const nextButton = document.getElementById("next-button");
const scoreText = document.getElementById("score");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsForm.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const label = document.createElement("label");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "option";
        radioInput.value = option;
        radioInput.addEventListener("change", () => {
            nextButton.disabled = false;
        });
        label.appendChild(radioInput);
        label.appendChild(document.createTextNode(option)); // Display option text
        optionsForm.appendChild(label);
        optionsForm.appendChild(document.createElement("br")); // Add line break
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked').value;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButton.disabled = true;
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionText.textContent = "Quiz Completed!";
    optionsForm.innerHTML = "";
    nextButton.style.display = "none";
    scoreText.textContent = `Your Score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", checkAnswer);

displayQuestion();

