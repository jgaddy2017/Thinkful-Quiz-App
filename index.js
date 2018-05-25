
function shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}


function renderScore(){
    let scoreBoard = `<p>Score: ${SCORE} Out Of 10</p>`;
    $('.js-scoreBoard').html(scoreBoard);
}
function renderQuestionNumber(){
    let questionNumber = `<p>Question: ${QUESTION_INDEX + 1}/10</p>`;
    $('.js-questionNumber').html(questionNumber);
}

function renderQuestion(){
    let capital = CAPITALS[QUESTION_ORDER[QUESTION_INDEX]].state;
    let generateQuestion = `<h2 tabindex="1">Which is the capital of ${capital}?</h2>`;
    $('.js-question').html(generateQuestion);
    $('.js-question').find("h2").focus();
}

function createIndividualAnswer(cityArr, answerNum){
    let answerArr = answerNum.map((answer, index) =>
        `<div class="col-6 radioSpacing">
        <input type="radio" id="${cityArr[answer]}"
            name="answer" value="${cityArr[answer]}" tabindex="${index+2}">
        <label for="${cityArr[answer]}">${cityArr[answer]}</label>
        </div>`);
    

    let answerGroup = createAnswerGroup(answerArr);
    return answerGroup;
}

function createAnswerGroup(radioInputsArr){
    let answer = '<legend>Possible Choices</legend><div class="row rowSpacing">';
    let counter = 0;
    let rowSliter = 0;
    while(counter < radioInputsArr.length){
        if(counter === 2){
            answer += '</div>'; 
            answer += '<div class="row rowSpacing">';
            rowSliter = 0;
            answer += radioInputsArr[counter];
        }else{
            answer += radioInputsArr[counter];
            rowSliter++;
        }
        counter++;
    }

    answer += "</div>"
    return answer;
}

function renderAnswers(){
    let answerArr = [0, 1, 2, 3];
    answerArr = shuffle(answerArr);
    let cityArr = CAPITALS[QUESTION_ORDER[QUESTION_INDEX]].cities;
    const answers = createIndividualAnswer(cityArr, answerArr);
    $('.js-answerBox').html(answers)


}

function createQuestionOrder(){
    for(let i = 0; i < CAPITALS.length; i++){
        QUESTION_ORDER.push(i);
    }
    QUESTION_ORDER = shuffle(QUESTION_ORDER);
}

function findCorrect(pickedCity){
    if(pickedCity === CAPITALS[QUESTION_ORDER[QUESTION_INDEX]].cap){
        SCORE++;
        return true;
    }
    return false;
}
function moveQuestionIndex(){
    console.log(QUESTION_INDEX);
    QUESTION_INDEX++;
}

function submitAnswer(){
    $('.js-submit').on('click', function(event){
        event.preventDefault();
        let pickedCity = $('input[name=answer]:checked', '#capitalForm').val();
        if(pickedCity != undefined){
            let isCorrect = findCorrect(pickedCity);
            let answer = CAPITALS[QUESTION_ORDER[QUESTION_INDEX]].cap;
            moveQuestionIndex();
            renderCorrectAnswer(isCorrect, pickedCity, answer);
        }
    });
}



function renderStartButton(){
    const startButton = '<button type="button" class="buttonStyle blueBox js-startButton">Start Quiz</button>';
    $('.js-buttonPlacement').html(startButton);
}
function renderSubmitButton(){
    const submitButton = '<button type="submit" class="buttonStyle blueBox js-submit" tabindex="99">Submit</button>';
    $('.js-buttonPlacement').html(submitButton);
}
function renderContinueButton(){
    const continueButton = '<button type="button" class="buttonStyle blueBox js-continueButton">Contine</button>';
    $('.js-buttonPlacement').html(continueButton);
}
function renderRestartButton(){
    const restartButton = '<button type="button" class="buttonStyle blueBox js-restartButton">Start Over?</button>';
    $('.js-buttonPlacement').html(restartButton);
}





function hideRedBox(){
    $('.redBox').hide();
}
function unhideRedBox(){
    $('.redBox').show();
}

function openingStatement(){
    const openingRemarks = '<h2>This is the Capital Quiz. This Quiz will test your Knowledge of state capitals</h2>\
    <p style = "text-align: center">Click below to start</p>';
    $('.whiteBox').html(openingRemarks);
}
function handleStartButton(){
    $('.js-startButton').on('click', function(event){
        renderApp();
    });
}



function renderResultsPage(){
    let results = `<h2> Finished </h2> <h2>Your Score was ${SCORE} out of 10</h2>`;
    $('.whiteBox').html(results);
}
function handleRestartButton(){
    $('.js-restartButton').on('click', function(event){
        handleCapitalApp();
    });
}



function handleContineButton(){
    $('.js-continueButton').on('click',function(event){
        if(QUESTION_INDEX === 10){
            renderResults();
        }else{
            renderApp();
        }
    });
}


function renderCorrectAnswer(isCorrect, pickedCity, answer){
    hideRedBox();
    renderContinueButton();
    let displayAnswer = `<h2>${isCorrect ? "Correct" : "Wrong"}</h2>\
                            <p style="text-align: center">Your answer was ${pickedCity} and the correct answer is ${answer}</p>`;
    $('.whiteBox').html(displayAnswer);
    handleContineButton();

}


function renderResults(){
    hideRedBox();
    renderResultsPage();
    renderRestartButton();
    handleRestartButton();
}


function renderApp(){
    unhideRedBox();
    renderScore();
    renderQuestionNumber();
    renderQuestion();
    renderAnswers();
    renderSubmitButton();
    submitAnswer();
}

function renderStart(){
    hideRedBox();
    openingStatement();
    renderStartButton();
    handleStartButton();
}


function handleCapitalApp(){
    setAppStates();
    createQuestionOrder();
    renderStart();
    console.log(QUESTION_ORDER);
}

$(handleCapitalApp);