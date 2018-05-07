
const CAPITALS = [
    {id: 0, state: "South Carolina", cities:["Columbia", "Greenville", "Charleston", "Dillon"], cap:"Columbia" },
    {id: 1, state: "Georgia", cities:["Atlanta", "Savannah", "Athens", "Augusta"], cap:"Atlanta" },
    {id: 2, state: "Tennessee", cities:["Nashville", "Memphis", "Knoxville", "Chattanooga"], cap:"Nashville" },
    {id: 3, state: "North Carolina", cities:["Raleigh", "Charlotte", "Greenboro", "Wilmington"], cap:"Raleigh" },
    {id: 4, state: "Virginia", cities:["Richmond", "Arlington", "Norfolk", "Reston"], cap:"Richmond" },
    {id: 5, state: "Florida", cities:["Tallahassee", "Miami", "Jacksonville", "Tampa"], cap:"Tallahassee" },
    {id: 6, state: "Alabama", cities:["Montgomery", "Huntsville", "Auburn", "Birmingham"], cap:"Montgomery" },
    {id: 7, state: "Kentucky", cities:["Frankfort", "Lexington", "Murray", "Paducah"], cap:"Frankfort" },
    {id: 8, state: "Texas", cities:["Austin", "Dallas", "Houston", "El Paso"], cap:"Austin" },
    {id: 9, state: "Mississippi", cities:["Jaskson", "Tupelo", "Gulfport", "Meridan"], cap:"Jaskson" }
];

let QUESTION_ORDER = [];

let SCORE = 0;

let QUESTION_INDEX = 0;

function setAppStates(){
    QUESTION_ORDER = [];
    SCORE = 0;
    QUESTION_INDEX = 0;
}
