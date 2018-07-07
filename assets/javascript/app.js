var triviaQuestions = [{

    question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    answerList: ["Thomas Jefferson", "Hercules Mulligan", "Alexander Hamilton", "Phillip Schuyler"],
    answer: 2

}, {

    question: "Who did the United States fight in World War II?",
    answerList: ["North Korea, Iran, Iraq", "Japan, Germany, Italy", "Mexico, Canada, China", "Syria, Iran, Libya"],
    answer: 1

}, {

    question: "Name one U.S. Territory",
    answerList: ["Cuba", "Hawaii", "Falklands", "Puerto Rico"],
    answer: 3
}, {

    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answerList: ["We the people", "Four-score and", "When in the", "We hold these"],
    answer: 0
}, {

    question: "How many amendments does the Constitution have?",
    answerList: ["23", "42", "60", "27"],
    answer: 3
}, {

    question: "The House of Representatives has how many voting members?",
    answerList: ["100", "538", "435", "381"],
    answer: 2
}, {

    question: "When was the Constitution written?",
    answerList: ["1787", "1781", "1776", "1784"],
    answer: 0
}, {

    question: "Who was President during World War I?",
    answerList: ["Calvin Coolidge", "Woodrow Wilson", "Warren G. Harding", "William Howard Taft"],
    answer: 1
}, {

    question: "What is the name of the national anthem?",
    answerList: ["God Bless America", "Party in the USA", "The Star-Spangled Banner", "America F*** Yeah"],
    answer: 2
}, {

    question: "During the Cold War, what was the main concern of the United States?",
    answerList: ["Democracy", "Capitalism", "Freedom", "Communism"],
    answer: 3
}, {

    question: "What is the “rule of law”?",
    answerList: ["No one is above the law", "The President is exempt", "The judiciary", "Police use of force"],
    answer: 0
}, {

    question: "What do we call the first ten amendments to the Constitution?",
    answerList: ["Ten Crack Commandments", "The Bill of Rights", "Listicle", "EMILY's List"],
    answer: 1
}, {

    question: "What does the President’s Cabinet do?",
    answerList: ["Hold secret meetings", "Advise the President", "Email", "Twitter"],
    answer: 1
}];

var correctAnswer;
var incorrectAnswer;
var answered;
var unanswered;
var time;
var seconds;
var playerChoice;
var currentQuestion;
var messages = {
    correct: "Correct!",
    incorrect: "Maybe next time",
    outOfTime: "OUTTATIME",
    complete: "Let's check your results",

}

$('#startBtn').on('click', function () {
    $(this).hide();
    newGame();
});

$('#startOverBtn').on('click', function () {
    $(this).hide();
    newGame();
});

function newGame() {
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion() {
    $('#message').empty();
    $('#correctedAnswer').empty();
    answered = true;

    $('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + triviaQuestions.length);
    $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
    for (var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(triviaQuestions[currentQuestion].answerList[i]);
        choices.attr({
            'data-index': i
        });
        choices.addClass('thisChoice');
        $('.answerList').append(choices);
    }

    $('.thisChoice').on('click', function () {
        userSelect = $(this).data('index');
        clearInterval(time);
        answerPage();
    });
}

function countdown() {
    seconds = 15;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    time = setInterval(showCountdown, 1000);
}