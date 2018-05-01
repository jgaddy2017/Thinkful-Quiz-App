
/*
const CAPITALS = [
    {id: 0, state: "South Carolina", cities:["Columbia", "Greenville", "Charleston", "Dillon"] }
];

let questionOrder = [];

let SCORE = 0;
const ANSWERS = "Columbia";
let QuestionIndex = 0;

*/
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
    let scoreBoard = `<p>${SCORE} Out Of 10</p>`;
    $('.js-scoreBoard').html(scoreBoard);
}

function renderQuestion(){
    //<h2>What is the capital of South Carolina</h2>
    let capital = CAPITALS[QUESTION_ORDER[QUESTION_INDEX]].state;
    let generateQuestion = `<h2>Which is the capital of ${capital}</h2>`;
    $('.js-question').html(generateQuestion);
}

function createIndividualAnswer(cityArr, answerNum){
        /*
    <div class="col-4 radioSpacing">
        <input type="radio" id="Columbia"
            name="answer" value="Columbia">
        <label for="Columbia">Columbia</label>
    </div>*/
    let answerArr = answerNum.map(answer =>
        `<div class="col-4 radioSpacing">
        <input type="radio" id="${cityArr[answer]}"
            name="answer" value="${cityArr[answer]}">
        <label for="${cityArr[answer]}">${cityArr[answer]}</label>
        </div>`);

    let answerGroup = createAnswerGroup(answerArr);
    return answerGroup;

}

function createAnswerGroup(radioInputsArr){

    /*const answer = `
    <div class="row rowSpacing">                      
        ${radioInputsArr[0]}
        ${radioInputsArr[1]}
    </div>

    <div class="row rowSpacing">
        ${radioInputsArr[2]}
        ${radioInputsArr[3]}
    </div>`;*/

    let answer = '<div class="row rowSpacing">';
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
    }
}

function submitAnswer(){
    $('#capitalForm').submit(function(event){
        event.preventDefault();
        let pickedCity = $('input[name=answer]:checked', '#capitalForm').val()
        //console.log(pickedCity);
        findCorrect(pickedCity);
        QUESTION_INDEX = QUESTION_INDEX + 1;
        renderApp();
    });
}

function renderApp(){
    renderScore();
    renderQuestion();
    renderAnswers();
}

function handleCapitalApp(){
    createQuestionOrder();
    renderApp();
    submitAnswer();
    console.log(QUESTION_ORDER);
}

$(handleCapitalApp);