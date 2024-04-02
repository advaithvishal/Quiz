document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Rome"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Saturn", "Mars"],
            correctAnswer: "Jupiter"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
            correctAnswer: "William Shakespeare"
        }
    ];

    let currentQuestion = 0;

    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');

    loadQuestion();

    function loadQuestion() {
        const question = questions[currentQuestion];
        questionElement.textContent = question.question;

        optionsElement.innerHTML = '';

        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = questions[currentQuestion].correctAnswer;
        const message = (selectedOption === correctAnswer) ? 'Correct!' : 'Wrong!';
        resultElement.textContent = message;

        currentQuestion++;

        if (currentQuestion < questions.length) {
            setTimeout(loadQuestion, 1000); // Load next question after 1 second
        } else {
            resultElement.textContent = `Quiz completed.`;
        }
    }
});
